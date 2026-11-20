"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { parseCsv } from "@/lib/data";

export default function Uploader() {
  const router = useRouter();
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setMsg(null);
    if (f.size > 5_000_000) return setMsg("File too large (5 MB max).");
    setBusy(true);
    const { columns, rows } = parseCsv(await f.text());
    if (!rows.length) { setBusy(false); return setMsg("No data rows found in that CSV."); }
    const res = await fetch("/api/datasets", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: f.name.replace(/\.csv$/i, ""), columns, rows }) });
    const j = await res.json();
    setBusy(false);
    if (!res.ok) return setMsg(j.error ?? "Upload failed");
    e.target.value = "";
    router.refresh();
  }

  return (
    <div className="mt-6 rounded-lg border-2 border-dashed border-[var(--line)] bg-white p-8 text-center">
      <p className="mb-3 text-[var(--muted)]">Upload a CSV file (up to 5,000 rows)</p>
      <input type="file" accept=".csv,text/csv" onChange={onFile} disabled={busy} />
      {busy && <p className="mt-3">Uploading</p>}
      {msg && <p role="alert" className="mt-3 text-red-600">{msg}</p>}
    </div>
  );
}
