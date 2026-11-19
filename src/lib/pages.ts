export type Kind = "product" | "solution" | "audience" | "resource" | "company" | "legal";
export type PageDef = {
  kind: Kind;
  title: string;
  lede: string;
  points: [string, string][]; // feature cards (first 4) + numbered list (rest)
  cta?: [string, string]; // [label, href]
  body?: string[]; // paragraphs (legal pages)
};

const P = (kind: Kind, title: string, lede: string, points: [string, string][], cta?: [string, string]): PageDef => ({ kind, title, lede, points, cta });
const T = (a: string, b: string): [string, string] => [a, b];

export const PAGES: Record<string, PageDef> = {
  /* ───────── Why DataFoundry ───────── */
  developers: P("audience", "For app developers", "Build data-rich applications on one platform: a Postgres database, governed analytics and AI endpoints behind a single set of credentials.", [
    T("Postgres you already know", "Standard SQL, familiar drivers and branching so every pull request can get its own copy of the database."),
    T("One governed data layer", "Application tables and analytics tables share storage, so reports never lag behind production."),
    T("AI where the data lives", "Call models from SQL or an API without exporting rows to another service."),
    T("Local-first workflow", "Connect from your IDE, CI pipeline or notebook with the same project token."),
    T("Create a project", "Start free and get a running database in under a minute."),
    T("Connect your app", "Use a connection string or the REST API from any language."),
    T("Ship with confidence", "Roll back with point-in-time restore and watch usage in the dashboard."),
  ], ["Start building", "/signup"]),
  executives: P("audience", "For executives", "Turn fragmented data and scattered AI experiments into one accountable platform with predictable cost.", [
    T("Lower total cost", "Consolidating warehouse, database and ML tooling removes duplicate storage and integration work."),
    T("Faster time to value", "Teams reuse governed datasets instead of rebuilding pipelines for every project."),
    T("Risk under control", "Central access policy, audit logs and lineage make AI usage reviewable."),
    T("Open by design", "Open table formats keep your data portable and avoid lock-in."),
    T("Assess where you are", "Map current data and AI spend against a single-platform model."),
    T("Prioritise use cases", "Pick two or three workflows with measurable business outcomes."),
    T("Measure and expand", "Track usage and credits per team, then scale what works."),
  ], ["Talk to us", "/p/contact"]),
  startups: P("audience", "For startups", "Everything a small team needs to go from first dataset to production agent without hiring a platform team.", [
    T("Start free", "A free tier with starter AI credits so you can validate an idea before paying."),
    T("Grow without migrating", "Move from Starter to Pro on the same workspace, data and permissions."),
    T("No infrastructure to run", "Serverless compute scales to zero when idle."),
    T("Built-in assistant", "Ask questions about your data in plain English from day one."),
    T("Upload your data", "Drop in a CSV or connect a source."),
    T("Ask and iterate", "Use Genie to explore, then save what matters."),
    T("Go to production", "Upgrade when you need more credits and workspaces."),
  ], ["Try it free", "/signup"]),
  lakehouse: P("product", "Lakehouse architecture", "A single architecture that combines the low-cost storage of a data lake with the reliability and speed of a warehouse.", [
    T("Open storage formats", "Data stays in open table formats that other engines can read."),
    T("ACID reliability", "Transactions and schema enforcement protect downstream reports."),
    T("One copy of data", "BI, data science and applications read the same governed tables."),
    T("Separated compute", "Scale queries and pipelines independently of storage."),
    T("Land raw data", "Ingest files and streams into bronze tables."),
    T("Refine", "Clean and join into trusted silver and gold layers."),
    T("Serve", "Expose results to SQL, dashboards, apps and agents."),
  ], ["Explore the platform", "/p/platform"]),
  research: P("resource", "DataFoundry AI research", "How we evaluate retrieval, text-to-SQL and agent reliability so product features are measured, not assumed.", [
    T("Text-to-SQL accuracy", "We test question-answering against deterministic ground truth computed from the data."),
    T("Grounded answers", "Responses are constrained to supplied statistics and sample rows."),
    T("Agent evaluation", "Multi-step workflows are scored on completion, cost and safety."),
    T("Responsible AI", "Usage limits, validation and audit trails ship with every AI feature."),
  ], ["Read the AI blog", "/p/ai-blog"]),
  customers: P("resource", "Customer stories", "A place for the teams building on DataFoundry to share what they shipped.", [
    T("Analytics modernisation", "Consolidating warehouses onto open lake data."),
    T("Operational apps", "Serving application traffic from serverless Postgres."),
    T("AI assistants", "Grounding natural-language answers in governed tables."),
    T("Data sharing", "Exchanging live datasets with partners safely."),
  ], ["Become a customer", "/signup"]),
  partners: P("company", "Partner overview", "Work with consultancies, technology vendors and cloud providers to deliver data and AI outcomes.", [
    T("Consulting & SI", "Implementation partners help migrate and operate your platform."),
    T("Technology partners", "Integrations with ingestion, BI and observability tools."),
    T("Cloud partners", "Run where your data and compliance requirements already are."),
    T("Co-sell", "Joint programmes for qualified partners."),
  ], ["Join the programme", "/p/partner-program"]),
  "partner-program": P("company", "Partner program", "A structured path for partners to build, certify and grow a DataFoundry practice.", [
    T("Enablement", "Training and certification for your delivery teams."),
    T("Technical support", "Priority channels for partner engineers."),
    T("Marketing resources", "Co-branded assets and event opportunities."),
    T("Revenue share", "Programme terms for qualified referrals."),
    T("Apply", "Tell us about your practice."),
    T("Certify", "Complete the foundation track."),
    T("Deliver", "Launch your first joint project."),
  ], ["Contact partnerships", "/p/contact"]),
  "partner-directory": P("company", "Find a partner", "Search for implementation and technology partners by industry, region and specialty.", [
    T("By industry", "Financial services, healthcare, retail and more."),
    T("By specialty", "Migration, governance, applied AI, BI."),
    T("By region", "Local teams that speak your language and know your regulations."),
    T("Verified", "Partners complete certification before listing."),
  ], ["Request an introduction", "/p/contact"]),
  "cloud-partners": P("company", "Cloud providers", "Run DataFoundry close to your data with the cloud you already use.", [
    T("Multi-cloud", "Consistent experience across providers."),
    T("Regional deployment", "Keep data in the jurisdictions you require."),
    T("Private networking", "Connect through private endpoints."),
    T("Marketplace billing", "Consolidate spend where contracts allow."),
  ], ["See pricing", "/pricing"]),

  /* ───────── Product ───────── */
  platform: P("product", "The DataFoundry Data + AI Platform", "Unify data, analytics and AI in one governed workspace to power agents, applications and natural-language insights.", [
    T("Data engineering", "Declarative pipelines turn raw sources into reliable tables."),
    T("Data warehousing", "Serverless SQL on open data with strong concurrency."),
    T("AI and agents", "Build, evaluate and deploy models and agents on governed data."),
    T("Governance", "One catalog for data, models, dashboards and policies."),
    T("Connect", "Upload files or link sources."),
    T("Transform", "Build and schedule pipelines."),
    T("Analyse and automate", "Query, visualise and ask Genie."),
  ], ["Try DataFoundry", "/signup"]),
  "data-engineering": P("product", "Data engineering", "Build reliable pipelines faster with declarative transformations, scheduling and built-in quality checks.", [
    T("Declarative pipelines", "Describe the result you want and let the engine manage execution."),
    T("Quality expectations", "Fail fast or quarantine rows that break your rules."),
    T("Incremental processing", "Process only what changed to save time and cost."),
    T("Observability", "Run history, lineage and alerts in one view."),
    T("Ingest", "Bring in files, databases and event streams."),
    T("Transform", "Write SQL or Python transformations."),
    T("Operate", "Schedule, monitor and retry automatically."),
  ], ["Start a pipeline", "/signup"]),
  genie: P("product", "Genie: your data-aware assistant", "Ask questions in plain English and get answers grounded in your own tables, with the SQL to verify them.", [
    T("Plain-English questions", "No query language required for first answers."),
    T("Grounded in statistics", "Totals and averages are computed deterministically, never guessed."),
    T("Show your work", "Every answer can include the SQL behind it."),
    T("Usage controls", "Credits and limits keep AI spend predictable."),
    T("Upload a dataset", "Add a CSV in the Datasets page."),
    T("Ask a question", "Pick the dataset and type your question."),
    T("Review the answer", "Check insights and suggested SQL."),
  ], ["Ask Genie", "/app/genie"]),
  warehousing: P("product", "Data warehousing", "The best warehouse is still a lakehouse: fast serverless SQL on open data with governance and AI built in.", [
    T("Serverless SQL", "No clusters to size or patch."),
    T("Open data", "Query tables other engines can read too."),
    T("Concurrency at scale", "Many analysts and dashboards at once."),
    T("Cost transparency", "Usage you can attribute to teams."),
    T("Load", "Bring data into governed tables."),
    T("Model", "Define metrics and views."),
    T("Serve", "Connect BI tools and applications."),
  ], ["Explore pricing", "/pricing"]),
  apps: P("product", "Application development", "Build and host internal data apps next to your data with authentication and permissions already handled.", [
    T("Secure by default", "Apps inherit workspace identity and access control."),
    T("Any framework", "Use the web stack your team prefers."),
    T("Direct data access", "Query governed tables without extra pipelines."),
    T("Managed hosting", "Deploy without managing servers."),
  ], ["Build an app", "/signup"]),
  foundrybase: P("product", "FoundryBase: serverless Postgres", "A serverless Postgres database unified with the lakehouse and built for applications, agents and the AI era.", [
    T("Autoscaling", "Compute scales with load and pauses when idle."),
    T("Branching", "Instant copy-on-write branches for dev, test and previews."),
    T("Lakehouse sync", "Operational data is available to analytics without ETL."),
    T("Point-in-time restore", "Recover from mistakes with backup and restore."),
    T("Create a project", "Pick a region and a name."),
    T("Branch and build", "Use a branch for each feature."),
    T("Monitor", "Watch queries, storage and compute in the dashboard."),
  ], ["Create a database", "/signup"]),
  ai: P("product", "Artificial intelligence", "Build AI agents that work in the real world with governed data, evaluation and gateway controls.", [
    T("Agent building", "Compose agents that use tools and your data."),
    T("Evaluation", "Measure quality before and after release."),
    T("AI gateway", "Central access, rate limits and cost control across providers."),
    T("Guardrails", "Validate structured outputs and filter risky content."),
    T("Prepare data", "Curate governed context."),
    T("Build and test", "Iterate against evaluation sets."),
    T("Deploy and observe", "Track cost, latency and failures."),
  ], ["Try Genie", "/app/genie"]),
  governance: P("product", "Governance", "Govern data and AI on one platform with a unified catalog, fine-grained access and end-to-end lineage.", [
    T("Unified catalog", "Tables, files, models and dashboards in one place."),
    T("Fine-grained access", "Row and column rules by team or role."),
    T("Lineage", "See where every metric comes from."),
    T("Audit", "Immutable logs of who accessed what."),
  ], ["See security", "/p/security"]),
  bi: P("product", "Business intelligence", "Intelligent analytics for everyone: dashboards and natural-language exploration on one governed copy of the data.", [
    T("AI-assisted dashboards", "Describe a chart and refine it."),
    T("Natural-language queries", "Let non-technical users self-serve."),
    T("Governed metrics", "Shared definitions prevent conflicting numbers."),
    T("Sharing", "Distribute dashboards securely inside and outside your team."),
  ], ["Explore Genie", "/p/genie"]),
  security: P("product", "Security", "Detect, investigate and respond using the same platform that already holds your logs and telemetry.", [
    T("Unified telemetry", "Store high-volume security data cost-effectively."),
    T("Detections as code", "Version and test detection rules."),
    T("Investigation", "Query months of history in seconds."),
    T("Automation", "Trigger workflows from alerts."),
  ], ["Read about trust", "/p/trust"]),
  sharing: P("product", "Sharing", "Share live, governed data with partners and customers without copying files around.", [
    T("Open protocol", "Recipients can read from the tools they already use."),
    T("Revocable access", "Turn sharing off instantly."),
    T("No duplicates", "One source of truth for every consumer."),
    T("Audited", "See who read which share."),
  ], ["Start sharing", "/signup"]),
  marketplace: P("product", "Marketplace", "Discover datasets, models and applications from providers and add them to your workspace.", [
    T("Datasets", "Enrich analysis with third-party data."),
    T("Models and apps", "Reuse proven building blocks."),
    T("Governed delivery", "Products arrive with access control in place."),
    T("List your product", "Providers can reach your user base."),
  ], ["Contact us", "/p/contact"]),
  ide: P("product", "IDE integrations", "Work from the editor you prefer and keep your code, tests and deployments in sync with the platform.", [
    T("Editors", "Connect from popular IDEs and notebooks."),
    T("CLI and API", "Automate everything you can do in the UI."),
    T("CI/CD", "Test pipelines before they reach production."),
    T("Secrets", "Use scoped tokens instead of shared passwords."),
  ], ["Read the docs", "/p/docs"]),
  "partner-connect": P("product", "Partner Connect", "Connect ingestion, transformation and BI tools in a few clicks.", [
    T("Pre-configured", "Credentials and endpoints are set up for you."),
    T("Categories", "Ingestion, ETL, BI, reverse ETL and observability."),
    T("Trial friendly", "Try a tool before committing."),
    T("Governed", "Connections respect workspace permissions."),
  ], ["Browse partners", "/p/partner-directory"]),
  "open-source": P("product", "Open source technologies", "We build on open formats and protocols so your data and skills stay portable.", [
    T("Open table formats", "Interoperate with other engines."),
    T("Standard SQL and Postgres", "Skills transfer in both directions."),
    T("Open sharing protocol", "Exchange data without proprietary lock-in."),
    T("Community", "Contribute and learn with other practitioners."),
  ], ["Join the community", "/p/community"]),

  /* ───────── Solutions ───────── */
  telecom: P("solution", "Telecommunications", "Use network, usage and customer data to reduce churn and improve service quality.", [
    T("Network analytics", "Detect degradation before customers do."),
    T("Churn prediction", "Prioritise retention offers with evidence."),
    T("Usage insights", "Understand plan and device behaviour."),
    T("Real-time operations", "Act on streaming telemetry."),
  ], ["Talk to us", "/p/contact"]),
  media: P("solution", "Media and entertainment", "Understand audiences and content performance across platforms.", [
    T("Audience analytics", "Unify viewing and engagement data."),
    T("Content performance", "Learn which titles and formats work."),
    T("Personalisation", "Recommend with governed signals."),
    T("Ad measurement", "Reconcile impressions and outcomes."),
  ], ["Talk to us", "/p/contact"]),
  finance: P("solution", "Financial services", "Meet regulatory expectations while using data and AI for risk, fraud and customer insight.", [
    T("Risk analytics", "Reproducible models with lineage."),
    T("Fraud detection", "Score events with low-latency data."),
    T("Regulatory reporting", "Audit trails for every figure."),
    T("Customer 360", "Combine accounts, channels and interactions."),
  ], ["Talk to us", "/p/contact"]),
  "public-sector": P("solution", "Public sector", "Improve citizen services and operational transparency with secure, governed data.", [
    T("Service delivery", "Find bottlenecks across agencies."),
    T("Data sharing", "Collaborate across departments safely."),
    T("Compliance", "Access policy and audit built in."),
    T("Planning", "Forecast demand and allocate budgets."),
  ], ["Talk to us", "/p/contact"]),
  healthcare: P("solution", "Healthcare and life sciences", "Analyse clinical, operational and research data with privacy controls built in.", [
    T("Clinical analytics", "Study outcomes across cohorts."),
    T("Operations", "Forecast capacity and staffing."),
    T("Research", "Collaborate on governed datasets."),
    T("Privacy", "Column-level masking and audit logs."),
  ], ["Talk to us", "/p/contact"]),
  retail: P("solution", "Retail", "Connect inventory, pricing and customer behaviour to sell the right product at the right time.", [
    T("Demand forecasting", "Plan stock by store and season."),
    T("Personalisation", "Tailor offers from first-party data."),
    T("Pricing", "Test and measure price changes."),
    T("Supply chain", "Spot disruptions early."),
  ], ["Talk to us", "/p/contact"]),
  manufacturing: P("solution", "Manufacturing", "Bring sensor, quality and supply data together to reduce downtime and waste.", [
    T("Predictive maintenance", "Anticipate failures from sensor data."),
    T("Quality analytics", "Trace defects to root causes."),
    T("Supply visibility", "Track suppliers and lead times."),
    T("Energy and cost", "Find efficiency opportunities."),
  ], ["Talk to us", "/p/contact"]),
  solutions: P("solution", "Solutions", "Industry and cross-industry solutions built on one platform.", [
    T("Industries", "Telecom, media, finance, public sector, healthcare, retail, manufacturing."),
    T("AI agents", "Production-grade, governed agents."),
    T("Governance", "Policy and audit for AI."),
    T("Migration", "Move from legacy warehouses and Hadoop."),
  ], ["Contact sales", "/p/contact"]),
  "ai-agents": P("solution", "AI agents", "Deploy agents that read governed data, call tools and stay within guardrails.", [
    T("Grounded in data", "Agents answer from your tables, not guesses."),
    T("Tool use", "Call SQL, APIs and workflows."),
    T("Evaluation", "Test before every release."),
    T("Cost control", "Credits and rate limits per team."),
  ], ["Try Genie", "/app/genie"]),
  "ai-governance": P("solution", "AI governance", "Know which models and data are in use, who approved them and what they cost.", [
    T("Model inventory", "A catalog of every model and agent."),
    T("Policy", "Define allowed data and use cases."),
    T("Monitoring", "Track quality, bias signals and drift."),
    T("Audit", "Evidence for regulators and customers."),
  ], ["See governance", "/p/governance"]),
  cybersecurity: P("solution", "Cybersecurity", "Retain and search security data at scale to catch threats earlier.", [
    T("Long retention", "Keep years of logs affordably."),
    T("Fast investigation", "Search across sources in one query."),
    T("Detection engineering", "Develop rules like software."),
    T("Automated response", "Connect alerts to workflows."),
  ], ["See security", "/p/security"]),
  marketing: P("solution", "Marketing", "Measure campaigns and personalise customer journeys using first-party data.", [
    T("Customer data platform", "Unify identities and events."),
    T("Attribution", "Understand which channels drive results."),
    T("Segmentation", "Build audiences with SQL or natural language."),
    T("Experimentation", "Measure uplift reliably."),
  ], ["Talk to us", "/p/contact"]),
  migration: P("solution", "Data migration", "Move from legacy warehouses and on-premises Hadoop with a clear plan and automated tooling.", [
    T("Assessment", "Inventory workloads and estimate effort."),
    T("Code conversion", "Translate SQL and jobs."),
    T("Validation", "Compare outputs between old and new."),
    T("Cut over", "Switch consumers with minimal downtime."),
  ], ["Plan a migration", "/p/contact"]),
  fde: P("solution", "Forward deployed engineering", "Embedded engineers help you ship your first production use cases.", [
    T("Scoped engagements", "Clear goals and timelines."),
    T("Hands-on delivery", "Pair with your team."),
    T("Knowledge transfer", "Leave you able to run it yourself."),
    T("Production focus", "Evaluation and operations from the start."),
  ], ["Request an engagement", "/p/contact"]),
  accelerators: P("solution", "Solution accelerators", "Starter notebooks and reference implementations for common use cases.", [
    T("Churn analysis", "Customer retention starter."),
    T("Demand forecasting", "Time-series planning."),
    T("Fraud detection", "Event scoring patterns."),
    T("Document Q&A", "Grounded retrieval and answers."),
  ], ["Browse demos", "/p/demos"]),

  /* ───────── Resources ───────── */
  training: P("resource", "Training", "Learn the platform through self-paced and instructor-led courses.", [
    T("Fundamentals", "Data, SQL and the workspace."),
    T("Data engineering", "Pipelines and quality."),
    T("Applied AI", "Agents and evaluation."),
    T("Admin", "Governance and security."),
  ], ["See certification", "/p/certification"]),
  certification: P("resource", "Certification", "Validate your skills with role-based exams.", [
    T("Associate", "Core platform skills."),
    T("Professional", "Advanced design and operations."),
    T("Specialty", "AI, governance or engineering tracks."),
    T("Badges", "Share verified credentials."),
  ], ["Start learning", "/p/training"]),
  "free-edition": P("resource", "Free edition", "Learn on the real platform at no cost.", [
    T("No credit card", "Sign up and start."),
    T("Starter credits", "Try AI features."),
    T("Real tools", "Datasets, Genie and dashboards."),
    T("Upgrade anytime", "Keep your work when you grow."),
  ], ["Create free account", "/signup"]),
  university: P("resource", "University alliance", "Programmes for educators and students.", [
    T("Curriculum", "Course material for data and AI."),
    T("Workspaces", "Classroom access for students."),
    T("Events", "Guest sessions and hackathons."),
    T("Careers", "Pathways to industry."),
  ], ["Contact us", "/p/contact"]),
  summit: P("resource", "Data + AI Summit", "Our flagship gathering for data and AI practitioners.", [
    T("Keynotes", "Product direction and customer stories."),
    T("Sessions", "Technical deep dives."),
    T("Training", "Hands-on workshops."),
    T("Networking", "Meet peers and partners."),
  ], ["See event calendar", "/p/events"]),
  "world-tour": P("resource", "World tour", "In-person events in cities near you.", [
    T("One-day format", "Talks, demos and labs."),
    T("Local speakers", "Practitioners from your region."),
    T("Roadmap", "Hear what is shipping next."),
    T("Community", "Meet others building in your area."),
  ], ["See event calendar", "/p/events"]),
  events: P("resource", "Event calendar", "Webinars, workshops and conferences.", [
    T("Webinars", "Live product walkthroughs."),
    T("Workshops", "Hands-on labs."),
    T("Conferences", "Summit and regional events."),
    T("On demand", "Recordings after the event."),
  ], ["Subscribe", "/signup"]),
  blog: P("resource", "Blog", "Engineering, product and customer writing.", [
    T("Engineering", "How the platform works."),
    T("Product", "What is new."),
    T("Best practices", "Patterns that scale."),
    T("Community", "Stories from users."),
  ], ["Read the AI blog", "/p/ai-blog"]),
  "ai-blog": P("resource", "AI blog", "Notes on building reliable AI on governed data.", [
    T("Evaluation", "Measuring quality."),
    T("Agents", "Design patterns."),
    T("Cost", "Controlling spend."),
    T("Safety", "Guardrails and review."),
  ], ["See research", "/p/research"]),
  podcast: P("resource", "Podcast", "Conversations with practitioners.", [
    T("Practitioner interviews", "How teams ship data products."),
    T("Tool deep dives", "Architectures in detail."),
    T("Career stories", "Paths into data and AI."),
    T("Listen anywhere", "Available on major platforms."),
  ], ["Browse resources", "/p/resources"]),
  support: P("resource", "Customer support", "Get help when you need it.", [
    T("Documentation", "Guides and references."),
    T("Community", "Ask other practitioners."),
    T("Starter support", "Community help."),
    T("Pro support", "Priority email response."),
  ], ["See plans", "/pricing"]),
  docs: P("resource", "Documentation", "Guides for getting started, building and operating.", [
    T("Quickstart", "Create an account, upload a dataset and ask a question."),
    T("Guides", "Pipelines, governance and AI."),
    T("API reference", "Programmatic access."),
    T("Release notes", "What changed and when."),
  ], ["Start the quickstart", "/signup"]),
  community: P("resource", "Community", "Ask questions, share projects and learn together.", [
    T("Q&A", "Get answers from practitioners."),
    T("Show and tell", "Share what you built."),
    T("User groups", "Meet locally and online."),
    T("Feedback", "Shape the roadmap."),
  ], ["Create an account", "/signup"]),
  resources: P("resource", "Resource center", "Ebooks, reports, webinars and demos in one place.", [
    T("Ebooks", "Guides to AI governance, lakehouse and more."),
    T("Webinars", "Recorded and live sessions."),
    T("Reports", "Industry research."),
    T("Demos", "Product tours."),
  ], ["Browse demos", "/p/demos"]),
  demos: P("resource", "Demo center", "See the product working before you sign up.", [
    T("Product tours", "Guided walkthroughs."),
    T("Genie demo", "Ask questions about sample data."),
    T("Pipelines demo", "From raw files to clean tables."),
    T("Database demo", "Branching and restore."),
  ], ["Try it yourself", "/signup"]),
  architectures: P("resource", "Architecture center", "Reference architectures for common patterns.", [
    T("Lakehouse", "Bronze, silver and gold layers."),
    T("Real-time analytics", "Streaming to dashboards."),
    T("Operational + analytical", "One platform for apps and reports."),
    T("AI applications", "Grounded retrieval and agents."),
  ], ["See the platform", "/p/platform"]),

  /* ───────── About ───────── */
  about: P("company", "Who we are", "We build the platform that lets every team use data and AI with confidence.", [
    T("Mission", "Make governed data and AI accessible to every organisation."),
    T("Open", "Open formats and standards by default."),
    T("Customer-first", "Real workflows over marketing claims."),
    T("Responsible", "Privacy and safety built in."),
  ], ["Contact us", "/p/contact"]),
  team: P("company", "Our team", "A small group of engineers, designers and data practitioners.", [
    T("Engineering", "Platform and database."),
    T("Design", "Product experience."),
    T("Data and AI", "Research and evaluation."),
    T("Customer success", "Helping teams ship."),
  ], ["Work with us", "/p/careers"]),
  careers: P("company", "Working at DataFoundry", "We value clear thinking, careful engineering and kind collaboration.", [
    T("Remote-friendly", "Work where you are most effective."),
    T("Learning", "Time to grow your craft."),
    T("Ownership", "Small teams with real responsibility."),
    T("Impact", "Ship features customers use."),
  ], ["See open jobs", "/p/jobs"]),
  jobs: P("company", "Open jobs", "Open roles are posted here when we are hiring.", [
    T("Engineering", "Backend, platform and data."),
    T("Product and design", "Product, UX and writing."),
    T("Go to market", "Sales engineering and success."),
    T("General application", "Tell us how you would contribute."),
  ], ["Contact us", "/p/contact"]),
  awards: P("company", "Awards and recognition", "Recognition and independent evaluations will be listed here as they are earned.", [
    T("Analyst reports", "Independent evaluations."),
    T("Customer reviews", "Verified user feedback."),
    T("Industry awards", "Recognition for innovation."),
    T("Certifications", "Security and compliance attestations."),
  ], ["Read customer stories", "/p/customers"]),
  newsroom: P("company", "Newsroom", "Press releases, announcements and media resources.", [
    T("Press releases", "Company news."),
    T("Product updates", "Launches and releases."),
    T("Media kit", "Logos and brand guidelines."),
    T("Contact", "Request an interview."),
  ], ["Contact us", "/p/contact"]),
  trust: P("company", "Security and trust", "Security is part of the design: authentication, row-level data isolation and server-side secrets.", [
    T("Data isolation", "Row-level security ensures users only access their own records."),
    T("Authentication", "Managed sign-in with session handling."),
    T("Secrets", "API keys stay on the server and are never shipped to the browser."),
    T("Validated AI output", "Responses are checked against a schema before use."),
  ], ["Read the privacy notice", "/p/privacy"]),
  contact: P("company", "Contact us", "Tell us what you are building and we will point you to the right next step.", [
    T("Try the product", "The fastest way to evaluate is to create a free account."),
    T("Plans and billing", "See pricing or upgrade from the Billing page."),
    T("Partnerships", "Review the partner programme."),
    T("Support", "Plan-based support options are listed on the support page."),
  ], ["Create an account", "/signup"]),
};

const LEGAL_NOTE = "This is a starting template and must be reviewed by qualified counsel before launch.";
export const LEGAL: Record<string, PageDef> = {
  privacy: { kind: "legal", title: "Privacy Notice", lede: "How DataFoundry handles your information.", points: [], cta: ["Back home", "/"], body: [
    "We collect the email address you use to create an account, the datasets you upload and the questions you ask, so we can provide the service.",
    "Your datasets and queries are protected by row-level security and are only accessible to your account. Questions and relevant dataset statistics and sample rows are sent to our AI provider to generate answers.",
    "We do not sell personal information. You may request deletion of your account and data by contacting us.",
    LEGAL_NOTE] },
  terms: { kind: "legal", title: "Terms of Use", lede: "The rules for using DataFoundry.", points: [], cta: ["Back home", "/"], body: [
    "You are responsible for the data you upload and must have the right to use it.",
    "Paid plans are activated after payment is confirmed. Credits reset on plan activation and are subject to the limits shown on your plan.",
    "AI answers may contain errors; verify important results before relying on them.",
    LEGAL_NOTE] },
  "privacy-choices": { kind: "legal", title: "Your Privacy Choices", lede: "Control how your information is used.", points: [], cta: ["Back home", "/"], body: [
    "You can export or delete your datasets at any time from your account. To request account deletion or a copy of your data, contact us from the Contact page.",
    "We only use essential cookies for sign-in sessions.",
    LEGAL_NOTE] },
};

export const ALL_PAGES: Record<string, PageDef> = { ...PAGES, ...LEGAL };
