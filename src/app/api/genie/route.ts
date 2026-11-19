import { NextResponse } from "next/server";
import { z } from "zod";
import { adminClient, createClient } from "@/lib/supabase/server";
import { columnStats, type Row } from "@/lib/data";

const Body = z.object({ datasetId: z.string().uuid(), question: z.string().trim().min(3).max(500) });
const Answer = z.object({
  answer: z.string(),
  insights: z.array(z.string()).max(6).default([]),
  suggested_sql: z.string().nullable().default(null),
});

export async function POST(req: Request) {
  const sb = await createClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const key = process.env.GEMINI_API_KEY;
  if (!key) return NextResponse.json({ error: "AI is not configured on this server (GEMINI_API_KEY missing)." }, { status: 503 });

  const admin = adminClient();
  const { data: profile } = await admin.from("profiles").select("credits_used,credits_limit").eq("id", user.id).single();
  if (!profile || profile.credits_used >= profile.credits_limit)
    return NextResponse.json({ error: "No AI credits left. Upgrade your plan in Billing." }, { status: 402 });

  const { data: ds } = await sb.from("datasets").select("id,name,columns,rows,row_count").eq("id", parsed.data.datasetId).single();
  if (!ds) return NextResponse.json({ error: "Dataset not found" }, { status: 404 });

  const rows = ds.rows as Row[];
  const prompt = `You are DataFoundry Genie, a careful data analyst. Answer ONLY from the data provided.
Use the precomputed statistics for any numeric claim; do not invent numbers. If the data cannot answer, say so.
Dataset: ${ds.name} (${ds.row_count} rows)
Column statistics: ${JSON.stringify(columnStats(ds.columns as string[], rows))}
Sample rows: ${JSON.stringify(rows.slice(0, 40))}
Question: ${parsed.data.question}
Respond as JSON: {"answer": string, "insights": string[], "suggested_sql": string|null}`;

  const r = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": key },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseMimeType: "application/json", temperature: 0.2 } }),
  });
  if (!r.ok) return NextResponse.json({ error: `AI provider error (${r.status})` }, { status: 502 });
  const text = (await r.json())?.candidates?.[0]?.content?.parts?.[0]?.text;
  let result;
  try { result = Answer.parse(JSON.parse(text)); } catch { return NextResponse.json({ error: "The AI returned an unreadable answer. Try rephrasing." }, { status: 502 }); }

  await admin.from("profiles").update({ credits_used: profile.credits_used + 1 }).eq("id", user.id);
  await sb.from("queries").insert({ user_id: user.id, dataset_id: ds.id, question: parsed.data.question, answer: result });
  return NextResponse.json(result);
}
