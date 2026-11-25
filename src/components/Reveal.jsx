import { useEffect, useRef, useState } from "react";

// Faz a seção surgir suavemente quando entra na tela
export default function Reveal({ as: Tag = "section", className = "", children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
