import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function Overview() {
  const sb = await createClient();
  const [{ data: profile }, { count: ds }, { data: recent }] = await Promise.all([
    sb.from("profiles").select("plan,credits_used,credits_limit").single(),
    sb.from("datasets").select("id", { count: "exact", head: true }),
    sb.from("queries").select("id,question,created_at").order("created_at", { ascending: false }).limit(5),
  ]);
  const used = profile?.credits_used ?? 0, limit = profile?.credits_limit ?? 0;
  return (
    <div className="max-w-4xl">
      <h1 className="h-lg">Overview</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="card p-6"><div className="eyebrow text-[var(--muted)]">Plan</div><div className="mt-2 text-[32px] capitalize">{profile?.plan ?? "free"}</div></div>
        <div className="card p-6"><div className="eyebrow text-[var(--muted)]">AI credits</div><div className="mt-2 text-[32px]">{used} / {limit}</div>
          <div className="mt-3 h-2 rounded bg-[var(--cream)]"><div className="h-2 rounded bg-[var(--red)]" style={{ width: `${limit ? Math.min(100, (used / limit) * 100) : 0}%` }} /></div></div>
        <div className="card p-6"><div className="eyebrow text-[var(--muted)]">Datasets</div><div className="mt-2 text-[32px]">{ds ?? 0}</div></div>
      </div>
      <h2 className="mt-10 text-[22px] font-medium">Recent analyses</h2>
      <ul className="mt-4 divide-y divide-[var(--line)] rounded-lg border border-[var(--line)] bg-white">
        {(recent ?? []).map((q) => <li key={q.id} className="p-4">{q.question}</li>)}
        {!recent?.length && <li className="p-4 text-[var(--muted)]">No analyses yet. <Link className="text-[var(--red)] underline" href="/app/datasets">Upload a dataset</Link> to run your first analysis.</li>}
      </ul>
    </div>
  );
}
