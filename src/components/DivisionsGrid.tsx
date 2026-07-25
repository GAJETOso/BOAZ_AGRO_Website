"use client";

import { useEffect, useRef, useState } from "react";
import { divisions } from "../data/divisions";

export default function DivisionsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [staggered, setStaggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          revealObserver.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    const staggerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStaggered(true);
          staggerObserver.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    revealObserver.observe(el);
    staggerObserver.observe(el);
    return () => {
      revealObserver.disconnect();
      staggerObserver.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`divisions-grid reveal${revealed ? " visible" : ""}`}>
      {divisions.map((d, i) => (
        <div
          key={d.num}
          className="div-card"
          style={{
            opacity: staggered ? 1 : 0,
            transform: staggered ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.5s ease, transform 0.5s ease, background 0.4s, border-color 0.4s",
            transitionDelay: staggered ? `${i * 70}ms` : undefined,
          }}
        >
          <div className="div-num">{d.num}</div>
          <span className="div-icon">{d.icon}</span>
          <h3 className="div-name">{d.name}</h3>
          <p className="div-desc">{d.desc}</p>
          <span className="div-arrow">↗</span>
        </div>
      ))}
    </div>
  );
}
