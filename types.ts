export interface MegaMenuLink {
  title: string;
  href: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  learnMoreUrl?: string;
}

export interface InfoCard {
  title: string;
  description: string;
}

export interface Affiliation {
  name: string;
  description: string;
  logoUrl: string;
  learnMoreUrl: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  author: string;
  authorImageUrl: string;
  date: string;
  readTimeInMinutes: number;
  isFeatured: boolean;
}

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export interface GradingComponent {
  japaneseName: string;
  englishName: string;
  description: string;
}

export interface BeltRank {
    kyu: string;
    beltName: string;
    imageUrl: string;
    description: string;
    requirements: {
        category: string;
        description: string;
    }[];
}

export interface TerminologyEntry {
  japanese: string;
  english: string;
}

export interface TerminologySection {
  tagline?: string;
  title: string;
  description: string;
  terms: TerminologyEntry[];
}