import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const sb = await createClient();
  await sb.auth.signOut();
  return NextResponse.redirect(new URL("/", req.url), 303);
}
