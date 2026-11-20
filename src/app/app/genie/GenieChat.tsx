"use client";
import { useState } from "react";

type Ans = { answer: string; insights: string[]; suggested_sql: string | null };

export default function GenieChat({ datasets, initial }: { datasets: { id: string; name: string }[]; initial?: string }) {
  const [id, setId] = useState(initial && datasets.some((d) => d.id === initial) ? initial : datasets[0]?.id ?? "");
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [res, setRes] = useState<Ans | null>(null);

  if (!datasets.length) return <p className="mt-8">Upload a dataset on the Datasets page to start analysis.</p>;

  async function ask(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setErr(null); setRes(null);
    try {
      const r = await fetch("/api/genie", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ datasetId: id, question: q }) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) setErr(j.error ?? "The analysis could not be completed. Please try again."); else setRes(j);
    } catch {
      setErr("Connection problem. Please check your network and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-8">
      <form onSubmit={ask} className="space-y-3">
        <select className="input" value={id} onChange={(e) => setId(e.target.value)}>{datasets.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}</select>
        <textarea className="input" rows={3} required minLength={3} maxLength={500} placeholder="e.g. Which region generates the highest total revenue?" value={q} onChange={(e) => setQ(e.target.value)} />
        <button disabled={busy} className="btn btn-red disabled:opacity-60">{busy ? "Analyzing" : "Analyze"}</button>
      </form>
      {err && <p role="alert" className="mt-4 text-red-600">{err}</p>}
      {res && (
        <div className="card mt-6 p-6">
          <p className="text-[18px]">{res.answer}</p>
          {res.insights.length > 0 && <ul className="mt-4 list-disc pl-5 text-[var(--muted)]">{res.insights.map((i, k) => <li key={k}>{i}</li>)}</ul>}
          {res.suggested_sql && <pre className="mt-4 overflow-x-auto rounded bg-[var(--navy)] p-4 text-[13px] text-white">{res.suggested_sql}</pre>}
        </div>
      )}
    </div>
  );
}
