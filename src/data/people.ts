export interface LeaderProfile {
  name: string;
  role: string;
  bio: string;
}

export const founder = {
  name: "Ayotunde Oso",
  role: "Founder & Managing Director",
  bio:
    "Ayotunde founded BOAZ AGRO LIMITED in 2026 with a simple conviction: that Nigeria's agricultural potential is best unlocked by a single enterprise that owns the whole chain — from the soil to the export dock — rather than leaving farmers to face fragmented markets alone. Starting from the company's first plots, the focus has been on proving a model built for scale before chasing scale itself: sound agronomy, disciplined recordkeeping, and technology that pays for itself in the first season.",
  quote:
    "We don't just grow food — we build systems that feed nations and create wealth for generations.",
};

export const leadershipTeam: LeaderProfile[] = [
  {
    name: "Ngozi Adeyemi",
    role: "GM Operations",
    bio: "Oversees day-to-day operations across every division, from field to export, and chairs the company's HSE Committee.",
  },
  {
    name: "Ibrahim Suleiman",
    role: "GM Agronomy",
    bio: "Leads crop planning, soil management, and agronomic standards across all farming blocks and the greenhouse division.",
  },
  {
    name: "Chiamaka Okafor",
    role: "Finance Manager",
    bio: "Responsible for financial planning, budgeting, and the controls that keep the company's books audit-ready year-round.",
  },
  {
    name: "Tunde Bakare",
    role: "Plant Manager",
    bio: "Runs the agro-processing plant and fertilizer production line, with accountability for HACCP compliance and output quality.",
  },
];
