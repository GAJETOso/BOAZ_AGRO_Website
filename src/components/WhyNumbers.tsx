"use client";

import { useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import { whyNumbers } from "../data/stats";

export default function WhyNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [counting, setCounting] = useState(false);

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
    const countObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounting(true);
          countObserver.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    revealObserver.observe(el);
    countObserver.observe(el);
    return () => {
      revealObserver.disconnect();
      countObserver.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`why-numbers reveal${revealed ? " visible" : ""}`}>
      {whyNumbers.map((s) => (
        <div className="wn-item" key={s.label}>
          <span className="wn-num">
            <Counter value={s.value} active={counting} />
          </span>
          <p className="wn-label">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
