import { createClient } from "@/lib/supabase/server";
import { PLANS } from "@/lib/site";

export default async function Billing() {
  const sb = await createClient();
  const { data: { user } } = await sb.auth.getUser();
  const { data: profile } = await sb.from("profiles").select("plan,credits_used,credits_limit").single();
  const email = encodeURIComponent(user?.email ?? "");
  return (
    <div className="max-w-4xl">
      <h1 className="h-lg">Billing</h1>
      <p className="mt-3">Current plan: <b className="capitalize">{profile?.plan ?? "free"}</b> | {profile?.credits_used ?? 0}/{profile?.credits_limit ?? 0} credits used</p>
      <p className="mt-2 text-[14px] text-[var(--muted)]">Pay with the same email as your account (<b>{user?.email}</b>). Your plan is activated once payment is confirmed. A redirect alone does not upgrade an account.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {PLANS.map((p) => (
          <div key={p.id} className="card p-7">
            <div className="eyebrow text-[var(--red)]">{p.name}</div>
            <div className="mt-2 text-[40px]">${p.price}<span className="text-[16px] text-[var(--muted)]">/mo</span></div>
            <ul className="mt-4 space-y-1">{p.features.map((f) => <li key={f} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--red)]" />{f}</li>)}</ul>
            <a className="btn btn-red mt-6" href={p.url} rel="noopener" data-email={email}>Checkout: {p.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
