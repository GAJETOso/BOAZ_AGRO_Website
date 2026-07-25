"use client";

import type { ReactNode, CSSProperties, ElementType } from "react";
import { useInView } from "../lib/useInView";

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  style,
  delayMs = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  delayMs?: number;
}) {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref as never}
      className={`reveal${inView ? " visible" : ""} ${className}`.trim()}
      style={{ ...style, transitionDelay: inView ? `${delayMs}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
