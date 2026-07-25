import { divisions } from "./divisions";
import { companyStats } from "./companyStats";
import type { StatTile } from "../types";

/**
 * Every headline number on the site lives here (or in ./companyStats, which
 * this re-exports from) — nowhere else. To change a stat, change it there.
 */
export const stats = {
  ...companyStats,
  /** Derived from data/divisions.ts — not a guess, always accurate. */
  businessVerticals: divisions.length,
};

export const heroStats: StatTile[] = [
  { value: `${stats.businessVerticals}`, label: "Business Verticals" },
  { value: `${stats.hectares}`, label: "Hectares Farmed" },
  { value: `${stats.statesOfOperation}`, label: "States Active" },
];

export const whyNumbers: StatTile[] = [
  { value: `${stats.hectares}`, label: "Hectares Under Cultivation" },
  { value: `${stats.smallholderPartners}+`, label: "Smallholder Partners" },
  { value: `${stats.statesOfOperation}`, label: "States of Operation" },
  { value: `${stats.coldChainHubs}`, label: "Cold Chain Hubs" },
];
