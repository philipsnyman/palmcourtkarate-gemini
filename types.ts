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

export interface FaqItem {
    question: string;
    answer: ReactNode;
}

export interface GradingComponent {
    japaneseName: string;
    englishName: string;
    description: string;
}

export interface BeltRankRequirement {
    category: string;
    description: string;
}

export interface BeltRank {
    kyu: string;
    beltName: string;
    imageUrl: string;
    description: string;
    requirements: BeltRankRequirement[];
}

export interface HistorySection {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface TerminologyEntry {
    japaneseName: string;
    englishName: string;
}

export interface TerminologySection {
    title: string;
    japaneseTitle?: string;
    description: string;
    terms: TerminologyEntry[];
    columns: number;
}

export interface PricingFeature {
  name: string;
  values: (string | boolean)[];
}

export interface PricingPlan {
  name: string;
  description: string;
}

export interface PricingCategory {
  name: string;
  features: PricingFeature[];
}

export interface PricingTab {
  name: string;
  plans: PricingPlan[];
  categories: PricingCategory[];
}

export interface SelfDefenceLevel {
    title: string;
    description: string;
    imageUrl: string;
}

export interface SelfDefenceFeature {
    title: string;
    description: string;
}

export interface Lecture {
    category: string;
    title: string;
    description: string;
    imageUrl: string;
}

export interface ScheduleClass {
  time: string;
  name: string;
  instructor: string;
}

export interface DailySchedule {
  day: string;
  classes: ScheduleClass[];
}

export interface UserData {
    name: string;
    email: string;
    profilePictureUrl: string | null;
    currentRank: {
        name: string;
        kyu: string;
        imageUrl: string;
    };
    nextRank: {
        name: string;
        kyu: string;
    };
    progress: {
        classesAttended: number;
        classesRequired: number;
        nextGradingDate: string;
    };
    nextClass: {
        name: string;
        day: string;
        time: string;
        instructor: string;
    };
    announcements: {
        id: number;
        title: string;
        date: string;
    }[];
}

export interface BookingClass {
    id: number;
    name: string;
    day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
    time: string;
    instructor: string;
    spotsAvailable: number;
    spotsTotal: number;
}