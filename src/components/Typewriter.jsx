import { useEffect, useState } from "react";

export default function Typewriter({ phrases }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let p = 0, c = 0, deleting = false, timer;
    setText("");
    const tick = () => {
      const word = phrases[p];
      let delay;
      if (!deleting && c < word.length) { c++; delay = 65; }
      else if (!deleting) { deleting = true; delay = 1900; }
      else if (c > 0) { c--; delay = 30; }
      else { deleting = false; p = (p + 1) % phrases.length; delay = 350; }
      setText(word.slice(0, c));
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [phrases]);

  return <span className="typed" aria-label={phrases[0]}>{text}</span>;
}
