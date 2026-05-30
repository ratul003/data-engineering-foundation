import type { ReactNode } from "react";

// ── Shared primitive components ─────────────────────────────────────────────

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span
      style={{ color: "#10b981", borderColor: "#10b98133" }}
      className="inline-block text-xs font-semibold tracking-widest uppercase border rounded-full px-3 py-1 mb-4"
    >
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
      {children}
    </h2>
  );
}

function SectionDescription({ children }: { children: ReactNode }) {
  return <p className="text-slate-400 text-sm leading-relaxed">{children}</p>;
}

function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      style={{ background: "#111118", borderColor: "#1e1e2e" }}
      className={`rounded-xl border p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function Mono({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-sm" style={{ color: "#10b981" }}>
      {children}
    </span>
  );
}

// ── Data ────────────────────────────────────────────────────────────────────

const eltServices = [
  {
    name: "Segment",
    queries: "696k / 7d",
    description: "Real-time product event streams, JS SDK, server-side track",
    badge: "Primary events bus",
  },
  {
    name: "Fivetran",
    queries: "684k / 7d",
    description: "SaaS connectors — Salesforce, Zendesk, Stripe, Jira, HubSpot",
    badge: "SaaS extracts",
  },
  {
    name: "dbt",
    queries: "488k / 7d",
    description: "Transformation models run against Snowflake compute",
    badge: "Transformation layer",
  },
  {
    name: "Airbyte",
    queries: "21k / 7d",
    description: "Selected source connectors for supplemental data streams",
    badge: "Supplemental",
  },
];

const starSchemaRows = [
  {
    table: "DIM_EXPERIMENT",
    type: "Dimension",
    rows: "3.6M",
    description: "All experiments, flags, and feature rollouts",
  },
  {
    table: "FACT_EXPERIMENT_RESULTS_VARIATION_METRICS",
    type: "Fact",
    rows: "9.3M",
    description: "Per-variation metric outcomes and statistical results",
  },
  {
    table: "DIM_ACCOUNT",
    type: "Dimension",
    rows: "150k",
    description: "Account master with plan, tier, and lifecycle attributes",
  },
  {
    table: "DIM_CUSTOMER_USERS",
    type: "Dimension",
    rows: "8M",
    description: "Customer-level user profiles and identity graph",
  },
  {
    table: "FACT_DAILY_IMPRESSIONS_ROLLUP",
    type: "Fact",
    rows: "58M",
    description: "Pre-aggregated daily impression rollup for fast queries",
  },
];

const techStack = [
  "Snowflake",
  "dbt",
  "Segment",
  "Fivetran",
  "Airbyte",
  "Python",
  "Snowpipe",
  "PowerBI",
  "Looker",
];

// ── Page ────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div
      style={{ background: "#0a0a0f", color: "#e2e8f0" }}
      className="min-h-screen font-sans"
    >
      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav
        style={{
          background: "#0a0a0fcc",
          borderColor: "#1e1e2e",
          backdropFilter: "blur(12px)",
        }}
        className="sticky top-0 z-50 border-b"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              style={{ background: "#10b981", borderRadius: "6px" }}
              className="w-7 h-7 flex items-center justify-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2zM8 8h4v4H8z"
                  fill="white"
                />
              </svg>
            </div>
            <span
              className="font-semibold text-sm tracking-tight"
              style={{ color: "#f1f5f9" }}
            >
              data-engineering-foundation
            </span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:block">
            Wahid Tawsif Ratul&nbsp;&middot;&nbsp;Product Analytics Engineer
          </span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-20 pb-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <div className="max-w-3xl">
            <div
              style={{ color: "#10b981", borderColor: "#10b98133" }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border rounded-full px-3 py-1 mb-6"
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#10b981" }}
              />
              Case Study — Optimizely
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Data Engineering
              <br />
              <span style={{ color: "#10b981" }}>Foundation</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl">
              145 billion rows. 6.17 TB. 1.9 million ELT queries per week. The
              infrastructure behind Optimizely&apos;s product analytics platform — a
              three-layer Snowflake architecture with four parallel ELT services, a
              dbt transformation suite for Opal billing models, and a reverse ETL
              pattern to operationalize derived insights.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { value: "145.7B", label: "Rows" },
                { value: "6.17 TB", label: "Storage" },
                { value: "1.9M", label: "Queries/Week" },
                { value: "59K", label: "Tables" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{ background: "#10b98115", borderColor: "#10b98133" }}
                  className="border rounded-xl px-5 py-3 text-center"
                >
                  <div
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: "#10b981" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Architecture ──────────────────────────────────────────────── */}
        <section className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>Architecture</SectionLabel>
          <SectionHeading>Three-Layer Snowflake Architecture</SectionHeading>
          <SectionDescription>
            A medallion-style architecture across 16 databases, 2,330 schemas on
            account OPTIMIZELY_DATA_SERVICES. Immutable raw extracts flow into
            dbt-managed transformations before landing in curated reporting marts.
          </SectionDescription>

          {/* Architecture diagram */}
          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[680px]">
              {/* Row labels + flow boxes */}
              <div className="flex items-stretch gap-3">
                {/* Column 1 – Ingestion */}
                <div
                  style={{ background: "#16161f", borderColor: "#1e1e2e" }}
                  className="border rounded-xl p-4 flex-1 flex flex-col gap-2"
                >
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
                    Ingestion
                  </div>
                  {[
                    { name: "Segment", sub: "696k q/7d" },
                    { name: "Fivetran", sub: "684k q/7d" },
                    { name: "Airbyte", sub: "21k q/7d" },
                    { name: "Snowpipe", sub: "streaming" },
                  ].map((s) => (
                    <div
                      key={s.name}
                      style={{ background: "#0a0a0f", borderColor: "#1e1e2e" }}
                      className="border rounded-lg px-3 py-2"
                    >
                      <div className="text-sm font-semibold text-white">
                        {s.name}
                      </div>
                      <div className="text-xs text-slate-500">{s.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center">
                  <svg
                    width="28"
                    height="16"
                    viewBox="0 0 28 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8h24M20 4l4 4-4 4"
                      stroke="#10b981"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Column 2 – RAW / VAULT */}
                <div
                  style={{ background: "#16161f", borderColor: "#1e1e2e" }}
                  className="border rounded-xl p-4 flex-1 flex flex-col"
                >
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                    Layer 1 — Raw
                  </div>
                  <div
                    style={{ borderColor: "#10b98133" }}
                    className="border rounded-lg p-3 flex-1"
                  >
                    <div
                      className="font-bold text-sm mb-1"
                      style={{ color: "#10b981" }}
                    >
                      RAW / VAULT
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed">
                      Immutable source extracts. Append-only. No business logic.
                      Source of truth for all downstream models.
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center">
                  <svg
                    width="28"
                    height="16"
                    viewBox="0 0 28 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8h24M20 4l4 4-4 4"
                      stroke="#10b981"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Column 3 – TRANSFORM */}
                <div
                  style={{ background: "#16161f", borderColor: "#1e1e2e" }}
                  className="border rounded-xl p-4 flex-1 flex flex-col gap-2"
                >
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
                    Layer 2 — Transform
                  </div>
                  {[
                    { name: "stg_*", sub: "Staging models" },
                    { name: "int_*", sub: "Intermediate models" },
                    { name: "Kimball Star", sub: "53 tables" },
                  ].map((m) => (
                    <div
                      key={m.name}
                      style={{ background: "#0a0a0f", borderColor: "#1e1e2e" }}
                      className="border rounded-lg px-3 py-2"
                    >
                      <div className="text-sm font-semibold" style={{ color: "#10b981" }}>
                        {m.name}
                      </div>
                      <div className="text-xs text-slate-500">{m.sub}</div>
                    </div>
                  ))}
                  <div className="text-xs text-slate-500 mt-1">
                    dbt 488k q/7d
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center">
                  <svg
                    width="28"
                    height="16"
                    viewBox="0 0 28 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8h24M20 4l4 4-4 4"
                      stroke="#10b981"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Column 4 – REPORTING */}
                <div
                  style={{ background: "#16161f", borderColor: "#1e1e2e" }}
                  className="border rounded-xl p-4 flex-1 flex flex-col gap-2"
                >
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
                    Layer 3 — Reporting
                  </div>
                  {[
                    { name: "WELCOME", sub: "28 GB" },
                    { name: "OPTI_APPLICATION", sub: "28 GB" },
                    { name: "OPAL", sub: "39M rows" },
                  ].map((m) => (
                    <div
                      key={m.name}
                      style={{ background: "#0a0a0f", borderColor: "#1e1e2e" }}
                      className="border rounded-lg px-3 py-2"
                    >
                      <div className="text-sm font-semibold text-white">
                        {m.name}
                      </div>
                      <div className="text-xs text-slate-500">{m.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center">
                  <svg
                    width="28"
                    height="16"
                    viewBox="0 0 28 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8h24M20 4l4 4-4 4"
                      stroke="#10b981"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Column 5 – Egress */}
                <div
                  style={{ background: "#16161f", borderColor: "#1e1e2e" }}
                  className="border rounded-xl p-4 flex-1 flex flex-col gap-2"
                >
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
                    Egress
                  </div>
                  {[
                    { name: "Private Share", sub: "PowerBI / Looker" },
                    { name: "Reverse ETL", sub: "→ Segment" },
                    { name: "External", sub: "Customer data" },
                  ].map((e) => (
                    <div
                      key={e.name}
                      style={{ background: "#0a0a0f", borderColor: "#1e1e2e" }}
                      className="border rounded-lg px-3 py-2"
                    >
                      <div className="text-sm font-semibold text-white">
                        {e.name}
                      </div>
                      <div className="text-xs text-slate-500">{e.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ELT Scale ─────────────────────────────────────────────────── */}
        <section className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>ELT Scale</SectionLabel>
          <SectionHeading>Four Parallel Ingestion Services</SectionHeading>
          <SectionDescription>
            1.9 million Snowflake queries per week across four ELT services.
            Each service targets a specific data domain and runs concurrently
            against dedicated virtual warehouses.
          </SectionDescription>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {eltServices.map((svc) => (
              <Card key={svc.name}>
                <div className="flex items-start justify-between mb-4">
                  <div
                    style={{ background: "#10b98115", color: "#10b981" }}
                    className="text-xs font-semibold px-2 py-1 rounded-md"
                  >
                    {svc.badge}
                  </div>
                </div>
                <div className="text-xl font-bold text-white mb-0.5">
                  {svc.name}
                </div>
                <div
                  className="text-2xl font-bold tracking-tight mb-3"
                  style={{ color: "#10b981" }}
                >
                  {svc.queries}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {svc.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Total bar */}
          <div
            style={{ background: "#10b98110", borderColor: "#10b98133" }}
            className="mt-6 border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div>
              <div className="text-sm text-slate-400 mb-1">
                Total weekly Snowflake query volume
              </div>
              <div className="text-3xl font-bold text-white tracking-tight">
                1,889,000{" "}
                <span className="text-base font-normal text-slate-400">
                  queries / 7 days
                </span>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["696k Segment", "684k Fivetran", "488k dbt", "21k Airbyte"].map(
                (label) => (
                  <span
                    key={label}
                    style={{ background: "#0a0a0f", borderColor: "#1e1e2e", color: "#10b981" }}
                    className="text-xs border rounded-full px-3 py-1 font-mono font-semibold"
                  >
                    {label}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── dbt Transformation Suite ──────────────────────────────────── */}
        <section className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>dbt Transformation Suite</SectionLabel>
          <SectionHeading>Opal Billing Model DAG</SectionHeading>
          <SectionDescription>
            A single dbt DAG powers Finance, Customer Success, and Product
            simultaneously. Models are layered from raw Segment events through
            staging and intermediate transforms into four final billing models
            that publish to REPORTING.OPAL.
          </SectionDescription>

          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[700px] flex flex-col gap-4">
              {/* Source */}
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2">
                  Source
                </div>
                <div
                  style={{ background: "#16161f", borderColor: "#1e1e2e" }}
                  className="border rounded-xl p-4 inline-flex items-center gap-3"
                >
                  <Mono>SEGMENT.OPAL_APP.*</Mono>
                  <span className="text-xs text-slate-500">
                    raw event tables
                  </span>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex items-center gap-2 pl-4">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  <path
                    d="M6 0v20M2 16l4 4 4-4"
                    stroke="#10b98155"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Staging models */}
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2">
                  Staging Layer
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "stg_opal_events",
                    "stg_opal_accounts",
                    "stg_opal_credits",
                    "stg_opal_usage",
                  ].map((m) => (
                    <div
                      key={m}
                      style={{ background: "#0a0a0f", borderColor: "#1e1e2e" }}
                      className="border rounded-lg px-3 py-2"
                    >
                      <Mono>{m}</Mono>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex items-center gap-2 pl-4">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  <path
                    d="M6 0v20M2 16l4 4 4-4"
                    stroke="#10b98155"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Intermediate models */}
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2">
                  Intermediate Layer
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "int_opal_daily_rollup",
                    "int_opal_account_balances",
                    "int_opal_overage_calc",
                  ].map((m) => (
                    <div
                      key={m}
                      style={{ background: "#0a0a0f", borderColor: "#1e1e2e" }}
                      className="border rounded-lg px-3 py-2"
                    >
                      <Mono>{m}</Mono>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex items-center gap-2 pl-4">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  <path
                    d="M6 0v20M2 16l4 4 4-4"
                    stroke="#10b98155"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Final models */}
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2">
                  Final Models → REPORTING.OPAL.*
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    {
                      name: "opal_fine_grained_usage",
                      desc: "Row-level usage events",
                    },
                    {
                      name: "opal_daily_account_usage",
                      desc: "Daily rollup per account",
                    },
                    {
                      name: "opal_customer_balances",
                      desc: "Credit balance snapshots",
                    },
                    {
                      name: "opal_customer_overages",
                      desc: "Overage detection & amounts",
                    },
                  ].map((m) => (
                    <div
                      key={m.name}
                      style={{
                        background: "#10b98110",
                        borderColor: "#10b98133",
                      }}
                      className="border rounded-xl p-4"
                    >
                      <div
                        className="font-mono text-xs font-semibold mb-1 leading-snug"
                        style={{ color: "#10b981" }}
                      >
                        {m.name}
                      </div>
                      <div className="text-xs text-slate-400">{m.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex items-center gap-2 pl-4">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  <path
                    d="M6 0v20M2 16l4 4 4-4"
                    stroke="#10b98155"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Consumers */}
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2">
                  Consumers — one DAG, three teams
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { team: "Finance", use: "Billing & invoicing" },
                    { team: "Customer Success", use: "Health scores & churn signals" },
                    { team: "Product", use: "Usage dashboards & feature adoption" },
                  ].map((c) => (
                    <div
                      key={c.team}
                      style={{ background: "#16161f", borderColor: "#1e1e2e" }}
                      className="border rounded-xl px-5 py-3 min-w-[180px]"
                    >
                      <div className="font-semibold text-sm text-white mb-0.5">
                        {c.team}
                      </div>
                      <div className="text-xs text-slate-400">{c.use}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Kimball Star Schema ───────────────────────────────────────── */}
        <section className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>Data Modeling</SectionLabel>
          <SectionHeading>Kimball Star Schema</SectionHeading>
          <SectionDescription>
            53-table Kimball-style star schema in the TRANSFORM layer. Conformed
            dimensions shared across fact tables enable cross-domain analysis —
            experiments, impressions, accounts, and users in a single semantic
            layer.
          </SectionDescription>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderColor: "#1e1e2e" }} className="border-b">
                  <th className="text-left py-3 pr-6 font-semibold text-slate-400 text-xs uppercase tracking-wider">
                    Table
                  </th>
                  <th className="text-left py-3 pr-6 font-semibold text-slate-400 text-xs uppercase tracking-wider">
                    Type
                  </th>
                  <th className="text-left py-3 pr-6 font-semibold text-slate-400 text-xs uppercase tracking-wider">
                    Row Count
                  </th>
                  <th className="text-left py-3 font-semibold text-slate-400 text-xs uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {starSchemaRows.map((row, i) => (
                  <tr
                    key={row.table}
                    style={{ borderColor: "#1e1e2e" }}
                    className={`border-b ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}
                  >
                    <td className="py-3.5 pr-6">
                      <Mono>{row.table}</Mono>
                    </td>
                    <td className="py-3.5 pr-6">
                      <span
                        style={
                          row.type === "Fact"
                            ? {
                                background: "#10b98115",
                                color: "#10b981",
                                borderColor: "#10b98133",
                              }
                            : {
                                background: "#6366f115",
                                color: "#818cf8",
                                borderColor: "#6366f133",
                              }
                        }
                        className="text-xs font-semibold border rounded-full px-2.5 py-0.5"
                      >
                        {row.type}
                      </span>
                    </td>
                    <td className="py-3.5 pr-6">
                      <span className="font-semibold text-white">{row.rows}</span>
                    </td>
                    <td className="py-3.5 text-slate-400 text-xs">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            53 total tables in the Kimball star schema. Dimensions are slowly changing (SCD Type 2) where applicable.
          </div>
        </section>

        {/* ── Publishing & Egress ───────────────────────────────────────── */}
        <section className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>Publishing & Egress</SectionLabel>
          <SectionHeading>Operationalizing Derived Data</SectionHeading>
          <SectionDescription>
            A stored procedure pattern controls promotion from internal
            development to public-facing shares. Reverse ETL closes the loop —
            enriched Snowflake data flows back into Segment for downstream
            activation in Salesforce and marketing tools.
          </SectionDescription>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Publish pattern */}
            <Card>
              <div
                style={{ color: "#10b981" }}
                className="text-xs font-semibold uppercase tracking-widest mb-4"
              >
                Forward Path — Snowflake Private Share
              </div>

              <div className="flex flex-col gap-3">
                {[
                  {
                    step: "01",
                    label: "BILLING_AGGREGATION.PRODUCTION",
                    sub: "Internal production schema",
                  },
                  {
                    step: "02",
                    label: "PUBLISH_TO_PUBLIC stored proc",
                    sub: "Atomic promotion — swap dev → public",
                  },
                  {
                    step: "03",
                    label: "Snowflake Private Share",
                    sub: "Zero-copy share to consumers",
                  },
                  {
                    step: "04",
                    label: "Downstream consumers",
                    sub: "PowerBI · Looker · OA · External customers",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span
                      className="text-xs font-mono font-bold mt-0.5"
                      style={{ color: "#10b981" }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-400">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Reverse ETL pattern */}
            <Card>
              <div
                style={{ color: "#10b981" }}
                className="text-xs font-semibold uppercase tracking-widest mb-4"
              >
                Reverse ETL — Snowflake → Segment → Activation
              </div>

              <div className="flex flex-col gap-3 mb-6">
                {[
                  {
                    step: "01",
                    label: "SEGMENT.__SEGMENT_REVERSE_ETL",
                    sub: "12 tables · 21.5M rows · enriched profiles",
                  },
                  {
                    step: "02",
                    label: "Segment Reverse ETL sync",
                    sub: "Computed traits & audiences from Snowflake",
                  },
                  {
                    step: "03",
                    label: "Salesforce",
                    sub: "Account health, usage flags, expansion signals",
                  },
                  {
                    step: "04",
                    label: "Marketing automation",
                    sub: "Lifecycle campaigns triggered by product usage",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span
                      className="text-xs font-mono font-bold mt-0.5"
                      style={{ color: "#10b981" }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-400">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{ background: "#10b98110", borderColor: "#10b98133" }}
                className="border rounded-lg p-3 text-xs text-slate-400"
              >
                <span style={{ color: "#10b981" }} className="font-semibold">
                  21.5M rows
                </span>{" "}
                of enriched Snowflake data continuously synced back into Segment
                for real-time customer activation.
              </div>
            </Card>
          </div>
        </section>

        {/* ── Tech Stack ────────────────────────────────────────────────── */}
        <section className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>Technology</SectionLabel>
          <SectionHeading>Tech Stack</SectionHeading>
          <SectionDescription>
            Purpose-built stack across cloud data warehouse, orchestration,
            transformation, and ingestion layers.
          </SectionDescription>

          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech}
                style={{ background: "#16161f", borderColor: "#1e1e2e" }}
                className="border rounded-xl px-5 py-3 text-sm font-semibold text-white hover:border-emerald-800 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Snowflake account detail */}
          <div
            style={{ background: "#16161f", borderColor: "#1e1e2e" }}
            className="mt-8 border rounded-xl p-6"
          >
            <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-4">
              Snowflake Account — OPTIMIZELY_DATA_SERVICES
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "Databases", value: "16" },
                { label: "Schemas", value: "2,330" },
                { label: "Tables", value: "59,081" },
                { label: "Total Rows", value: "145.7B" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: "#10b981" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────────────────── */}
        <footer className="pt-16 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-white mb-0.5">
              Wahid Tawsif Ratul
            </div>
            <div className="text-xs text-slate-500">
              Product Analytics Engineer · Optimizely
            </div>
          </div>
          <a
            href="https://github.com/ratul003/data-engineering-foundation"
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderColor: "#1e1e2e" }}
            className="flex items-center gap-2 border rounded-lg px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-emerald-700 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </footer>
      </main>
    </div>
  );
}
