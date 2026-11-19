import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const Body = z.object({
  name: z.string().trim().min(1).max(120),
  columns: z.array(z.string().max(120)).min(1).max(100),
  rows: z.array(z.record(z.string(), z.union([z.string(), z.number(), z.null()]))).min(1).max(5000),
});

export async function POST(req: Request) {
  const sb = await createClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid dataset (max 5,000 rows, 100 columns)" }, { status: 400 });
  const { name, columns, rows } = parsed.data;
  const { data, error } = await sb.from("datasets").insert({ user_id: user.id, name, columns, rows, row_count: rows.length }).select("id").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ id: data.id });
}
