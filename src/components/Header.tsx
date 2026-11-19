"use client";
import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden>
        <path d="M16 3 3 10l13 7 13-7-13-7Z" fill="#ff3621" />
        <path d="m3 15 13 7 13-7M3 21l13 7 13-7" stroke="#ff3621" strokeWidth="3" fill="none" />
      </svg>
      <span className={`text-[26px] font-semibold tracking-tight ${light ? "text-white" : "text-[#0b2026]"}`}>datafoundry</span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white" onMouseLeave={() => setOpen(null)}>
      <div className="wrap flex h-[68px] items-center justify-between">
        <div className="flex items-center gap-12">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((m, i) => (
              <button key={m.label} onMouseEnter={() => setOpen(i)} onFocus={() => setOpen(i)}
                className={`text-[16px] ${open === i ? "text-[var(--red)]" : "text-[#1b3139]"}`}>{m.label}</button>
            ))}
          </nav>
        </div>
        <div className="hidden items-center gap-6 text-[15px] lg:flex">
          <Link href="/login">Login</Link>
          <Link href="/p/contact">Contact Us</Link>
          <Link href="/signup" className="btn btn-red">Try DataFoundry</Link>
        </div>
        <button className="lg:hidden" aria-label="Menu" onClick={() => setMobile(!mobile)}>
          <svg width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
        </button>
      </div>

      {open !== null && (
        <div className="absolute left-0 right-0 hidden border-b border-[var(--line)] bg-white shadow-lg lg:block">
          <div className="wrap grid grid-cols-4 gap-10 py-8">
            {NAV[open].groups.map((g) => (
              <div key={g.title}>
                <div className="eyebrow mb-3 text-[var(--muted)]">{g.title}</div>
                <ul className="space-y-2">
                  {g.links.map((l) => (
                    <li key={l.href}><Link href={l.href} onClick={() => setOpen(null)} className="text-[15px] hover:text-[var(--red)]">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {mobile && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-[var(--line)] bg-white p-6 lg:hidden">
          {NAV.map((m) => (
            <details key={m.label} className="border-b border-[var(--line)] py-3">
              <summary className="cursor-pointer text-[17px] font-medium">{m.label}</summary>
              {m.groups.map((g) => (
                <div key={g.title} className="mt-3">
                  <div className="eyebrow text-[var(--muted)]">{g.title}</div>
                  {g.links.map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setMobile(false)} className="block py-1.5 text-[15px]">{l.label}</Link>
                  ))}
                </div>
              ))}
            </details>
          ))}
          <div className="mt-5 flex gap-3">
            <Link href="/login" className="btn btn-line">Login</Link>
            <Link href="/signup" className="btn btn-red">Try DataFoundry</Link>
          </div>
        </div>
      )}
    </header>
  );
}
