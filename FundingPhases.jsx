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
    <div className="wrap">
      <header className="topbar">
        <div className="brand">
          <div className="logo" />
          <span>LumiLedger</span>
        </div>
        <a className="btn" href="mailto:alanson.stumler@lumiledger.com">Contact</a>
      </header>

      <section className="hero compact">
        <h1>Funding Plan — 3 Phases, 3 Months Each</h1>
        <p className="lead">
          Clear use of funds and milestones for Build → Scale → Expansion.
        </p>
        <div className="links">
          <a className="link" href="/docs/LumiLedger_FundingPlan.pdf" target="_blank" rel="noreferrer">Download Plan (PDF)</a>
          <a className="link" href="/docs/Phase1_Deck.pdf" target="_blank" rel="noreferrer">Phase 1 Slide Deck</a>
        </div>
      </section>

      <section className="timeline">
        <div className="bar">
          <div className="node n1"><span>Q4’25</span></div>
          <div className="node n2"><span>Q1’26</span></div>
          <div className="node n3"><span>Q2’26</span></div>
        </div>
      </section>

      <section className="cards">
        {phases.map(p => <PhaseCard key={p.id} phase={p} />)}
      </section>

      <section className="ctaBlock">
        <h2>Why this wins</h2>
        <ul className="bullets">
          <li>Owner-first automation from raw data to statements and KPIs</li>
          <li>97%+ software-style gross margins at scale</li>
          <li>Architecture designed for low cost per user (&lt;$0.30)</li>
        </ul>
        <a className="cta" href="mailto:alanson.stumler@lumiledger.com">Connect with LumiLedger</a>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} LumiLedger</span>
      </footer>
    </div>
  );
}
