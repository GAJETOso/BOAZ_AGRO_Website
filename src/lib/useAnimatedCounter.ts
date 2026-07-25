"use client";

import { useEffect, useState } from "react";

/**
 * Counts up from 0 to the numeric portion of `target` (e.g. "5,000+" -> 5000)
 * over ~1.5s once `start` becomes true, then snaps to the exact target
 * string. Mirrors the original site's animateCounter().
 */
export function useAnimatedCounter(target: string, start: boolean) {
  const [display, setDisplay] = useState(start ? target : "0");

  useEffect(() => {
    if (!start) return;

    const targetVal = parseFloat(target.replace(/[^0-9.]/g, "")) || 0;
    const suffix = target.replace(/[0-9.,]/g, "");
    const increment = targetVal / 60;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetVal) {
        clearInterval(timer);
        setDisplay(target);
      } else {
        setDisplay(Math.floor(current).toLocaleString() + suffix);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [start, target]);

  return display;
}
