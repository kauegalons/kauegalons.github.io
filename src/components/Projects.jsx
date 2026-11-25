import { GitHubIcon, FolderIcon } from "./Icons.jsx";
import { links } from "../content.js";

export default function Projects({ projects, t, lang }) {
  return (
    <>
      <div className="featured">
        {projects.featured.map((p, i) => (
          <article key={p.title} className={`feat ${i % 2 ? "feat--right" : ""}`}>
            <div className="feat__visual" aria-hidden="true">
              <span className="feat__mono">{p.title.split(" ").map((w) => w[0]).join("")}</span>
            </div>
            <div className="feat__body">
              <p className="mono accent feat__label">{t.featuredLabel}</p>
              <h3 className="feat__title">
                <a href={p.repo} target="_blank" rel="noopener noreferrer">{p.title}</a>
              </h3>
              <div className="feat__desc">{p.desc[lang]}</div>
              <ul className="tech-list">
                {p.tech.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <a className="icon-link" href={p.repo} target="_blank" rel="noopener noreferrer" aria-label={`GitHub — ${p.title}`}>
                <GitHubIcon />
              </a>
            </div>
          </article>
        ))}
      </div>

      <h3 className="others-title">{t.othersTitle}</h3>
      <div className="grid">
        {projects.others.map((p) => (
          <a key={p.title} className="card" href={p.repo} target="_blank" rel="noopener noreferrer">
            <div className="card__top">
              <span className="folder"><FolderIcon /></span>
              <span className="card__gh"><GitHubIcon /></span>
            </div>
            <h4>{p.title}</h4>
            <p>{p.desc[lang]}</p>
            <ul className="tech-list tech-list--small">
              {p.tech.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </a>
        ))}
      </div>

      <div className="center">
        <a className="btn" href={`${links.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">
          {t.more} →
        </a>
      </div>
    </>
  );
}
