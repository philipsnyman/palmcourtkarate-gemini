export type MegaMenuLink = {
  title: string;
  href: string;
  description: string;
};

export type MegaMenuColumn = {
  title: string;
  links: MegaMenuLink[];
};

export type FeaturedBlogPost = {
  title: string;
  href: string;
  imageUrl: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  learnMoreUrl?: string;
};

export type InfoCard = {
  title: string;
  description: string;
};

export type Affiliation = {
  name: string;
  description: string;
  logoUrl: string;
  learnMoreUrl: string;
};

export type DanRankHolder = {
  name: string;
  description?: string;
};

export type DanRank = {
  tagline: string;
  japaneseName: string;
  englishName: string;
  description: string;
  holders: DanRankHolder[];
};

export type BlogPost = {
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
  isFeatured?: boolean;
  content: string;
};

export type FaqItem = {
  question: string;
  answer: string | React.ReactNode;
};

export type DojoKun = {
  title: string;
  description: string;
  quote: string;
  author: {
    name: string;
    imageUrl: string;
  };
};

export type GradingComponent = {
  japaneseName: string;
  englishName: string;
  description: string;
};

export type BeltRankRequirement = {
  category: string;
  description: string;
};

export type BeltRank = {
  kyu: string;
  beltName: string;
  imageUrl: string;
  description: string;
  requirements: BeltRankRequirement[];
};

export type SelfDefenceLevel = {
  title: string;
  description: string;
  imageUrl: string;
};

export type SelfDefenceFeature = {
  title: string;
  description: string;
};

export type Lecture = {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
};

export type ScheduleItem = {
    time: string;
    name: string;
    instructor: string;
};

export type DailySchedule = {
    day: string;
    classes: ScheduleItem[];
};

export type HistorySection = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

export type PricingPlan = {
  name: string;
  description: string;
};

export type PricingFeature = {
  name: string;
  values: (string | boolean)[];
};

export type PricingCategory = {
  name: string;
  features: PricingFeature[];
};

export type PricingTab = {
  name: string;
  plans: PricingPlan[];
  categories: PricingCategory[];
};

export type Term = {
  japaneseName: string;
  englishName: string;
};

export type TerminologySection = {
  title: string;
  japaneseTitle?: string;
  description: string;
  columns: number;
  terms: Term[];
};
