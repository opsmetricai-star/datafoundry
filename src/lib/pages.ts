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
  developers: P("audience", "For app developers", "Ship revenue-critical applications on a database that analyzes, predicts and acts on its own data. One Postgres engine, one governed AI layer, one set of credentials.", [
    T("Postgres you already know", "Standard SQL, familiar drivers and branching so every pull request can get its own copy of the database."),
    T("One governed data layer", "Application tables and analytics tables share storage, so reports never lag behind production."),
    T("AI where the data lives", "Call models from SQL or an API without exporting rows to another service."),
    T("Local-first workflow", "Connect from your IDE, CI pipeline or notebook with the same project token."),
    T("Create a project", "Provision a production database in under a minute and branch it for every release."),
    T("Connect your app", "Use a connection string or the REST API from any language."),
    T("Ship with confidence", "Roll back with point-in-time restore and watch usage in the dashboard."),
  ], ["Create account", "/signup"]),
  executives: P("audience", "For executives", "Cut data and AI spend while accelerating decisions. DataFoundry replaces a stack of warehouse, database and ML tools with one AI engine that analyzes, forecasts and automates across the business.", [
    T("Lower total cost", "Consolidating warehouse, database and ML tooling removes duplicate storage and integration work."),
    T("Faster time to value", "Teams reuse governed datasets instead of rebuilding pipelines for every project."),
    T("Risk under control", "Central access policy, audit logs and lineage make AI usage reviewable."),
    T("Open by design", "Open table formats keep your data portable and avoid lock-in."),
    T("Assess where you are", "Map current data and AI spend against a single-platform model."),
    T("Prioritize use cases", "Pick two or three workflows with measurable business outcomes."),
    T("Measure and expand", "Track usage and credits per team, then scale what works."),
  ], ["Create account", "/signup"]),
  startups: P("audience", "For startups", "Reach production AI without building a platform team. Venture-backed operators use DataFoundry to turn raw company data into forecasts, decisions and automated workflows in days.", [
    T("Evaluate at no cost", "Starter AI credits let your team validate results on real data before committing budget."),
    T("Grow without migrating", "Move from Starter to Pro on the same workspace, data and permissions."),
    T("No infrastructure to run", "Serverless compute scales to zero when idle."),
    T("Built-in assistant", "Ask questions about your data in plain English from day one."),
    T("Upload your data", "Drop in a CSV or connect a source."),
    T("Ask and iterate", "Use Genie to explore, then save what matters."),
    T("Go to production", "Upgrade when you need more credits and workspaces."),
  ], ["Create account", "/signup"]),
  lakehouse: P("product", "Lakehouse architecture", "One architecture for storage, analytics and AI. Open formats, transactional reliability and a single governed copy of data cut duplication cost and remove reconciliation delays.", [
    T("Open storage formats", "Data stays in open table formats that other engines can read."),
    T("ACID reliability", "Transactions and schema enforcement protect downstream reports."),
    T("One copy of data", "BI, data science and applications read the same governed tables."),
    T("Separated compute", "Scale queries and pipelines independently of storage."),
    T("Land raw data", "Ingest files and streams into bronze tables."),
    T("Refine", "Clean and join into trusted silver and gold layers."),
    T("Serve", "Expose results to SQL, dashboards, apps and agents."),
  ], ["Create account", "/signup"]),
  research: P("resource", "DataFoundry AI research", "Our research group measures what AI actually delivers: text-to-SQL accuracy, grounded reasoning and agent reliability, tested against ground truth before any capability ships.", [
    T("Text-to-SQL accuracy", "We test question-answering against deterministic ground truth computed from the data."),
    T("Grounded answers", "Responses are constrained to supplied statistics and sample rows."),
    T("Agent evaluation", "Multi-step workflows are scored on completion, cost and safety."),
    T("Responsible AI", "Usage limits, validation and audit trails ship with every AI feature."),
  ], ["Create account", "/signup"]),
  customers: P("resource", "Customer stories", "Operators and decision-makers use DataFoundry to compress reporting cycles, forecast demand and automate analysis. Their results define what the platform builds next.", [
    T("Analytics modernization", "Consolidating warehouses onto open lake data."),
    T("Operational apps", "Serving application traffic from serverless Postgres."),
    T("AI assistants", "Grounding natural-language answers in governed tables."),
    T("Data sharing", "Exchanging live datasets with partners safely."),
  ], ["Create account", "/signup"]),
  partners: P("company", "Partner overview", "Deliver measurable AI outcomes with DataFoundry. Consulting, technology and cloud partners build and operate production data and AI systems for enterprise clients.", [
    T("Consulting & SI", "Implementation partners help migrate and operate your platform."),
    T("Technology partners", "Integrations with ingestion, BI and observability tools."),
    T("Cloud partners", "Run where your data and compliance requirements already are."),
    T("Co-sell", "Joint programmes for qualified partners."),
  ], ["Create account", "/signup"]),
  "partner-program": P("company", "Partner program", "A structured route to build, certify and grow a revenue-generating DataFoundry practice, with enablement, technical support and joint go-to-market.", [
    T("Enablement", "Training and certification for your delivery teams."),
    T("Technical support", "Priority channels for partner engineers."),
    T("Marketing resources", "Co-branded assets and event opportunities."),
    T("Revenue share", "Programme terms for qualified referrals."),
    T("Apply", "Tell us about your practice."),
    T("Certify", "Complete the foundation track."),
    T("Deliver", "Launch your first joint project."),
  ], ["Create account", "/signup"]),
  "partner-directory": P("company", "Find a partner", "Find vetted implementation and technology partners by industry, region and specialty, each certified on the platform before they are listed.", [
    T("By industry", "Financial services, healthcare, retail and more."),
    T("By specialty", "Migration, governance, applied AI, BI."),
    T("By region", "Local teams that speak your language and know your regulations."),
    T("Verified", "Partners complete certification before listing."),
  ], ["Create account", "/signup"]),
  "cloud-partners": P("company", "Cloud providers", "Run DataFoundry on the cloud your data already lives in. Multi-cloud deployment, regional residency and private networking keep compliance and latency under control.", [
    T("Multi-cloud", "Consistent experience across providers."),
    T("Regional deployment", "Keep data in the jurisdictions you require."),
    T("Private networking", "Connect through private endpoints."),
    T("Marketplace billing", "Consolidate spend where contracts allow."),
  ], ["Create account", "/signup"]),

  /* ───────── Product ───────── */
  platform: P("product", "The DataFoundry Data + AI Platform", "The AI-native data platform. Its engine analyzes your data, predicts outcomes, decides next actions and automates the work, all under one governance model.", [
    T("Data engineering", "Declarative pipelines turn raw sources into trusted tables and cut engineering hours per data product."),
    T("Data warehousing", "Serverless SQL on open data delivers high concurrency at lower cost per query."),
    T("AI and agents", "Build, evaluate and deploy agents on governed data, with cost and quality tracked per team."),
    T("Governance", "One catalog and one access model for data, models and dashboards makes every decision auditable."),
    T("Connect", "Upload files or link sources."),
    T("Transform", "Build and schedule pipelines."),
    T("Analyze and automate", "Query, visualize and ask Genie."),
  ], ["Create account", "/signup"]),
  "data-engineering": P("product", "Data engineering", "Pipelines that build, monitor and repair themselves. AI-assisted transformation, automated quality enforcement and incremental processing cut engineering time and compute cost.", [
    T("Declarative pipelines", "Describe the result you want and let the engine manage execution."),
    T("Quality expectations", "Fail fast or quarantine rows that break your rules."),
    T("Incremental processing", "Process only what changed to save time and cost."),
    T("Observability", "Run history, lineage and alerts in one view."),
    T("Ingest", "Bring in files, databases and event streams."),
    T("Transform", "Write SQL or Python transformations."),
    T("Operate", "Schedule, monitor and retry automatically."),
  ], ["Create account", "/signup"]),
  genie: P("product", "Genie: your data-aware assistant", "Genie is the AI analyst inside DataFoundry. It reads your governed tables, computes exact figures, explains drivers and writes the SQL, so decisions take minutes instead of weeks.", [
    T("Plain-English questions", "Executives and operators put questions to their data directly, removing the analyst queue from routine decisions."),
    T("Grounded in statistics", "Totals, averages and counts are computed by the platform. The model explains; it never invents a number."),
    T("Show your work", "Every answer can include the SQL behind it, so any figure can be verified in seconds."),
    T("Usage controls", "Credits and limits per plan keep AI spend predictable and attributable."),
    T("Upload a dataset", "Add a CSV in the Datasets page."),
    T("Ask a question", "Pick the dataset and type your question."),
    T("Review the answer", "Check insights and suggested SQL."),
  ], ["Create account", "/signup"]),
  warehousing: P("product", "Data warehousing", "Serverless SQL on open data with built-in AI. Lower cost per query, higher concurrency and no clusters to manage, so analytics teams spend time on decisions, not capacity.", [
    T("Serverless SQL", "No clusters to size or patch. Engineering time moves from capacity planning to analysis."),
    T("Open data", "Query tables other engines can read, which removes migration lock-in and exit cost."),
    T("Concurrency at scale", "Hundreds of analysts and dashboards run at once without queueing."),
    T("Cost transparency", "Attribute spend to teams and workloads and remove what does not earn its cost."),
    T("Load", "Bring data into governed tables."),
    T("Model", "Define metrics and views."),
    T("Serve", "Connect BI tools and applications."),
  ], ["Create account", "/signup"]),
  apps: P("product", "Application development", "Build internal decision applications directly on governed data. Identity, permissions and AI endpoints are built in, which removes months of integration work.", [
    T("Secure by default", "Apps inherit workspace identity and access control."),
    T("Any framework", "Use the web stack your team prefers."),
    T("Direct data access", "Query governed tables without extra pipelines."),
    T("Managed hosting", "Deploy without managing servers."),
  ], ["Create account", "/signup"]),
  foundrybase: P("product", "FoundryBase: serverless Postgres", "FoundryBase is serverless Postgres unified with the AI platform. Operational data becomes analysis-ready instantly, with branching, restore and autoscaling for production load.", [
    T("Autoscaling", "Compute scales with load and pauses when idle, so you pay for traffic served, not capacity reserved."),
    T("Branching", "Instant copy-on-write branches give every release a safe test environment and shorten delivery cycles."),
    T("Lakehouse sync", "Operational data is available to analytics and AI without pipelines, removing reporting lag."),
    T("Point-in-time restore", "Recover from a bad deploy or deletion to the exact moment before it happened."),
    T("Create a project", "Pick a region and a name."),
    T("Branch and build", "Use a branch for each feature."),
    T("Monitor", "Watch queries, storage and compute in the dashboard."),
  ], ["Create account", "/signup"]),
  ai: P("product", "Artificial intelligence", "Production AI agents that analyze, predict, decide and act on governed company data. Evaluation, guardrails and cost controls come standard, so every agent is measurable.", [
    T("Agent building", "Compose agents that use tools and your data."),
    T("Evaluation", "Measure quality before and after release."),
    T("AI gateway", "Central access, rate limits and cost control across providers."),
    T("Guardrails", "Validate structured outputs and filter risky content."),
    T("Prepare data", "Curate governed context."),
    T("Build and test", "Iterate against evaluation sets."),
    T("Deploy and observe", "Track cost, latency and failures."),
  ], ["Create account", "/signup"]),
  governance: P("product", "Governance", "One control plane for data, models and agents. Fine-grained access, lineage and audit trails make every AI decision traceable and every number defensible.", [
    T("Unified catalog", "Tables, files, models and dashboards in one place."),
    T("Fine-grained access", "Row and column rules by team or role."),
    T("Lineage", "See where every metric comes from."),
    T("Audit", "Immutable logs of who accessed what."),
  ], ["Create account", "/signup"]),
  bi: P("product", "Business intelligence", "Dashboards that explain themselves. AI generates the analysis, surfaces the drivers behind every movement and answers executive questions on one governed set of metrics.", [
    T("AI-assisted dashboards", "Describe a chart and refine it."),
    T("Natural-language queries", "Let non-technical users self-serve."),
    T("Governed metrics", "Shared definitions prevent conflicting numbers."),
    T("Sharing", "Distribute dashboards securely inside and outside your team."),
  ], ["Create account", "/signup"]),
  security: P("product", "Security", "Detect and investigate threats on the platform that already holds your telemetry. Long retention, fast search and automated response reduce time to containment.", [
    T("Unified telemetry", "Store high-volume security data cost-effectively."),
    T("Detections as code", "Version and test detection rules."),
    T("Investigation", "Query months of history in seconds."),
    T("Automation", "Trigger workflows from alerts."),
  ], ["Create account", "/signup"]),
  sharing: P("product", "Sharing", "Monetize and exchange live data with partners and customers without copying it. Revocable, audited access keeps one source of truth.", [
    T("Open protocol", "Recipients can read from the tools they already use."),
    T("Revocable access", "Turn sharing off instantly."),
    T("No duplicates", "One source of truth for every consumer."),
    T("Audited", "See who read which share."),
  ], ["Create account", "/signup"]),
  marketplace: P("product", "Marketplace", "Acquire datasets, models and applications that extend your AI engine, delivered with governance already applied.", [
    T("Datasets", "Enrich analysis with third-party data."),
    T("Models and apps", "Reuse proven building blocks."),
    T("Governed delivery", "Products arrive with access control in place."),
    T("List your product", "Providers can reach your user base."),
  ], ["Create account", "/signup"]),
  ide: P("product", "IDE integrations", "Run the platform from the tools your engineers already use. CLI, API and CI integrations bring testing and deployment discipline to every pipeline and agent.", [
    T("Editors", "Connect from popular IDEs and notebooks."),
    T("CLI and API", "Automate everything you can do in the UI."),
    T("CI/CD", "Test pipelines before they reach production."),
    T("Secrets", "Use scoped tokens instead of shared passwords."),
  ], ["Create account", "/signup"]),
  "partner-connect": P("product", "Partner Connect", "Connect ingestion, transformation and BI vendors with pre-configured credentials, cutting integration time from weeks to hours.", [
    T("Pre-configured", "Credentials and endpoints are set up for you."),
    T("Categories", "Ingestion, ETL, BI, reverse ETL and observability."),
    T("Trial friendly", "Try a tool before committing."),
    T("Governed", "Connections respect workspace permissions."),
  ], ["Create account", "/signup"]),
  "open-source": P("product", "Open source technologies", "Open table formats, standard SQL and open sharing protocols protect your data and your investment. No proprietary exit cost.", [
    T("Open table formats", "Interoperate with other engines."),
    T("Standard SQL and Postgres", "Skills transfer in both directions."),
    T("Open sharing protocol", "Exchange data without proprietary lock-in."),
    T("Community", "Contribute and learn with other practitioners."),
  ], ["Create account", "/signup"]),

  /* ───────── Solutions ───────── */
  telecom: P("solution", "Telecommunications", "Reduce churn and protect network revenue. AI models score subscriber risk, detect degradation early and prioritize retention actions by value.", [
    T("Network analytics", "Detect degradation before customers notice, reducing complaints and truck rolls."),
    T("Churn prediction", "Rank subscribers by churn risk and value so retention spend goes where it pays back."),
    T("Usage insights", "Understand plan and device behavior to design offers that lift average revenue per user."),
    T("Real-time operations", "Act on streaming telemetry to resolve incidents while they are still small."),
  ], ["Create account", "/signup"]),
  media: P("solution", "Media and entertainment", "Grow audience value with AI that unifies viewing data, predicts content performance and optimizes ad yield across platforms.", [
    T("Audience analytics", "Unify viewing and engagement data to see which audiences generate the most lifetime value."),
    T("Content performance", "Learn which titles and formats earn attention so commissioning budgets follow results."),
    T("Personalization", "Recommend content from governed signals to extend sessions and reduce cancellations."),
    T("Ad measurement", "Reconcile impressions with outcomes so ad yield can be defended to buyers."),
  ], ["Create account", "/signup"]),
  finance: P("solution", "Financial services", "Decide faster under regulation. Reproducible models, full lineage and AI-driven risk and fraud scoring give auditors evidence and operators speed.", [
    T("Risk analytics", "Reproducible risk models with full lineage cut model validation time and give regulators the evidence they ask for."),
    T("Fraud detection", "Score every event against live data to stop losses earlier and reduce false positives that burden operations."),
    T("Regulatory reporting", "Every reported figure traces back to its source tables, so audits close faster and with fewer findings."),
    T("Customer 360", "Combine accounts, channels and interactions into one governed view that lifts cross-sell and retention."),
  ], ["Create account", "/signup"]),
  "public-sector": P("solution", "Public sector", "Improve service delivery and budget accuracy with governed, shareable data and AI forecasting that agencies can audit.", [
    T("Service delivery", "Find bottlenecks across agencies and redirect capacity to where citizens wait longest."),
    T("Data sharing", "Let departments collaborate on live data with access rules that stand up to audit."),
    T("Compliance", "Access policy and audit trails are built in, shortening review cycles."),
    T("Planning", "Forecast demand and allocate budgets from evidence rather than last year's spend."),
  ], ["Create account", "/signup"]),
  healthcare: P("solution", "Healthcare and life sciences", "Improve operational throughput and research velocity with privacy-controlled data, cohort analytics and AI forecasting of capacity and demand.", [
    T("Clinical analytics", "Compare outcomes across cohorts to find which protocols improve results and which add cost."),
    T("Operations", "Forecast admissions, capacity and staffing so leaders reduce wait times and overtime spend."),
    T("Research", "Share governed datasets across institutions without copying patient data into new systems."),
    T("Privacy", "Column-level masking and audit logs keep sensitive fields protected while analysis continues."),
  ], ["Create account", "/signup"]),
  retail: P("solution", "Retail", "Raise margin and cut stockouts. AI forecasts demand by store and season, tests pricing and flags supply disruption before it hits revenue.", [
    T("Demand forecasting", "Predict demand by store and season to cut stockouts and the markdowns that follow overstock."),
    T("Personalization", "Tailor offers from first-party data to raise basket size without third-party tracking."),
    T("Pricing", "Test price changes and measure margin impact before rolling them out chain-wide."),
    T("Supply chain", "Flag supplier delays early so planners reroute before shelves go empty."),
  ], ["Create account", "/signup"]),
  manufacturing: P("solution", "Manufacturing", "Lower downtime and scrap. AI predicts equipment failure from sensor data, traces defects to root cause and optimizes supply and energy cost.", [
    T("Predictive maintenance", "Predict equipment failure from sensor data and schedule repair before unplanned downtime."),
    T("Quality analytics", "Trace defects to the line, batch and supplier responsible, reducing scrap and rework."),
    T("Supply visibility", "Track supplier lead times and risk in one view to protect delivery commitments."),
    T("Energy and cost", "Find energy and material inefficiencies by plant and act on the largest savings first."),
  ], ["Create account", "/signup"]),
  solutions: P("solution", "Solutions", "Industry and cross-industry solutions built on one AI engine, each tied to a measurable outcome in revenue, cost, speed or risk.", [
    T("Industries", "Telecom, media, finance, public sector, healthcare, retail, manufacturing."),
    T("AI agents", "Production-grade, governed agents."),
    T("Governance", "Policy and audit for AI."),
    T("Migration", "Move from legacy warehouses and Hadoop."),
  ], ["Create account", "/signup"]),
  "ai-agents": P("solution", "AI agents", "Deploy agents that analyze, decide and act on governed data. Each agent runs inside guardrails, with evaluation and cost limits per team.", [
    T("Grounded in data", "Agents answer from governed tables, so recommendations rest on company facts."),
    T("Tool use", "Agents call SQL, APIs and workflows to complete multi-step work, not just draft text."),
    T("Evaluation", "Every release is tested against scored cases, so quality is measured before customers see it."),
    T("Cost control", "Credits and rate limits per team keep agent spend inside budget."),
  ], ["Create account", "/signup"]),
  "ai-governance": P("solution", "AI governance", "Know every model and agent in use, who approved it, what data it touches and what it costs. Evidence for regulators and boards, on demand.", [
    T("Model inventory", "A catalog of every model and agent."),
    T("Policy", "Define allowed data and use cases."),
    T("Monitoring", "Track quality, bias signals and drift."),
    T("Audit", "Evidence for regulators and customers."),
  ], ["Create account", "/signup"]),
  cybersecurity: P("solution", "Cybersecurity", "Cut time to detect and respond. Retain years of telemetry affordably, investigate across sources in one query and automate containment.", [
    T("Long retention", "Keep years of logs affordably."),
    T("Fast investigation", "Search across sources in one query."),
    T("Detection engineering", "Develop rules like software."),
    T("Automated response", "Connect alerts to workflows."),
  ], ["Create account", "/signup"]),
  marketing: P("solution", "Marketing", "Attribute revenue to the channels that earn it. Unify first-party data, build audiences with natural language and measure incremental lift.", [
    T("Customer data platform", "Unify identities and events."),
    T("Attribution", "Understand which channels drive results."),
    T("Segmentation", "Build audiences with SQL or natural language."),
    T("Experimentation", "Measure uplift reliably."),
  ], ["Create account", "/signup"]),
  migration: P("solution", "Data migration", "Retire legacy warehouse and Hadoop cost. Automated assessment, code conversion and output validation move workloads with minimal downtime.", [
    T("Assessment", "Inventory workloads and estimate effort."),
    T("Code conversion", "Translate SQL and jobs."),
    T("Validation", "Compare outputs between old and new."),
    T("Cut over", "Switch consumers with minimal downtime."),
  ], ["Create account", "/signup"]),
  fde: P("solution", "Forward deployed engineering", "Embedded engineers take your first production AI use case from scoping to measurable results, then transfer full operating ownership to your team.", [
    T("Scoped engagements", "Clear goals and timelines."),
    T("Hands-on delivery", "Pair with your team."),
    T("Knowledge transfer", "Leave you able to run it yourself."),
    T("Production focus", "Evaluation and operations from the start."),
  ], ["Create account", "/signup"]),
  accelerators: P("solution", "Solution accelerators", "Reference implementations for churn, demand forecasting, fraud and document intelligence that shorten time to first production result.", [
    T("Churn analysis", "Customer retention starter."),
    T("Demand forecasting", "Time-series planning."),
    T("Fraud detection", "Event scoring patterns."),
    T("Document Q&A", "Grounded retrieval and answers."),
  ], ["Create account", "/signup"]),

  /* ───────── Resources ───────── */
  training: P("resource", "Training", "Role-based courses that equip data, engineering and AI teams to run DataFoundry in production.", [
    T("Fundamentals", "Data, SQL and the workspace."),
    T("Data engineering", "Pipelines and quality."),
    T("Applied AI", "Agents and evaluation."),
    T("Admin", "Governance and security."),
  ], ["Create account", "/signup"]),
  certification: P("resource", "Certification", "Role-based certification that validates the skills your organization depends on, from core platform to advanced AI and governance.", [
    T("Associate", "Core platform skills."),
    T("Professional", "Advanced design and operations."),
    T("Specialty", "AI, governance or engineering tracks."),
    T("Badges", "Share verified credentials."),
  ], ["Create account", "/signup"]),
  "free-edition": P("resource", "Free edition", "Evaluate DataFoundry on your own data. Starter AI credits and a full workspace let your team verify results before committing budget.", [
    T("No credit card", "Sign up and start."),
    T("Starter credits", "Try AI features."),
    T("Real tools", "Datasets, Genie and dashboards."),
    T("Upgrade anytime", "Keep your work when you grow."),
  ], ["Create account", "/signup"]),
  university: P("resource", "University alliance", "Programs that supply curriculum, workspaces and industry access to institutions training the next generation of data and AI operators.", [
    T("Curriculum", "Course material for data and AI."),
    T("Workspaces", "Classroom access for students."),
    T("Events", "Guest sessions and hackathons."),
    T("Careers", "Pathways to industry."),
  ], ["Create account", "/signup"]),
  summit: P("resource", "Data + AI Summit", "Our flagship gathering for data and AI leaders: product direction, customer results and technical depth in one program.", [
    T("Keynotes", "Product direction and customer stories."),
    T("Sessions", "Technical deep dives."),
    T("Training", "Hands-on workshops."),
    T("Networking", "Meet peers and partners."),
  ], ["Create account", "/signup"]),
  "world-tour": P("resource", "World tour", "Regional executive and practitioner events with live demonstrations, customer sessions and roadmap briefings.", [
    T("One-day format", "Talks, demos and labs."),
    T("Local speakers", "Practitioners from your region."),
    T("Roadmap", "Hear what is shipping next."),
    T("Community", "Meet others building in your area."),
  ], ["Create account", "/signup"]),
  events: P("resource", "Event calendar", "Webinars, workshops and conferences for data and AI leaders, with recordings available on demand.", [
    T("Webinars", "Live product walkthroughs."),
    T("Workshops", "Hands-on labs."),
    T("Conferences", "Summit and regional events."),
    T("On demand", "Recordings after the event."),
  ], ["Create account", "/signup"]),
  blog: P("resource", "Blog", "Engineering, product and operator insight on building profitable data and AI systems.", [
    T("Engineering", "How the platform works."),
    T("Product", "What is new."),
    T("Best practices", "Patterns that scale."),
    T("Community", "Stories from users."),
  ], ["Create account", "/signup"]),
  "ai-blog": P("resource", "AI blog", "Technical notes on evaluating, governing and scaling AI in production, from measurement methods to cost control.", [
    T("Evaluation", "Measuring quality."),
    T("Agents", "Design patterns."),
    T("Cost", "Controlling spend."),
    T("Safety", "Guardrails and review."),
  ], ["Create account", "/signup"]),
  podcast: P("resource", "Podcast", "Conversations with the operators and engineers who run data and AI at scale.", [
    T("Practitioner interviews", "How teams ship data products."),
    T("Tool deep dives", "Architectures in detail."),
    T("Career stories", "Paths into data and AI."),
    T("Listen anywhere", "Available on major platforms."),
  ], ["Create account", "/signup"]),
  support: P("resource", "Customer support", "Support matched to your plan, from community help to priority response for production workloads.", [
    T("Documentation", "Guides and references."),
    T("Community", "Ask other practitioners."),
    T("Starter support", "Community help."),
    T("Pro support", "Priority email response."),
  ], ["Create account", "/signup"]),
  docs: P("resource", "Documentation", "Guides, references and release notes for building and operating on DataFoundry, from first dataset to production agent.", [
    T("Quickstart", "Create an account, upload a dataset and ask a question."),
    T("Guides", "Pipelines, governance and AI."),
    T("API reference", "Programmatic access."),
    T("Release notes", "What changed and when."),
  ], ["Create account", "/signup"]),
  community: P("resource", "Community", "A network of data and AI practitioners sharing production patterns, questions and results.", [
    T("Q&A", "Get answers from practitioners."),
    T("Show and tell", "Share what you built."),
    T("User groups", "Meet locally and online."),
    T("Feedback", "Shape the roadmap."),
  ], ["Create account", "/signup"]),
  resources: P("resource", "Resource center", "Ebooks, reports, webinars and product tours for teams building an AI-native data foundation.", [
    T("Ebooks", "Guides to AI governance, lakehouse and more."),
    T("Webinars", "Recorded and live sessions."),
    T("Reports", "Industry research."),
    T("Demos", "Product tours."),
  ], ["Create account", "/signup"]),
  demos: P("resource", "Demo center", "See the platform analyze real datasets, build pipelines and answer executive questions, before your team commits.", [
    T("Product tours", "Guided walkthroughs."),
    T("Genie demo", "Ask questions about sample data."),
    T("Pipelines demo", "From raw files to clean tables."),
    T("Database demo", "Branching and restore."),
  ], ["Create account", "/signup"]),
  architectures: P("resource", "Architecture center", "Proven reference architectures for the lakehouse, real-time analytics, operational plus analytical workloads and AI applications.", [
    T("Lakehouse", "Bronze, silver and gold layers."),
    T("Real-time analytics", "Streaming to dashboards."),
    T("Operational + analytical", "One platform for apps and reports."),
    T("AI applications", "Grounded retrieval and agents."),
  ], ["Create account", "/signup"]),

  /* ───────── About ───────── */
  about: P("company", "Who we are", "We build the AI-native platform that turns company data into decisions, forecasts and automation. Our standard is measurable business outcomes.", [
    T("Mission", "Make governed data and AI accessible to every organization."),
    T("Open", "Open formats and standards by default."),
    T("Customer-first", "Real workflows over marketing claims."),
    T("Responsible", "Privacy and safety built in."),
  ], ["Create account", "/signup"]),
  team: P("company", "Our team", "Engineers, designers and data scientists building the AI engine for enterprise decisions.", [
    T("Engineering", "Platform and database."),
    T("Design", "Product experience."),
    T("Data and AI", "Research and evaluation."),
    T("Customer success", "Helping teams ship."),
  ], ["Create account", "/signup"]),
  careers: P("company", "Working at DataFoundry", "Join a team with high standards, real ownership and customers who depend on the work.", [
    T("Remote-friendly", "Work where you are most effective."),
    T("Learning", "Time to grow your craft."),
    T("Ownership", "Small teams with real responsibility."),
    T("Impact", "Ship features customers use."),
  ], ["Create account", "/signup"]),
  jobs: P("company", "Open jobs", "Open roles are published here as we hire across engineering, product and go-to-market.", [
    T("Engineering", "Backend, platform and data."),
    T("Product and design", "Product, UX and writing."),
    T("Go to market", "Sales engineering and success."),
    T("General application", "Tell us how you would contribute."),
  ], ["Create account", "/signup"]),
  awards: P("company", "Awards and recognition", "Independent evaluations and recognition will be listed here as they are earned.", [
    T("Analyst reports", "Independent evaluations."),
    T("Customer reviews", "Verified user feedback."),
    T("Industry awards", "Recognition for innovation."),
    T("Certifications", "Security and compliance attestations."),
  ], ["Create account", "/signup"]),
  newsroom: P("company", "Newsroom", "Company announcements, product releases and media resources.", [
    T("Press releases", "Company news."),
    T("Product updates", "Launches and releases."),
    T("Media kit", "Logos and brand guidelines."),
    T("Contact", "Request an interview."),
  ], ["Create account", "/signup"]),
  trust: P("company", "Security and trust", "Security is built into the architecture: row-level data isolation, managed authentication, server-side secrets and schema-validated AI output.", [
    T("Data isolation", "Row-level security ensures users only access their own records."),
    T("Authentication", "Managed sign-in with session handling."),
    T("Secrets", "API keys stay on the server and are never shipped to the browser."),
    T("Validated AI output", "Responses are checked against a schema before use."),
  ], ["Create account", "/signup"]),
  contact: P("company", "Contact us", "Reach the team for enterprise evaluation, partnerships and support questions.", [
    T("Try the product", "The fastest way to evaluate is to create a free account."),
    T("Plans and billing", "See pricing or upgrade from the Billing page."),
    T("Partnerships", "Review the partner programme."),
    T("Support", "Plan-based support options are listed on the support page."),
  ], ["Create account", "/signup"]),
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
