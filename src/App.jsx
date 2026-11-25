import { useEffect, useState } from "react";
import { content, links, projects, experience } from "./content.js";
import AiSection from "./components/AiSection.jsx";
import AboutPhoto from "./components/AboutPhoto.jsx";
import Starfield from "./components/Starfield.jsx";
import Typewriter from "./components/Typewriter.jsx";
import Reveal from "./components/Reveal.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./components/Icons.jsx";

const SECTIONS = ["sobre", "ia", "experiencia", "projetos", "contato"];

function initialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  // Destaca o link da seção visível
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const socials = (
    <div className="socials">
      <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
      <a href={`mailto:${links.email}`} aria-label="E-mail"><MailIcon /></a>
    </div>
  );

  const langToggle = (
    <div className="lang" role="group" aria-label="Idioma / Language">
      {["pt", "en"].map((l) => (
        <button key={l} className={lang === l ? "active" : ""} onClick={() => setLang(l)} aria-pressed={lang === l}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <header className={`sidebar ${menuOpen ? "open" : ""}`}>
        <a href="#top" className="logo" onClick={() => setMenuOpen(false)} aria-label="Kauê Galon">
          KG
        </a>
        <button className="burger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu" aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
        <nav className="nav" aria-label="Seções">
          {SECTIONS.map((id, i) => (
            <a key={id} href={`#${id}`} className={activeId === id ? "active" : ""} onClick={() => setMenuOpen(false)}>
              <span className="accent">0{i + 1}.</span> {t.nav[i]}
            </a>
          ))}
          <div className="nav__extra">
            {langToggle}
            {socials}
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="intro">
          <Starfield />
          <div className="intro__content">
            <div className="intro__text">
            <p className="mono accent intro__hi">{t.intro.hi}</p>
            <h1 className="intro__name">
              {t.intro.name}<span className="blink accent">.</span>
            </h1>
            <h2 className="intro__typed"><Typewriter phrases={t.intro.typed} /></h2>
            <p className="intro__bio">{t.intro.bio}</p>
            <div className="intro__cta">
              <a href="#contato" className="btn btn--solid">{t.intro.cta}</a>
              <a href="#projetos" className="btn">{t.intro.cta2} →</a>
            </div>
            </div>
            <div className="intro__photo">
              <img src="/foto.jpg" alt="Kauê Galon" width="640" height="640" />
            </div>
          </div>
        </section>

        <Reveal id="sobre" className="section">
          <h2 className="section__title"><span>01.</span> {t.about.title}</h2>
          <div className="about">
            <div>
              {t.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
              <p>{t.about.techIntro}</p>
              <ul className="tech-grid">
                {t.about.tech.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
            <AboutPhoto />
          </div>
        </Reveal>

        <Reveal id="ia" className="section">
          <h2 className="section__title"><span>02.</span> {t.ai.title}</h2>
          <AiSection t={t.ai} lang={lang} />
        </Reveal>

        <Reveal id="experiencia" className="section">
          <h2 className="section__title"><span>03.</span> {t.experience.title}</h2>
          <Experience items={experience} lang={lang} />
        </Reveal>

        <Reveal id="projetos" className="section">
          <h2 className="section__title"><span>04.</span> {t.projects.title}</h2>
          <Projects projects={projects} t={t.projects} lang={lang} />
        </Reveal>

        <Reveal id="contato" className="section contact">
          <h2 className="section__title section__title--center"><span>05.</span> {t.contact.title}</h2>
          <h3 className="contact__heading">{t.contact.heading}</h3>
          <p>{t.contact.text}</p>
          <a className="btn btn--solid" href={`mailto:${links.email}`}>{t.contact.button}</a>
        </Reveal>
      </main>

      <footer className="footer">
        {socials}
        <p className="mono">{t.footer} · © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
