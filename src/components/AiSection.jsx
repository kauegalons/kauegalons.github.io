import { aiFlow, aiPrinciples } from "../content.js";

export default function AiSection({ t, lang }) {
  return (
    <>
      <p className="ai__lead">{t.lead}</p>

      <ol className="flow">
        {aiFlow[lang].map((s, i) => (
          <li key={s.step} className="flow__step">
            <span className="flow__num mono">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.step}</h3>
            <p className="mono accent flow__agents">{s.agents}</p>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>

      <h3 className="ai__subtitle">{t.principlesTitle}</h3>
      <div className="principles">
        {aiPrinciples[lang].map((p) => (
          <div key={p.title} className="principle">
            <h4>{p.title}</h4>
            <p>{p.text}</p>
          </div>
        ))}
      </div>

      <div className="ai__next">
        <h3 className="ai__subtitle">{t.nextTitle}</h3>
        <p>{t.next}</p>
        <ul className="tech-list tech-list--small">
          {t.tools.map((x) => <li key={x}>{x}</li>)}
        </ul>
      </div>
    </>
  );
}
