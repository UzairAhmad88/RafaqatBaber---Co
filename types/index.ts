export type TeamCategory = "partner" | "former-partner" | "director" | "team";

export interface TeamMember {
  slug: string;
  name: string;
  category: TeamCategory;
  role: string;
  designation?: string;
  specialty?: string;
  image: string;
  bio: string;
  qualifications?: string[];
  location?: string;
  email?: string;
  linkedin?: string;
}

export interface Office {
  slug: string;
  name: string;
  city: string;
  tag: string;
  address: string;
  phone: string;
  email: string;
  mapUrl?: string;
  hours?: { days: string; time: string }[];
}

export interface ServiceCategory {
  title: string;
  slug: string;
  href: string;
  description: string;
  subservices: string[];
}

export type Insight = {
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
};
