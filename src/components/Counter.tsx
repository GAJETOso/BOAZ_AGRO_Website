"use client";

import { useAnimatedCounter } from "../lib/useAnimatedCounter";

export default function Counter({ value, active }: { value: string; active: boolean }) {
  const display = useAnimatedCounter(value, active);
  return <>{display}</>;
}
