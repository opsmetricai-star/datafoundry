import { createClient } from "@/lib/supabase/server";
import Uploader from "./Uploader";

export default async function Datasets() {
  const sb = await createClient();
  const { data } = await sb.from("datasets").select("id,name,columns,row_count,created_at").order("created_at", { ascending: false });
  return (
    <div className="max-w-4xl">
      <h1 className="h-lg">Datasets</h1>
      <Uploader />
      <div className="mt-8 grid gap-3">
        {(data ?? []).map((d) => (
          <div key={d.id} className="card flex flex-wrap items-center justify-between gap-2 p-5">
            <div><div className="text-[18px] font-medium">{d.name}</div><div className="text-[14px] text-[var(--muted)]">{d.row_count} rows | {(d.columns as string[]).length} columns | {(d.columns as string[]).slice(0, 5).join(", ")}</div></div>
            <a className="text-[var(--red)]" href={`/app/genie?dataset=${d.id}`}>Analyze</a>
          </div>
        ))}
        {!data?.length && <p className="text-[var(--muted)]">No datasets yet. Upload a CSV above to begin.</p>}
      </div>
    </div>
  );
}
