import Link from "next/link";
import { NAV } from "@/lib/site";
import { Logo } from "./Header";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="wrap py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_3fr]">
          <div>
            <Logo light />
            <address className="mt-6 text-[14px] not-italic leading-6 text-white/70">
              DataFoundry Inc.<br />100 Market Street, Suite 400<br />San Francisco, CA 94105
            </address>
            <Link href="/p/careers" className="btn btn-line mt-6 text-[14px]">See Careers at DataFoundry</Link>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {NAV.map((m) => (
              <div key={m.label}>
                <div className="mb-4 text-[16px] font-medium">{m.label}</div>
                {m.groups.map((g) => (
                  <div key={g.title} className="mb-5">
                    <div className="eyebrow mb-2 text-[11px] text-white/50">{g.title}</div>
                    <ul className="space-y-1.5">
                      {g.links.slice(0, 7).map((l) => (
                        <li key={l.href}><Link href={l.href} className="text-[14px] text-white/80 hover:text-white">{l.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-[13px] text-white/60 md:flex-row md:justify-between">
          <span>© DataFoundry 2026. All rights reserved.</span>
          <div className="flex flex-wrap gap-5">
            <Link href="/p/privacy">Privacy Notice</Link><Link href="/p/terms">Terms of Use</Link>
            <Link href="/p/privacy-choices">Your Privacy Choices</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
