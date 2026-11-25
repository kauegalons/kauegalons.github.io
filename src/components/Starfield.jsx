import { useEffect, useRef } from "react";

// Céu estrelado animado no fundo do hero (canvas leve, sem dependências)
export default function Starfield() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars = [];
    let raf;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 6000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        r: Math.random() * 1.3 + 0.2,
        speed: Math.random() * 0.25 + 0.05,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (t = 0) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const twinkle = 0.5 + 0.5 * Math.sin(t / 900 + s.phase);
        ctx.globalAlpha = 0.25 + twinkle * 0.6;
        ctx.fillStyle = s.r > 1.2 ? "#64ffda" : "#ccd6f6";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        if (!reduce) {
          s.y -= s.speed;
          if (s.y < -2) { s.y = h + 2; s.x = Math.random() * w; }
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="starfield" aria-hidden="true" />;
}
