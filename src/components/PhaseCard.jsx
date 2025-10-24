import React from "react";

export default function PhaseCard({ phase }) {
  return (
    <article className="card">
      <div className="p" style={{ marginBottom: "6px" }}>{phase.title}</div>
      <ul>
        <li><strong>Window:</strong> {phase.window}</li>
        <li><strong>Raise:</strong> {phase.raise}</li>
      </ul>
      <ul>
        <li><strong>Objectives</strong></li>
        {phase.objectives.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
      <ul>
        <li><strong>Use of funds</strong></li>
        {phase.budget.map(([k, v], i) => <li key={i}>{k}: {v}</li>)}
      </ul>
      <ul>
        <li><strong>Deliverable:</strong> {phase.deliverable}</li>
        <li><strong>Capital:</strong> {phase.sources}</li>
      </ul>
    </article>
  );
}
