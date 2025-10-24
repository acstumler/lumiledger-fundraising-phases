import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="wrap">
      <header className="topbar">
        <div className="brand">
          <div className="logo" />
          <span>LumiLedger</span>
        </div>
        <nav className="nav">
          <Link to="/funding" className="btn">Funding Phases</Link>
        </nav>
      </header>

      <main className="hero">
        <h1>Turning financial data into direction</h1>
        <p className="lead">
          This brochure site summarizes our 3-phase fundraising plan to complete build, scale to paying users,
          and expand nationally.
        </p>
        <Link to="/funding" className="cta">View Funding Plan</Link>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} LumiLedger</span>
      </footer>
    </div>
  );
}
