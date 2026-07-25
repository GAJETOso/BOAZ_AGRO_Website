import type { Division, HeroHighlight } from "../types";

export const divisions: Division[] = [
  { num: "01", icon: "🌾", name: "Large-Scale Crop Farming", desc: "Industrial cultivation of rice, maize, sorghum, soybeans, and cassava across 5,000+ hectares of prime farmland." },
  { num: "02", icon: "🐄", name: "Livestock Farming", desc: "Integrated poultry, cattle, and small ruminant operations supplying premium protein to domestic and export markets." },
  { num: "03", icon: "🏭", name: "Agro-Processing", desc: "State-of-the-art milling and processing of rice, cassava (flour/starch), and crude/refined palm oil at industrial scale." },
  { num: "04", icon: "🧪", name: "Fertilizer Production", desc: "Manufacturing and distribution of NPK blends, organic fertilizers, and soil amendment products across Nigeria." },
  { num: "05", icon: "📱", name: "AgriTech Platform", desc: "Our farm-to-market digital platform connecting smallholders, processors, and buyers with real-time market intelligence." },
  { num: "06", icon: "❄️", name: "Cold Chain Logistics", desc: "End-to-end refrigerated storage and transport infrastructure ensuring zero-waste delivery of perishable commodities." },
  { num: "07", icon: "🚢", name: "Commodity Export", desc: "Global export of sesame, cashew, cocoa, palm oil, and processed goods to Europe, Asia, and the Middle East." },
  { num: "08", icon: "🏡", name: "Greenhouse Farming", desc: "Precision-controlled greenhouse cultivation of tomatoes, peppers, and exotic vegetables year-round regardless of season." },
  { num: "09", icon: "🐟", name: "Fish Farming", desc: "Commercial aquaculture producing catfish, tilapia, and prawns in recirculating aquaculture systems (RAS) at scale." },
  { num: "10", icon: "🚜", name: "Equipment Leasing", desc: "Leasing of tractors, harvesters, irrigation systems and processing equipment to smallholder farmers across Nigeria." },
];

/** Short labels reused by the ticker marquee. */
export const tickerItems: string[] = [
  "Crop Farming",
  "Livestock & Poultry",
  "Agro-Processing",
  "Fertilizer Production",
  "AgriTech Platform",
  "Cold Chain Logistics",
  "Commodity Export",
  "Greenhouse Farming",
  "Aquaculture",
  "Equipment Leasing",
];

/** The 3 highlighted division cards shown stacked in the hero. */
export const heroHighlights: HeroHighlight[] = [
  {
    icon: "🌾",
    title: "Large-Scale Crop Farming",
    desc: "Rice, maize, cassava & soybean cultivation at industrial scale across fertile Nigerian lowlands.",
    rotate: "-2deg",
  },
  {
    icon: "🏭",
    title: "Agro-Processing",
    desc: "State-of-the-art mills for rice, cassava flour & palm oil processing — zero waste, maximum yield.",
    rotate: "1.5deg",
  },
  {
    icon: "📡",
    title: "Farm-to-Market Platform",
    desc: "Our AgriTech app connects 10,000+ farmers directly to buyers, cutting out middlemen entirely.",
    rotate: "-1deg",
  },
];
