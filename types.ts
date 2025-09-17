import type { ReactNode } from 'react';

export interface MegaMenuLink {
  title: string;
  href: string;
  description: string;
  icon?: ReactNode;
}

export interface MegaMenuColumn {
  title: string;
  links: MegaMenuLink[];
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

export interface FeaturedBlogPost {
    title: string;
    href: string;
    description: string;
    imageUrl: string;
}

export interface Affiliation {
    name: string;
    description: string;
    logoUrl: string;
    learnMoreUrl: string;
}

export interface DanRankHolder {
    name: string;
    description: string;
}

export interface DanRank {
    tagline: string;
    japaneseName: string;
    englishName: string;
    description: string;
    holders: DanRankHolder[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  authorImageUrl: string;
  date: string;
  readTimeInMinutes: number;
  isFeatured: boolean;
}