import type { TeamMember } from "@/types";

/**
 * Centralized team data for Rafaqat Babar & Co.
 * Order is strictly specified:
 * Partners:
 *   1. MR. SAIFULLAH, FCA
 *   2. MR. AMER JAVED AHMAD, FCA
 *   3. MR. SHUJA-UL-MULK, FCA
 *   4. MR. NASAR KHAN, ACA
 * Directors:
 *   1. MR. FAHAD AMIN
 *   2. MR. YAWAR MUHAMMAD, ACA
 */
export const teamMembers: TeamMember[] = [
  // ── Partners ──────────────────────────────────────────────
  {
    slug: "saifullah",
    name: "MR. SAIFULLAH, FCA",
    category: "partner",
    role: "Partner",
    email: "saif@rafaqatbabar.com",
    image: "/images/saifullah.jpeg",
    bio: "",
    qualifications: ["FCA"],
  },
  {
    slug: "amer-javed-ahmad",
    name: "MR. AMER JAVED AHMAD, FCA",
    category: "partner",
    role: "Partner",
    email: "amer@rafaqatbabar.com",
    image: "/images/amer-javed-ahmad.jpeg",
    bio: "",
    qualifications: ["FCA"],
  },
  {
    slug: "shuja-ul-mulk",
    name: "MR. SHUJA-UL-MULK, FCA",
    category: "partner",
    role: "Partner",
    email: "shuja@rafaqatbabar.com",
    image: "/images/shuja-ul-mulk.jpeg",
    bio: "",
    qualifications: ["FCA"],
  },
  {
    slug: "nasar-khan",
    name: "MR. NASAR KHAN, ACA",
    category: "partner",
    role: "Partner",
    email: "nasir.khan@rafaqatbabar.com",
    image: "/images/nasar-khan.jpeg",
    bio: "",
    qualifications: ["ACA"],
  },

  // ── Directors ─────────────────────────────────────────────
  {
    slug: "fahad-amin",
    name: "MR. FAHAD AMIN",
    category: "director",
    role: "Director Advisory",
    email: "fahd.amin@rafaqatbabar.com",
    image: "/images/fahad-amin.jpeg",
    bio: "",
    qualifications: [],
  },
  {
    slug: "yawar-muhammad",
    name: "MR. YAWAR MUHAMMAD, ACA",
    category: "director",
    role: "Director Taxation",
    email: "yawar@rafaqatbabar.com",
    image: "/images/yawar-muhammad.jpeg",
    bio: "",
    qualifications: ["ACA"],
  },
];

/** Fallback image for team members without a photo */
export const TEAM_PLACEHOLDER_IMAGE = "/images/saifullah.jpeg";

/** Get team members filtered by category - preserves array sequence */
export function getTeamByCategory(category: TeamMember["category"]) {
  return teamMembers.filter((m) => m.category === category);
}

/** Get a single team member by slug */
export function getTeamMemberBySlug(slug: string) {
  return teamMembers.find((m) => m.slug === slug);
}

/** Category display labels */
export const TEAM_CATEGORIES: {
  key: TeamMember["category"];
  label: string;
  description: string;
}[] = [
  {
    key: "partner",
    label: "Partners",
    description: "The firm's equity leadership and senior practice partners.",
  },
  {
    key: "director",
    label: "Directors",
    description: "Senior leaders directing specialized practice areas.",
  },
  {
    key: "former-partner",
    label: "Former Partners",
    description: "Partners who have contributed to the firm's legacy.",
  },
  {
    key: "team",
    label: "Team",
    description: "Our professional staff driving operational excellence.",
  },
];
