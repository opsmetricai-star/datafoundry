import { createClient } from "@/lib/supabase/server";
import GenieChat from "./GenieChat";

export default async function Genie({ searchParams }: { searchParams: Promise<{ dataset?: string }> }) {
  const { dataset } = await searchParams;
  const sb = await createClient();
  const { data } = await sb.from("datasets").select("id,name").order("created_at", { ascending: false });
  return (
    <div className="max-w-3xl">
      <h1 className="h-lg">Genie</h1>
      <p className="mt-2 text-[var(--muted)]">Put a business question to your data. Genie computes the exact figures, explains the drivers and shows the SQL. Each analysis uses one AI credit.</p>
      <GenieChat datasets={data ?? []} initial={dataset} />
    </div>
  );
}
