import { useState } from "react";
import { starLabels } from "../experience.js";

export default function Experience({ items, lang }) {
  const [active, setActive] = useState(0);
  const job = items[active];
  const L = starLabels[lang];

  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist">
        {items.map((it, i) => (
          <button
            key={it.company + i}
            role="tab"
            aria-selected={i === active}
            className={i === active ? "active" : ""}
            onClick={() => setActive(i)}
          >
            {it.tab ?? it.company}
          </button>
        ))}
      </div>

      <div className="tab-panel" role="tabpanel" key={active + lang}>
        <h3>
          {job.role[lang]} <span className="accent">@ {job.company}</span>
        </h3>
        <p className="mono muted period">{job.period[lang]}</p>
        {job.context && <p className="context">{job.context[lang]}</p>}

        <div className="stars">
          {job.star[lang].map((item, i) => (
            <details key={item.title} className="star" open={i === 0}>
              <summary>
                <span className="star__title">{item.title}</span>
                <span className="star__result">{item.r}</span>
              </summary>
              <dl className="star__body">
                {["s", "t", "a", "r"].map((k) => (
                  <div key={k} className={`star__row star__row--${k}`}>
                    <dt><span className="star__letter">{k.toUpperCase()}</span>{L[k]}</dt>
                    <dd>{item[k]}</dd>
                  </div>
                ))}
                {item.ai && (
                  <div className="star__row star__row--ai">
                    <dt><span className="star__letter">✦</span>{L.ai}</dt>
                    <dd>{item.ai}</dd>
                  </div>
                )}
              </dl>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
