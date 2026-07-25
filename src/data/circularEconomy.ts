import type { FeatureItem, ChainCell } from "../types";

export const circularEconomyFeatures: FeatureItem[] = [
  { icon: "🐄", title: "Cattle & Poultry Dung → Organic Manure and Biogas", desc: "Composted and digested on-site to feed our Fertilizer division and power farm operations." },
  { icon: "🌽", title: "Corn Husks, Cobs & Peels → Livestock Feed", desc: "Dried and milled into feed supplement, cutting purchased feed costs for our Livestock division." },
  { icon: "🌾", title: "Rice Husks & Cassava Peels → Fuel and Feed", desc: "Processing residues become boiler fuel, animal bedding, and additional feed and fertilizer inputs." },
  { icon: "🐟", title: "Fish & Crop Residue → Compost", desc: "Pond sludge, fish offal, and crop trimmings are composted into soil amendment for our farms." },
];

/** Rendered as a 3-column grid, one row at a time. */
export const circularEconomyRows: ChainCell[][] = [
  [
    { icon: "🐄", label: "Dung", highlight: true },
    { icon: "♻️", label: "Compost / Digest" },
    { icon: "🧪", label: "Manure & Biogas", highlight: true },
  ],
  [
    { icon: "🌽", label: "Corn Peels / Husks" },
    { icon: "⚙️", label: "Dry & Mill", highlight: true },
    { icon: "🐖", label: "Livestock Feed" },
  ],
  [
    { icon: "🏭", label: "Processing Residue", highlight: true },
    { icon: "🔥", label: "Fuel / Bedding" },
    { icon: "🌱", label: "Back to the Farm", highlight: true },
  ],
];
