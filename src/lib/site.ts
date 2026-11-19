export type NavGroup = { title: string; links: { label: string; href: string }[] };
export type NavMenu = { label: string; groups: NavGroup[] };

const L = (label: string, href: string) => ({ label, href });

export const NAV: NavMenu[] = [
  {
    label: "Why DataFoundry",
    groups: [
      { title: "Discover", links: [L("For App Developers", "/p/developers"), L("For Executives", "/p/executives"), L("For Startups", "/p/startups"), L("Lakehouse Architecture", "/p/lakehouse"), L("DataFoundry AI Research", "/p/research")] },
      { title: "Customers", links: [L("Customer Stories", "/p/customers")] },
      { title: "Partners", links: [L("Partner Overview", "/p/partners"), L("Partner Program", "/p/partner-program"), L("Find a Partner", "/p/partner-directory"), L("Cloud Providers", "/p/cloud-partners")] },
    ],
  },
  {
    label: "Product",
    groups: [
      { title: "DataFoundry Data + AI Platform", links: [L("Platform Overview", "/p/platform"), L("Data Engineering", "/p/data-engineering"), L("AI Assistant", "/p/genie"), L("Data Warehousing", "/p/warehousing"), L("Application Development", "/p/apps"), L("Database", "/p/foundrybase"), L("Artificial Intelligence", "/p/ai"), L("Governance", "/p/governance"), L("Business Intelligence", "/p/bi"), L("Security", "/p/security"), L("Sharing", "/p/sharing")] },
      { title: "Integrations and Data", links: [L("Marketplace", "/p/marketplace"), L("IDE Integrations", "/p/ide"), L("Partner Connect", "/p/partner-connect")] },
      { title: "Pricing", links: [L("DataFoundry Pricing", "/pricing"), L("Cost Calculator", "/pricing#calculator")] },
      { title: "Open Source", links: [L("Open Source Technologies", "/p/open-source")] },
    ],
  },
  {
    label: "Solutions",
    groups: [
      { title: "DataFoundry for Industries", links: [L("Telecommunications", "/p/telecom"), L("Media and Entertainment", "/p/media"), L("Financial Services", "/p/finance"), L("Public Sector", "/p/public-sector"), L("Healthcare & Life Sciences", "/p/healthcare"), L("Retail", "/p/retail"), L("Manufacturing", "/p/manufacturing"), L("See All Industries", "/p/solutions")] },
      { title: "Cross Industry Solutions", links: [L("AI Agents", "/p/ai-agents"), L("AI Governance", "/p/ai-governance"), L("Cybersecurity", "/p/cybersecurity"), L("Marketing", "/p/marketing")] },
      { title: "Migration & Deployment", links: [L("Data Migration", "/p/migration"), L("Forward Deployed Engineering", "/p/fde")] },
      { title: "Solution Accelerators", links: [L("Explore Accelerators", "/p/accelerators")] },
    ],
  },
  {
    label: "Resources",
    groups: [
      { title: "Learning", links: [L("Training", "/p/training"), L("Certification", "/p/certification"), L("Free Edition", "/p/free-edition"), L("University Alliance", "/p/university")] },
      { title: "Events", links: [L("Data + AI Summit", "/p/summit"), L("World Tour", "/p/world-tour"), L("Event Calendar", "/p/events")] },
      { title: "Blog and Podcasts", links: [L("Blog", "/p/blog"), L("AI Blog", "/p/ai-blog"), L("Podcast", "/p/podcast")] },
      { title: "Get Help", links: [L("Customer Support", "/p/support"), L("Documentation", "/p/docs"), L("Community", "/p/community")] },
      { title: "Dive Deep", links: [L("Resource Center", "/p/resources"), L("Demo Center", "/p/demos"), L("Architecture Center", "/p/architectures")] },
    ],
  },
  {
    label: "About",
    groups: [
      { title: "Company", links: [L("Who We Are", "/p/about"), L("Our Team", "/p/team"), L("Contact Us", "/p/contact")] },
      { title: "Careers", links: [L("Working at DataFoundry", "/p/careers"), L("Open Jobs", "/p/jobs")] },
      { title: "Press", links: [L("Awards and Recognition", "/p/awards"), L("Newsroom", "/p/newsroom")] },
      { title: "Security and Trust", links: [L("Security and Trust", "/p/trust")] },
    ],
  },
];

/** every /p/<slug> page that the nav + footer link to */

export const PLANS = [
  { id: "starter", name: "Starter", price: 47, blurb: "For individuals and small teams exploring governed data and AI.", url: process.env.NEXT_PUBLIC_PAY_47 || "https://selar.com/47plan?currency=USD", credits: 100, features: ["100 AI credits / month", "3 workspaces", "SQL editor + dashboards", "Community support"] },
  { id: "pro", name: "Pro", price: 97, blurb: "For growing data teams that need pipelines, agents and governance.", url: process.env.NEXT_PUBLIC_PAY_97 || "https://selar.com/97plan?currency=USD", credits: 500, features: ["500 AI credits / month", "Unlimited workspaces", "Pipelines + scheduled jobs", "Priority support"], featured: true },
];
