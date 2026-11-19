import { NextResponse } from "next/server";
import { z } from "zod";
import { adminClient } from "@/lib/supabase/server";

// Trusted activation after you have verified payment in Selar.
// curl -X POST /api/admin/activate -H "x-admin-secret: $ADMIN_SECRET" -d '{"email":"a@b.com","plan":"pro","reference":"selar-123"}'
const Body = z.object({ email: z.string().email(), plan: z.enum(["starter", "pro"]), reference: z.string().min(3) });
const CREDITS = { starter: 100, pro: 500 } as const;

export async function POST(req: Request) {
  const secret = process.env.ADMIN_SECRET;
  if (!secret || req.headers.get("x-admin-secret") !== secret) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const p = Body.safeParse(await req.json().catch(() => null));
  if (!p.success) return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  const admin = adminClient();
  const { data: prof } = await admin.from("profiles").select("id").eq("email", p.data.email).single();
  if (!prof) return NextResponse.json({ error: "No account with that email" }, { status: 404 });
  const { error: payErr } = await admin.from("payments").insert({ user_id: prof.id, email: p.data.email, plan: p.data.plan, reference: p.data.reference, status: "confirmed" });
  if (payErr) return NextResponse.json({ error: payErr.message }, { status: 409 }); // duplicate reference
  await admin.from("profiles").update({ plan: p.data.plan, credits_limit: CREDITS[p.data.plan], credits_used: 0 }).eq("id", prof.id);
  return NextResponse.json({ ok: true });
}
