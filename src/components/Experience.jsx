import { useState } from "react";
import { starLabels } from "../experience.js";
import StarList from "./StarList.jsx";

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
        <StarList items={job.star[lang]} labels={L} extraLabel={L.ai} />
      </div>
    </div>
  );
}
