"use client";

import { useEffect, useState } from "react";

/** Decelerated ease-out curve — fast start, soft landing. Matches --ease-premium. */
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * Counts up from 0 to the numeric portion of `target` (e.g. "5,000+" -> 5000)
 * once `start` becomes true, using an eased requestAnimationFrame loop for a
 * smooth, decelerating finish rather than a linear tick. Snaps to the exact
 * target string on completion. Respects prefers-reduced-motion by jumping
 * straight to the target.
 */
export function useAnimatedCounter(target: string, start: boolean, durationMs = 1600) {
  const [display, setDisplay] = useState(start ? target : "0");

  useEffect(() => {
    if (!start) return;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setDisplay(target);
      return;
    }

    const targetVal = parseFloat(target.replace(/[^0-9.]/g, "")) || 0;
    const suffix = target.replace(/[0-9.,]/g, "");
    let raf = 0;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = easeOutExpo(progress);
      const current = targetVal * eased;

      if (progress >= 1) {
        setDisplay(target);
        return;
      }
      setDisplay(Math.floor(current).toLocaleString() + suffix);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, durationMs]);

  return display;
}
