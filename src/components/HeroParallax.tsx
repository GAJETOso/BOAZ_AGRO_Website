"use client";

import { useParallax } from "../lib/useParallax";

export default function HeroParallax() {
  const bgRef = useParallax<HTMLDivElement>(0.12);
  const circle1Ref = useParallax<HTMLDivElement>(0.06);
  const circle2Ref = useParallax<HTMLDivElement>(-0.05);
  const circle3Ref = useParallax<HTMLDivElement>(0.1);

  return (
    <>
      <div ref={bgRef} className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div ref={circle1Ref} className="hero-circle"></div>
      <div ref={circle2Ref} className="hero-circle"></div>
      <div ref={circle3Ref} className="hero-circle"></div>
    </>
  );
}
