"use client";
import Link from "next/link";
import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { Logo } from "./Header";

type Mode = "login" | "signup" | "forgot";

export default function AuthForm({ mode }: { mode: Mode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setMsg(null);
    const sb = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    const origin = window.location.origin;
    if (mode === "login") {
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) setMsg({ ok: false, text: error.message }); else window.location.href = "/app";
    } else if (mode === "signup") {
      const { data, error } = await sb.auth.signUp({ email, password, options: { emailRedirectTo: `${origin}/app` } });
      if (error) setMsg({ ok: false, text: error.message });
      else if (data.session) window.location.href = "/app";
      else setMsg({ ok: true, text: "Check your email to confirm your account, then log in." });
    } else {
      const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: `${origin}/app/settings` });
      setMsg(error ? { ok: false, text: error.message } : { ok: true, text: "If that account exists, a reset link is on its way." });
    }
    setBusy(false);
  }

  const title = { login: "Log in", signup: "Create your account", forgot: "Reset your password" }[mode];
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--cream)] px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-9 shadow-xl">
        <Logo />
        <h1 className="mt-8 text-[28px] font-medium">{title}</h1>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <input className="input" type="email" required placeholder="Work email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {mode !== "forgot" && <input className="input" type="password" required minLength={8} placeholder="Password (8+ characters)" value={password} onChange={(e) => setPassword(e.target.value)} />}
          {msg && <p role="alert" className={`text-[14px] ${msg.ok ? "text-green-700" : "text-red-600"}`}>{msg.text}</p>}
          <button disabled={busy} className="btn btn-red w-full disabled:opacity-60">{busy ? "Please wait…" : title}</button>
        </form>
        <div className="mt-5 flex justify-between text-[14px] text-[var(--muted)]">
          {mode === "login" ? <><Link href="/signup">Create account</Link><Link href="/forgot">Forgot password?</Link></> : <Link href="/login">Back to log in</Link>}
        </div>
      </div>
    </main>
  );
}
