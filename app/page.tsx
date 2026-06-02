import React from "react";
import type { ReactNode } from "react";
import PortfolioLinks from "./PortfolioLinks";

// ── Primitives ───────────────────────────────────────────────────────────────

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
      className={`rounded-xl border p-6 card-hover ${className}`}
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

function ChapterBadge({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span
        style={{
          background: "#10b98118",
          color: "#10b981",
          borderColor: "#10b98135",
          fontFamily: "monospace",
        }}
        className="text-xs font-bold px-3 py-1.5 rounded border tracking-widest"
      >
        Ch{number}
      </span>
      <div
        className="h-px w-16 flex-shrink-0"
        style={{
          background:
            "linear-gradient(90deg, #10b98155, transparent)",
        }}
      />
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

function ChapterTransition({ from, to }: { from: string; to: string }) {
  return (
    <div className="py-10 flex items-center gap-4">
      <div
        className="h-px flex-1"
        style={{
          background: "linear-gradient(90deg, transparent, #10b98133)",
        }}
      />
      <div
        style={{ background: "#10b98110", borderColor: "#10b98133" }}
        className="border rounded-xl px-6 py-3 flex items-center gap-4 flex-shrink-0"
      >
        <span className="text-xs font-semibold text-slate-400">{from}</span>
        <svg
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
          className="flex-shrink-0"
        >
          <path
            d="M0 6h18M14 2l4 4-4 4"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="text-xs font-semibold"
          style={{ color: "#10b981" }}
        >
          {to}
        </span>
      </div>
      <div
        className="h-px flex-1"
        style={{
          background: "linear-gradient(90deg, #10b98133, transparent)",
        }}
      />
    </div>
  );
}

// ── Tool logos ───────────────────────────────────────────────────────────────

const DE_TOOLS: Record<
  string,
  { color: string; category: string; svg: React.ReactNode }
> = {
  Snowflake: {
    color: "#29B5E8",
    category: "Data Warehouse",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <line x1="12" y1="2" x2="12" y2="22" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="12" x2="22" y2="12" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round" />
        <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round" />
        <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.5" fill="#29B5E8" />
      </svg>
    ),
  },
  dbt: {
    color: "#FF694B",
    category: "Transformation",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#FF694B" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M4 7L12 12L20 7" stroke="#FF694B" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
        <line x1="12" y1="12" x2="12" y2="22" stroke="#FF694B" strokeWidth="1.8" opacity="0.5" />
      </svg>
    ),
  },
  Segment: {
    color: "#52BD94",
    category: "Event Collection",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M18 7H10a5 5 0 0 0 0 10h3" stroke="#52BD94" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 17h8a5 5 0 0 0 0-10H9" stroke="#52BD94" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <circle cx="18" cy="7" r="2" fill="#52BD94" />
        <circle cx="6" cy="17" r="2" fill="#52BD94" opacity="0.55" />
      </svg>
    ),
  },
  Fivetran: {
    color: "#0073FF",
    category: "SaaS Connectors",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <circle cx="12" cy="4" r="2.5" fill="#0073FF" />
        <circle cx="4" cy="20" r="2.5" fill="#0073FF" opacity="0.6" />
        <circle cx="20" cy="20" r="2.5" fill="#0073FF" opacity="0.6" />
        <path d="M12 6.5L5 17.8M12 6.5L19 17.8M6.5 20h11" stroke="#0073FF" strokeWidth="1.5" />
      </svg>
    ),
  },
  Airbyte: {
    color: "#615EFF",
    category: "Data Ingestion",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M12 3L20 19H4L12 3Z" stroke="#615EFF" strokeWidth="1.8" strokeLinejoin="round" fill="#615EFF" fillOpacity="0.12" />
        <line x1="8.5" y1="15" x2="15.5" y2="15" stroke="#615EFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  Python: {
    color: "#3776AB",
    category: "Backend / Scripting",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M12 2C9 2 8 3.5 8 5v3h4.5v1H5.5C3.5 9 2 10.5 2 13s1.4 4 3.5 4H7v-2.5C7 12.5 8.5 11 11 11h6c2 0 3-1.2 3-3V5c0-2-1.5-3-8-3Z" fill="#3776AB" fillOpacity="0.8" />
        <circle cx="10" cy="5.5" r="1" fill="white" />
        <path d="M12 22c3 0 4-1.5 4-3v-3h-4.5v-1h6.5c2 0 3.5-1.5 3.5-4s-1.4-4-3.5-4H17v2.5C17 11.5 15.5 13 13 13H7c-2 0-3 1.2-3 3v3c0 2 1.5 3 8 3Z" fill="#FFD43B" fillOpacity="0.9" />
        <circle cx="14" cy="18.5" r="1" fill="#3776AB" />
      </svg>
    ),
  },
  Snowpipe: {
    color: "#10b981",
    category: "Streaming Ingest",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M12 3v18M5 8l7-5 7 5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 12l7 3 7-3M5 16l7 3 7-3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  PowerBI: {
    color: "#F2C811",
    category: "Business Intelligence",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <rect x="14" y="4" width="6" height="16" rx="1.5" fill="#F2C811" />
        <rect x="8" y="9" width="5" height="11" rx="1.5" fill="#F2C811" opacity="0.7" />
        <rect x="2" y="14" width="5" height="6" rx="1.5" fill="#F2C811" opacity="0.4" />
      </svg>
    ),
  },
};

function DEToolCard({ name }: { name: string }) {
  const t = DE_TOOLS[name];
  if (!t)
    return (
      <div
        style={{
          background: "#16161f",
          border: "1px solid #1e1e2e",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#f1f5f9" }}>
          {name}
        </div>
      </div>
    );
  return (
    <div
      className="card-hover"
      style={{
        background: `${t.color}10`,
        border: `1px solid ${t.color}28`,
        borderRadius: "12px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div style={{ width: "28px", height: "28px" }}>{t.svg}</div>
      <div>
        <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#f1f5f9" }}>
          {name}
        </div>
        <div
          style={{
            fontSize: "0.65rem",
            fontWeight: 600,
            textTransform: "uppercase" as const,
            letterSpacing: "0.08em",
            color: t.color,
            marginTop: "3px",
          }}
        >
          {t.category}
        </div>
      </div>
    </div>
  );
}

const techStack = [
  "Snowflake",
  "dbt",
  "Segment",
  "Fivetran",
  "Airbyte",
  "Python",
  "Snowpipe",
  "PowerBI",
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div
      style={{ background: "#0a0a0f", color: "#e2e8f0" }}
      className="min-h-screen font-sans"
    >
      {/* ── Nav ──────────────────────────────────────────────────────────── */}
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
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
              Data Engineering Foundation
            </span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:block">
            Wahid Tawsif Ratul&nbsp;&middot;&nbsp;Product Analytics Engineer
          </span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section
          className="pt-20 pb-16 border-b hero-section"
          style={{ borderColor: "#1e1e2e" }}
        >
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
              <span className="gradient-heading">Foundation</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              I built Optimizely&apos;s product analytics data platform from the ground up — the
              infrastructure that unified eight disconnected products into a single intelligence
              layer. Three Snowflake layers, four parallel ELT services, a dbt transformation
              suite, and a Reverse ETL loop that puts warehouse-computed signals back into the
              tools CS and marketing actually use.
            </p>

            {/* Personal callout */}
            <div
              style={{
                background: "#10b98108",
                borderColor: "#10b98128",
                borderLeft: "3px solid #10b981",
              }}
              className="border rounded-r-xl px-5 py-4 mb-10 max-w-2xl"
            >
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#10b981" }}
              >
                My role
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sole analytics engineer on the platform. I designed the three-layer warehouse
                architecture, negotiated the Segment tracking contract with eight product
                engineering teams, built the dbt model suite, and operationalized the Reverse
                ETL pattern. Every layer here was designed, built, and maintained by me.
              </p>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { value: "3-Layer", label: "Snowflake Architecture" },
                { value: "4", label: "Parallel ELT Services" },
                { value: "8", label: "Products Instrumented" },
                { value: "Kimball", label: "Dimensional Model" },
                { value: "Reverse ETL", label: "Activation Pattern" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "#10b98115",
                    borderColor: "#10b98133",
                  }}
                  className="border rounded-xl px-5 py-3 text-center stat-glow"
                >
                  <div
                    className="text-xl font-bold tracking-tight"
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

        {/* ── Story Arc ────────────────────────────────────────────────── */}
        <section className="py-8 border-b" style={{ borderColor: "#1e1e2e" }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest flex-shrink-0">
              Story Arc
            </span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              {[
                {
                  ch: "01",
                  label: "The Problem",
                  href: "#problem",
                  desc: "No foundation, no identity",
                },
                {
                  ch: "02",
                  label: "The Platform",
                  href: "#architecture",
                  desc: "Design, build, instrument",
                },
                {
                  ch: "03",
                  label: "The Impact",
                  href: "#quality",
                  desc: "Observe, activate, measure",
                },
              ].map((chapter, i) => (
                <React.Fragment key={chapter.ch}>
                  <a
                    href={chapter.href}
                    style={{ textDecoration: "none" }}
                    className="flex items-center"
                  >
                    <div
                      style={{
                        background: "#10b98115",
                        borderColor: "#10b98133",
                      }}
                      className="border rounded-lg px-4 py-2.5 flex items-center gap-3 hover:border-emerald-500 transition-colors"
                    >
                      <span
                        style={{
                          color: "#10b981",
                          fontFamily: "monospace",
                        }}
                        className="text-xs font-bold"
                      >
                        Ch{chapter.ch}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-white leading-tight">
                          {chapter.label}
                        </div>
                        <div className="text-xs text-slate-500">
                          {chapter.desc}
                        </div>
                      </div>
                    </div>
                  </a>
                  {i < 2 && (
                    <svg
                      className="hidden sm:block mx-2 flex-shrink-0"
                      width="18"
                      height="10"
                      viewBox="0 0 18 10"
                      fill="none"
                    >
                      <path
                        d="M0 5h14M11 2l3 3-3 3"
                        stroke="#10b98155"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ch01: The Problem ────────────────────────────────────────── */}
        <section
          id="problem"
          className="py-16 border-b"
          style={{ borderColor: "#1e1e2e" }}
        >
          <ChapterBadge number="01" label="The Problem" />
          <SectionLabel>Context</SectionLabel>
          <SectionHeading>Starting from Zero</SectionHeading>
          <SectionDescription>
            When I took on the analytics function at Optimizely, eight products were generating
            data — but none of it flowed into a shared foundation. There was no unified warehouse,
            no cross-product identity, and no way to answer questions like &ldquo;how many accounts
            use more than two products&rdquo; without manual spreadsheet work. Everything that
            follows is what I built to fix that.
          </SectionDescription>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "No cross-product identity",
                body: "Each product tracked users with its own identifier. There was no way to join a user in Experimentation to the same user in Content Management — they were different rows in different systems with no bridge between them.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="8" cy="12" r="4" stroke="#f43f5e" strokeWidth="1.8" />
                    <circle cx="16" cy="12" r="4" stroke="#f43f5e" strokeWidth="1.8" />
                    <line x1="12" y1="8" x2="12" y2="16" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" />
                  </svg>
                ),
                accent: "#f43f5e",
              },
              {
                title: "Fragmented ingestion",
                body: "Every product team solved the data loading problem differently — or didn't solve it at all. Some products had partial Segment instrumentation. Others had no event tracking. There was no standard, no contract, no shared platform.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="#f59e0b" strokeWidth="1.8" />
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="#f59e0b" strokeWidth="1.8" opacity="0.6" />
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="#f59e0b" strokeWidth="1.8" opacity="0.4" />
                    <path d="M17.5 14v7M14 17.5h7" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
                  </svg>
                ),
                accent: "#f59e0b",
              },
              {
                title: "Reporting without a foundation",
                body: "Product managers built dashboards on ad-hoc extracts and spreadsheet joins. There was no dimensional model, no conformed dimensions, and no way to tie usage data to ARR. Every report was a one-off rebuild.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#64748b" strokeWidth="1.8" />
                    <path d="M3 9h18M9 9v12" stroke="#64748b" strokeWidth="1.5" />
                    <path d="M14 14l-3 3 3 3" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
                  </svg>
                ),
                accent: "#64748b",
              },
            ].map(({ title, body, icon, accent }) => (
              <div
                key={title}
                className="card-hover"
                style={{
                  background: "#111118",
                  border: "1px solid #1e1e2e",
                  borderRadius: "14px",
                  padding: "22px",
                }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    style={{
                      background: `${accent}12`,
                      borderRadius: "8px",
                      padding: "8px",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "#f1f5f9",
                      lineHeight: 1.3,
                      marginTop: "6px",
                    }}
                  >
                    {title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#94a3b8",
                    lineHeight: 1.75,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ChapterTransition from="The Problem" to="The Platform" />

        {/* ── Ch02: Architecture ───────────────────────────────────────── */}
        <section
          id="architecture"
          className="py-16 border-b"
          style={{ borderColor: "#1e1e2e" }}
        >
          <ChapterBadge number="02" label="The Platform" />
          <SectionLabel>Architecture</SectionLabel>
          <SectionHeading>Three-Layer Snowflake Architecture</SectionHeading>
          <SectionDescription>
            I designed a medallion-style architecture spanning three database layers. Immutable
            raw extracts flow into dbt-managed transformations before landing in curated reporting
            marts consumed by analytics and business intelligence tools. Each layer boundary is
            a contract — consumers never query across it.
          </SectionDescription>

          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[680px]">
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
                    { name: "Segment", sub: "Real-time events" },
                    { name: "Fivetran", sub: "SaaS connectors" },
                    { name: "Airbyte", sub: "Supplemental" },
                    { name: "Snowpipe", sub: "Streaming" },
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

                <div className="flex items-center">
                  <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
                    <path d="M0 8h24M20 4l4 4-4 4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Column 2 – RAW */}
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
                      Raw / Vault
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed">
                      Immutable source extracts. Append-only. No business logic.
                      Source of truth for all downstream models.
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
                    <path d="M0 8h24M20 4l4 4-4 4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                    { name: "Staging models", sub: "Source cleaning & typing" },
                    { name: "Intermediate models", sub: "Business logic layer" },
                    { name: "Kimball Star Schema", sub: "Dimensional models" },
                  ].map((m) => (
                    <div
                      key={m.name}
                      style={{ background: "#0a0a0f", borderColor: "#1e1e2e" }}
                      className="border rounded-lg px-3 py-2"
                    >
                      <div
                        className="text-sm font-semibold"
                        style={{ color: "#10b981" }}
                      >
                        {m.name}
                      </div>
                      <div className="text-xs text-slate-500">{m.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center">
                  <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
                    <path d="M0 8h24M20 4l4 4-4 4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                    { name: "Product Analytics", sub: "Usage & adoption marts" },
                    { name: "Application Metrics", sub: "Feature engagement" },
                    { name: "AI / Opal Billing", sub: "Usage & overage models" },
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

                <div className="flex items-center">
                  <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
                    <path d="M0 8h24M20 4l4 4-4 4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                    { name: "Private Share", sub: "PowerBI · OA · External" },
                    { name: "Reverse ETL", sub: "→ Segment → Salesforce" },
                    { name: "External Share", sub: "Customer data access" },
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

        {/* ── Identity Architecture ─────────────────────────────────────── */}
        <section
          id="identity"
          className="py-16 border-b"
          style={{ borderColor: "#1e1e2e" }}
        >
          <SectionLabel>Identity Architecture</SectionLabel>
          <SectionHeading>Cross-Product Identity Resolution</SectionHeading>
          <SectionDescription>
            I designed the identity layer — the engineering that lets a single account&apos;s
            behaviour be joined across all eight products in one query. Three identifier
            types flow in from the event layer; the warehouse resolves them into conformed
            dimensions that every analytics query in the platform depends on.
          </SectionDescription>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Resolution chain */}
            <div
              style={{ background: "#16161f", borderColor: "#1e1e2e" }}
              className="border rounded-xl p-6"
            >
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
                Resolution chain
              </div>

              {/* MCID */}
              <div
                style={{
                  background: "#52BD9410",
                  border: "1px solid #52BD9428",
                  borderRadius: "10px",
                  padding: "14px 16px",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <code
                    style={{
                      color: "#52BD94",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                    }}
                  >
                    MCID
                  </code>
                  <span
                    style={{
                      background: "#52BD9415",
                      color: "#52BD94",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: "999px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    anonymous_id
                  </span>
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "#f1f5f9",
                    fontSize: "0.88rem",
                    marginBottom: "4px",
                  }}
                >
                  Marketing Cloud ID
                </div>
                <div
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.8rem",
                    lineHeight: 1.65,
                  }}
                >
                  Set by the Segment JS SDK on first page load. Persists across sessions
                  before the user authenticates. Captures the full pre-auth funnel.
                </div>
              </div>

              {/* Arrow + label */}
              <div className="flex items-center gap-3 py-3 pl-5">
                <svg width="10" height="22" viewBox="0 0 10 22" fill="none">
                  <path
                    d="M5 0v18M1 14l4 4 4-4"
                    stroke="#52BD9466"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  style={{
                    color: "#52BD9488",
                    fontSize: "0.72rem",
                    fontFamily: "monospace",
                  }}
                >
                  alias() bridges MCID → userId on login
                </span>
              </div>

              {/* userId */}
              <div
                style={{
                  background: "#10b98110",
                  border: "1px solid #10b98128",
                  borderRadius: "10px",
                  padding: "14px 16px",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <code
                    style={{
                      color: "#10b981",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                    }}
                  >
                    userId
                  </code>
                  <span
                    style={{
                      background: "#10b98115",
                      color: "#10b981",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: "999px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    product auth token
                  </span>
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "#f1f5f9",
                    fontSize: "0.88rem",
                    marginBottom: "4px",
                  }}
                >
                  Authenticated User
                </div>
                <div
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.8rem",
                    lineHeight: 1.65,
                  }}
                >
                  Set on login via the product&apos;s auth system. Segment&apos;s{" "}
                  <code style={{ color: "#10b981", fontSize: "0.78rem" }}>
                    alias()
                  </code>{" "}
                  call merges the pre-auth MCID history onto the authenticated userId,
                  so no event is lost at the funnel seam.
                </div>
              </div>

              {/* Arrow + label */}
              <div className="flex items-center gap-3 py-3 pl-5">
                <svg width="10" height="22" viewBox="0 0 10 22" fill="none">
                  <path
                    d="M5 0v18M1 14l4 4 4-4"
                    stroke="#10b98166"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  style={{
                    color: "#10b98188",
                    fontSize: "0.72rem",
                    fontFamily: "monospace",
                  }}
                >
                  group() attaches account context
                </span>
              </div>

              {/* groupId */}
              <div
                style={{
                  background: "#29B5E810",
                  border: "1px solid #29B5E828",
                  borderRadius: "10px",
                  padding: "14px 16px",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <code
                    style={{
                      color: "#29B5E8",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                    }}
                  >
                    groupId
                  </code>
                  <span
                    style={{
                      background: "#29B5E815",
                      color: "#29B5E8",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: "999px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    group() call
                  </span>
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "#f1f5f9",
                    fontSize: "0.88rem",
                    marginBottom: "4px",
                  }}
                >
                  Account / Organisation
                </div>
                <div
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.8rem",
                    lineHeight: 1.65,
                  }}
                >
                  Attached via Segment&apos;s{" "}
                  <code style={{ color: "#29B5E8", fontSize: "0.78rem" }}>
                    group()
                  </code>{" "}
                  call. Maps every user event to the billing account. This is the
                  cross-product join key — the same groupId appears in Experimentation,
                  CMP, and Opal.
                </div>
              </div>

              {/* Final arrow */}
              <div className="flex items-center gap-3 py-3 pl-5">
                <svg width="10" height="22" viewBox="0 0 10 22" fill="none">
                  <path
                    d="M5 0v18M1 14l4 4 4-4"
                    stroke="#29B5E866"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  style={{
                    color: "#29B5E888",
                    fontSize: "0.72rem",
                    fontFamily: "monospace",
                  }}
                >
                  resolved in warehouse → conformed dimensions
                </span>
              </div>

              {/* Output */}
              <div
                style={{
                  background: "#10b98112",
                  border: "1px solid #10b98135",
                  borderRadius: "10px",
                  padding: "14px 16px",
                }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {["DIM_CUSTOMER_USERS", "DIM_ACCOUNT"].map((t) => (
                    <code
                      key={t}
                      style={{
                        color: "#10b981",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        background: "#10b98118",
                        padding: "2px 8px",
                        borderRadius: "5px",
                      }}
                    >
                      {t}
                    </code>
                  ))}
                </div>
                <div
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.8rem",
                    lineHeight: 1.65,
                  }}
                >
                  All three identifiers resolved into a single user-to-account mapping.
                  Every product&apos;s events join to the same account record — enabling
                  cross-product queries at warehouse speed.
                </div>
              </div>
            </div>

            {/* Right: Cross-product resolution example + 4 Q&A cards */}
            <div className="flex flex-col gap-4">
              {/* Cross-product example */}
              <div
                style={{ background: "#111118", borderColor: "#1e1e2e" }}
                className="border rounded-xl p-5"
              >
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                  What this enables: one query, eight products
                </div>
                <div className="flex flex-col gap-1.5">
                  {[
                    {
                      product: "Experimentation",
                      event: "EXPERIMENT_RUN",
                      resolved: "acme-corp",
                    },
                    {
                      product: "Content Management",
                      event: "CONTENT_PUBLISHED",
                      resolved: "acme-corp",
                    },
                    {
                      product: "Opal",
                      event: "AGENT_EXECUTED",
                      resolved: "acme-corp",
                    },
                    {
                      product: "Campaign",
                      event: "CAMPAIGN_SENT",
                      resolved: "acme-corp",
                    },
                  ].map((row) => (
                    <div
                      key={row.product}
                      className="flex items-center gap-3 text-xs"
                      style={{
                        background: "#16161f",
                        borderRadius: "7px",
                        padding: "8px 10px",
                      }}
                    >
                      <span
                        className="font-semibold flex-shrink-0"
                        style={{ color: "#f1f5f9", minWidth: "140px" }}
                      >
                        {row.product}
                      </span>
                      <code
                        style={{
                          color: "#52BD94",
                          fontFamily: "monospace",
                          fontSize: "0.72rem",
                          flex: 1,
                        }}
                      >
                        {row.event}
                      </code>
                      <span
                        style={{
                          background: "#10b98115",
                          color: "#10b981",
                          padding: "1px 7px",
                          borderRadius: "999px",
                          fontFamily: "monospace",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          flexShrink: 0,
                        }}
                      >
                        → {row.resolved}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-3 text-xs leading-relaxed"
                  style={{ color: "#64748b" }}
                >
                  Four events from four products, one resolved account key.
                  Without the identity layer, these are four unrelated rows.
                </div>
              </div>

              {/* 4 Q&A explanation cards */}
              {[
                {
                  q: "Why MCID if we have userId?",
                  a: "Users browse, read docs, and evaluate features before they log in. MCID captures that pre-auth journey. Without it, attribution for top-of-funnel behaviour is lost at the login boundary.",
                },
                {
                  q: "Why is alias() the critical call?",
                  a: "Without alias(), pre-auth and post-auth events are two separate user profiles. alias() merges them retroactively, so a user who evaluated three features before signing up has a continuous history.",
                },
                {
                  q: "Why group() not just userId?",
                  a: "Multiple users share one account. Billing, health scores, and expansion analysis all operate at the account level — not the individual user. group() is what makes account-level analytics possible.",
                },
                {
                  q: "What happens without this layer?",
                  a: "You can answer product-level questions but not business questions. How many accounts use three or more products? Which accounts are at churn risk? Those queries need the conformed account dimension.",
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  className="card-hover"
                  style={{
                    background: "#111118",
                    border: "1px solid #1e1e2e",
                    borderRadius: "12px",
                    padding: "16px 18px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#10b981",
                      marginBottom: "6px",
                    }}
                  >
                    {q}
                  </div>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#94a3b8",
                      lineHeight: 1.7,
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ELT Services ──────────────────────────────────────────────── */}
        <section
          id="elt"
          className="py-16 border-b"
          style={{ borderColor: "#1e1e2e" }}
        >
          <SectionLabel>ELT Services</SectionLabel>
          <SectionHeading>Four Parallel Ingestion Services</SectionHeading>
          <SectionDescription>
            Four ELT services run concurrently against dedicated virtual warehouses.
            Each targets a specific data domain — event streams, SaaS systems,
            supplemental sources, and streaming pipelines — isolated so a failure in
            one doesn&apos;t stall the others.
          </SectionDescription>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Segment",
                badge: "Primary event bus",
                description:
                  "Real-time product event streams from all 8 Optimizely products via JS SDK and server-side track calls. The highest-frequency ingestion path and the source of the identity layer.",
              },
              {
                name: "Fivetran",
                badge: "SaaS extracts",
                description:
                  "Managed connectors for Salesforce, Zendesk, Stripe, Jira, and other business systems. Scheduled extraction with automatic schema drift handling and backfill support.",
              },
              {
                name: "dbt",
                badge: "Transformation layer",
                description:
                  "Transformation models run against Snowflake compute. Staging, intermediate, and final marts — the logic layer that turns raw events into analytics-ready conformed tables.",
              },
              {
                name: "Airbyte",
                badge: "Supplemental",
                description:
                  "Selected connectors for data streams not covered by Fivetran. Provides flexibility for long-tail integrations without coupling to a single vendor.",
              },
            ].map((svc) => (
              <Card key={svc.name}>
                <div className="flex items-start justify-between mb-4">
                  <div
                    style={{
                      background: "#10b98115",
                      color: "#10b981",
                    }}
                    className="text-xs font-semibold px-2 py-1 rounded-md"
                  >
                    {svc.badge}
                  </div>
                </div>
                <div className="text-xl font-bold text-white mb-3">
                  {svc.name}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {svc.description}
                </p>
              </Card>
            ))}
          </div>

          <div
            style={{
              background: "#10b98110",
              borderColor: "#10b98133",
            }}
            className="mt-6 border rounded-xl p-5"
          >
            <div className="text-sm text-slate-400 mb-2">
              Why parallel isolation matters
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              A single ingestion orchestrator creates a single point of failure across all
              data sources. Parallel independent services mean a connector outage affects
              only that source domain — event data continues landing while SaaS extracts
              are retried, and transformation runs on whatever raw data is available.
            </p>
          </div>
        </section>

        {/* ── Design Rationale ─────────────────────────────────────────── */}
        <section
          id="rationale"
          className="py-16 border-b"
          style={{ borderColor: "#1e1e2e" }}
        >
          <SectionLabel>Design Rationale</SectionLabel>
          <SectionHeading>Why these architecture decisions</SectionHeading>
          <SectionDescription>
            The medallion architecture is common. Making it durable under real operational
            conditions — schema changes, load contention, consumer SLAs — is the hard part.
            These are the decisions that have held up.
          </SectionDescription>
          <div className="mt-8 flex flex-col gap-4">
            {[
              {
                decision: "Immutable RAW layer",
                rationale:
                  "No business logic in the raw layer means schema changes in source systems never break downstream consumers. When Salesforce adds a field, it lands in the raw vault as-is — dbt decides what to do with it. This boundary saved the platform repeatedly when upstream APIs changed without notice.",
                color: "#52BD94",
              },
              {
                decision: "Separate TRANSFORM from REPORTING",
                rationale:
                  "Keeping staging and intermediate models in the transform layer and final marts in reporting gives consumers a stable interface. PowerBI and Optimizely Analytics query the reporting layer — they never see an intermediate model. When a dbt model is refactored, the consumer's query doesn't break.",
                color: "#10b981",
              },
              {
                decision: "Four parallel ELT services, not one",
                rationale:
                  "Segment, Fivetran, Airbyte, and Snowpipe each load a fundamentally different shape of data at different cadences. Consolidating them into a single orchestrator would create a single point of failure. Parallel isolation means a Fivetran outage doesn't stall Segment event landing.",
                color: "#29B5E8",
              },
              {
                decision: "Reverse ETL as a first-class pattern",
                rationale:
                  "Derived intelligence sitting in Snowflake is advisory. The moment I pushed enriched account data — health scores, overage signals, engagement flags — back into Segment and through to Salesforce, CS reps saw it in their workflow without logging into a BI tool. That's when data engineering becomes commercially visible.",
                color: "#F2C811",
              },
            ].map(({ decision, rationale, color }) => (
              <div
                key={decision}
                className="card-hover"
                style={{
                  background: "#111118",
                  border: "1px solid #1e1e2e",
                  borderLeft: `3px solid ${color}55`,
                  borderRadius: "14px",
                  padding: "20px 24px",
                  display: "flex",
                  gap: "16px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#f1f5f9",
                      marginBottom: "7px",
                    }}
                  >
                    {decision}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.87rem",
                      color: "#94a3b8",
                      lineHeight: 1.7,
                    }}
                  >
                    {rationale}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── dbt Transformation Suite ───────────────────────────────────── */}
        <section
          id="dbt"
          className="py-16 border-b"
          style={{ borderColor: "#1e1e2e" }}
        >
          <SectionLabel>dbt Transformation Suite</SectionLabel>
          <SectionHeading>Opal Billing Model DAG</SectionHeading>
          <SectionDescription>
            A single dbt DAG powers Finance, Customer Success, and Product simultaneously.
            Models are layered from raw Opal event sources through staging and intermediate
            transforms into final billing models published to the reporting layer.
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
                  <Mono>Opal Event Sources</Mono>
                  <span className="text-xs text-slate-500">
                    raw product event tables
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pl-4">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  <path d="M6 0v20M2 16l4 4 4-4" stroke="#10b98155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Staging */}
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2">
                  Staging Layer
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "stg · opal events",
                    "stg · opal accounts",
                    "stg · opal credits",
                    "stg · opal usage",
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

              <div className="flex items-center gap-2 pl-4">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  <path d="M6 0v20M2 16l4 4 4-4" stroke="#10b98155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Intermediate */}
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2">
                  Intermediate Layer
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "int · daily rollup",
                    "int · account balances",
                    "int · overage calculation",
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

              <div className="flex items-center gap-2 pl-4">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  <path d="M6 0v20M2 16l4 4 4-4" stroke="#10b98155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Final models */}
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2">
                  Final Models → Reporting Layer
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { name: "Fine-grained usage", desc: "Row-level usage events" },
                    { name: "Daily account usage", desc: "Daily rollup per account" },
                    { name: "Customer balances", desc: "Credit balance snapshots" },
                    { name: "Customer overages", desc: "Overage detection & amounts" },
                  ].map((m) => (
                    <div
                      key={m.name}
                      style={{
                        background: "#10b98110",
                        borderColor: "#10b98133",
                      }}
                      className="border rounded-xl p-4 card-tier card-hover"
                    >
                      <div
                        className="font-semibold text-sm mb-1 leading-snug"
                        style={{ color: "#10b981" }}
                      >
                        {m.name}
                      </div>
                      <div className="text-xs text-slate-400">{m.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pl-4">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  <path d="M6 0v20M2 16l4 4 4-4" stroke="#10b98155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

        {/* ── Kimball Star Schema ────────────────────────────────────────── */}
        <section
          id="modeling"
          className="py-16 border-b"
          style={{ borderColor: "#1e1e2e" }}
        >
          <SectionLabel>Data Modeling</SectionLabel>
          <SectionHeading>Kimball Star Schema</SectionHeading>
          <SectionDescription>
            A Kimball-style star schema in the transform layer. Conformed dimensions shared
            across fact tables enable cross-domain analysis — experiments, impressions,
            accounts, and users in a single semantic layer. The identity work above is what
            makes the conformed dimensions possible.
          </SectionDescription>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                pattern: "FACT_EXPERIMENT_*",
                type: "Fact",
                desc: "Per-experiment outcomes, variation metrics, statistical results, and impression counts",
                color: "#10b981",
              },
              {
                pattern: "DIM_EXPERIMENT",
                type: "Dimension",
                desc: "All experiments, flags, and feature rollouts — type, status, product line, impression threshold",
                color: "#6366f1",
              },
              {
                pattern: "DIM_ACCOUNT",
                type: "Dimension",
                desc: "Account master with ARR tier, plan, contract lifecycle, and cross-product identity key",
                color: "#6366f1",
              },
              {
                pattern: "DIM_CUSTOMER_USERS",
                type: "Dimension",
                desc: "Customer-level user profiles and identity graph — resolves user-to-account relationships",
                color: "#6366f1",
              },
              {
                pattern: "FACT_DAILY_IMPRESSIONS_*",
                type: "Fact",
                desc: "Pre-aggregated daily impression rollups for fast engagement queries across large time windows",
                color: "#10b981",
              },
              {
                pattern: "FACT_BILLING_*",
                type: "Fact",
                desc: "Opal credit consumption, usage events, and overage calculations per account per day",
                color: "#10b981",
              },
            ].map((row) => (
              <div
                key={row.pattern}
                className="card-hover"
                style={{
                  background: "#111118",
                  border: "1px solid #1e1e2e",
                  borderRadius: "12px",
                  padding: "18px",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <code
                    className="font-mono text-xs font-semibold"
                    style={{ color: "#10b981" }}
                  >
                    {row.pattern}
                  </code>
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
                    className="text-xs font-semibold border rounded-full px-2.5 py-0.5 ml-auto flex-shrink-0"
                  >
                    {row.type}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {row.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs text-slate-500">
            Conformed dimensions (account, user) are shared across all fact tables — enabling
            cross-domain joins at query time without additional ETL.
          </div>
        </section>

        <ChapterTransition from="The Platform" to="The Impact" />

        {/* ── Ch03: Data Quality & Observability ────────────────────────── */}
        <section
          id="quality"
          className="py-16 border-b"
          style={{ borderColor: "#1e1e2e" }}
        >
          <ChapterBadge number="03" label="The Impact" />
          <SectionLabel>Data Quality</SectionLabel>
          <SectionHeading>Pipeline Observability &amp; Quality Engineering</SectionHeading>
          <SectionDescription>
            A platform with no quality layer is just a fast path to bad decisions. I built
            observability directly into the dbt project — schema tests, source freshness
            assertions, and anomaly checks that run on every model execution. The goal:
            catch data problems before a PM or CS rep does.
          </SectionDescription>

          {/* Test coverage grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                test: "not_null",
                scope: "All primary keys and join keys",
                desc: "Every fact table primary key and every foreign key used in a join is asserted non-null. A null join key silently drops rows at query time — the test catches it at load time.",
                color: "#10b981",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#10b981" strokeWidth="1.8" />
                    <path d="M8 12l3 3 5-5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                test: "unique",
                scope: "Grain assertions on fact tables",
                desc: "Fact tables assert uniqueness on their natural grain — one row per experiment per variation per day. Duplicates in fact tables cause double-counting in every downstream aggregate.",
                color: "#29B5E8",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#29B5E8" strokeWidth="1.8" />
                    <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#29B5E8" strokeWidth="1.8" />
                    <path d="M11 7h2a4 4 0 0 1 4 4v2" stroke="#29B5E8" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
                  </svg>
                ),
              },
              {
                test: "relationships",
                scope: "Referential integrity across marts",
                desc: "Every foreign key in a fact table is asserted to exist in its parent dimension. Catches upstream deletions or ID mismatches before they produce orphaned rows in analytics.",
                color: "#F2C811",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="7" cy="12" r="3" stroke="#F2C811" strokeWidth="1.8" />
                    <circle cx="17" cy="12" r="3" stroke="#F2C811" strokeWidth="1.8" />
                    <path d="M10 12h4" stroke="#F2C811" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                test: "accepted_values",
                scope: "Enum fields and status columns",
                desc: "Status columns, product_line enums, and experiment type fields are tested against known-good value sets. A new product line or event type that lands in the wrong column triggers a test failure before it distorts a dashboard.",
                color: "#f59e0b",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 3H5a2 2 0 0 0-2 2v4M9 3h6M9 3v18m6-18h4a2 2 0 0 1 2 2v4M15 3v18M9 21H5a2 2 0 0 1-2-2v-4M15 21h4a2 2 0 0 0 2-2v-4" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map(({ test, scope, desc, color, icon }) => (
              <div
                key={test}
                className="card-hover"
                style={{
                  background: "#111118",
                  border: "1px solid #1e1e2e",
                  borderRadius: "14px",
                  padding: "18px",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    style={{
                      background: `${color}12`,
                      borderRadius: "7px",
                      padding: "6px",
                    }}
                  >
                    {icon}
                  </div>
                  <code
                    style={{
                      color,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                    }}
                  >
                    {test}
                  </code>
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#64748b",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "8px",
                  }}
                >
                  {scope}
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#94a3b8",
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Source freshness monitoring */}
          <div className="mt-8">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Source freshness monitoring
            </div>
            <div
              style={{ background: "#16161f", borderColor: "#1e1e2e" }}
              className="border rounded-xl p-6"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                {[
                  {
                    source: "Segment events",
                    threshold: "warn: 1h · error: 3h",
                    note: "Highest-cadence source. A 3-hour gap in event landing is a pipeline incident.",
                    color: "#52BD94",
                  },
                  {
                    source: "Fivetran / SaaS",
                    threshold: "warn: 6h · error: 24h",
                    note: "Scheduled connectors. Day-old SaaS data still supports daily reporting.",
                    color: "#0073FF",
                  },
                  {
                    source: "dbt models",
                    threshold: "warn: 12h · error: 48h",
                    note: "Transformation freshness. Stale mart tables surface in dashboards as unchanged numbers.",
                    color: "#FF694B",
                  },
                ].map(({ source, threshold, note, color }) => (
                  <div
                    key={source}
                    style={{
                      background: `${color}0a`,
                      border: `1px solid ${color}28`,
                      borderRadius: "10px",
                      padding: "14px 16px",
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#f1f5f9",
                        marginBottom: "5px",
                      }}
                    >
                      {source}
                    </div>
                    <code
                      style={{
                        color,
                        fontFamily: "monospace",
                        fontSize: "0.75rem",
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      {threshold}
                    </code>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "#94a3b8",
                        lineHeight: 1.6,
                      }}
                    >
                      {note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Schema drift handling */}
          <div className="mt-8">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Schema drift handling
            </div>
            <div className="flex flex-col gap-3">
              {[
                {
                  step: "01",
                  title: "Upstream adds a column",
                  body: "The RAW layer accepts it as-is — append-only, no schema enforcement. The new column lands in the raw table without touching any downstream model.",
                },
                {
                  step: "02",
                  title: "dbt staging model picks it up",
                  body: "The staging model is updated to cast and rename the column. If it's a breaking rename, the intermediate model absorbs the mapping — downstream consumers see no change.",
                },
                {
                  step: "03",
                  title: "Tests validate the new shape",
                  body: "Schema tests run against the staging and intermediate layers before the mart is rebuilt. A type mismatch or null in a key field fails the run before any dashboard sees bad data.",
                },
              ].map(({ step, title, body }) => (
                <div
                  key={step}
                  className="flex gap-4 items-start"
                  style={{
                    background: "#111118",
                    border: "1px solid #1e1e2e",
                    borderRadius: "12px",
                    padding: "16px 18px",
                  }}
                >
                  <span
                    style={{
                      color: "#10b981",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {step}
                  </span>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#f1f5f9",
                        fontSize: "0.9rem",
                        marginBottom: "5px",
                      }}
                    >
                      {title}
                    </div>
                    <p
                      style={{
                        fontSize: "0.84rem",
                        color: "#94a3b8",
                        lineHeight: 1.7,
                      }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Publishing & Egress ────────────────────────────────────────── */}
        <section
          id="publishing"
          className="py-16 border-b"
          style={{ borderColor: "#1e1e2e" }}
        >
          <SectionLabel>Publishing &amp; Egress</SectionLabel>
          <SectionHeading>Operationalizing Derived Data</SectionHeading>
          <SectionDescription>
            A controlled promotion pattern manages how internal models become publicly
            consumable. Reverse ETL closes the loop — enriched Snowflake data flows back
            into Segment for downstream activation in Salesforce and marketing tools.
          </SectionDescription>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                    label: "Internal production models",
                    sub: "Final mart tables validated and ready for consumption",
                  },
                  {
                    step: "02",
                    label: "Controlled promotion",
                    sub: "Atomic swap from development to public-facing schema",
                  },
                  {
                    step: "03",
                    label: "Snowflake Private Share",
                    sub: "Zero-copy share to consumers — no data movement",
                  },
                  {
                    step: "04",
                    label: "Downstream consumers",
                    sub: "PowerBI · Optimizely Analytics · External customers",
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
                    label: "Snowflake Computed Profiles",
                    sub: "Enriched account and user profiles — computed traits, health scores, engagement flags",
                  },
                  {
                    step: "02",
                    label: "Segment Reverse ETL sync",
                    sub: "Computed traits and audiences synced from Snowflake to the event collection layer",
                  },
                  {
                    step: "03",
                    label: "Salesforce",
                    sub: "Account health, usage flags, and expansion signals surfaced on Account objects in CRM",
                  },
                  {
                    step: "04",
                    label: "Marketing automation",
                    sub: "Lifecycle campaigns triggered by product engagement behaviour, not static CRM attributes",
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
                style={{
                  background: "#10b98110",
                  borderColor: "#10b98133",
                }}
                className="border rounded-lg p-3 text-xs text-slate-400"
              >
                <span
                  style={{ color: "#10b981" }}
                  className="font-semibold"
                >
                  Why this matters:{" "}
                </span>
                Analytics that stays in a dashboard is advisory. Reverse ETL makes warehouse
                intelligence operational — CS reps see account health in Salesforce without
                opening a BI tool.
              </div>
            </Card>
          </div>
        </section>

        {/* ── What This Enabled ─────────────────────────────────────────── */}
        <section
          id="enabled"
          className="py-16 border-b"
          style={{ borderColor: "#1e1e2e" }}
        >
          <SectionLabel>Outcomes</SectionLabel>
          <SectionHeading>What the Foundation Unlocked</SectionHeading>
          <SectionDescription>
            The engineering work here was never the end goal — it was the prerequisite.
            These are the four capability categories that became possible once the platform
            was in place. None of them could have been built without the identity layer,
            the dimensional model, and the quality gates above.
          </SectionDescription>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                outcome: "Cross-product product analytics",
                detail:
                  "The Product Intelligence Platform — the centrepiece of this portfolio — runs entirely on top of this foundation. Usage metrics, engagement thresholds, churn prediction, and CS activation all depend on the conformed account dimension and the cross-product identity chain I built here.",
                link: "https://product-intelligence-platform.vercel.app",
                linkLabel: "→ Product Intelligence Platform",
                color: "#6366f1",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" stroke="#6366f1" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                outcome: "Opal billing accuracy",
                detail:
                  "The dbt billing DAG — fine-grained usage, daily rollups, credit balances, overage detection — powers Finance's invoicing workflow and Customer Success's health score. A single source of truth replaced a spreadsheet-based reconciliation process.",
                color: "#10b981",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="6" width="18" height="13" rx="2" stroke="#10b981" strokeWidth="1.8" />
                    <path d="M3 10h18M8 3v3M16 3v3" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M8 14l2 2 4-4" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                outcome: "CS activation via Reverse ETL",
                detail:
                  "Account health scores, overage signals, and engagement flags computed in Snowflake flow back into Salesforce via Reverse ETL. CS reps act on warehouse-computed intelligence without leaving their CRM — no BI tool login required.",
                color: "#F2C811",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="#F2C811" strokeWidth="1.8" />
                    <path d="M12 8v4l3 3" stroke="#F2C811" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M3 12h2M19 12h2M12 3v2M12 19v2" stroke="#F2C811" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                  </svg>
                ),
              },
              {
                outcome: "Executive and board reporting",
                detail:
                  "ARR linkage, cross-product engagement, and retention analysis — all impossible without the warehouse foundation — became the basis for steerco decks, board updates, and GTM strategy. The platform made the data trustworthy enough to put in front of an executive audience.",
                color: "#f43f5e",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18 20V10M12 20V4M6 20v-6" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map(({ outcome, detail, link, linkLabel, color, icon }) => (
              <div
                key={outcome}
                className="card-hover"
                style={{
                  background: "#111118",
                  border: "1px solid #1e1e2e",
                  borderRadius: "14px",
                  padding: "22px",
                }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    style={{
                      background: `${color}12`,
                      borderRadius: "8px",
                      padding: "8px",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#f1f5f9",
                      lineHeight: 1.3,
                      marginTop: "6px",
                    }}
                  >
                    {outcome}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "#94a3b8",
                    lineHeight: 1.75,
                    marginBottom: link ? "14px" : 0,
                  }}
                >
                  {detail}
                </p>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    {linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── dbt Project Code ─────────────────────────────────────────── */}
        <section
          id="code"
          className="py-16 border-b"
          style={{ borderColor: "#1e1e2e" }}
        >
          <SectionLabel>Open Source</SectionLabel>
          <SectionHeading>Working dbt Project on GitHub</SectionHeading>
          <SectionDescription>
            The billing model DAG described above is published as a working dbt project with
            synthetic seed data — structured identically to production, with real SQL logic
            and schema tests. You can clone and run it locally with{" "}
            <code style={{ color: "#10b981", fontFamily: "monospace", fontSize: "0.82rem" }}>
              dbt seed &amp;&amp; dbt run &amp;&amp; dbt test
            </code>.
          </SectionDescription>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* File tree */}
            <div
              style={{ background: "#111118", borderColor: "#1e1e2e" }}
              className="border rounded-xl p-5"
            >
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Project structure
              </div>
              <div className="font-mono text-xs leading-loose" style={{ color: "#94a3b8" }}>
                <div style={{ color: "#10b981" }}>dbt/</div>
                <div className="pl-4">├── dbt_project.yml</div>
                <div className="pl-4">├── packages.yml</div>
                <div className="pl-4" style={{ color: "#64748b" }}>├── seeds/</div>
                <div className="pl-8" style={{ color: "#52BD94" }}>│   ├── opal_accounts.csv</div>
                <div className="pl-8" style={{ color: "#52BD94" }}>│   ├── opal_events.csv</div>
                <div className="pl-8" style={{ color: "#52BD94" }}>│   ├── opal_credit_allocations.csv</div>
                <div className="pl-8" style={{ color: "#52BD94" }}>│   └── segment_identifies.csv</div>
                <div className="pl-4" style={{ color: "#64748b" }}>└── models/</div>
                <div className="pl-8">├── sources.yml</div>
                <div className="pl-8" style={{ color: "#64748b" }}>├── staging/</div>
                <div className="pl-12">├── stg_opal_events.sql</div>
                <div className="pl-12">├── stg_opal_accounts.sql</div>
                <div className="pl-12">├── stg_opal_credit_allocations.sql</div>
                <div className="pl-12">├── stg_segment_identifies.sql</div>
                <div className="pl-12" style={{ color: "#6366f1" }}>└── staging.yml</div>
                <div className="pl-8" style={{ color: "#64748b" }}>├── intermediate/</div>
                <div className="pl-12">├── int_opal_daily_usage.sql</div>
                <div className="pl-12">├── int_opal_account_balances.sql</div>
                <div className="pl-12">├── int_identity_resolution.sql</div>
                <div className="pl-12" style={{ color: "#6366f1" }}>└── intermediate.yml</div>
                <div className="pl-8" style={{ color: "#64748b" }}>└── marts/</div>
                <div className="pl-12" style={{ color: "#10b981" }}>├── opal_fine_grained_usage.sql</div>
                <div className="pl-12" style={{ color: "#10b981" }}>├── opal_daily_account_usage.sql</div>
                <div className="pl-12" style={{ color: "#10b981" }}>├── opal_customer_balances.sql</div>
                <div className="pl-12" style={{ color: "#10b981" }}>├── opal_customer_overages.sql</div>
                <div className="pl-12" style={{ color: "#6366f1" }}>└── marts.yml</div>
              </div>
            </div>

            {/* Layer explanations */}
            <div className="flex flex-col gap-3">
              {[
                {
                  layer: "seeds/",
                  color: "#52BD94",
                  models: "4 CSV files",
                  desc: "Synthetic data matching production table shapes. Accounts, usage events, credit allocations, and Segment identify calls — enough to run the full billing DAG.",
                },
                {
                  layer: "staging/",
                  color: "#29B5E8",
                  models: "4 models",
                  desc: "One model per source. Each staging model casts, renames, and deduplicates — no business logic. Tests assert not_null, unique, and accepted_values at the source boundary.",
                },
                {
                  layer: "intermediate/",
                  color: "#f59e0b",
                  models: "3 ephemeral models",
                  desc: "Business logic lives here. Daily rollups, period balance calculations, and identity resolution — each model does one thing. Materialized as ephemeral so there's no intermediate table cost.",
                },
                {
                  layer: "marts/",
                  color: "#10b981",
                  models: "4 table models",
                  desc: "Consumer-facing outputs. Fine-grained usage, daily account usage, credit balances, and overage detection. Materialized as tables in the reporting schema with full referential integrity tests.",
                },
              ].map(({ layer, color, models, desc }) => (
                <div
                  key={layer}
                  className="card-hover"
                  style={{
                    background: "#111118",
                    border: "1px solid #1e1e2e",
                    borderRadius: "12px",
                    padding: "14px 16px",
                    display: "flex",
                    gap: "12px",
                  }}
                >
                  <div style={{ flexShrink: 0, paddingTop: "2px" }}>
                    <code
                      style={{
                        color,
                        fontFamily: "monospace",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                      }}
                    >
                      {layer}
                    </code>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "#64748b",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: "5px",
                      }}
                    >
                      {models}
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "#94a3b8", lineHeight: 1.65 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}

              <a
                href="https://github.com/ratul003/data-engineering-foundation"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#10b98115",
                  borderColor: "#10b98133",
                  color: "#10b981",
                  textDecoration: "none",
                }}
                className="mt-1 border rounded-xl px-5 py-3 flex items-center justify-between hover:border-emerald-500 transition-colors"
              >
                <span className="text-sm font-semibold">
                  ratul003/data-engineering-foundation
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── Tech Stack ────────────────────────────────────────────────── */}
        <section
          id="stack"
          className="py-16 border-b"
          style={{ borderColor: "#1e1e2e" }}
        >
          <SectionLabel>Technology</SectionLabel>
          <SectionHeading>Tech Stack</SectionHeading>
          <SectionDescription>
            Purpose-built stack across cloud data warehouse, orchestration,
            transformation, and ingestion layers.
          </SectionDescription>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {techStack.map((tech) => (
              <DEToolCard key={tech} name={tech} />
            ))}
          </div>

          <div
            style={{ background: "#16161f", borderColor: "#1e1e2e" }}
            className="mt-8 border rounded-xl p-6"
          >
            <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-4">
              Architecture Principles
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "Immutable raw layer", value: "No overwrites" },
                { label: "Layer separation", value: "Clear boundaries" },
                { label: "Parallel isolation", value: "Independent ELT" },
                { label: "Reverse ETL", value: "Closed loop" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-base font-bold tracking-tight"
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
          <PortfolioLinks />
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </footer>
      </main>
    </div>
  );
}
