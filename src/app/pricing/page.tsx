import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PLANS } from "@/lib/site";

const FAQ = [
  ["What does the free trial include?", "Full access to the workspace, SQL editor and AI assistant with a small starter credit balance."],
  ["Is pricing based on usage or storage volume?", "Plans include a monthly AI credit allowance. Heavier usage is handled by upgrading your plan."],
  ["How will I be billed?", "Checkout is handled by our payment partner. Your plan is activated after payment is confirmed on our side, not on redirect."],
  ["Do you provide technical support?", "Starter includes community support; Pro includes priority email support."],
];

export default function Pricing() {
  return (
    <>
      <Header />
      <main>
        <section className="wrap py-20">
          <h1 className="h-xl">DataFoundry pricing</h1>
          <p className="mt-5 max-w-2xl text-[22px] text-[#1b3139]">One simple platform to unify your data, analytics and AI workloads.</p>
        </section>
        <section className="bg-[var(--cream)] py-16">
          <div className="wrap grid gap-6 md:grid-cols-2">
            {PLANS.map((p) => (
              <div key={p.id} className={`card p-9 ${p.featured ? "ring-2 ring-[var(--red)]" : ""}`}>
                <div className="eyebrow text-[var(--red)]">{p.name}</div>
                <div className="mt-3 text-[56px] font-medium leading-none">${p.price}<span className="text-[18px] text-[var(--muted)]"> / month</span></div>
                <p className="mt-4 text-[var(--muted)]">{p.blurb}</p>
                <ul className="mt-6 space-y-2">{p.features.map((f) => <li key={f}>✓ {f}</li>)}</ul>
                <a href={p.url} className="btn btn-red mt-8" rel="noopener">Upgrade to {p.name}</a>
              </div>
            ))}
          </div>
        </section>
        <section className="wrap py-20" id="calculator">
          <h2 className="h-lg">Pricing FAQ</h2>
          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {FAQ.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer text-[20px]">{q}</summary><p className="mt-3 text-[var(--muted)]">{a}</p></details>)}
          </div>
          <Link href="/signup" className="btn btn-dark mt-10">Start free trial</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
