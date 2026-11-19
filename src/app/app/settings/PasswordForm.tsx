"use client";
import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

export default function PasswordForm() {
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; t: string } | null>(null);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const sb = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    const { error } = await sb.auth.updateUser({ password: pw });
    setMsg(error ? { ok: false, t: error.message } : { ok: true, t: "Password updated." });
    if (!error) setPw("");
  }
  return (
    <form onSubmit={submit} className="mt-3 space-y-3">
      <input className="input" type="password" minLength={8} required placeholder="New password" value={pw} onChange={(e) => setPw(e.target.value)} />
      {msg && <p className={msg.ok ? "text-green-700" : "text-red-600"}>{msg.t}</p>}
      <button className="btn btn-dark">Update password</button>
    </form>
  );
}
