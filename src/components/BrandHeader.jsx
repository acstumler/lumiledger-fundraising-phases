import React from "react";

export default function BrandHeader() {
  return (
    <header className="brochure-header">
      <div className="brand-line">
        <span className="brand-badge" aria-hidden="true">
          <img className="brand-icon" src="/assets/LumiLedgerlogo.png" alt="" />
        </span>
        <div className="brand-word" aria-label="LumiLedger">LUMILEDGER</div>
      </div>
    </header>
  );
}
