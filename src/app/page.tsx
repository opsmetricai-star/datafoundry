import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PlatformTabs, Faq, Stat } from "@/components/HomeClient";

const SIDEBAR = ["Dashboard", "Branches", "Settings"];
const SIDEBAR2 = ["Overview", "Monitoring", "SQL Editor", "Tables", "Backup & Restore"];

function HeroMock() {
  const Item = ({ t }: { t: string }) => (
    <div className="flex items-center gap-3 py-2 text-[14px] text-[#3a4f57]"><span className="h-4 w-4 rounded-sm border border-[#9aa9ae]" />{t}</div>
  );
  return (
    <div className="relative hidden lg:block">
      <div className="dots absolute -left-12 bottom-10 h-52 w-20" />
      <div className="ml-6 overflow-hidden rounded-tl-xl border border-[var(--line)] bg-[#f4f6f6] shadow-xl">
        <div className="flex items-center gap-3 border-b border-[var(--line)] bg-white px-6 py-5"><span className="text-2xl font-semibold">datafoundry</span><span className="border-l pl-3 text-[var(--muted)]">FoundryBase</span></div>
        <div className="grid grid-cols-[210px_1fr]">
          <div className="p-5">
            <div className="eyebrow mb-3 text-[11px] text-[var(--muted)]">Autoscaling project</div>
            <div className="mb-3 h-10 rounded bg-white" />
            {SIDEBAR.map((t) => <Item key={t} t={t} />)}
            <div className="eyebrow mb-3 mt-6 text-[11px] text-[var(--muted)]">Branch</div>
            <div className="mb-3 h-10 rounded bg-white" />
            {SIDEBAR2.map((t) => <Item key={t} t={t} />)}
          </div>
          <div className="bg-white p-6">
            <div className="text-[24px] font-medium">Project Dashboard</div>
            <div className="mt-5 rounded-lg border border-[var(--line)] p-5 shadow-sm">
              <div className="font-medium">Monitoring</div>
              <div className="mt-3 flex gap-4 text-[13px]"><span className="rounded border px-3 py-2">production <b className="ml-1 rounded bg-[#eef1f2] px-2 py-0.5 font-normal">Default</b></span></div>
              <svg viewBox="0 0 400 140" className="mt-5 w-full"><defs><pattern id="h" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="0" y2="8" stroke="#dde3e5" /></pattern></defs>
                <rect width="400" height="140" fill="url(#h)" /><path d="M0 90 L90 90 L130 112 L190 112 L205 50 L220 112 L300 112 L330 132 L400 132" fill="none" stroke="#2e6a8e" strokeWidth="2" />
                <circle cx="205" cy="50" r="4" fill="#1eb980" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PRODUCTS = [
  ["FoundryBase", "Serverless Postgres unified with the AI engine. Production data is analysis-ready the moment it is written.", "/p/foundrybase"],
  ["Genie", "The AI analyst that answers business questions from governed tables and shows the SQL behind each answer.", "/p/genie"],
  ["AI agents", "Agents that analyze, decide and act on company data, with evaluation, guardrails and cost limits per team.", "/p/ai-agents"],
  ["Lakehouse", "Serverless warehousing on open data. Lower cost per query and no clusters to manage.", "/p/warehousing"],
];
const SPOT = [
  ["ARCHITECTURE", "Reference architectures for the AI-native lakehouse", "/p/architectures"],
  ["GOVERNANCE", "Make every AI decision traceable and auditable", "/p/ai-governance"],
  ["MIGRATION", "Retire legacy warehouse cost with automated conversion", "/p/migration"],
  ["SECURITY", "Row-level isolation, managed authentication and server-side secrets", "/p/trust"],
];
const OUTCOMES = [
  ["Revenue", "Forecast demand, price and churn on one governed dataset so commercial teams act before the quarter closes."],
  ["Cost", "Replace separate warehouse, database and ML tools. Serverless compute scales to zero when idle."],
  ["Risk", "Row-level isolation, lineage and audit trails make every figure and every AI decision defensible."],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="wrap grid items-center gap-8 py-16 lg:grid-cols-[1fr_1.15fr] lg:py-24">
          <div>
            <h1 className="h-xl"><span className="text-[var(--red)]">AI that decides</span> on your company data</h1>
            <p className="mt-6 max-w-xl text-[21px] leading-snug text-[#1b3139]">DataFoundry is the AI-native data platform for operators and decision-makers. It analyzes every dataset, predicts outcomes and automates the work behind revenue, cost and risk.</p>
            <div className="mt-9 flex flex-wrap gap-5"><Link href="/signup" className="btn btn-red">Create account</Link><Link href="/login" className="btn btn-dark">Log in</Link></div>
          </div>
          <HeroMock />
        </section>

        <section className="bg-[var(--navy)] py-9 text-white">
          <div className="wrap flex flex-col items-center gap-8 md:flex-row">
            <div className="eyebrow max-w-[170px] leading-5">Built for regulated, data-heavy industries</div>
            <div className="flex flex-1 flex-wrap items-center justify-between gap-6 text-[22px] font-semibold opacity-90 md:border-l md:border-white/20 md:pl-10">
              {["Financial services", "Healthcare", "Retail", "Manufacturing", "Telecom", "Public sector"].map((n) => <span key={n} className="tracking-tight">{n}</span>)}
            </div>
          </div>
        </section>

        <section className="bg-[var(--navy)] pb-24 pt-16 text-center text-white">
          <div className="wrap">
            <div className="eyebrow text-[var(--red)]">The AI-native data platform</div>
            <h2 className="h-lg mx-auto mt-5 max-w-3xl">One engine that analyzes, predicts, decides and automates</h2>
            <PlatformTabs />
          </div>
        </section>

        <section className="bg-[var(--cream)] py-20">
          <div className="wrap">
            <div className="eyebrow text-[var(--red)]">Featured products</div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PRODUCTS.map(([t, b, l]) => (
                <Link key={t} href={l} className="card flex min-h-[240px] flex-col p-7">
                  <div className="text-[26px] font-medium">{t}</div><p className="mt-3 text-[var(--muted)]">{b}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap py-24">
          <div className="eyebrow text-[var(--red)]">Outcomes</div>
          <h2 className="h-lg mt-4 max-w-3xl">Faster decisions, lower cost, controlled risk</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {OUTCOMES.map(([t, b]) => (
              <div key={t} className="border-t-2 border-[var(--red)] pt-5"><div className="text-[24px] font-medium">{t}</div><p className="mt-2 text-[var(--muted)]">{b}</p></div>
            ))}
          </div>
          <div className="mt-10 flex gap-5"><Link href="/signup" className="btn btn-red">Create account</Link><Link href="/login" className="btn btn-line">Log in</Link></div>
        </section>

        <section className="bg-[var(--bg-soft)] py-24">
          <div className="wrap">
            <div className="eyebrow text-[var(--red)]">Built for accountability</div>
            <h2 className="h-lg mt-4 max-w-3xl">Numbers a board can rely on</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              <Stat to={1} suffix="" label="Governed copy of every dataset, shared by analytics, applications and agents" />
              <Stat to={0} suffix="" label="Clusters to size, patch or pay for while idle" />
              <Stat to={100} suffix="%" label="Of reported figures computed deterministically, never generated by a model" />
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {[["Deterministic by design", "Totals, averages and counts are calculated by the platform. The model explains and recommends; it never invents a number."], ["Governed by default", "Access policy is enforced in the database itself, so a misconfigured application cannot expose another team's data."]].map(([t, b]) => (
                <div key={t} className="card p-7"><p className="text-[22px] font-medium">{t}</p><p className="mt-3 text-[var(--muted)]">{b}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap py-24">
          <h2 className="h-lg">Go deeper</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SPOT.map(([e, t, l]) => (
              <Link key={t} href={l} className="card flex flex-col p-6">
                <div className="mb-6 h-32 rounded bg-[var(--navy)]" /><div className="eyebrow text-[11px] text-[var(--red)]">{e}</div>
                <p className="mt-2 flex-1 text-[18px] leading-snug">{t}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[var(--navy)] py-24 text-center text-white">
          <h2 className="h-lg mx-auto max-w-3xl px-6">Put AI to work on your company data</h2>
          <div className="mt-9 flex justify-center gap-5"><Link href="/login" className="btn btn-line">Log in</Link><Link href="/signup" className="btn btn-red">Create account</Link></div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
