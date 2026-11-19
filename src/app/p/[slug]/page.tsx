import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_PAGES, type Kind } from "@/lib/pages";

export function generateStaticParams() {
  return Object.keys(ALL_PAGES).map((slug) => ({ slug }));
}

const EYEBROW: Record<Kind, string> = { product: "Product", solution: "Solutions", audience: "Why DataFoundry", resource: "Resources", company: "About", legal: "Legal" };
const LIST_HEADING: Record<Kind, string> = { product: "How it works", solution: "How teams get started", audience: "Getting started", resource: "Get involved", company: "Next steps", legal: "" };

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = ALL_PAGES[slug];
  if (!page) notFound();
  const cards = page.points.slice(0, 4);
  const steps = page.points.slice(4);
  const cta = page.cta ?? ["Try DataFoundry", "/signup"];

  return (
    <>
      <Header />
      <main>
        <section className="wrap grid items-center gap-10 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-24">
          <div>
            <div className="eyebrow text-[var(--red)]">{EYEBROW[page.kind]}</div>
            <h1 className="h-xl mt-4">{page.title}</h1>
            <p className="mt-6 max-w-2xl text-[22px] leading-snug text-[#1b3139]">{page.lede}</p>
            {page.kind !== "legal" && (
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href={cta[1]} className="btn btn-red">{cta[0]}</Link>
                <Link href="/pricing" className="btn btn-dark">See pricing</Link>
              </div>
            )}
          </div>
          {page.kind !== "legal" && (
            <div className="dots hidden h-72 items-center justify-center rounded-xl bg-[var(--bg-soft)] lg:flex">
              <div className="w-64 rounded-lg border border-[var(--line)] bg-white p-5 shadow-xl">
                <div className="eyebrow text-[11px] text-[var(--muted)]">{EYEBROW[page.kind]}</div>
                <div className="mt-2 text-[20px] font-medium leading-tight">{page.title}</div>
                <div className="mt-5 space-y-2">{[80, 60, 70].map((w) => <div key={w} className="h-2.5 rounded bg-[var(--cream)]" style={{ width: `${w}%` }} />)}</div>
              </div>
            </div>
          )}
        </section>

        {page.body && (
          <section className="wrap pb-24"><div className="max-w-3xl space-y-5 text-[17px] leading-relaxed text-[#1b3139]">{page.body.map((p, i) => <p key={i}>{p}</p>)}</div></section>
        )}

        {cards.length > 0 && (
          <section className="bg-[var(--cream)] py-20">
            <div className="wrap">
              <h2 className="h-lg max-w-2xl">{page.kind === "product" ? "What you get" : "Highlights"}</h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {cards.map(([t, b]) => (
                  <div key={t} className="card p-7"><div className="text-[20px] font-medium">{t}</div><p className="mt-3 text-[var(--muted)]">{b}</p></div>
                ))}
              </div>
            </div>
          </section>
        )}

        {steps.length > 0 && (
          <section className="wrap py-20">
            <h2 className="h-lg">{LIST_HEADING[page.kind]}</h2>
            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map(([t, b], i) => (
                <li key={t} className="border-t-2 border-[var(--red)] pt-5"><div className="eyebrow text-[var(--red)]">Step {i + 1}</div><div className="mt-2 text-[22px] font-medium">{t}</div><p className="mt-2 text-[var(--muted)]">{b}</p></li>
              ))}
            </ol>
          </section>
        )}

        {page.kind !== "legal" && (
          <section className="bg-[var(--navy)] py-20 text-center text-white">
            <h2 className="h-lg">Start your data + AI journey</h2>
            <div className="mt-8 flex justify-center gap-4"><Link href="/p/demos" className="btn btn-line">Browse demos</Link><Link href="/signup" className="btn btn-red">Try it free</Link></div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
