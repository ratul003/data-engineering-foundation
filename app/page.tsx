"use client";

import React, { useState } from "react";
import type { ReactNode } from "react";

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
        style={{ background: "linear-gradient(90deg, #10b98155, transparent)" }}
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
        style={{ background: "linear-gradient(90deg, transparent, #10b98133)" }}
      />
      <div
        style={{ background: "#10b98110", borderColor: "#10b98133" }}
        className="border rounded-xl px-6 py-3 flex items-center gap-4 flex-shrink-0"
      >
        <span className="text-xs font-semibold text-slate-400">{from}</span>
        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" className="flex-shrink-0">
          <path d="M0 6h18M14 2l4 4-4 4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-xs font-semibold" style={{ color: "#10b981" }}>
          {to}
        </span>
      </div>
      <div
        className="h-px flex-1"
        style={{ background: "linear-gradient(90deg, #10b98133, transparent)" }}
      />
    </div>
  );
}

// ── Tool logos ───────────────────────────────────────────────────────────────

const DE_TOOLS: Record<string, { color: string; category: string; svg: React.ReactNode }> = {
  Snowflake: {
    color: "#29B5E8", category: "Data Warehouse",
    svg: (<svg viewBox="0 0 24 24" fill="none" width="28" height="28"><line x1="12" y1="2" x2="12" y2="22" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round"/><line x1="2" y1="12" x2="22" y2="12" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round"/><line x1="5.5" y1="5.5" x2="18.5" y2="18.5" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round"/><line x1="18.5" y1="5.5" x2="5.5" y2="18.5" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="2.5" fill="#29B5E8"/></svg>),
  },
  dbt: {
    color: "#FF694B", category: "Transformation",
    svg: (<svg viewBox="0 0 24 24" fill="none" width="28" height="28"><path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#FF694B" strokeWidth="1.8" strokeLinejoin="round"/><path d="M4 7L12 12L20 7" stroke="#FF694B" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/><line x1="12" y1="12" x2="12" y2="22" stroke="#FF694B" strokeWidth="1.8" opacity="0.5"/></svg>),
  },
  Segment: {
    color: "#52BD94", category: "Event Collection",
    svg: (<svg viewBox="0 0 24 24" fill="none" width="28" height="28"><path d="M18 7H10a5 5 0 0 0 0 10h3" stroke="#52BD94" strokeWidth="2" strokeLinecap="round"/><path d="M6 17h8a5 5 0 0 0 0-10H9" stroke="#52BD94" strokeWidth="2" strokeLinecap="round" opacity="0.55"/><circle cx="18" cy="7" r="2" fill="#52BD94"/><circle cx="6" cy="17" r="2" fill="#52BD94" opacity="0.55"/></svg>),
  },
  Fivetran: {
    color: "#0073FF", category: "SaaS Connectors",
    svg: (<svg viewBox="0 0 24 24" fill="none" width="28" height="28"><circle cx="12" cy="4" r="2.5" fill="#0073FF"/><circle cx="4" cy="20" r="2.5" fill="#0073FF" opacity="0.6"/><circle cx="20" cy="20" r="2.5" fill="#0073FF" opacity="0.6"/><path d="M12 6.5L5 17.8M12 6.5L19 17.8M6.5 20h11" stroke="#0073FF" strokeWidth="1.5"/></svg>),
  },
  Airbyte: {
    color: "#615EFF", category: "Data Ingestion",
    svg: (<svg viewBox="0 0 24 24" fill="none" width="28" height="28"><path d="M12 3L20 19H4L12 3Z" stroke="#615EFF" strokeWidth="1.8" strokeLinejoin="round" fill="#615EFF" fillOpacity="0.12"/><line x1="8.5" y1="15" x2="15.5" y2="15" stroke="#615EFF" strokeWidth="1.8" strokeLinecap="round"/></svg>),
  },
  Python: {
    color: "#3776AB", category: "Backend / Scripting",
    svg: (<svg viewBox="0 0 24 24" fill="none" width="28" height="28"><path d="M12 2C9 2 8 3.5 8 5v3h4.5v1H5.5C3.5 9 2 10.5 2 13s1.4 4 3.5 4H7v-2.5C7 12.5 8.5 11 11 11h6c2 0 3-1.2 3-3V5c0-2-1.5-3-8-3Z" fill="#3776AB" fillOpacity="0.8"/><circle cx="10" cy="5.5" r="1" fill="white"/><path d="M12 22c3 0 4-1.5 4-3v-3h-4.5v-1h6.5c2 0 3.5-1.5 3.5-4s-1.4-4-3.5-4H17v2.5C17 11.5 15.5 13 13 13H7c-2 0-3 1.2-3 3v3c0 2 1.5 3 8 3Z" fill="#FFD43B" fillOpacity="0.9"/><circle cx="14" cy="18.5" r="1" fill="#3776AB"/></svg>),
  },
  Snowpipe: {
    color: "#10b981", category: "Streaming Ingest",
    svg: (<svg viewBox="0 0 24 24" fill="none" width="28" height="28"><path d="M12 3v18M5 8l7-5 7 5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 12l7 3 7-3M5 16l7 3 7-3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/></svg>),
  },
  PowerBI: {
    color: "#F2C811", category: "Business Intelligence",
    svg: (<svg viewBox="0 0 24 24" fill="none" width="28" height="28"><rect x="14" y="4" width="6" height="16" rx="1.5" fill="#F2C811"/><rect x="8" y="9" width="5" height="11" rx="1.5" fill="#F2C811" opacity="0.7"/><rect x="2" y="14" width="5" height="6" rx="1.5" fill="#F2C811" opacity="0.4"/></svg>),
  },
};

function DEToolCard({ name }: { name: string }) {
  const t = DE_TOOLS[name];
  if (!t) return (
    <div style={{ background: "#16161f", border: "1px solid #1e1e2e", borderRadius: "12px", padding: "16px" }}>
      <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#f1f5f9" }}>{name}</div>
    </div>
  );
  return (
    <div className="card-hover" style={{ background: `${t.color}10`, border: `1px solid ${t.color}28`, borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ width: "28px", height: "28px" }}>{t.svg}</div>
      <div>
        <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#f1f5f9" }}>{name}</div>
        <div style={{ fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: t.color, marginTop: "3px" }}>{t.category}</div>
      </div>
    </div>
  );
}

const techStack = ["Snowflake", "dbt", "Segment", "Fivetran", "Airbyte", "Python", "Snowpipe", "PowerBI"];

// ── dbt model details ────────────────────────────────────────────────────────

const MODEL_DETAILS: Record<string, { layer: string; color: string; purpose: string; logic: string; output: string }> = {
  "stg_experiment_exposures": {
    layer: "STAGING", color: "#29B5E8",
    purpose: "Entry point for all experiment exposure events. Cleans, casts, and deduplicates the most critical row in the DAG: the moment a user was assigned to a variation.",
    logic: "Cast exposure_timestamp → TIMESTAMP_NTZ. Rename source_user_id → user_id. Deduplicate on (experiment_id, user_id, variation_key) keeping the earliest record per user.",
    output: "One clean row per exposure event. No nulls on primary key fields.",
  },
  "stg_experiment_conversions": {
    layer: "STAGING", color: "#29B5E8",
    purpose: "Cleans downstream conversion events that will be joined back to exposures to compute per-variation conversion rates.",
    logic: "Filter to valid conversion_type values. Cast converted_at timestamp. Reject malformed rows at the source boundary: bad data never reaches the intermediate layer.",
    output: "One row per (experiment_id, user_id, conversion_type). Ready for the attribution join.",
  },
  "stg_experiment_flags": {
    layer: "STAGING", color: "#29B5E8",
    purpose: "Handles feature flag evaluation events, including pre-launch traffic where variation_key is null: a case that silently breaks naive pipelines.",
    logic: "COALESCE(variation_key, 'off') for pre-launch null handling. Filter out internal test accounts by account_id prefix. Cast evaluated_at.",
    output: "One row per flag evaluation. Null variation keys handled: no downstream nulls from pre-launch traffic.",
  },
  "stg_accounts": {
    layer: "STAGING", color: "#29B5E8",
    purpose: "Deduplicates the account source, which lands duplicate records when CRM sync runs overlap. Picks the most recent record per account.",
    logic: "ROW_NUMBER() OVER (PARTITION BY account_id ORDER BY updated_at DESC) = 1. Cast arr, plan_type, and tier fields to consistent types.",
    output: "One row per account_id. Foundation for DIM_ACCOUNT with SCD Type 2 applied in the mart layer.",
  },
  "int_experiment_daily_stats": {
    layer: "INTERMEDIATE", color: "#f59e0b",
    purpose: "First aggregation: joins exposures to conversions and rolls up to daily variation-level stats. Ephemeral: runs as a CTE with zero table materialization cost.",
    logic: "LEFT JOIN stg_conversions on (experiment_id, user_id). GROUP BY (experiment_id, variation_key, exposure_date). SUM exposures and conversions per day.",
    output: "One row per (experiment_id, variation_key, date). Inputs to int_variation_aggregates.",
  },
  "int_variation_aggregates": {
    layer: "INTERMEDIATE", color: "#f59e0b",
    purpose: "Rolls daily stats up to total variation performance across the full experiment window. Computes conversion_rate for winner detection.",
    logic: "SUM across all dates per variation. conversion_rate = total_conversions / NULLIF(total_exposures, 0). Flag each variation as control vs treatment.",
    output: "One row per (experiment_id, variation_key) with cumulative totals and conversion_rate.",
  },
  "int_experiment_results": {
    layer: "INTERMEDIATE", color: "#f59e0b",
    purpose: "Final business logic layer. Detects the winning variation using conversion rate comparison and joins account context for commercial attribution.",
    logic: "RANK() OVER (PARTITION BY experiment_id ORDER BY conversion_rate DESC). is_winner = rank = 1 AND variation_key != 'control'. Join to stg_accounts for account attribution.",
    output: "One row per (experiment_id, variation_key) with is_winner flag. Feeds both fact_experiment_results and fact_daily_impressions.",
  },
  "fact_experiment_results": {
    layer: "MARTS", color: "#10b981",
    purpose: "Primary consumer table for experiment analysis: source of truth for winner detection dashboards, PM reviews, and statistical sign-off.",
    logic: "Materialized as TABLE. Joins DIM_EXPERIMENT and DIM_ACCOUNT. Tests: unique on (experiment_id, variation_key), not_null on all keys, relationships to both dims.",
    output: "One row per (experiment_id, variation_key). Fields: impression_count, conversion_count, conversion_rate, is_winner, lift_over_control.",
  },
  "fact_daily_impressions": {
    layer: "MARTS", color: "#10b981",
    purpose: "Pre-aggregated daily rollup table for velocity and trend queries: prevents expensive full-scans on the granular exposure grain for time-series charts.",
    logic: "Materialized as TABLE, clustered by experiment_id. Built from int_experiment_daily_stats, not raw exposures. Optimised for PowerBI date-range slicers.",
    output: "One row per (experiment_id, variation_key, date). Fields: impression_count, conversion_count.",
  },
  "dim_experiment": {
    layer: "MARTS", color: "#10b981",
    purpose: "Experiment metadata dimension. SCD Type 1: overwrites are safe because experiment names and hypotheses are corrected, not historically meaningful.",
    logic: "Joins stg_experiment_flags to get rollout metadata. Derives status from started_at / ended_at dates. Adds product_line classification for cross-experiment slicing.",
    output: "One row per experiment_id. Fields: name, hypothesis, product_line, experiment_type, status, started_at, ended_at.",
  },
  "dim_account": {
    layer: "MARTS", color: "#10b981",
    purpose: "Account master dimension with SCD Type 2 for tier history. The conformed dimension shared across all fact tables: the join key that makes cross-domain analytics possible.",
    logic: "SURROGATE_KEY on (account_id + valid_from). Detect tier changes using LAG(arr_tier). Open-ended records use valid_to = '9999-12-31'. is_current flag for current-state queries.",
    output: "One row per surrogate_key. Fields: account_id, arr_tier, contract_value, valid_from, valid_to, is_current.",
  },
};

// ── Kimball business query examples ──────────────────────────────────────────

const BUSINESS_QUERIES = [
  {
    q: "Which accounts converted most in Experiment 001?",
    tables: ["fact_experiment_results", "dim_account"],
    sql: `SELECT a.account_name, a.arr_tier,
       f.conversion_count, f.conversion_rate
FROM   fact_experiment_results f
JOIN   dim_account a
         ON f.account_id = a.account_id
WHERE  f.experiment_id = 'exp-001'
  AND  a.is_current   = TRUE
ORDER  BY f.conversion_count DESC`,
    insight: "DIM_ACCOUNT contributes account name and tier context. FACT_EXPERIMENT_* holds conversion counts. One JOIN: no subqueries, no temp tables, no aggregation needed.",
  },
  {
    q: "How did daily impressions ramp for variation B?",
    tables: ["fact_daily_impressions", "dim_experiment"],
    sql: `SELECT d.exposure_date,
       d.impression_count, d.conversion_count
FROM   fact_daily_impressions d
JOIN   dim_experiment e
         ON d.experiment_id = e.experiment_id
WHERE  e.experiment_id = 'exp-001'
  AND  d.variation_key = 'variation_b'
ORDER  BY d.exposure_date`,
    insight: "FACT_DAILY_IMPRESSIONS_* is pre-aggregated: no GROUP BY needed for a trend chart. At exposure-level grain this query scans millions of rows. The daily rollup table reduces that to one row per day.",
  },
  {
    q: "What tier were winning accounts at time of test?",
    tables: ["fact_experiment_results", "dim_account"],
    sql: `SELECT f.variation_key,
       a.arr_tier, COUNT(*) AS accounts
FROM   fact_experiment_results f
JOIN   dim_account a
         ON f.account_surrogate_key = a.surrogate_key
WHERE  f.is_winner = TRUE
GROUP  BY 1, 2
ORDER  BY 3 DESC`,
    insight: "JOIN on surrogate_key, not account_id. An account that was SMB during the test joins to the SMB dimension record: even if they've since upgraded. SCD Type 2 makes point-in-time accuracy automatic.",
  },
];

// ── Transformation pipeline story ───────────────────────────────────────────

const BADGE_COLORS: Record<string, string> = {
  "RENAME": "#29B5E8", "CAST": "#f59e0b", "DERIVE": "#a78bfa", "DEDUPE": "#f43f5e",
  "JOIN": "#52BD94", "AGGREGATE": "#f59e0b", "EPHEMERAL": "#64748b",
  "ROLLUP": "#10b981", "ENRICH": "#29B5E8", "MATERIALIZE": "#10b981",
};

const TRANSFORM_STAGES: {
  key: string; label: string; color: string; desc: string; sql: string;
  badges: string[];
  fields: { k: string; v: string; changed: boolean; was?: string }[];
}[] = [
  {
    key: "raw",
    label: "RAW",
    color: "#64748b",
    desc: "Lands exactly as it arrived. Unix timestamp, abbreviated names, no dedup guard.",
    sql: `-- append-only vault, verbatim from source
SELECT *
FROM   raw.experiment_events
WHERE  evt_type = 'EXPERIMENT_EXPOSURE'`,
    badges: [],
    fields: [
      { k: "experiment_id",  v: "'exp-001'",             changed: false },
      { k: "source_user_id", v: "'usr_abc123'",           changed: false },
      { k: "exposure_ts",    v: "1709683200",             changed: false },
      { k: "var_key",        v: "'var_b'",                changed: false },
      { k: "evt_type",       v: "'EXPERIMENT_EXPOSURE'",  changed: false },
    ],
  },
  {
    key: "staging",
    label: "stg_experiment_exposures",
    color: "#29B5E8",
    desc: "Cast, renamed, deduped. One model per source, no business logic.",
    sql: `SELECT
  experiment_id,
  source_user_id           AS user_id,
  TO_TIMESTAMP_NTZ(
    exposure_ts)           AS exposure_at,
  var_key                  AS variation_key,
  DATE(exposure_at)        AS exposure_date
FROM raw.experiment_events
WHERE evt_type = 'EXPERIMENT_EXPOSURE'
QUALIFY ROW_NUMBER() OVER (
  PARTITION BY experiment_id,
               user_id, variation_key
  ORDER BY exposure_at
) = 1`,
    badges: ["RENAME ×2", "CAST", "DERIVE", "DEDUPE"],
    fields: [
      { k: "experiment_id",  v: "'exp-001'",                 changed: false },
      { k: "user_id",        v: "'usr_abc123'",               changed: true,  was: "source_user_id → renamed" },
      { k: "exposure_at",    v: "'2024-03-06 00:00:00 UTC'",  changed: true,  was: "1709683200 (unix epoch)" },
      { k: "variation_key",  v: "'var_b'",                    changed: true,  was: "var_key → renamed" },
      { k: "exposure_date",  v: "'2024-03-06'",               changed: true,  was: "derived from exposure_at" },
    ],
  },
  {
    key: "intermediate",
    label: "int_experiment_daily_stats",
    color: "#f59e0b",
    desc: "Ephemeral: no table cost. Joins to conversions and aggregates by day.",
    sql: `SELECT
  e.experiment_id,
  e.variation_key,
  e.exposure_date,
  COUNT(DISTINCT e.user_id)  AS exposures,
  COUNT(DISTINCT c.user_id)  AS conversions
FROM stg_experiment_exposures e
LEFT JOIN stg_experiment_conversions c
       ON e.experiment_id = c.experiment_id
      AND e.user_id       = c.user_id
GROUP BY 1, 2, 3`,
    badges: ["JOIN", "AGGREGATE", "EPHEMERAL"],
    fields: [
      { k: "experiment_id",  v: "'exp-001'",   changed: false },
      { k: "variation_key",  v: "'var_b'",      changed: false },
      { k: "exposure_date",  v: "'2024-03-06'", changed: false },
      { k: "exposures",      v: "847",          changed: true, was: "individual rows → counted" },
      { k: "conversions",    v: "124",          changed: true, was: "left join → counted" },
    ],
  },
  {
    key: "mart",
    label: "fact_experiment_results",
    color: "#10b981",
    desc: "Materialized table. Totals rolled up, winner detected, dimension context joined.",
    sql: `SELECT
  experiment_id, variation_key,
  SUM(exposures)       AS impression_count,
  SUM(conversions)     AS conversion_count,
  ROUND(
    SUM(conversions) /
    NULLIF(SUM(exposures), 0), 4)
                       AS conversion_rate,
  conversion_rate >
    LAG(conversion_rate) OVER (
      PARTITION BY experiment_id
      ORDER BY conversion_rate)
  AND variation_key != 'control'
                       AS is_winner,
  a.arr_tier
FROM int_experiment_results r
JOIN dim_account a USING (account_id)`,
    badges: ["ROLLUP", "ENRICH", "MATERIALIZE"],
    fields: [
      { k: "impression_count", v: "12,840",          changed: true,  was: "847 / day → summed" },
      { k: "conversion_count", v: "1,847",            changed: true,  was: "124 / day → summed" },
      { k: "conversion_rate",  v: "0.1439  (14.4%)",  changed: true,  was: "derived" },
      { k: "is_winner",        v: "true",             changed: true,  was: "derived" },
      { k: "arr_tier",         v: "'Enterprise'",     changed: true,  was: "from DIM_ACCOUNT" },
    ],
  },
];

// ── Sidebar navigation ───────────────────────────────────────────────────────

const NAV_SECTIONS = [
  { id: "problem",      label: "Problem"      },
  { id: "architecture", label: "Architecture" },
  { id: "identity",     label: "Identity"     },
  { id: "elt",          label: "Ingestion"    },
  { id: "dbt",          label: "dbt Models"   },
  { id: "modeling",     label: "Kimball"      },
  { id: "quality",      label: "Quality"      },
  { id: "publishing",   label: "Egress"       },
  { id: "enabled",      label: "Outcomes"     },
];

function SectionNav() {
  const [active, setActive] = React.useState<string>("problem");
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive((e.target as HTMLElement).id); });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV_SECTIONS.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return (
    <nav aria-label="Section navigation" className="section-rail" style={{ position: "fixed", right: "26px", top: "50%", transform: "translateY(-50%)", zIndex: 40, flexDirection: "column", gap: "5px" }}>
      {NAV_SECTIONS.map((s) => {
        const on = active === s.id;
        return (
          <a key={s.id} href={`#${s.id}`} aria-current={on ? "true" : undefined}
            style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "10px", textDecoration: "none", padding: "3px 0" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: on ? 700 : 500, color: on ? "#10b981" : "#4a4a68", whiteSpace: "nowrap", transition: "color .2s" }}>{s.label}</span>
            <span style={{ width: on ? "24px" : "12px", height: "3px", borderRadius: "2px", background: on ? "#10b981" : "#2a2a3a", boxShadow: on ? "0 0 8px rgba(16,185,129,0.4)" : "none", transition: "all .2s" }} />
          </a>
        );
      })}
    </nav>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  const [activeLayer, setActiveLayer]           = useState<string | null>(null);
  const [activeIdentifier, setActiveIdentifier] = useState<string | null>(null);
  const [activeModel, setActiveModel]           = useState<string | null>(null);
  const [activeQuery, setActiveQuery]           = useState<number | null>(null);

  // layer detail content
  const LAYER_DETAILS: Record<string, { title: string; body: string; items: string[] }> = {
    Ingestion: {
      title: "Ingestion layer: four services, four domains",
      body: "I chose parallel isolation over a unified orchestrator because each service loads a fundamentally different data shape at a different cadence. A Fivetran connector failure should never stall Segment event landing.",
      items: ["Segment: real-time product events via JS SDK + server-side calls", "Fivetran: SaaS systems (Salesforce, Zendesk, Stripe, Jira)", "Airbyte: supplemental long-tail connectors", "Snowpipe: streaming micro-batch for high-frequency sources"],
    },
    RAW: {
      title: "Raw layer: immutable, append-only, no logic",
      body: "Nothing transforms data here. Every source record lands exactly as it arrived: schema changes, nulls, duplicates and all. This is the insurance policy: when something breaks downstream, we can always replay from raw.",
      items: ["Append-only writes: no updates or deletes", "Source schema preserved verbatim", "Partition by loaded_at for efficient replay", "Downstream models never query raw directly"],
    },
    TRANSFORM: {
      title: "Transform layer: where business logic lives",
      body: "dbt owns this layer end to end. Staging models clean and cast. Intermediate models apply business logic. Mart models produce the conformed star schema. The key discipline: one concept per model, one model per concept.",
      items: ["Staging: cast, rename, deduplicate: no joins", "Intermediate: ephemeral, single-purpose logic nodes", "Mart: Kimball star schema, materialized as tables", "All tests run here: not_null, unique, relationships"],
    },
    REPORTING: {
      title: "Reporting layer: stable, consumer-facing contracts",
      body: "The reporting layer is a contract with our consumers. PowerBI and the in-house analytics platform query here: they never touch intermediate models. When I refactor a dbt model, the consumer's query doesn't break because the reporting interface is stable.",
      items: ["Product analytics: usage & adoption marts", "Application metrics: feature engagement", "AI billing: agent credit consumption & overages", "Published via Snowflake Private Share: zero data movement"],
    },
    Egress: {
      title: "Egress: three paths, three audiences",
      body: "Data leaves the warehouse three ways. Each path serves a different audience with different latency and format requirements. Reverse ETL is the most commercially visible: it puts warehouse-computed intelligence into the tools people already use.",
      items: ["Private Share: zero-copy to PowerBI, OA, external customers", "Reverse ETL: enriched profiles → Segment → Salesforce", "External Share: customer-facing data access for enterprise accounts"],
    },
  };

  const activeDetail      = activeLayer ? LAYER_DETAILS[activeLayer] : null;
  const activeModelDetail = activeModel  ? MODEL_DETAILS[activeModel]  : null;

  return (
    <div style={{ background: "#0a0a0f", color: "#e2e8f0" }} className="min-h-screen font-sans">

      <SectionNav />

      {/* ── Nav ──────────────────────────────────────────────────────── */}
      <nav style={{ background: "#0a0a0fcc", borderColor: "#1e1e2e", backdropFilter: "blur(12px)" }} className="sticky top-0 z-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div style={{ background: "#10b981", borderRadius: "6px" }} className="w-7 h-7 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2zM8 8h4v4H8z" fill="white" />
              </svg>
            </div>
            <span className="font-semibold text-sm tracking-tight" style={{ color: "#f1f5f9" }}>
              Data Engineering Foundation
            </span>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-0.5">
            <span className="text-xs font-semibold text-white">Wahid Tawsif Ratul</span>
            <span className="text-xs text-emerald-400">Data Scientist · Product Manager</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pb-24">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="pt-20 pb-16 border-b hero-section relative overflow-hidden" style={{ borderColor: "#1e1e2e" }}>
          {/* ambient glow */}
          <div aria-hidden className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #10b98118 0%, transparent 70%)" }} />

          <div className="relative flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: content */}
            <div className="flex-1 min-w-0">
              <div style={{ color: "#10b981", borderColor: "#10b98133" }} className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border rounded-full px-3 py-1 mb-6">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#10b981" }} />
                Case Study
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Data Engineering
                <br />
                <span className="gradient-heading">Foundation</span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
                You cannot build product intelligence on a broken foundation. When I joined,
                eight products were generating data that no one could join together. The warehouse
                didn&apos;t exist. The identity layer didn&apos;t exist. The answers the business
                needed weren&apos;t just missing: they were structurally impossible. I built
                the foundation that made them possible.
              </p>

              {/* Personal callout */}
              <div style={{ background: "#10b98108", borderColor: "#10b98128", borderLeft: "3px solid #10b981" }} className="border rounded-r-xl px-5 py-4 mb-10 max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#10b981" }}>
                  My role
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Sole analytics engineer on the platform. I designed the three-layer warehouse architecture,
                  negotiated the Segment tracking contract with eight product engineering teams, built the dbt
                  model suite, and operationalized the Reverse ETL pattern. Every layer here was designed,
                  built, and maintained by me: without a dedicated data engineering team.
                </p>
              </div>

              {/* Stat pills:5-column grid, no wrapping orphan */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { value: "3-Layer",      label: "Snowflake Architecture" },
                  { value: "4",            label: "Parallel ELT Services"  },
                  { value: "8",            label: "Products Instrumented"  },
                  { value: "Kimball",      label: "Dimensional Model"      },
                  { value: "Reverse ETL",  label: "Activation Pattern"     },
                ].map((stat) => (
                  <div key={stat.label} style={{ background: "#10b98115", borderColor: "#10b98133" }} className="border rounded-xl px-4 py-3 text-center stat-glow">
                    <div className="text-lg font-bold tracking-tight leading-snug" style={{ color: "#10b981" }}>{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-0.5 font-medium leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: mini architecture schematic */}
            <div className="hidden lg:flex flex-col items-center gap-0 pt-4 w-72 flex-shrink-0">
              {[
                { label: "Sources",    sub: "Segment · Fivetran · Airbyte",  color: "#64748b", bg: "#64748b12", border: "#64748b30" },
                { label: "RAW",        sub: "Immutable vault · append-only",  color: "#29B5E8", bg: "#29B5E812", border: "#29B5E830" },
                { label: "TRANSFORM",  sub: "dbt staging → intermediate → marts", color: "#FF694B", bg: "#FF694B12", border: "#FF694B30" },
                { label: "REPORTING",  sub: "Product · Billing · CS metrics",  color: "#10b981", bg: "#10b98115", border: "#10b98140" },
                { label: "Egress",     sub: "PowerBI · OA · Salesforce",       color: "#F2C811", bg: "#F2C81112", border: "#F2C81130" },
              ].map((layer, i) => (
                <React.Fragment key={layer.label}>
                  <div
                    style={{ background: layer.bg, border: `1px solid ${layer.border}`, borderRadius: "10px", padding: "12px 16px", width: "100%", boxShadow: i === 3 ? `0 0 18px ${layer.color}18` : "none" }}
                    className="transition-all"
                  >
                    <div style={{ fontWeight: 700, fontSize: "0.82rem", color: layer.color, letterSpacing: "0.04em", marginBottom: "3px" }}>{layer.label}</div>
                    <div style={{ fontSize: "0.7rem", color: "#64748b", lineHeight: 1.5 }}>{layer.sub}</div>
                  </div>
                  {i < 4 && (
                    <div className="flex flex-col items-center py-1">
                      <div style={{ width: "1px", height: "14px", background: "#10b98133" }} />
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M0 0l4 6 4-6" fill="#10b98144" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
              <div className="mt-3 text-xs text-slate-600 text-center">Data flows top → bottom</div>
            </div>
          </div>
        </section>

        {/* ── Story Arc ─────────────────────────────────────────────── */}
        <section className="py-8 border-b" style={{ borderColor: "#1e1e2e" }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest flex-shrink-0">Story Arc</span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              {[
                { ch: "01", label: "The Problem",  href: "#problem",      desc: "No foundation, no identity"   },
                { ch: "02", label: "The Platform",  href: "#architecture", desc: "Design, build, instrument"    },
                { ch: "03", label: "The Impact",    href: "#quality",      desc: "Observe, activate, measure"   },
              ].map((chapter, i) => (
                <React.Fragment key={chapter.ch}>
                  <a href={chapter.href} style={{ textDecoration: "none" }}>
                    <div style={{ background: "#10b98115", borderColor: "#10b98133" }} className="border rounded-lg px-4 py-2.5 flex items-center gap-3 hover:border-emerald-500 transition-colors">
                      <span style={{ color: "#10b981", fontFamily: "monospace" }} className="text-xs font-bold">Ch{chapter.ch}</span>
                      <div>
                        <div className="text-xs font-semibold text-white leading-tight">{chapter.label}</div>
                        <div className="text-xs text-slate-500">{chapter.desc}</div>
                      </div>
                    </div>
                  </a>
                  {i < 2 && (
                    <svg className="hidden sm:block mx-2 flex-shrink-0" width="18" height="10" viewBox="0 0 18 10" fill="none">
                      <path d="M0 5h14M11 2l3 3-3 3" stroke="#10b98155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ch01: The Problem ─────────────────────────────────────── */}
        <section id="problem" className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <ChapterBadge number="01" label="The Problem" />
          <SectionLabel>Context</SectionLabel>
          <SectionHeading>Eight products. Eight silos. No answers.</SectionHeading>
          <SectionDescription>
            When I took on the analytics function, every product was an island. Teams ran their own
            reporting: if they ran any at all. The question &ldquo;how many accounts use more than
            two products?&rdquo; required a week of spreadsheet work. That was the baseline I was
            starting from.
          </SectionDescription>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "No shared identity",
                body: "Each product tracked users with its own identifier. A user in the experimentation product and the same user in the content product were unrelated rows with no bridge. Cross-product analysis was structurally impossible, not just difficult.",
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="12" r="4" stroke="#f43f5e" strokeWidth="1.8"/><circle cx="16" cy="12" r="4" stroke="#f43f5e" strokeWidth="1.8"/><line x1="12" y1="8" x2="12" y2="16" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2"/></svg>),
                accent: "#f43f5e",
              },
              {
                title: "No ingestion standard",
                body: "Every team solved the data loading problem differently. Some had partial Segment instrumentation. Others had nothing. I inherited a collection of bespoke pipelines, one-off scripts, and products with zero event tracking whatsoever.",
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#f59e0b" strokeWidth="1.8"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#f59e0b" strokeWidth="1.8" opacity="0.6"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#f59e0b" strokeWidth="1.8" opacity="0.4"/><path d="M17.5 14v7M14 17.5h7" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/></svg>),
                accent: "#f59e0b",
              },
              {
                title: "Reporting built on sand",
                body: "PMs built dashboards on ad-hoc extracts and spreadsheet joins. No conformed dimensions, no ARR linkage, no shared semantic layer. Every report was a one-off rebuild. When the data changed, nothing cascaded: people just quietly stopped trusting the numbers.",
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#64748b" strokeWidth="1.8"/><path d="M3 9h18M9 9v12" stroke="#64748b" strokeWidth="1.5"/><path d="M14 14l-3 3 3 3" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"/></svg>),
                accent: "#64748b",
              },
            ].map(({ title, body, icon, accent }) => (
              <div key={title} className="card-hover" style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: "14px", padding: "22px" }}>
                <div className="flex items-start gap-3 mb-4">
                  <div style={{ background: `${accent}12`, borderRadius: "8px", padding: "8px", flexShrink: 0 }}>{icon}</div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.3, marginTop: "6px" }}>{title}</h3>
                </div>
                <p style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.75 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <ChapterTransition from="The Problem" to="The Platform" />

        {/* ── Ch02: Architecture ────────────────────────────────────── */}
        <section id="architecture" className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <ChapterBadge number="02" label="The Platform" />
          <SectionLabel>Architecture</SectionLabel>
          <SectionHeading>Three-Layer Snowflake Architecture</SectionHeading>
          <SectionDescription>
            I designed a medallion-style architecture with hard boundaries between each layer.
            Hover any column below to see the design intent behind each boundary decision.
          </SectionDescription>

          {/* Interactive architecture diagram */}
          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[680px]">
              <div className="flex items-stretch gap-3">
                {[
                  {
                    key: "Ingestion",
                    label: "Ingestion",
                    items: [
                      { name: "Segment",   sub: "Real-time events" },
                      { name: "Fivetran",  sub: "SaaS connectors"  },
                      { name: "Airbyte",   sub: "Supplemental"     },
                      { name: "Snowpipe",  sub: "Streaming"        },
                    ],
                  },
                  null, // arrow
                  {
                    key: "RAW",
                    label: "Layer 1: Raw",
                    single: { title: "Raw / Vault", desc: "Immutable source extracts. Append-only. No business logic. Source of truth for all downstream models." },
                  },
                  null,
                  {
                    key: "TRANSFORM",
                    label: "Layer 2: Transform",
                    items: [
                      { name: "Staging models",     sub: "Source cleaning & typing" },
                      { name: "Intermediate models", sub: "Business logic layer"     },
                      { name: "Kimball Star Schema", sub: "Dimensional models"       },
                    ],
                  },
                  null,
                  {
                    key: "REPORTING",
                    label: "Layer 3: Reporting",
                    items: [
                      { name: "Product Analytics", sub: "Usage & adoption marts"  },
                      { name: "Application Metrics", sub: "Feature engagement"    },
                      { name: "AI Orchestration Billing", sub: "Usage & overage models" },
                    ],
                  },
                  null,
                  {
                    key: "Egress",
                    label: "Egress",
                    items: [
                      { name: "Private Share", sub: "PowerBI · OA · External"    },
                      { name: "Reverse ETL",   sub: "→ Segment → Salesforce"     },
                      { name: "External Share", sub: "Customer data access"      },
                    ],
                  },
                ].map((col, i) => {
                  if (col === null) {
                    return (
                      <div key={i} className="flex items-center">
                        <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
                          <path d="M0 8h24M20 4l4 4-4 4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    );
                  }
                  const isActive = activeLayer === col.key;
                  return (
                    <div
                      key={col.key}
                      className="flex-1 flex flex-col transition-all duration-200"
                      style={{
                        background: isActive ? "#10b98118" : "#16161f",
                        borderColor: isActive ? "#10b98155" : "#1e1e2e",
                        border: `1px solid ${isActive ? "#10b98155" : "#1e1e2e"}`,
                        borderRadius: "12px",
                        padding: "16px",
                        cursor: "pointer",
                        boxShadow: isActive ? "0 0 24px #10b98122" : "none",
                      }}
                      onMouseEnter={() => setActiveLayer(col.key)}
                      onMouseLeave={() => setActiveLayer(null)}
                    >
                      <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: isActive ? "#10b981" : "#64748b" }}>
                        {col.label}
                      </div>
                      {col.single ? (
                        <div style={{ border: `1px solid ${isActive ? "#10b98155" : "#10b98133"}`, borderRadius: "8px", padding: "12px", flex: 1 }}>
                          <div className="font-bold text-sm mb-1" style={{ color: "#10b981" }}>{col.single.title}</div>
                          <div className="text-xs text-slate-400 leading-relaxed">{col.single.desc}</div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-2 flex-1">
                          {col.items!.map((item) => (
                            <div key={item.name} style={{ background: "#0a0a0f", border: `1px solid ${isActive ? "#10b98133" : "#1e1e2e"}`, borderRadius: "8px", padding: "8px 10px" }}>
                              <div className="text-sm font-semibold" style={{ color: isActive ? "#10b981" : "#f1f5f9" }}>{item.name}</div>
                              <div className="text-xs text-slate-500">{item.sub}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Detail panel */}
              <div style={{ minHeight: "96px", transition: "all 0.2s ease", marginTop: "12px" }}>
                {activeDetail ? (
                  <div style={{ background: "#10b98110", border: "1px solid #10b98133", borderRadius: "12px", padding: "18px 22px" }}>
                    <div className="font-semibold text-sm mb-2" style={{ color: "#10b981" }}>{activeDetail.title}</div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-3">{activeDetail.body}</p>
                    <ul className="flex flex-col gap-1">
                      {activeDetail.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                          <span style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }}>›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div style={{ border: "1px dashed #1e1e2e", borderRadius: "12px", padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="text-xs text-slate-600">Hover a column to see the design intent behind that boundary</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Identity Architecture ─────────────────────────────────── */}
        <section id="identity" className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>Identity Architecture</SectionLabel>
          <SectionHeading>Cross-Product Identity Resolution</SectionHeading>
          <SectionDescription>
            The hardest engineering problem wasn&apos;t the warehouse: it was identity. How do you
            join a user&apos;s behaviour across eight products when each product issues its own
            identifiers? I designed a three-level resolution chain. Click any identifier to trace
            its role in the resolution path.
          </SectionDescription>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: interactive resolution chain */}
            <div style={{ background: "#16161f", borderColor: "#1e1e2e" }} className="border rounded-xl p-6">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">Resolution chain: click to explore</div>

              {[
                {
                  key: "mcid",
                  code: "MCId",
                  label: "Master Customer ID",
                  badge: "anonymous_id",
                  badgeColor: "#52BD94",
                  desc: activeIdentifier === "mcid"
                    ? "Set by the Segment JS SDK on first page load: before any login. The Master Customer ID (MCId) is the Turnstile Provisioning system's persistent anonymous identifier, captured from Salesforce CRM's identity graph. It survives browser sessions and enables pre-auth funnel tracking that would otherwise be lost at the login seam."
                    : "Anonymous identifier. Set on first page load by Segment JS SDK. Sourced from Turnstile Provisioning via Salesforce CRM.",
                  color: "#52BD94",
                  arrowLabel: "alias() call bridges MCId → userId at login",
                },
                {
                  key: "userId",
                  code: "userId",
                  label: "Authenticated User",
                  badge: "product auth token",
                  badgeColor: "#10b981",
                  desc: activeIdentifier === "userId"
                    ? "Set on login via the product's authentication system. Segment's alias() call is fired immediately after authentication: it retroactively merges all pre-auth MCId history onto the new userId. Without alias(), the user appears as two separate profiles: one anonymous, one authenticated, with no connection."
                    : "Set on login. Segment alias() retroactively merges the MCId history onto this identifier.",
                  color: "#10b981",
                  arrowLabel: "group() call attaches account context",
                },
                {
                  key: "groupId",
                  code: "groupId",
                  label: "Account / Organisation",
                  badge: "group() call",
                  badgeColor: "#29B5E8",
                  desc: activeIdentifier === "groupId"
                    ? "Fired via Segment's group() call when the user joins or switches an organisation. This is the cross-product join key: the same groupId appears across the experimentation, content, and AI orchestration platform products. Without it, you can answer user-level questions but never account-level ones. Billing, health scores, and expansion analysis all operate at this level."
                    : "Org-level identifier. The cross-product join key: same groupId across all 8 products.",
                  color: "#29B5E8",
                  arrowLabel: null,
                },
              ].map(({ key, code, label, badge, badgeColor, desc, color, arrowLabel }, idx) => (
                <React.Fragment key={key}>
                  <div
                    onClick={() => setActiveIdentifier(activeIdentifier === key ? null : key)}
                    style={{
                      background: activeIdentifier === key ? `${color}15` : `${color}0d`,
                      border: `1px solid ${activeIdentifier === key ? color + "55" : color + "28"}`,
                      borderRadius: "10px",
                      padding: "14px 16px",
                      cursor: "pointer",
                      transition: "all 0.18s ease",
                      boxShadow: activeIdentifier === key ? `0 0 20px ${color}18` : "none",
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <code style={{ color, fontFamily: "monospace", fontWeight: 700, fontSize: "0.88rem" }}>{code}</code>
                      <span style={{ background: `${badgeColor}15`, color: badgeColor, fontSize: "0.65rem", fontWeight: 600, padding: "2px 8px", borderRadius: "999px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{badge}</span>
                    </div>
                    <div style={{ fontWeight: 600, color: "#f1f5f9", fontSize: "0.88rem", marginBottom: "5px" }}>{label}</div>
                    <div style={{ color: activeIdentifier === key ? "#cbd5e1" : "#94a3b8", fontSize: "0.8rem", lineHeight: 1.65, transition: "color 0.15s ease" }}>{desc}</div>
                    <div className="mt-2 text-xs" style={{ color: color + "99" }}>
                      {activeIdentifier === key ? "Click to collapse" : "Click to expand"}
                    </div>
                  </div>

                  {arrowLabel && (
                    <div className="flex items-center gap-3 py-2 pl-5">
                      <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
                        <path d="M5 0v16M1 12l4 4 4-4" stroke={color + "66"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ color: color + "88", fontSize: "0.72rem", fontFamily: "monospace" }}>{arrowLabel}</span>
                    </div>
                  )}
                  {idx === 2 && (
                    <>
                      <div className="flex items-center gap-3 py-2 pl-5">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
                          <path d="M5 0v16M1 12l4 4 4-4" stroke="#29B5E866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ color: "#29B5E888", fontSize: "0.72rem", fontFamily: "monospace" }}>resolved in warehouse → conformed dimensions</span>
                      </div>
                      <div style={{ background: "#10b98112", border: "1px solid #10b98135", borderRadius: "10px", padding: "14px 16px" }}>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {["DIM_CUSTOMER_USERS", "DIM_ACCOUNT"].map((t) => (
                            <code key={t} style={{ color: "#10b981", fontFamily: "monospace", fontWeight: 700, fontSize: "0.8rem", background: "#10b98118", padding: "2px 8px", borderRadius: "5px" }}>{t}</code>
                          ))}
                        </div>
                        <div style={{ color: "#94a3b8", fontSize: "0.8rem", lineHeight: 1.65 }}>
                          All three identifiers resolved into a single user-to-account mapping. Every product&apos;s events join to the same account record.
                        </div>
                      </div>
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Right: cross-product example + Q&A cards */}
            <div className="flex flex-col gap-4">
              <div style={{ background: "#111118", borderColor: "#1e1e2e" }} className="border rounded-xl p-5">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                  What this enables: one query, eight products
                </div>
                <div className="flex flex-col gap-1.5">
                  {[
                    { product: "Experimentation",    event: "EXPERIMENT_RUN",    resolved: "acme-corp" },
                    { product: "Content Management", event: "CONTENT_PUBLISHED", resolved: "acme-corp" },
                    { product: "AI Orchestration",   event: "AGENT_EXECUTED",    resolved: "acme-corp" },
                    { product: "Campaign",           event: "CAMPAIGN_SENT",     resolved: "acme-corp" },
                  ].map((row) => (
                    <div key={row.product} className="flex items-center gap-3 text-xs" style={{ background: "#16161f", borderRadius: "7px", padding: "8px 10px" }}>
                      <span className="font-semibold flex-shrink-0" style={{ color: "#f1f5f9", minWidth: "140px" }}>{row.product}</span>
                      <code style={{ color: "#52BD94", fontFamily: "monospace", fontSize: "0.72rem", flex: 1 }}>{row.event}</code>
                      <span style={{ background: "#10b98115", color: "#10b981", padding: "1px 7px", borderRadius: "999px", fontFamily: "monospace", fontSize: "0.7rem", fontWeight: 600, flexShrink: 0 }}>→ {row.resolved}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs leading-relaxed" style={{ color: "#64748b" }}>
                  Four events from four products, one resolved account key. Without the identity layer, these are four unrelated rows.
                </div>
              </div>

              {[
                {
                  q: "Why MCId if we already have userId?",
                  a: "Users browse, read docs, and evaluate before they log in. MCId captures that pre-auth journey. Without it, attribution for top-of-funnel behaviour is permanently lost at the login boundary: you only see what users do after they sign in.",
                },
                {
                  q: "Why is alias() the critical call?",
                  a: "Without alias(), pre-auth and post-auth events are two separate user profiles with no connection. alias() merges them retroactively, so a user who evaluated three features before signing up has a complete, continuous history.",
                },
                {
                  q: "Why groupId and not just userId?",
                  a: "Multiple users share one account. Billing, health scores, and expansion signals all operate at the account level. groupId is what makes account-level analytics possible, and account-level is where commercial decisions get made.",
                },
                {
                  q: "What breaks without this layer?",
                  a: "You can answer product-level questions but not business questions. How many accounts are on two or more products? Which accounts are at churn risk across the platform? Those queries need the conformed account dimension to exist.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="card-hover" style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: "12px", padding: "16px 18px" }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#10b981", marginBottom: "6px" }}>{q}</div>
                  <p style={{ fontSize: "0.82rem", color: "#94a3b8", lineHeight: 1.7 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ELT Services ──────────────────────────────────────────── */}
        <section id="elt" className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>ELT Services</SectionLabel>
          <SectionHeading>Four Parallel Ingestion Services</SectionHeading>
          <SectionDescription>
            Each service targets a different data domain at a different cadence, isolated so a
            failure in one doesn&apos;t stall the others. This was a deliberate choice against
            the &ldquo;single orchestrator&rdquo; pattern.
          </SectionDescription>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Segment",  badge: "Primary event bus",    cadence: "Real-time",  volume: 100, description: "Real-time product event streams from all 8 products via JS SDK and server-side track calls. The highest-frequency ingestion path and the entry point for the identity layer." },
              { name: "Fivetran", badge: "SaaS extracts",        cadence: "Scheduled",  volume: 85,  description: "Managed connectors for Salesforce, Zendesk, Stripe, Jira, and other business systems. Scheduled extraction with automatic schema drift handling and backfill support." },
              { name: "dbt",      badge: "Transformation layer", cadence: "On-demand",  volume: 65,  description: "Transformation models run against Snowflake compute. Staging, intermediate, and mart layers: the logic layer that turns raw events into analytics-ready conformed tables." },
              { name: "Airbyte", badge: "Supplemental",          cadence: "Periodic",   volume: 18,  description: "Selected connectors for data streams not covered by Fivetran. Provides flexibility for long-tail integrations without locking into a single vendor." },
            ].map((svc) => {
              const t = DE_TOOLS[svc.name];
              return (
                <div key={svc.name} className="card-hover" style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: "14px", padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="flex items-start justify-between">
                    {t && <div style={{ width: 28, height: 28 }}>{t.svg}</div>}
                    <div style={{ background: "#10b98115", color: "#10b981" }} className="text-xs font-semibold px-2 py-1 rounded-md">{svc.badge}</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white mb-2">{svc.name}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{svc.description}</p>
                  </div>
                  {/* cadence bar */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-slate-500">{svc.cadence}</span>
                      <span className="text-xs font-semibold" style={{ color: t?.color ?? "#10b981" }}>{svc.volume}%</span>
                    </div>
                    <div style={{ height: "4px", background: "#1e1e2e", borderRadius: "99px", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${svc.volume}%`, background: t?.color ?? "#10b981", borderRadius: "99px", opacity: 0.85 }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ background: "#10b98110", borderColor: "#10b98133" }} className="mt-6 border rounded-xl p-5">
            <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#10b981" }}>Why parallel isolation matters</div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              A single ingestion orchestrator is a single point of failure across all data sources. Parallel
              independent services mean a connector outage affects only that source domain: event data
              continues landing while SaaS extracts retry, and dbt runs on whatever raw data is available.
            </p>
          </div>
        </section>

        {/* ── Design Rationale ──────────────────────────────────────── */}
        <section id="rationale" className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>Design Rationale</SectionLabel>
          <SectionHeading>Why these boundaries, and why they hold</SectionHeading>
          <SectionDescription>
            The medallion architecture is common. Making it durable under real operational pressure is
            the hard part: schema changes from upstream APIs, load contention, evolving consumer SLAs.
            These are the four decisions that have held up.
          </SectionDescription>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              {
                decision: "Immutable RAW layer",
                rationale: "No business logic in the raw layer means schema changes in source systems never break downstream consumers. When Salesforce adds a field, it lands in the raw vault as-is: dbt decides what to do with it. This boundary saved the platform repeatedly when upstream APIs changed without notice.",
                color: "#52BD94",
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#52BD94" strokeWidth="1.8"/><path d="M3 9h18" stroke="#52BD94" strokeWidth="1.5" opacity="0.5"/><path d="M8 6h.01M12 6h.01" stroke="#52BD94" strokeWidth="2" strokeLinecap="round"/><path d="M8 14h8M8 17h5" stroke="#52BD94" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/></svg>),
              },
              {
                decision: "Separate TRANSFORM from REPORTING",
                rationale: "Keeping staging and intermediate models in the transform layer and final marts in reporting gives consumers a stable interface. PowerBI and the in-house analytics platform query the reporting layer: they never see an intermediate model. When I refactor a dbt model, the consumer's query doesn't break.",
                color: "#10b981",
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h10M4 18h7" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round"/><circle cx="18" cy="17" r="3" stroke="#10b981" strokeWidth="1.8"/><path d="M16.5 17h3M18 15.5v3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/></svg>),
              },
              {
                decision: "Four parallel ELT services",
                rationale: "Segment, Fivetran, Airbyte, and Snowpipe each load a different data shape at a different cadence. A unified orchestrator would have made them each other's dependency. Parallel isolation means a Fivetran outage doesn't stall Segment event landing.",
                color: "#29B5E8",
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="5" r="2.5" stroke="#29B5E8" strokeWidth="1.8"/><circle cx="19" cy="5" r="2.5" stroke="#29B5E8" strokeWidth="1.8"/><circle cx="5" cy="19" r="2.5" stroke="#29B5E8" strokeWidth="1.8"/><circle cx="19" cy="19" r="2.5" stroke="#29B5E8" strokeWidth="1.8"/><path d="M7.5 5h9M7.5 19h9M5 7.5v9M19 7.5v9" stroke="#29B5E8" strokeWidth="1.5" strokeLinecap="round"/></svg>),
              },
              {
                decision: "Reverse ETL as a first-class pattern",
                rationale: "Derived intelligence sitting in Snowflake is advisory. The moment I pushed enriched account data: health scores, overage signals, engagement flags: back into Segment and through to Salesforce, CS reps saw it in their workflow without logging into a BI tool. That's when data engineering becomes commercially visible.",
                color: "#F2C811",
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="#F2C811" strokeWidth="1.8"/><path d="M8 12h8M14 9l3 3-3 3" stroke="#F2C811" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
            ].map(({ decision, rationale, color, icon }) => (
              <div key={decision} className="card-hover" style={{ background: "#111118", border: "1px solid #1e1e2e", borderLeft: `3px solid ${color}`, borderRadius: "14px", padding: "20px 24px" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div style={{ background: `${color}15`, borderRadius: "8px", padding: "7px", flexShrink: 0 }}>{icon}</div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#f1f5f9" }}>{decision}</h3>
                </div>
                <p style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.72 }}>{rationale}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── dbt Transformation Suite ───────────────────────────────── */}
        <section id="dbt" className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>dbt Transformation Suite</SectionLabel>
          <SectionHeading>Experimentation Reporting DAG</SectionHeading>
          <SectionDescription>
            The experimentation reporting DAG is the most business-critical pipeline on the platform.
            Product managers, data scientists, and engineers all pull from the same downstream tables.
            When it breaks, three teams feel it at once. Click any model chip to see what it does.
          </SectionDescription>

          <div className="mt-10 flex flex-col gap-0">
            {[
              {
                key: "source", label: "SOURCE", color: "#64748b",
                desc: "Raw experiment event tables: append-only, no transforms applied",
                nodes: [{ label: "Experiment Event Sources", sub: "exposures · conversions · flag evaluations" }],
              },
              {
                key: "staging", label: "STAGING", color: "#29B5E8",
                desc: "Cast · rename · deduplicate: one model per source, no business logic",
                nodes: [
                  { label: "stg_experiment_exposures" },
                  { label: "stg_experiment_conversions" },
                  { label: "stg_experiment_flags" },
                  { label: "stg_accounts" },
                ],
              },
              {
                key: "intermediate", label: "INTERMEDIATE", color: "#f59e0b",
                desc: "Ephemeral: statistical aggregation and variation rollups, no table cost",
                nodes: [
                  { label: "int_experiment_daily_stats" },
                  { label: "int_variation_aggregates" },
                  { label: "int_experiment_results" },
                ],
              },
              {
                key: "marts", label: "MARTS", color: "#10b981",
                desc: "Consumer-facing conformed tables: materialized in reporting layer",
                nodes: [
                  { label: "fact_experiment_results" },
                  { label: "fact_daily_impressions" },
                  { label: "dim_experiment" },
                  { label: "dim_account" },
                ],
              },
              {
                key: "consumers", label: "CONSUMERS", color: "#8b5cf6",
                desc: "One DAG, three audiences: experiment dashboards · stat analysis · flag health",
                nodes: [
                  { label: "Product Managers",  sub: "winner detection & dashboards" },
                  { label: "Data Science",       sub: "power analysis & stat testing" },
                  { label: "Engineering",        sub: "flag rollout health & coverage" },
                ],
              },
            ].map((layer, i, arr) => (
              <React.Fragment key={layer.key}>
                {/* Layer swimlane */}
                <div style={{ display: "flex", alignItems: "stretch", borderRadius: "12px", overflow: "hidden", border: `1px solid ${layer.color}28` }}>
                  {/* Left label strip */}
                  <div style={{ width: "96px", flexShrink: 0, background: `${layer.color}18`, borderRight: `2px solid ${layer.color}44`, padding: "16px 10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "9px", fontWeight: 800, color: layer.color, textTransform: "uppercase", letterSpacing: "0.12em", textAlign: "center", lineHeight: 1.3 }}>{layer.label}</span>
                    <div style={{ width: "24px", height: "1px", background: `${layer.color}44`, marginTop: "4px" }} />
                  </div>
                  {/* Right content */}
                  <div style={{ flex: 1, background: `${layer.color}06`, padding: "14px 18px" }}>
                    <div style={{ fontSize: "0.7rem", color: "#64748b", marginBottom: "10px", fontStyle: "italic" }}>{layer.desc}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {layer.nodes.map((node) => {
                        const hasDetail   = !!MODEL_DETAILS[node.label];
                        const isActive    = activeModel === node.label;
                        return (
                          <div
                            key={node.label}
                            onClick={() => hasDetail ? setActiveModel(isActive ? null : node.label) : undefined}
                            style={{
                              background: isActive ? `${layer.color}22` : `${layer.color}12`,
                              border: `1px solid ${isActive ? layer.color + "70" : layer.color + "35"}`,
                              borderRadius: "8px",
                              padding: "6px 12px",
                              display: "flex",
                              alignItems: "baseline",
                              gap: "6px",
                              cursor: hasDetail ? "pointer" : "default",
                              transition: "all 0.15s ease",
                              boxShadow: isActive ? `0 0 10px ${layer.color}20` : "none",
                            }}
                          >
                            <span style={{ color: layer.color, fontFamily: "monospace", fontSize: "0.8rem", fontWeight: 700 }}>{node.label}</span>
                            {"sub" in node && node.sub && (
                              <span style={{ color: "#64748b", fontSize: "0.7rem" }}>{node.sub}</span>
                            )}
                            {hasDetail && (
                              <span style={{ color: layer.color + "80", fontSize: "0.62rem" }}>{isActive ? "▲" : "›"}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Arrow connector between layers */}
                {i < arr.length - 1 && (
                  <div style={{ display: "flex", alignItems: "center", height: "28px", paddingLeft: "48px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                      <div style={{ width: "1px", height: "14px", background: `${arr[i + 1].color}55` }} />
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M0 0L5 7L10 0" fill={arr[i + 1].color + "88"} />
                      </svg>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* ── Model detail panel ── */}
          {activeModelDetail && (
            <div style={{ marginTop: "12px", background: `${activeModelDetail.color}0e`, border: `1px solid ${activeModelDetail.color}38`, borderRadius: "14px", padding: "20px 24px", transition: "all 0.2s ease" }}>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <code style={{ color: activeModelDetail.color, fontFamily: "monospace", fontWeight: 700, fontSize: "0.9rem" }}>{activeModel}</code>
                <span style={{ background: `${activeModelDetail.color}18`, color: activeModelDetail.color, border: `1px solid ${activeModelDetail.color}30`, borderRadius: "999px", fontSize: "0.65rem", fontWeight: 700, padding: "2px 10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{activeModelDetail.layer}</span>
                <button
                  onClick={() => setActiveModel(null)}
                  style={{ marginLeft: "auto", background: "transparent", border: "none", color: "#64748b", cursor: "pointer", fontSize: "0.8rem", padding: "2px 6px" }}
                >✕</button>
              </div>
              <p style={{ fontSize: "0.85rem", color: "#cbd5e1", lineHeight: 1.72, marginBottom: "16px" }}>{activeModelDetail.purpose}</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#64748b" }}>Key transformation logic</div>
                  <pre style={{ background: "#0a0a0f", border: `1px solid ${activeModelDetail.color}22`, borderRadius: "8px", padding: "12px 14px", fontFamily: "monospace", fontSize: "0.75rem", color: activeModelDetail.color, lineHeight: 1.7, overflowX: "auto", margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{activeModelDetail.logic}</pre>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#64748b" }}>Output</div>
                  <p style={{ fontSize: "0.84rem", color: "#94a3b8", lineHeight: 1.72 }}>{activeModelDetail.output}</p>
                </div>
              </div>
            </div>
          )}
          {!activeModelDetail && (
            <div style={{ marginTop: "10px", border: "1px dashed #1e1e2e", borderRadius: "10px", padding: "12px 18px", textAlign: "center" }}>
              <span className="text-xs text-slate-600">Click any model chip to see its purpose, transformation logic, and output</span>
            </div>
          )}

          {/* ── Transformation story ── */}
          <div className="mt-14">
            <div className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#64748b" }}>Transformation walkthrough</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Follow one event through the pipeline</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-2xl">
              A single raw exposure event enters at the top. By the time it reaches the mart,
              it has been cleaned, typed, aggregated, and enriched with business context.
              Each stage does exactly one job.
            </p>

            <div className="flex flex-col gap-0">
              {TRANSFORM_STAGES.map((stage, idx, arr) => (
                <React.Fragment key={stage.key}>

                  {/* Stage card */}
                  <div style={{ background: "#111118", border: `1px solid ${stage.color}28`, borderLeft: `3px solid ${stage.color}`, borderRadius: "12px", overflow: "hidden" }}>

                    {/* Header */}
                    <div style={{ padding: "12px 20px", borderBottom: `1px solid ${stage.color}18`, display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                      <code style={{ fontFamily: "monospace", fontWeight: 800, fontSize: "0.88rem", color: stage.color, flexShrink: 0 }}>{stage.label}</code>
                      {stage.badges.length > 0 && (
                        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                          {stage.badges.map(b => {
                            const bc = BADGE_COLORS[b.split(" ")[0]] ?? "#64748b";
                            return (
                              <span key={b} style={{ background: `${bc}15`, border: `1px solid ${bc}30`, color: bc, fontSize: "0.6rem", fontWeight: 700, padding: "2px 7px", borderRadius: "4px", textTransform: "uppercase" as const, letterSpacing: "0.07em" }}>{b}</span>
                            );
                          })}
                        </div>
                      )}
                      <span style={{ color: "#64748b", fontSize: "0.76rem", fontStyle: "italic", marginLeft: "auto" }} className="hidden sm:block">{stage.desc}</span>
                    </div>

                    {/* Body: SQL left, data right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div style={{ padding: "16px 20px", borderRight: "1px solid #1e1e2e", borderBottom: "1px solid #1e1e2e" }} className="lg:border-b-0">
                        <div style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#64748b", marginBottom: "8px" }}>SQL</div>
                        <pre style={{ fontFamily: "monospace", fontSize: "0.72rem", color: stage.color + "cc", lineHeight: 1.8, margin: 0, overflowX: "auto", whiteSpace: "pre" }}>{stage.sql}</pre>
                      </div>
                      <div style={{ padding: "16px 20px" }}>
                        <div style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#64748b", marginBottom: "8px" }}>Sample row</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          {stage.fields.map(field => (
                            <div key={field.k} style={{
                              display: "flex", alignItems: "flex-start", gap: "8px", padding: "5px 9px",
                              borderRadius: "6px",
                              background: field.changed ? `${stage.color}08` : "transparent",
                              border: `1px solid ${field.changed ? stage.color + "22" : "transparent"}`,
                            }}>
                              <code style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#64748b", flexShrink: 0, minWidth: "118px", paddingTop: "1px" }}>{field.k}</code>
                              <div>
                                {field.was && (
                                  <div style={{ fontFamily: "monospace", fontSize: "0.63rem", color: "#64748b", textDecoration: "line-through", opacity: 0.5, lineHeight: 1.3 }}>{field.was}</div>
                                )}
                                <code style={{ fontFamily: "monospace", fontSize: "0.75rem", color: field.changed ? stage.color : "#94a3b8", fontWeight: field.changed ? 700 : 400 }}>{field.v}</code>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connector */}
                  {idx < arr.length - 1 && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: "20px", paddingTop: "5px", paddingBottom: "5px" }}>
                      <div style={{ width: "1px", height: "18px", background: `${arr[idx + 1].color}44` }} />
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M0 0L4 6L8 0" fill={arr[idx + 1].color + "88"} />
                        </svg>
                        <span style={{ fontFamily: "monospace", fontSize: "0.67rem", color: arr[idx + 1].color + "88" }}>{arr[idx + 1].label}</span>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── Kimball Star Schema ────────────────────────────────────── */}
        <section id="modeling" className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>Data Modeling</SectionLabel>
          <SectionHeading>Kimball Star Schema</SectionHeading>
          <SectionDescription>
            I used Kimball&apos;s dimensional model throughout the platform. Not as a rigid prescription,
            but because it forces a discipline most analytics teams skip: before writing any SQL,
            you have to decide exactly what one row represents. Get that wrong, and every aggregate
            built on top of it is wrong too.
          </SectionDescription>

          {/* ── Dimensions vs Facts intuition ── */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div style={{ background: "#6366f110", border: "1px solid #6366f130", borderRadius: "14px", padding: "20px 22px" }}>
              <div className="flex items-center gap-3 mb-3">
                <div style={{ background: "#6366f118", borderRadius: "8px", padding: "8px", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16M4 10h10M4 14h6" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="18" cy="14" r="3" stroke="#818cf8" strokeWidth="1.8"/>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#818cf8" }}>Dimensions</span>
                  <span style={{ fontSize: "0.72rem", color: "#64748b", marginLeft: "10px", fontStyle: "italic" }}>WHO · WHAT · WHEN · WHERE</span>
                </div>
              </div>
              <p style={{ fontSize: "0.84rem", color: "#94a3b8", lineHeight: 1.72, marginBottom: "14px" }}>
                Think of dimensions as context. Which account? Which experiment? Which date? They&apos;re what turns a number into an answer. Every WHERE clause and GROUP BY in a real business question maps back to a dimension.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["DIM_ACCOUNT", "DIM_EXPERIMENT", "DIM_DATE", "DIM_CUSTOMER_USERS"].map(d => (
                  <code key={d} style={{ background: "#6366f118", border: "1px solid #6366f130", borderRadius: "6px", padding: "3px 9px", color: "#818cf8", fontFamily: "monospace", fontSize: "0.73rem", fontWeight: 700 }}>{d}</code>
                ))}
              </div>
            </div>
            <div style={{ background: "#10b98110", border: "1px solid #10b98130", borderRadius: "14px", padding: "20px 22px" }}>
              <div className="flex items-center gap-3 mb-3">
                <div style={{ background: "#10b98118", borderRadius: "8px", padding: "8px", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18 20V10M12 20V4M6 20v-6" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#10b981" }}>Facts</span>
                  <span style={{ fontSize: "0.72rem", color: "#64748b", marginLeft: "10px", fontStyle: "italic" }}>HOW MANY · HOW MUCH</span>
                </div>
              </div>
              <p style={{ fontSize: "0.84rem", color: "#94a3b8", lineHeight: 1.72, marginBottom: "14px" }}>
                Facts store what happened. Counts, sums, durations: anything you add up. The grain matters here: store at the finest level the business actually needs, because rolling up is easy. Going back in time to recover discarded detail is not.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["impression_count", "conversion_count", "revenue_impact", "credit_usage"].map(f => (
                  <code key={f} style={{ background: "#10b98115", border: "1px solid #10b98130", borderRadius: "6px", padding: "3px 9px", color: "#10b981", fontFamily: "monospace", fontSize: "0.73rem", fontWeight: 700 }}>{f}</code>
                ))}
              </div>
            </div>
          </div>

          {/* ── Visual 1: 4-Step Design Process ── */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: "01", title: "Business Process", color: "#64748b",
                question: "What business event are we measuring?",
                answer: "A/B experiment exposure: when a user is assigned to a variation, that assignment is the atomic unit. Every downstream metric traces back to this event.",
                icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#64748b" strokeWidth="1.8"/><path d="M8 12h8M12 8l4 4-4 4" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
              {
                num: "02", title: "Grain", color: "#29B5E8",
                question: "What does one row represent?",
                answer: "One user exposure per variation per experiment. Never the experiment summary: that's a derived aggregate. The grain preserves the ability to slice by date, account, device, or any future dimension.",
                icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="4" rx="1.5" stroke="#29B5E8" strokeWidth="1.8"/><rect x="3" y="10" width="12" height="4" rx="1.5" stroke="#29B5E8" strokeWidth="1.8" opacity="0.7"/><rect x="3" y="17" width="8" height="4" rx="1.5" stroke="#29B5E8" strokeWidth="1.8" opacity="0.4"/></svg>),
              },
              {
                num: "03", title: "Dimensions", color: "#f59e0b",
                question: "How do we describe each exposure?",
                answer: "DIM_EXPERIMENT (what test, which hypothesis), DIM_ACCOUNT (which customer), DIM_DATE (when, including fiscal context). These become every WHERE clause and GROUP BY.",
                icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 10h10M4 14h6" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"/><circle cx="18" cy="14" r="3" stroke="#f59e0b" strokeWidth="1.8"/></svg>),
              },
              {
                num: "04", title: "Facts / Measures", color: "#10b981",
                question: "What numeric values do we store?",
                answer: "impression_count, conversion_count, revenue_impact: all additive. Sum by account for ARR attribution. Sum by day for velocity trends. The measures never change; the slicing does.",
                icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/></svg>),
              },
            ].map(({ num, title, color, question, answer, icon }) => (
              <div key={num} className="card-hover" style={{ background: "#111118", border: `1px solid ${color}25`, borderTop: `3px solid ${color}`, borderRadius: "12px", padding: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontFamily: "monospace", fontSize: "1.1rem", fontWeight: 800, color, opacity: 0.45 }}>{num}</span>
                  <div style={{ background: `${color}15`, borderRadius: "7px", padding: "5px" }}>{icon}</div>
                </div>
                <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: "0.9rem" }}>{title}</div>
                <div style={{ fontSize: "0.7rem", color: "#64748b", fontStyle: "italic", lineHeight: 1.4 }}>{question}</div>
                <div style={{ background: `${color}0c`, border: `1px solid ${color}20`, borderRadius: "8px", padding: "10px 12px", flex: 1 }}>
                  <p style={{ fontSize: "0.78rem", color: "#94a3b8", lineHeight: 1.68 }}>{answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Visual 2: Grain Illustration ── */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Wrong: experiment-level grain */}
            <div style={{ background: "#111118", border: "1px solid #f43f5e28", borderRadius: "14px", padding: "18px" }}>
              <div className="flex items-center gap-2 mb-4">
                <div style={{ background: "#f43f5e18", border: "1px solid #f43f5e33", borderRadius: "6px", padding: "3px 10px" }}>
                  <span style={{ color: "#f43f5e", fontSize: "0.7rem", fontWeight: 700 }}>Experiment-level grain</span>
                </div>
                <span className="text-xs text-slate-500">one row per experiment</span>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.72rem" }}>
                  <thead>
                    <tr>
                      {["experiment_id", "winner", "total_impressions"].map(h => (
                        <th key={h} style={{ textAlign: "left", padding: "5px 10px", color: "#64748b", fontWeight: 600, borderBottom: "1px solid #1e1e2e", fontFamily: "monospace", letterSpacing: "0.03em" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["exp-001", "variation_b", "45,200"],
                      ["exp-002", "control",     "12,800"],
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #16161f" }}>
                        {row.map((cell, j) => (
                          <td key={j} style={{ padding: "6px 10px", color: j === 2 ? "#f43f5e" : "#94a3b8", fontFamily: "monospace" }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: "12px", background: "#f43f5e0a", border: "1px solid #f43f5e22", borderRadius: "8px", padding: "10px 12px" }}>
                <p style={{ fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.65 }}>
                  Can&apos;t answer: how did impressions ramp day by day? Which account segment drove conversion? Daily velocity and cohort analysis are structurally impossible.
                </p>
              </div>
            </div>

            {/* Right: exposure-level grain */}
            <div style={{ background: "#111118", border: "1px solid #10b98128", borderRadius: "14px", padding: "18px" }}>
              <div className="flex items-center gap-2 mb-4">
                <div style={{ background: "#10b98118", border: "1px solid #10b98133", borderRadius: "6px", padding: "3px 10px" }}>
                  <span style={{ color: "#10b981", fontSize: "0.7rem", fontWeight: 700 }}>Exposure-level grain</span>
                </div>
                <span className="text-xs text-slate-500">one row per user per variation</span>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.72rem" }}>
                  <thead>
                    <tr>
                      {["experiment_id", "variation_key", "exposure_date", "account_id", "converted"].map(h => (
                        <th key={h} style={{ textAlign: "left", padding: "5px 10px", color: "#64748b", fontWeight: 600, borderBottom: "1px solid #1e1e2e", fontFamily: "monospace", letterSpacing: "0.03em" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["exp-001", "control",     "2024-03-15", "acme-001", "0"],
                      ["exp-001", "variation_b", "2024-03-15", "beta-002", "1"],
                      ["exp-001", "control",     "2024-03-16", "acme-001", "0"],
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #16161f" }}>
                        {row.map((cell, j) => (
                          <td key={j} style={{ padding: "6px 10px", color: j === 4 ? "#10b981" : "#94a3b8", fontFamily: "monospace", whiteSpace: "nowrap" }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: "12px", background: "#10b9810a", border: "1px solid #10b98122", borderRadius: "8px", padding: "10px 12px" }}>
                <p style={{ fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.65 }}>
                  Aggregate to any level: daily ramp, account-cohort conversion, variation winner detection. You can always roll up: you can never recover collapsed detail.
                </p>
              </div>
            </div>
          </div>

          {/* Star topology diagram */}
          <div className="mt-10 mb-8" style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: "16px", padding: "24px" }}>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#64748b" }}>Join topology</span>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1.5"><div style={{ width: 10, height: 10, borderRadius: 2, background: "#6366f130", border: "1.5px solid #6366f166" }} /><span className="text-xs text-slate-500">Dimension</span></div>
                <div className="flex items-center gap-1.5"><div style={{ width: 10, height: 10, borderRadius: 2, background: "#10b98120", border: "1.5px solid #10b98155" }} /><span className="text-xs text-slate-500">Fact</span></div>
                <div className="flex items-center gap-1.5"><div style={{ width: 24, height: 2, background: "#10b981", borderRadius: 1 }} /><span className="text-xs text-slate-500">Conformed join</span></div>
                <div className="flex items-center gap-1.5"><div style={{ width: 24, height: 2, background: "#6366f166", borderRadius: 1, borderTop: "1px dashed #6366f155" }} /><span className="text-xs text-slate-500">Domain join</span></div>
              </div>
            </div>
            <svg viewBox="0 0 760 330" style={{ width: "100%", height: "auto" }} aria-label="Star schema topology diagram">
              {/* ── Connection lines (draw behind nodes) ── */}
              {/* DIM_ACCOUNT (left, y=90) → all 3 facts:strong emerald */}
              <path d="M 272,90 C 360,90 360,90 448,90"   stroke="#10b981" strokeWidth="2" fill="none" opacity="0.65"/>
              <path d="M 272,90 C 360,90 360,195 448,195" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.65"/>
              <path d="M 272,90 C 360,90 360,300 448,300" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.65"/>
              {/* DIM_CUSTOMER_USERS (left, y=195) → FACT_EXPERIMENT + FACT_BILLING:dashed indigo */}
              <path d="M 272,195 C 360,195 360,90 448,90"   stroke="#818cf8" strokeWidth="1.5" strokeDasharray="5 3" fill="none" opacity="0.5"/>
              <path d="M 272,195 C 360,195 360,300 448,300" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="5 3" fill="none" opacity="0.5"/>
              {/* DIM_EXPERIMENT (left, y=300) → FACT_EXPERIMENT only */}
              <path d="M 272,300 C 360,300 360,90 448,90"   stroke="#818cf8" strokeWidth="1.5" strokeDasharray="5 3" fill="none" opacity="0.35"/>

              {/* ── DIM nodes (left column, x centre=160) ── */}
              {/* DIM_ACCOUNT:highlighted (conformed) */}
              <rect x="24" y="62" width="248" height="56" rx="9" fill="#6366f122" stroke="#6366f166" strokeWidth="1.5"/>
              <rect x="24" y="62" width="5" height="56" rx="2" fill="#6366f1" opacity="0.7"/>
              <text x="148" y="86" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="12" fill="#818cf8">DIM_ACCOUNT</text>
              <text x="148" y="103" textAnchor="middle" fontFamily="ui-sans-serif,sans-serif" fontSize="10" fill="#64748b">Account master · ARR · contract · identity key</text>
              <rect x="194" y="110" width="72" height="14" rx="4" fill="#10b98120"/>
              <text x="230" y="121" textAnchor="middle" fontFamily="ui-sans-serif,sans-serif" fontSize="9" fontWeight="700" fill="#10b981" letterSpacing="0.5">CONFORMED</text>

              {/* DIM_CUSTOMER_USERS */}
              <rect x="24" y="167" width="248" height="56" rx="9" fill="#6366f112" stroke="#6366f133" strokeWidth="1.5"/>
              <rect x="24" y="167" width="5" height="56" rx="2" fill="#6366f1" opacity="0.4"/>
              <text x="148" y="191" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="12" fill="#818cf8">DIM_CUSTOMER_USERS</text>
              <text x="148" y="208" textAnchor="middle" fontFamily="ui-sans-serif,sans-serif" fontSize="10" fill="#64748b">User profiles · identity graph resolution</text>

              {/* DIM_EXPERIMENT */}
              <rect x="24" y="272" width="248" height="56" rx="9" fill="#6366f10d" stroke="#6366f122" strokeWidth="1.5"/>
              <rect x="24" y="272" width="5" height="56" rx="2" fill="#6366f1" opacity="0.25"/>
              <text x="148" y="296" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="12" fill="#6366f188">DIM_EXPERIMENT</text>
              <text x="148" y="313" textAnchor="middle" fontFamily="ui-sans-serif,sans-serif" fontSize="10" fill="#64748b">Experiments · flags · rollouts</text>

              {/* ── FACT nodes (right column, x centre=596) ── */}
              {/* FACT_EXPERIMENT_* */}
              <rect x="448" y="62" width="288" height="56" rx="9" fill="#10b98118" stroke="#10b98144" strokeWidth="1.5"/>
              <rect x="731" y="62" width="5" height="56" rx="2" fill="#10b981" opacity="0.6"/>
              <text x="592" y="86" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="12" fill="#10b981">FACT_EXPERIMENT_*</text>
              <text x="592" y="103" textAnchor="middle" fontFamily="ui-sans-serif,sans-serif" fontSize="10" fill="#64748b">Outcomes · variation metrics · impressions</text>

              {/* FACT_DAILY_IMPRESSIONS_* */}
              <rect x="448" y="167" width="288" height="56" rx="9" fill="#10b98112" stroke="#10b98133" strokeWidth="1.5"/>
              <rect x="731" y="167" width="5" height="56" rx="2" fill="#10b981" opacity="0.4"/>
              <text x="592" y="191" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="12" fill="#10b98199">FACT_DAILY_IMPRESSIONS_*</text>
              <text x="592" y="208" textAnchor="middle" fontFamily="ui-sans-serif,sans-serif" fontSize="10" fill="#64748b">Daily rollups · engagement queries</text>

              {/* FACT_BILLING_* */}
              <rect x="448" y="272" width="288" height="56" rx="9" fill="#10b9810e" stroke="#10b98128" strokeWidth="1.5"/>
              <rect x="731" y="272" width="5" height="56" rx="2" fill="#10b981" opacity="0.3"/>
              <text x="592" y="296" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="12" fill="#10b98188">FACT_BILLING_*</text>
              <text x="592" y="313" textAnchor="middle" fontFamily="ui-sans-serif,sans-serif" fontSize="10" fill="#64748b">Credit usage · overages · per account per day</text>

              {/* Column headers */}
              <text x="148" y="30" textAnchor="middle" fontFamily="ui-sans-serif,sans-serif" fontSize="10" fontWeight="700" fill="#6366f1" letterSpacing="2">DIMENSIONS</text>
              <text x="592" y="30" textAnchor="middle" fontFamily="ui-sans-serif,sans-serif" fontSize="10" fontWeight="700" fill="#10b981" letterSpacing="2">FACTS</text>
            </svg>
          </div>

          {/* ── Business Question → SQL Explorer ── */}
          <div className="mt-8" style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: "16px", padding: "24px" }}>
            <div className="mb-5">
              <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#64748b" }}>From business question to SQL</div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                The star schema is a query contract. Every business question maps to a predictable JOIN path.
                Click a question to trace it through the schema.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              {BUSINESS_QUERIES.map((bq, i) => (
                <button
                  key={i}
                  onClick={() => setActiveQuery(activeQuery === i ? null : i)}
                  style={{
                    flex: 1,
                    background: activeQuery === i ? "#10b98118" : "#16161f",
                    border: `1px solid ${activeQuery === i ? "#10b98155" : "#1e1e2e"}`,
                    borderRadius: "10px",
                    padding: "12px 14px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    boxShadow: activeQuery === i ? "0 0 16px #10b98118" : "none",
                  }}
                >
                  <div style={{ fontSize: "0.78rem", fontWeight: 600, color: activeQuery === i ? "#10b981" : "#f1f5f9", lineHeight: 1.4 }}>{bq.q}</div>
                </button>
              ))}
            </div>
            {activeQuery !== null ? (
              <div style={{ background: "#0a0a0f", border: "1px solid #10b98133", borderRadius: "12px", padding: "18px 20px" }}>
                <div className="flex flex-wrap gap-2 mb-4 items-center">
                  <span className="text-xs text-slate-500">Tables used:</span>
                  {BUSINESS_QUERIES[activeQuery].tables.map(t => (
                    <code key={t} style={{ background: "#10b98115", border: "1px solid #10b98133", borderRadius: "6px", padding: "2px 9px", color: "#10b981", fontFamily: "monospace", fontSize: "0.73rem", fontWeight: 700 }}>{t}</code>
                  ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#64748b" }}>SQL</div>
                    <pre style={{ background: "#111118", border: "1px solid #10b98122", borderRadius: "8px", padding: "14px", fontFamily: "monospace", fontSize: "0.75rem", color: "#10b981", lineHeight: 1.75, overflowX: "auto", margin: 0, whiteSpace: "pre" }}>{BUSINESS_QUERIES[activeQuery].sql}</pre>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#64748b" }}>Why this JOIN works</div>
                    <p style={{ fontSize: "0.84rem", color: "#94a3b8", lineHeight: 1.72 }}>{BUSINESS_QUERIES[activeQuery].insight}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ border: "1px dashed #1e1e2e", borderRadius: "10px", padding: "14px", textAlign: "center" }}>
                <span className="text-xs text-slate-600">Select a question above to see the JOIN path and SQL</span>
              </div>
            )}
          </div>

          {/* ── Visual 3: SCD Type 2 ── */}
          <div className="mt-8" style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: "14px", padding: "20px 24px" }}>
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#f59e0b" }}>Slowly Changing Dimension:Type 2</div>
                <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                  When an account upgrades from SMB to Enterprise, we don&apos;t overwrite the old record.
                  We close it with a <code style={{ color: "#f59e0b", fontFamily: "monospace", fontSize: "0.8rem" }}>valid_to</code> date and insert a new row.
                  Fact rows from before the upgrade still point to the old surrogate key:historical context preserved at query time.
                </p>
              </div>
            </div>
            {/* SCD visual timeline */}
            <svg viewBox="0 0 660 90" style={{ width: "100%", height: "auto", display: "block", marginTop: "18px", marginBottom: "6px" }} aria-label="SCD Type 2 upgrade timeline">
              {/* background track */}
              <line x1="40" y1="38" x2="620" y2="38" stroke="#1e1e2e" strokeWidth="2"/>
              {/* SMB segment */}
              <line x1="40" y1="38" x2="295" y2="38" stroke="#64748b" strokeWidth="3.5"/>
              {/* Enterprise segment */}
              <line x1="295" y1="38" x2="580" y2="38" stroke="#10b981" strokeWidth="3.5"/>
              {/* Start node */}
              <circle cx="40" cy="38" r="5" fill="#64748b" stroke="#0a0a0f" strokeWidth="2"/>
              <text x="40" y="22" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#64748b">2023-01-01</text>
              {/* Upgrade event */}
              <circle cx="295" cy="38" r="7" fill="#f59e0b" stroke="#0a0a0f" strokeWidth="2.5"/>
              <text x="295" y="13" textAnchor="middle" fontFamily="ui-sans-serif,sans-serif" fontSize="8" fill="#f59e0b88">2023-07-01</text>
              <text x="295" y="22" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#f59e0b" fontWeight="700">upgrade event</text>
              {/* Active end node */}
              <circle cx="580" cy="38" r="5" fill="#10b981" stroke="#0a0a0f" strokeWidth="2"/>
              <text x="580" y="22" textAnchor="middle" fontFamily="ui-sans-serif,sans-serif" fontSize="9" fill="#10b98199">present</text>
              {/* Row 1 label: SMB */}
              <rect x="50" y="50" width="228" height="24" rx="4" fill="#64748b10" stroke="#64748b28" strokeWidth="1"/>
              <text x="164" y="65" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#94a3b8">key 1001 · SMB · $12K · is_current=false</text>
              {/* Row 2 label: Enterprise */}
              <rect x="308" y="50" width="257" height="24" rx="4" fill="#10b98112" stroke="#10b98130" strokeWidth="1"/>
              <text x="436" y="65" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#10b981">key 1002 · Enterprise · $84K · is_current=true</text>
              {/* Consequence arrows */}
              <text x="164" y="84" textAnchor="middle" fontFamily="ui-sans-serif,sans-serif" fontSize="8" fill="#64748b88">fact rows Q1–Q2 2023 → join to key 1001</text>
              <text x="436" y="84" textAnchor="middle" fontFamily="ui-sans-serif,sans-serif" fontSize="8" fill="#10b98177">fact rows Q3 2023+ → join to key 1002</text>
            </svg>

            <div style={{ overflowX: "auto", marginTop: "16px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.72rem" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #1e1e2e" }}>
                    {["surrogate_key", "account_id", "account_name", "arr_tier", "contract_value", "valid_from", "valid_to", "is_current"].map(h => (
                      <th key={h} style={{ textAlign: "left", padding: "6px 12px", color: "#64748b", fontWeight: 600, fontFamily: "monospace", whiteSpace: "nowrap", letterSpacing: "0.03em" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Expired row */}
                  <tr style={{ borderBottom: "1px solid #16161f", opacity: 0.6 }}>
                    {[
                      { val: "1001",       mono: true  },
                      { val: "acme-001",   mono: true  },
                      { val: "Acme Corp",  mono: false },
                      { val: "SMB",        mono: true, color: "#64748b" },
                      { val: "$12K",       mono: true  },
                      { val: "2023-01-01", mono: true  },
                      { val: "2023-06-30", mono: true, color: "#f43f5e99" },
                      { val: "false",      mono: true, color: "#f43f5e99" },
                    ].map((cell, j) => (
                      <td key={j} style={{ padding: "8px 12px", color: cell.color ?? (cell.mono ? "#94a3b8" : "#cbd5e1"), fontFamily: cell.mono ? "monospace" : "inherit", whiteSpace: "nowrap" }}>{cell.val}</td>
                    ))}
                  </tr>
                  {/* Active row */}
                  <tr style={{ background: "#f59e0b09", borderBottom: "1px solid #f59e0b22" }}>
                    {[
                      { val: "1002",       mono: true  },
                      { val: "acme-001",   mono: true  },
                      { val: "Acme Corp",  mono: false },
                      { val: "Enterprise", mono: true, color: "#10b981" },
                      { val: "$84K",       mono: true, color: "#10b981" },
                      { val: "2023-07-01", mono: true  },
                      { val: "9999-12-31", mono: true, color: "#64748b" },
                      { val: "true",       mono: true, color: "#10b981" },
                    ].map((cell, j) => (
                      <td key={j} style={{ padding: "8px 12px", color: cell.color ?? (cell.mono ? "#f1f5f9" : "#f1f5f9"), fontFamily: cell.mono ? "monospace" : "inherit", whiteSpace: "nowrap" }}>{cell.val}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                { label: "Fact rows before July 2023", note: "join to key 1001 → SMB tier preserved" },
                { label: "Fact rows after July 2023",  note: "join to key 1002 → Enterprise tier" },
                { label: "Current state query",        note: "WHERE is_current = true: always returns one row per account" },
              ].map(({ label, note }) => (
                <div key={label} style={{ background: "#f59e0b0a", border: "1px solid #f59e0b22", borderRadius: "8px", padding: "8px 12px" }}>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#f59e0b", marginBottom: "2px" }}>{label}</div>
                  <div style={{ fontSize: "0.7rem", color: "#64748b" }}>{note}</div>
                </div>
              ))}
            </div>
          </div>

        </section>

        <ChapterTransition from="The Platform" to="The Impact" />

        {/* ── Ch03: Data Quality & Observability ────────────────────── */}
        <section id="quality" className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <ChapterBadge number="03" label="The Impact" />
          <SectionLabel>Data Quality</SectionLabel>
          <SectionHeading>Pipeline Observability &amp; Quality Engineering</SectionHeading>
          <SectionDescription>
            Bad data that reaches a dashboard is worse than no data. It gets cited in decisions,
            shared in exec reviews, and by the time someone spots the problem, trust in the whole
            platform takes the hit. I built testing directly into dbt so issues fail loudly at
            load time rather than quietly distorting things downstream.
          </SectionDescription>

          {/* Test coverage grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                test: "not_null",
                scope: "Primary & foreign keys",
                desc: "A null join key drops rows silently at query time. No error, no warning: just a metric that's slightly off and nobody can explain why. Every primary key and foreign key is asserted not null so the problem surfaces at load, not in a steerco deck.",
                color: "#10b981",
                icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#10b981" strokeWidth="1.8"/><path d="M8 12l3 3 5-5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
              {
                test: "unique",
                scope: "Grain on fact tables",
                desc: "Duplicates don&apos;t announce themselves. They quietly inflate every aggregate built on top of the table. Uniqueness assertions on the natural grain catch double-loading before any downstream model sees the data.",
                color: "#29B5E8",
                icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#29B5E8" strokeWidth="1.8"/><rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#29B5E8" strokeWidth="1.8"/><path d="M11 7h2a4 4 0 0 1 4 4v2" stroke="#29B5E8" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/></svg>),
              },
              {
                test: "relationships",
                scope: "Referential integrity",
                desc: "When an upstream system deletes a record without propagating the deletion, fact rows start pointing at dimension keys that no longer exist. Orphaned rows are invisible in most BI tools. This test catches them at run time.",
                color: "#F2C811",
                icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="7" cy="12" r="3" stroke="#F2C811" strokeWidth="1.8"/><circle cx="17" cy="12" r="3" stroke="#F2C811" strokeWidth="1.8"/><path d="M10 12h4" stroke="#F2C811" strokeWidth="1.8" strokeLinecap="round"/></svg>),
              },
              {
                test: "accepted_values",
                scope: "Enums & status columns",
                desc: "Product lines and experiment types are finite, known sets. When a new value arrives that doesn&apos;t match, the run fails rather than routing it somewhere wrong. Forces an explicit decision instead of silent misclassification.",
                color: "#f59e0b",
                icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 3H5a2 2 0 0 0-2 2v4M9 3h6M9 3v18m6-18h4a2 2 0 0 1 2 2v4M15 3v18M9 21H5a2 2 0 0 1-2-2v-4M15 21h4a2 2 0 0 0 2-2v-4" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"/></svg>),
              },
            ].map(({ test, scope, desc, color, icon }) => (
              <div key={test} className="card-hover" style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: "14px", padding: "18px" }}>
                <div className="flex items-center gap-2 mb-3">
                  <div style={{ background: `${color}12`, borderRadius: "7px", padding: "6px" }}>{icon}</div>
                  <code style={{ color, fontFamily: "monospace", fontWeight: 700, fontSize: "0.82rem" }}>{test}</code>
                </div>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>{scope}</div>
                <p style={{ fontSize: "0.8rem", color: "#94a3b8", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Schema drift handling */}
          <div className="mt-8">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Schema drift handling</div>
            <div className="flex flex-col gap-3">
              {[
                { step: "01", title: "RAW absorbs the change", body: "Append-only means new columns from upstream APIs land without touching anything downstream. No model knows about it yet and nothing breaks." },
                { step: "02", title: "Staging acknowledges it", body: "The staging model is where the field gets cast and typed. A breaking rename gets absorbed in the intermediate layer so the mart interface stays stable: consumers never see the shift." },
                { step: "03", title: "Tests catch what doesn't fit", body: "Schema tests run before the mart rebuilds. A null in a key field or an unexpected type fails loudly at the bottom of the stack, not quietly at the top." },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 items-start" style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: "12px", padding: "16px 18px" }}>
                  <span style={{ color: "#10b981", fontFamily: "monospace", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0, marginTop: "2px" }}>{step}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: "0.9rem", marginBottom: "5px" }}>{title}</div>
                    <p style={{ fontSize: "0.84rem", color: "#94a3b8", lineHeight: 1.7 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Publishing & Egress ────────────────────────────────────── */}
        <section id="publishing" className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>Publishing &amp; Egress</SectionLabel>
          <SectionHeading>Operationalizing Derived Data</SectionHeading>
          <SectionDescription>
            A controlled promotion pattern manages how internal models become publicly consumable.
            Reverse ETL closes the loop: enriched Snowflake data flows back into Segment for
            downstream activation in Salesforce and marketing tools.
          </SectionDescription>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <div style={{ color: "#10b981" }} className="text-xs font-semibold uppercase tracking-widest mb-4">
                Forward Path: Snowflake Private Share
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { step: "01", label: "Internal production models",    sub: "Final mart tables validated and ready for consumption" },
                  { step: "02", label: "Controlled promotion",          sub: "Atomic swap from development to public-facing schema" },
                  { step: "03", label: "Snowflake Private Share",       sub: "Zero-copy share to consumers: no data movement" },
                  { step: "04", label: "Downstream consumers",          sub: "PowerBI · Analytics Platform · External customers" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold mt-0.5" style={{ color: "#10b981" }}>{item.step}</span>
                    <div>
                      <div className="text-sm font-semibold text-white">{item.label}</div>
                      <div className="text-xs text-slate-400">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <div style={{ color: "#10b981" }} className="text-xs font-semibold uppercase tracking-widest mb-4">
                Reverse ETL: Snowflake → Segment → Activation
              </div>
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { step: "01", label: "Snowflake Computed Profiles",  sub: "Enriched account and user profiles: computed traits, health scores, engagement flags" },
                  { step: "02", label: "Segment Reverse ETL sync",     sub: "Computed traits and audiences synced from Snowflake to the event collection layer" },
                  { step: "03", label: "Salesforce",                   sub: "Account health, usage flags, and expansion signals surfaced on Account objects in CRM" },
                  { step: "04", label: "Marketing automation",         sub: "Lifecycle campaigns triggered by product engagement behaviour, not static CRM attributes" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold mt-0.5" style={{ color: "#10b981" }}>{item.step}</span>
                    <div>
                      <div className="text-sm font-semibold text-white">{item.label}</div>
                      <div className="text-xs text-slate-400">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#10b98110", borderColor: "#10b98133" }} className="border rounded-lg p-3 text-xs text-slate-400">
                <span style={{ color: "#10b981" }} className="font-semibold">Why this matters: </span>
                Analytics that stays in a dashboard is advisory. Reverse ETL makes warehouse intelligence
                operational: CS reps see account health in Salesforce without opening a BI tool.
              </div>
            </Card>
          </div>
        </section>

        {/* ── What This Enabled ─────────────────────────────────────── */}
        <section id="enabled" className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>Outcomes</SectionLabel>
          <SectionHeading>What the Foundation Unlocked</SectionHeading>
          <SectionDescription>
            The engineering work here was never the end goal: it was the prerequisite. None of these
            capabilities existed before the platform did. Each one was only possible because the
            identity layer, the dimensional model, and the quality gates were already in place.
          </SectionDescription>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                outcome: "Cross-product product analytics",
                detail: "The Product Intelligence Platform: the centrepiece of this portfolio: runs entirely on top of this foundation. Usage metrics, engagement thresholds, churn prediction, and CS activation all depend on the conformed account dimension and the cross-product identity chain built here.",
                link: "https://product-intelligence-platform.vercel.app",
                linkLabel: "→ Product Intelligence Platform",
                color: "#6366f1",
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" stroke="#6366f1" strokeWidth="1.8" strokeLinejoin="round"/></svg>),
              },
              {
                outcome: "AI orchestration platform billing accuracy",
                detail: "The dbt billing DAG: fine-grained usage, daily rollups, credit balances, overage detection: powers Finance's invoicing and Customer Success's health score. A single source of truth replaced a spreadsheet-based reconciliation process that no one fully trusted.",
                color: "#10b981",
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="13" rx="2" stroke="#10b981" strokeWidth="1.8"/><path d="M3 10h18M8 3v3M16 3v3" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round"/><path d="M8 14l2 2 4-4" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
              {
                outcome: "CS activation via Reverse ETL",
                detail: "Account health scores, overage signals, and engagement flags computed in Snowflake flow back into Salesforce via Reverse ETL. CS reps act on warehouse-computed intelligence without leaving their CRM: no BI tool login, no copy-paste, no lag.",
                color: "#F2C811",
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="#F2C811" strokeWidth="1.8"/><path d="M12 8v4l3 3" stroke="#F2C811" strokeWidth="1.8" strokeLinecap="round"/></svg>),
              },
              {
                outcome: "Executive and board reporting",
                detail: "ARR linkage, cross-product engagement, and retention analysis: all structurally impossible without this warehouse foundation: became the basis for steerco decks, board updates, and GTM strategy. The platform made the data trustworthy enough to put in front of an executive audience.",
                color: "#f43f5e",
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round"/></svg>),
              },
            ].map(({ outcome, detail, link, linkLabel, color, icon }) => (
              <div key={outcome} className="card-hover" style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: "14px", padding: "22px" }}>
                <div className="flex items-start gap-3 mb-4">
                  <div style={{ background: `${color}12`, borderRadius: "8px", padding: "8px", flexShrink: 0 }}>{icon}</div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.3, marginTop: "6px" }}>{outcome}</h3>
                </div>
                <p style={{ fontSize: "0.84rem", color: "#94a3b8", lineHeight: 1.75, marginBottom: link ? "14px" : 0 }}>{detail}</p>
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" style={{ color, fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}>{linkLabel}</a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── dbt Project Code ──────────────────────────────────────── */}
        <section id="code" className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>Open Source</SectionLabel>
          <SectionHeading>Working dbt Project on GitHub</SectionHeading>
          <SectionDescription>
            The billing model DAG described above is published as a working dbt project with
            synthetic seed data: structured identically to production, with real SQL logic
            and schema tests. Clone and run locally with{" "}
            <code style={{ color: "#10b981", fontFamily: "monospace", fontSize: "0.82rem" }}>
              dbt seed &amp;&amp; dbt run &amp;&amp; dbt test
            </code>.
          </SectionDescription>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div style={{ background: "#111118", borderColor: "#1e1e2e" }} className="border rounded-xl p-5">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Project structure</div>
              <div className="font-mono text-xs leading-loose" style={{ color: "#94a3b8" }}>
                <div style={{ color: "#10b981" }}>dbt/</div>
                <div className="pl-4">├── dbt_project.yml</div>
                <div className="pl-4">├── packages.yml</div>
                <div className="pl-4" style={{ color: "#64748b" }}>├── seeds/</div>
                <div className="pl-8" style={{ color: "#52BD94" }}>│   ├── ai_orchestration_accounts.csv</div>
                <div className="pl-8" style={{ color: "#52BD94" }}>│   ├── ai_orchestration_events.csv</div>
                <div className="pl-8" style={{ color: "#52BD94" }}>│   ├── ai_orchestration_credit_allocations.csv</div>
                <div className="pl-8" style={{ color: "#52BD94" }}>│   └── segment_identifies.csv</div>
                <div className="pl-4" style={{ color: "#64748b" }}>└── models/</div>
                <div className="pl-8">├── sources.yml</div>
                <div className="pl-8" style={{ color: "#64748b" }}>├── staging/</div>
                <div className="pl-12">├── stg_ai_orchestration_events.sql</div>
                <div className="pl-12">├── stg_ai_orchestration_accounts.sql</div>
                <div className="pl-12">├── stg_ai_orchestration_credit_allocations.sql</div>
                <div className="pl-12">├── stg_segment_identifies.sql</div>
                <div className="pl-12" style={{ color: "#6366f1" }}>└── staging.yml</div>
                <div className="pl-8" style={{ color: "#64748b" }}>├── intermediate/</div>
                <div className="pl-12">├── int_ai_orchestration_daily_usage.sql</div>
                <div className="pl-12">├── int_ai_orchestration_account_balances.sql</div>
                <div className="pl-12">├── int_identity_resolution.sql</div>
                <div className="pl-12" style={{ color: "#6366f1" }}>└── intermediate.yml</div>
                <div className="pl-8" style={{ color: "#64748b" }}>└── marts/</div>
                <div className="pl-12" style={{ color: "#10b981" }}>├── ai_orchestration_fine_grained_usage.sql</div>
                <div className="pl-12" style={{ color: "#10b981" }}>├── ai_orchestration_daily_account_usage.sql</div>
                <div className="pl-12" style={{ color: "#10b981" }}>├── ai_orchestration_customer_balances.sql</div>
                <div className="pl-12" style={{ color: "#10b981" }}>├── ai_orchestration_customer_overages.sql</div>
                <div className="pl-12" style={{ color: "#6366f1" }}>└── marts.yml</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { layer: "seeds/",        color: "#52BD94", models: "4 CSV files", desc: "Synthetic data matching production table shapes. Accounts, usage events, credit allocations, and Segment identify calls: enough to run the full billing DAG end to end." },
                { layer: "staging/",      color: "#29B5E8", models: "4 models",    desc: "One model per source. Cast, rename, deduplicate: no business logic. Tests assert not_null, unique, and accepted_values at every source boundary." },
                { layer: "intermediate/", color: "#f59e0b", models: "3 ephemeral", desc: "Business logic lives here. Daily rollups, period balance calculations, and identity resolution. Ephemeral materialization means no intermediate table cost in production." },
                { layer: "marts/",        color: "#10b981", models: "4 tables",    desc: "Consumer-facing outputs. Fine-grained usage, daily account usage, credit balances, and overage detection: with full referential integrity tests." },
              ].map(({ layer, color, models, desc }) => (
                <div key={layer} className="card-hover" style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: "12px", padding: "14px 16px", display: "flex", gap: "12px" }}>
                  <div style={{ flexShrink: 0, paddingTop: "2px" }}>
                    <code style={{ color, fontFamily: "monospace", fontSize: "0.8rem", fontWeight: 700 }}>{layer}</code>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "5px" }}>{models}</div>
                    <p style={{ fontSize: "0.82rem", color: "#94a3b8", lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}

              <a
                href="https://github.com/ratul003/data-engineering-foundation"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#10b98115", borderColor: "#10b98133", color: "#10b981", textDecoration: "none" }}
                className="mt-1 border rounded-xl px-5 py-3 flex items-center justify-between hover:border-emerald-500 transition-colors"
              >
                <span className="text-sm font-semibold">ratul003/data-engineering-foundation</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── Tech Stack ────────────────────────────────────────────── */}
        <section id="stack" className="py-16 border-b" style={{ borderColor: "#1e1e2e" }}>
          <SectionLabel>Technology</SectionLabel>
          <SectionHeading>Tech Stack</SectionHeading>
          <SectionDescription>
            Purpose-built stack across cloud data warehouse, orchestration, transformation, and ingestion layers.
          </SectionDescription>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {techStack.map((tech) => <DEToolCard key={tech} name={tech} />)}
          </div>

          <div style={{ background: "#16161f", borderColor: "#1e1e2e" }} className="mt-8 border rounded-xl p-6">
            <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-4">Architecture Principles</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "Immutable raw layer", value: "No overwrites"  },
                { label: "Layer separation",    value: "Clear boundaries" },
                { label: "Parallel isolation",  value: "Independent ELT" },
                { label: "Reverse ETL",         value: "Closed loop"    },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-base font-bold tracking-tight" style={{ color: "#10b981" }}>{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '40px 32px 56px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 5 }}>Wahid Tawsif Ratul</div>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>© 2026 · Data Scientist · Product Manager</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/wahidratul112296', path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05C20.5 8.59 22 11 22 14.4V21h-4v-5.86c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9z' },
              { label: 'GitHub', href: 'https://github.com/ratul003', path: 'M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z' },
              { label: 'Medium', href: 'https://medium.com/@wahidtratul', path: 'M2.5 5.5l1.7 2v9.7l-2 2.3h5.4l-2-2.3V8.4l4.9 11.1h.1l4.3-10.5v8.2l-1.3 1.3v.2h6.4v-.2l-1.3-1.3V6.9l1.3-1.3v-.1h-4.5L13 13.9 9.3 5.5z' },
              { label: 'Email', href: 'mailto:wahidtratul@gmail.com', path: '' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ color: '#64748b', display: 'inline-flex' }}>
                {s.label === 'Email' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
