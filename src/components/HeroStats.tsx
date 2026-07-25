"use client";

import { useInView } from "../lib/useInView";
import Counter from "./Counter";
import { heroStats } from "../data/stats";

export default function HeroStats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);

  return (
    <div className="hero-stats" ref={ref}>
      {heroStats.map((s) => (
        <div className="hero-stat" key={s.label}>
          <strong className="wn-num">
            <Counter value={s.value} active={inView} />
          </strong>
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
