export default function PhaseCard({ phase }) {
  return (
    <article className="phaseCard">
      <div className="phaseHeader">
        <h3>{phase.title}</h3>
        <div className="meta">
          <span className="chip">{phase.window}</span>
          <span className="chip">Raise: {phase.raise}</span>
        </div>
      </div>

      <div className="split">
        <div className="col">
          <h4>Objectives</h4>
          <ul className="list">
            {phase.objectives.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>
        <div className="col">
          <h4>Use of Funds</h4>
          <ul className="list">
            {phase.budget.map(([k, v], i) => (
              <li key={i}><span>{k}</span><span className="amt">{v}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="pill"><strong>Deliverable:</strong> {phase.deliverable}</div>
        <div className="pill"><strong>Capital:</strong> {phase.sources}</div>
      </div>
    </article>
  );
}
