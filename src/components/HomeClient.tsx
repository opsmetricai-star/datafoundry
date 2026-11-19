"use client";
import Link from "next/link";
import { useState } from "react";

const TABS = [
  { t: "Platform", h: "The DataFoundry Data + AI Platform", b: "Unify your data, analytics and AI in one governed workspace. Power agents, apps and natural-language insights from the same foundation.", c: "Explore the platform", l: "/p/platform" },
  { t: "Database", h: "Modern applications need a foundrybase", b: "A serverless Postgres layer that shares storage with your analytics, so operational and analytical workloads stop living in separate worlds.", c: "Explore FoundryBase", l: "/p/foundrybase" },
  { t: "AI", h: "Build AI agents that work in the real world", b: "Ship production-grade agents that are grounded in your governed data, evaluated continuously and observable from day one.", c: "Explore Agent Studio", l: "/p/ai" },
  { t: "Business intelligence", h: "Intelligent analytics for all", b: "Natural-language dashboards and a data-aware assistant let every team ask questions and trust the answers.", c: "Explore AI/BI", l: "/p/bi" },
  { t: "Governance", h: "Govern data and AI on one platform", b: "One catalog for tables, models, dashboards and agents, with lineage, access policy and audit built in.", c: "Explore Governance", l: "/p/governance" },
  { t: "Data warehousing", h: "The best warehouse is still a lakehouse", b: "Serverless SQL on open data formats lowers cost of ownership without giving up speed or concurrency.", c: "Explore Lakehouse", l: "/p/warehousing" },
  { t: "Data engineering", h: "Build better data pipelines faster", b: "Declarative pipelines, scheduling and quality checks that turn raw sources into reliable tables.", c: "Explore Pipelines", l: "/p/data-engineering" },
];

export function PlatformTabs() {
  const [i, setI] = useState(0);
  const tab = TABS[i];
  return (
    <div>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {TABS.map((x, k) => (
          <button key={x.t} onClick={() => setI(k)}
            className={`rounded-full px-5 py-2.5 text-[15px] transition ${k === i ? "bg-white text-[var(--navy)]" : "bg-white/10 text-white hover:bg-white/20"}`}>{x.t}</button>
        ))}
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl items-center gap-10 rounded-xl bg-white/5 p-8 md:grid-cols-2 md:p-12">
        <div>
          <h3 className="text-[28px] font-medium leading-tight">{tab.h}</h3>
          <p className="mt-4 text-white/75">{tab.b}</p>
          <Link href={tab.l} className="btn btn-red mt-7">{tab.c}</Link>
        </div>
        <div className="dots flex h-64 items-center justify-center rounded-lg bg-white/10">
          <div className="grid h-40 w-56 place-items-center rounded-lg bg-white text-[var(--navy)] shadow-xl">
            <span className="eyebrow">{tab.t}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const FAQ = [
  ["What is DataFoundry?", "DataFoundry is a unified data and AI platform that runs analytical and operational workloads on one open, governed foundation."],
  ["How do I try DataFoundry?", "Create a free account, connect a data source or upload a file, and start querying. No credit card is required to begin."],
  ["What is a foundrybase?", "A foundrybase combines serverless Postgres with lakehouse storage, so application data and analytics share one governed copy."],
  ["What is a data warehouse?", "A system optimised for fast SQL analytics over structured data. DataFoundry delivers this on open lake formats."],
  ["What is DataFoundry Genie?", "A data-aware assistant that answers questions in plain English and generates SQL against your governed tables."],
  ["What is the AI Gateway?", "A control point for model access, cost limits, observability and guardrails across every AI provider you use."],
  ["What is a data lakehouse?", "An architecture that pairs the low-cost storage of a data lake with the reliability and performance of a warehouse."],
];

export function Faq() {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));
  const toggle = (i: number) => setOpen((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });
  return (
    <div className="wrap py-24">
      <div className="flex items-end justify-between">
        <h2 className="h-lg">Get to know DataFoundry</h2>
        <button className="text-[14px] underline" onClick={() => setOpen(open.size === FAQ.length ? new Set() : new Set(FAQ.map((_, i) => i)))}>
          {open.size === FAQ.length ? "Collapse All" : "Expand All"}
        </button>
      </div>
      <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {FAQ.map(([q, a], i) => (
          <div key={q} className="py-5">
            <button className="flex w-full items-center justify-between text-left text-[20px]" onClick={() => toggle(i)} aria-expanded={open.has(i)}>
              {q}<span className="text-2xl text-[var(--red)]">{open.has(i) ? "−" : "+"}</span>
            </button>
            {open.has(i) && <p className="mt-3 max-w-3xl text-[var(--muted)]">{a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Stat({ to, suffix, label }: { to: number; suffix: string; label: string }) {
  return (
    <div>
      <div className="text-[64px] font-medium leading-none text-[var(--red)]">{to}{suffix}</div>
      <p className="mt-3 text-[var(--muted)]">{label}</p>
    </div>
  );
}
