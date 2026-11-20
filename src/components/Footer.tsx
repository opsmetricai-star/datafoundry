import Link from "next/link";
import { Logo } from "./Header";

const COLS: { title: string; links: [string, string][] }[] = [
  { title: "Product", links: [["Platform", "/p/platform"], ["FoundryBase", "/p/foundrybase"], ["Genie", "/p/genie"], ["AI agents", "/p/ai-agents"], ["Governance", "/p/governance"], ["Pricing", "/pricing"]] },
  { title: "Solutions", links: [["Financial services", "/p/finance"], ["Healthcare", "/p/healthcare"], ["Retail", "/p/retail"], ["Manufacturing", "/p/manufacturing"], ["Cybersecurity", "/p/cybersecurity"], ["Migration", "/p/migration"]] },
  { title: "Resources", links: [["Documentation", "/p/docs"], ["Demos", "/p/demos"], ["Blog", "/p/blog"], ["Events", "/p/events"], ["Support", "/p/support"], ["Architectures", "/p/architectures"]] },
  { title: "Company", links: [["About", "/p/about"], ["Customers", "/p/customers"], ["Partners", "/p/partners"], ["Careers", "/p/careers"], ["Security and trust", "/p/trust"], ["Contact", "/p/contact"]] },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="wrap py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-[14px] leading-6 text-white/70">The AI-native data platform that analyzes, predicts, decides and automates across the enterprise.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {COLS.map((c) => (
              <div key={c.title}>
                <div className="mb-4 text-[15px] font-medium">{c.title}</div>
                <ul className="space-y-2">
                  {c.links.map(([l, h]) => <li key={h}><Link href={h} className="text-[14px] text-white/75 hover:text-white">{l}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-[13px] text-white/60 md:flex-row md:justify-between">
          <span>© 2026 DataFoundry. All rights reserved.</span>
          <div className="flex flex-wrap gap-5">
            <Link href="/p/privacy">Privacy Notice</Link><Link href="/p/terms">Terms of Use</Link><Link href="/p/privacy-choices">Your Privacy Choices</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
