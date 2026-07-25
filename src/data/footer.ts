import type { FooterColumn } from "../types";

export const footerColumns: FooterColumn[] = [
  {
    title: "Divisions",
    links: [
      { label: "Crop Farming", href: "#divisions" },
      { label: "Livestock", href: "#divisions" },
      { label: "Agro-Processing", href: "#divisions" },
      { label: "Fertilizer", href: "#divisions" },
      { label: "AgriTech", href: "#agritech" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Cold Chain", href: "#logistics" },
      { label: "Sustainability", href: "#circularity" },
      { label: "Exports", href: "#exports" },
      { label: "Greenhouse", href: "#divisions" },
      { label: "Aquaculture", href: "#divisions" },
      { label: "Equipment Leasing", href: "#divisions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Invest With Us", href: "#why" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
      { label: "Media & Press", href: "#" },
      { label: "🔒 Staff Portal", href: "https://boaz-agro-internal.vercel.app/", external: true },
    ],
  },
];

export const certBadges: string[] = ["NAFDAC", "ISO 9001", "NEXIM"];
