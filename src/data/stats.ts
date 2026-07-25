import { divisions } from "./divisions";
import type { StatTile } from "../types";

/**
 * Every headline number on the site lives here — nowhere else. To change a
 * stat, change it in this file only.
 *
 * TODO(real-figures): yearsOfImpact, hectares, statesOfOperation,
 * smallholderPartners, and coldChainHubs are carried over unchanged from the
 * original marketing copy and have NOT been verified against the company's
 * actual figures — they were flagged in review as potentially too large for
 * a recently established company. Replace them with real numbers before
 * this content is treated as authoritative; until then, treat every value
 * below (other than businessVerticals, which is derived from the actual
 * division list) as a placeholder.
 */
export const stats = {
  /** Derived from data/divisions.ts — not a guess, always accurate. */
  businessVerticals: divisions.length,

  yearsOfImpact: 10,
  hectares: 5000,
  statesOfOperation: 15,
  smallholderPartners: 10000,
  coldChainHubs: 12,
};

export const heroStats: StatTile[] = [
  { value: `${stats.businessVerticals}+`, label: "Business Verticals" },
  { value: `${stats.hectares.toLocaleString()}+`, label: "Hectares Farmed" },
  { value: `${stats.statesOfOperation}+`, label: "States Active" },
];

export const whyNumbers: StatTile[] = [
  { value: `${stats.hectares.toLocaleString()}+`, label: "Hectares Under Cultivation" },
  { value: `${Math.round(stats.smallholderPartners / 1000)}K+`, label: "Smallholder Partners" },
  { value: `${stats.statesOfOperation}+`, label: "States of Operation" },
  { value: `${stats.coldChainHubs}`, label: "Cold Chain Hubs" },
];
