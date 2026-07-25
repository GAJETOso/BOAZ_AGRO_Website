import type { ProcessStep, ChainCell } from "../types";

export const coldChainSteps: ProcessStep[] = [
  { num: "01", title: "Farm-Gate Collection", desc: "Refrigerated trucks deployed to farm locations within 4 hours of harvest notification via BoazConnect." },
  { num: "02", title: "Regional Cold Hubs", desc: "12 strategically placed cold storage hubs with 50,000 MT aggregate capacity across 6 geopolitical zones." },
  { num: "03", title: "Quality Inspection & Sorting", desc: "Automated optical sorting and laboratory testing to export-grade certification before onward shipment." },
  { num: "04", title: "Port Delivery & Export", desc: "Direct partnerships with Apapa, Tin Can, and Onne ports for seamless container loading and customs clearance." },
];

/** Rendered as a 3-column grid, one row at a time. */
export const coldChainRows: ChainCell[][] = [
  [
    { icon: "🌾", label: "Harvest", highlight: true },
    { icon: "🚛", label: "Collection" },
    { icon: "❄️", label: "Cold Storage", highlight: true },
  ],
  [
    { icon: "🔬", label: "QC Testing" },
    { icon: "📦", label: "Packaging", highlight: true },
    { icon: "🏷️", label: "Labelling" },
  ],
  [
    { icon: "🚢", label: "Export", highlight: true },
    { icon: "🌍", label: "Global Markets" },
    { icon: "🛒", label: "End Consumer", highlight: true },
  ],
];

export const coldChainSummary: ChainCell = {
  icon: "📊",
  label: "Real-time tracking & temperature monitoring across every node",
  wide: true,
};
