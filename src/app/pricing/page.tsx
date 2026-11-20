import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PLANS } from "@/lib/site";

const FAQ = [
  ["What does the evaluation include?", "A full workspace with starter AI credits, so your team can verify results on real company data before committing budget."],
  ["How is usage measured?", "Each plan includes a monthly AI credit allowance. Every Genie analysis uses one credit. Teams that need more capacity move to a higher plan."],
  ["How does billing work?", "Checkout is processed by our payment partner. Your plan is activated once the payment is confirmed on our side, never on redirect alone."],
  ["Which support is included?", "Starter includes community support. Pro includes priority email support for production workloads."],
];

export default function Pricing() {
  return (
    <>
      <Header />
      <main>
        <section className="wrap py-20">
          <h1 className="h-xl">Pricing built around outcomes</h1>
          <p className="mt-5 max-w-2xl text-[22px] text-[#1b3139]">One AI-native platform replaces separate warehouse, database and ML tooling. Pay for the analysis capacity your teams actually use.</p>
        </section>
        <section className="bg-[var(--cream)] py-16">
          <div className="wrap grid gap-6 md:grid-cols-2">
            {PLANS.map((p) => (
              <div key={p.id} className={`card flex flex-col p-9 ${p.featured ? "ring-2 ring-[var(--red)]" : ""}`}>
                <div className="eyebrow text-[var(--red)]">{p.name}</div>
                <div className="mt-3 text-[56px] font-medium leading-none">${p.price}<span className="text-[18px] text-[var(--muted)]"> per month</span></div>
                <p className="mt-4 text-[var(--muted)]">{p.blurb}</p>
                <ul className="mt-6 flex-1 space-y-2">{p.features.map((f) => <li key={f} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--red)]" />{f}</li>)}</ul>
                <Link href={`/signup?plan=${p.id}`} className="btn btn-red mt-8 text-center">Sign up</Link>
              </div>
            ))}
          </div>
          <p className="wrap mt-6 text-[14px] text-[var(--muted)]">After you create your account, checkout for your plan is available on the Billing page.</p>
        </section>
        <section className="wrap py-20" id="calculator">
          <h2 className="h-lg">Pricing FAQ</h2>
          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {FAQ.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer text-[20px]">{q}</summary><p className="mt-3 text-[var(--muted)]">{a}</p></details>)}
          </div>
          <div className="mt-10 flex gap-4"><Link href="/signup" className="btn btn-red">Create account</Link><Link href="/login" className="btn btn-line">Log in</Link></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
