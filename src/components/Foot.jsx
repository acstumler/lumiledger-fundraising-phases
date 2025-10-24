import React from "react";

export default function Foot() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <a className="foot-site" href="https://LumiLedger.com" target="_blank" rel="noopener">
          LumiLedger.com
        </a>

        <div className="foot-mid">
          <div className="foot-brand">
            <span className="foot-badge">
              <img src="/assets/LumiLedgerlogo.png" alt="" />
            </span>
            <span className="foot-word">LUMILEDGER</span>
          </div>

          <div className="foot-center">
            <div className="foot-contact">
              Contact: <a href="mailto:alanson.stumler@lumiledger.com">alanson.stumler@lumiledger.com</a>
            </div>
            <div className="foot-copy">© {new Date().getFullYear()} LumiLedger</div>
          </div>

          <button
            className="backtotop"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            Back to top
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5l7 7-1.4 1.4L13 10.8V19h-2v-8.2L6.4 13.4 5 12z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
