import { aiFlow } from "../content.js";

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
