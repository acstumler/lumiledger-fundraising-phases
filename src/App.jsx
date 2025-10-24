import React from "react";
import { Link } from "react-router-dom";
import BrandHeader from "./components/BrandHeader.jsx";
import Foot from "./components/Foot.jsx";

export default function App() {
  return (
    <>
      <BrandHeader />

      <section id="overview" className="cover">
        <div className="cover-art" aria-hidden="true"></div>
        <div className="cover-copy invert">
          <h1>From raw bank data into clear financial statements and KPIs, instantly.</h1>
          <p>
            Connect accounts via Plaid or upload statement PDFs, see a clean transactions view, and apply memory + rules with an AI
            backup to produce balanced financial statements and KPIs—without the mess.
          </p>
          <p>
            <Link to="/funding" className="backtotop" style={{ textDecoration: "none" }}>
              View Funding Phases
            </Link>
          </p>
        </div>
      </section>

      <section className="pillars-band">
        <div className="pill"><div className="p-title">Dual ingestion</div><div className="p-desc">Bank feeds or PDFs.</div></div>
        <div className="pill"><div className="p-title">Memory + rules + AI</div><div className="p-desc">AI only when needed.</div></div>
        <div className="pill"><div className="p-title">Balanced auto entries</div><div className="p-desc">Two-sided GL, always.</div></div>
        <div className="pill"><div className="p-title">Real-time outputs</div><div className="p-desc">P&L, BS, CF, KPIs, exports.</div></div>
        <div className="pill"><div className="p-title">Owner control</div><div className="p-desc">Bulk reclass + override.</div></div>
        <div className="pill"><div className="p-title">Secure by design</div><div className="p-desc">Bank-level practices.</div></div>
      </section>

      <Foot />
    </>
  );
}
