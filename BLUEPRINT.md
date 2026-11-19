# DataFoundry build checklist (reference: databricks.com, audited 2026-11-19)

Audit limits: text-only extraction; no CSS/hex/fonts captured beyond logo red #EE3D2C. Colours/fonts were matched from the supplied screenshots (red #FF3621, navy #0B2026, DM Sans/DM Mono approximations). Pricing tiers not captured from the reference.

## Done
- [x] Next.js/TS/Tailwind scaffold, design tokens
- [x] Header with 5 mega-menus + mobile drawer; footer
- [x] Homepage: hero + mock dashboard, logo strip, 7-tab platform section, 4 featured products, impact, awards/stats, spotlight, CTA, FAQ accordion
- [x] Pricing page ($47 / $97 plans, FAQ)
- [x] /p/[slug] placeholder for every nav/footer destination

## TODO
- [ ] Real content for each /p/* page (~60 pages)
- [ ] Event banner section, award imagery, hero polish, responsive QA
- [ ] Supabase: auth (signup/login/reset), middleware, schema + RLS
- [ ] App: dashboard, SQL/data workspace, Genie (Gemini, server-side), usage/credits, settings, billing
- [ ] Payment verification (Selar webhook/admin activation)
- [ ] Screenshot comparison vs reference; GitHub push (repo not yet accessible)
