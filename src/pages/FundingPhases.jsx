import React from "react";
import BrandHeader from "../components/BrandHeader.jsx";
import Foot from "../components/Foot.jsx";
import PhaseCard from "../components/PhaseCard.jsx";

const phases = [
  {
    id: 1,
    title: "Phase 1 — Build Round",
    window: "Q4 2025 (Oct–Dec)",
    raise: "$150K–$250K",
    objectives: [
      "Finish MVP: stability, scalability, AI classification",
      "Legal: entity, Terms, Privacy, liability coverage",
      "Marketing launch prep and early pilot onboarding",
      "Founder runway for 3 months"
    ],
    budget: [
      ["Engineering & QA", "$80K–$150K"],
      ["Legal & Compliance", "$7K–$15K"],
      ["Marketing Launch", "$15K–$25K"],
      ["Founder / Ops (3 mo)", "$9K–$15K"],
      ["Contingency", "~$10K"]
    ],
    deliverable: "MVP completed, entity established, 50 pilot users queued by Dec 2025",
    sources: "Prizes, forgivable/recoverable grants (non-dilutive)"
  },
  {
    id: 2,
    title: "Phase 2 — Scale Round",
    window: "Q1 2026 (Jan–Mar)",
    raise: "$300K–$500K",
    objectives: [
      "Stabilize backend, queues, and monitoring",
      "Acquire 1K–3K users via partnerships and paid",
      "Hire 1 engineer + 1 growth/marketing role",
      "Founder salary for 3 months"
    ],
    budget: [
      ["Operating Costs", "$15K–$25K"],
      ["Marketing & Growth", "$30K–$50K"],
      ["New Hires (2 roles)", "$60K–$100K"],
      ["Founder (3 mo)", "$15K–$20K"],
      ["Working Capital", "~$50K"]
    ],
    deliverable: "1K+ active users, first subscriptions, stable infra by Mar 2026",
    sources: "Convertible / recoverable grants; non-dilutive accelerators"
  },
  {
    id: 3,
    title: "Phase 3 — Expansion Round",
    window: "Q2 2026 (Apr–Jun)",
    raise: "$750K–$1.2M",
    objectives: [
      "National marketing & accountant partnerships",
      "Team expansion: finance/ops + success/support",
      "12–18 months runway for payroll and vendors",
      "Advanced KPIs, integrations, and mobile"
    ],
    budget: [
      ["Runway & Payroll", "$150K–$250K"],
      ["Marketing Expansion", "$80K–$150K"],
      ["Team Growth", "$150K–$300K"],
      ["Product Expansion", "~$100K"]
    ],
    deliverable: "10K+ users, profitability in sight, Series-A readiness by Jun 2026",
    sources: "Equity (SAFE/note) and strategic capital"
  }
];

export default function FundingPhases() {
  return (
    <>
      <BrandHeader />

      <section id="overview" className="cover">
        <div className="cover-art" aria-hidden="true"></div>
        <div className="cover-copy invert">
          <h1>Funding Plan — 3 Phases, 3 Months Each</h1>
          <p>Clear use of funds and milestones for Build → Scale → Expansion.</p>
          <div>
            <a className="backtotop" href="mailto:alanson.stumler@lumiledger.com">Connect with LumiLedger</a>
          </div>
        </div>
      </section>

      <section className="wins" style={{ borderBottom: "1px solid var(--line)" }}>
        <h2>Use of Funds by Phase</h2>
        <div className="cards">
          {phases.map((p) => <PhaseCard key={p.id} phase={p} />)}
        </div>
      </section>

      <section className="wins">
        <h2>Timeline</h2>
        <div className="wins-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          <div className="win"><h4>Q4 2025</h4><p>Complete MVP + legal + pilot onboarding.</p></div>
          <div className="win"><h4>Q1 2026</h4><p>1–3K users, subscriptions live, infra stabilized.</p></div>
          <div className="win"><h4>Q2 2026</h4><p>10K users, profitability in sight, Series-A readiness.</p></div>
        </div>
      </section>

      <Foot />
    </>
  );
}
