"use client";
import Link from "next/link";
import { useState } from "react";

const TABS = [
  { t: "Platform", h: "The AI-native data platform", b: "One governed foundation where AI analyzes your data, predicts outcomes, decides next actions and automates the work, cutting reporting cycles and duplicate tooling cost.", c: "Create account", l: "/signup" },
  { t: "Database", h: "Modern applications need a foundrybase", b: "Serverless Postgres that shares storage with the AI engine, so operational data is analysis-ready the moment it is written and reporting lag disappears.", c: "Create account", l: "/signup" },
  { t: "AI", h: "Build AI agents that work in the real world", b: "Deploy agents that analyze, decide and act on governed data. Every agent is evaluated before release and monitored for cost, latency and accuracy.", c: "Create account", l: "/signup" },
  { t: "Business intelligence", h: "Intelligent analytics for all", b: "AI explains every movement in the numbers and answers executive questions on one governed set of metrics, so leadership stops waiting on analyst queues.", c: "Create account", l: "/signup" },
  { t: "Governance", h: "Govern data and AI on one platform", b: "One control plane for tables, models and agents, with lineage, access policy and audit trails that make every AI decision defensible.", c: "Create account", l: "/signup" },
  { t: "Data warehousing", h: "The best warehouse is still a lakehouse", b: "Serverless SQL on open formats lowers cost per query and removes cluster management while sustaining high concurrency.", c: "Create account", l: "/signup" },
  { t: "Data engineering", h: "Build better data pipelines faster", b: "Declarative pipelines with automated quality enforcement turn raw sources into trusted tables and cut engineering hours per data product.", c: "Create account", l: "/signup" },
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
  ["What is DataFoundry?", "DataFoundry is an AI-native data platform for businesses. Its engine analyzes governed data, predicts outcomes, recommends decisions and automates workflows on one open foundation."],
  ["How does an organization get started?", "Create an account, upload a dataset and put a business question to Genie. Plans include monthly AI credits and scale with usage."],
  ["What is a foundrybase?", "A foundrybase combines serverless Postgres with lakehouse storage, so application data and analytics share one governed copy."],
  ["How does DataFoundry reduce cost?", "One platform replaces separate warehouse, database and ML tooling, which removes duplicate storage, integration work and idle compute."],
  ["What is Genie?", "Genie is the AI analyst in DataFoundry. It answers business questions from governed tables, computes exact figures deterministically and shows the SQL behind every answer."],
  ["How is AI usage controlled?", "Credits, rate limits and guardrails apply per team. Outputs are validated against a schema before they reach a user or a workflow."],
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
              {q}<span className="text-2xl text-[var(--red)]">{open.has(i) ? "-" : "+"}</span>
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
