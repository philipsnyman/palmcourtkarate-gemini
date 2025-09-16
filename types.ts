import React from 'react';

export interface MegaMenuLink {
  title: string;
  href: string;
  description: string;
  icon?: React.ReactNode;
}

export interface MegaMenuColumn {
  title: string;
  links: MegaMenuLink[];
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface InfoCard {
  title: string;
  description: string;
}

export interface Affiliation {
    name: string;
    description: string;
    logoUrl: string;
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
