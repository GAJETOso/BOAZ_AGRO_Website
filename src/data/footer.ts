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
      { label: "Our Founder", href: "/about/founder" },
      { label: "Leadership Team", href: "/about/leadership" },
      { label: "Mission & Vision", href: "/about/mission" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Annual Reports", href: "/resources/reports" },
      { label: "Financial Statements", href: "/resources/financials" },
      { label: "Invest With Us", href: "#why" },
      { label: "Careers", href: "#" },
      { label: "Media & Press", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Legal & Compliance", href: "/legal" },
      { label: "Safeguarding Policy", href: "/safeguarding" },
      { label: "Whistleblower Policy", href: "/whistleblower" },
      { label: "AML Policy", href: "/aml-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "🔒 Staff Portal", href: "https://boaz-agro-internal.vercel.app/", external: true },
    ],
  },
];

export const certBadges: string[] = ["NAFDAC", "ISO 9001", "NEXIM"];
