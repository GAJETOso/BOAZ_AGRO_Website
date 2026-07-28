import type { MythFact } from "../types";
import { stats } from "./stats";

export const mythsFacts: MythFact[] = [
  {
    myth: "Large agribusinesses always squeeze out smallholder farmers.",
    fact: `Our model runs the opposite way: smallholder partners get input support, extension training, and a guaranteed offtake agreement through our AgriTech platform — currently ${stats.smallholderPartners}+ registered farmers, growing as we expand.`,
  },
  {
    myth: '"Zero-waste" and "circular economy" claims are usually just marketing.',
    fact: "Ours is tracked as a formal internal SOP (SOP-RCY-001) with a measured target — at least 90% of identified byproduct streams converted and reused, audited monthly, not a slogan without a number behind it.",
  },
  {
    myth: "Industrial-scale farming means chemical-heavy, unsafe produce.",
    fact: "Our crop protection follows an Integrated Pest Management hierarchy — scouting and thresholds first, biological and cultural controls next, chemical treatment only as a last resort and always within label rates, with full spray records kept per batch.",
  },
  {
    myth: "Cold chain and export infrastructure only benefit large buyers, not local markets.",
    fact: "The same cold storage and logistics network that serves export shipments also cuts post-harvest loss for domestic distribution — moving perishables from farm gate to buyer without the spoilage that destroys smallholder margins.",
  },
  {
    myth: "AgTech platforms are just an app layer with no real impact on farmer income.",
    fact: "Real-time price intelligence and direct buyer connections remove layers of middlemen between farm gate and market — the entire point is that farmers capture more of the final sale price, not less.",
  },
  {
    myth: "A company this young can't have real ESG or governance standards.",
    fact: `We publish our actual current figures rather than aspirational ones — ${stats.hectares} hectares, ${stats.statesOfOperation} states of operation — and our HSE, quality, and governance frameworks are documented internal policy from day one, not something added later.`,
  },
];
