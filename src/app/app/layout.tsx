import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Logo } from "@/components/Header";

const ITEMS = [["Overview", "/app"], ["Datasets", "/app/datasets"], ["Genie", "/app/genie"], ["Billing", "/app/billing"], ["Settings", "/app/settings"]];

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const sb = await createClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) redirect("/login");
  return (
    <div className="min-h-screen bg-[var(--bg-soft)] md:grid md:grid-cols-[240px_1fr]">
      <aside className="border-b border-[var(--line)] bg-white p-5 md:border-b-0 md:border-r">
        <Logo />
        <nav className="mt-6 flex gap-1 overflow-x-auto md:flex-col">
          {ITEMS.map(([t, h]) => <Link key={h} href={h} className="whitespace-nowrap rounded px-3 py-2 text-[15px] hover:bg-[var(--cream)]">{t}</Link>)}
        </nav>
        <form action="/auth/signout" method="post" className="mt-6"><button className="px-3 text-[14px] text-[var(--muted)] underline">Log out</button></form>
      </aside>
      <main className="p-6 md:p-10">{children}</main>
    </div>
  );
}
