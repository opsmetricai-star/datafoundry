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
  ["FoundryBase", "The first serverless Postgres database unified with the lakehouse, built for the AI era.", "/p/foundrybase"],
  ["Genie", "Your data-aware AI partner for faster work and deeper insights.", "/p/genie"],
  ["AI Gateway", "Govern enterprise AI with unified access, cost control, observability and guardrails.", "/p/ai"],
  ["Lakehouse", "Serverless data warehousing on open lake data, with governance and AI built in.", "/p/warehousing"],
];
const SPOT = [
  ["EBOOK", "How to govern AI cost-effectively and securely at scale", "Read now", "/p/resources"],
  ["EXEC PANEL", "How security leaders are rethinking SecOps", "Watch now", "/p/events"],
  ["IN-PERSON + VIRTUAL", "The must-attend event for data and AI professionals", "Register now", "/p/summit"],
  ["VIRTUAL EVENT", "Get the emerging blueprint for agentic apps", "Register now", "/p/events"],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="wrap grid items-center gap-8 py-16 lg:grid-cols-[1fr_1.15fr] lg:py-24">
          <div>
            <h1 className="h-xl"><span className="text-[var(--red)]">One database</span> for AI, apps and agents</h1>
            <p className="mt-6 max-w-xl text-[22px] leading-snug text-[#1b3139]">FoundryBase is serverless Postgres for applications that scale</p>
            <div className="mt-9 flex flex-wrap gap-5"><Link href="/p/foundrybase" className="btn btn-red">Explore the product</Link><Link href="/p/demos" className="btn btn-dark">See demo</Link></div>
          </div>
          <HeroMock />
        </section>

        <section className="bg-[var(--navy)] py-9 text-white">
          <div className="wrap flex flex-col items-center gap-8 md:flex-row">
            <div className="eyebrow max-w-[150px] leading-5">Trusted by data + AI teams</div>
            <div className="flex flex-1 flex-wrap items-center justify-between gap-6 border-white/20 text-[24px] font-semibold opacity-90 md:border-l md:pl-10">
              {["Northwind", "Heliotrope", "Meridian", "Orbitex", "Kestrel", "Brightloop"].map((n) => <span key={n} className="tracking-tight">{n}</span>)}
            </div>
          </div>
        </section>

        <section className="bg-[var(--navy)] pb-24 pt-16 text-center text-white">
          <div className="wrap">
            <div className="eyebrow text-[var(--red)]">The DataFoundry Data + AI Platform</div>
            <h2 className="h-lg mx-auto mt-5 max-w-3xl">Build and run apps, agents and AI on your data</h2>
            <PlatformTabs />
          </div>
        </section>

        <section className="bg-[var(--cream)] py-20">
          <div className="wrap">
            <div className="eyebrow text-[var(--red)]">Featured products</div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PRODUCTS.map(([t, b, l]) => (
                <Link key={t} href={l} className="card flex min-h-[260px] flex-col p-7">
                  <div className="text-[26px] font-medium">{t}</div><p className="mt-3 flex-1 text-[var(--muted)]">{b}</p>
                  <span className="mt-6 text-[var(--red)]">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap py-24">
          <div className="eyebrow text-[var(--red)]">Proven impact</div>
          <h2 className="h-lg mt-4 max-w-2xl">How innovators win with data and AI</h2>
          <div className="mt-8 flex gap-5"><Link href="/p/customers" className="btn btn-red">See more customer stories</Link><Link href="/p/awards" className="btn btn-line">See more awards</Link></div>
        </section>

        <section className="bg-[var(--bg-soft)] py-24">
          <div className="wrap">
            <div className="eyebrow text-[var(--red)]">Awards and recognition</div>
            <h2 className="h-lg mt-4 max-w-2xl">Recognized for innovation in data and AI</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              <Stat to={70} suffix="%" label="Over 70% of the Fortune 500 runs on platforms like ours" />
              <Stat to={20} suffix="K+" label="Over 20,000 customers across the globe" />
              <Stat to={5} suffix="x" label="5x leader in analyst evaluations" />
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {["2026 AI Platforms for Data Science and ML — leader placement", "Top 50 best software companies across key review categories in 2026"].map((t) => (
                <div key={t} className="card p-7"><div className="mb-10 h-28 rounded bg-[var(--cream)]" /><p className="text-[20px]">{t}</p><Link href="/p/awards" className="mt-4 inline-block text-[var(--red)]">Read more →</Link></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap py-24">
          <h2 className="h-lg">In the spotlight</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SPOT.map(([e, t, c, l]) => (
              <Link key={t} href={l} className="card flex flex-col p-6">
                <div className="mb-6 h-32 rounded bg-[var(--navy)]" /><div className="eyebrow text-[11px] text-[var(--red)]">{e}</div>
                <p className="mt-2 flex-1 text-[18px] leading-snug">{t}</p><span className="mt-4 text-[var(--red)]">{c} →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[var(--navy)] py-24 text-center text-white">
          <h2 className="h-lg">Start your data + AI journey</h2>
          <div className="mt-9 flex justify-center gap-5"><Link href="/p/demos" className="btn btn-line">Browse demos</Link><Link href="/signup" className="btn btn-red">Try it free</Link></div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
