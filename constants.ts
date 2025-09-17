import type { MegaMenuColumn, FeaturedBlogPost, TeamMember, InfoCard, Affiliation, DanRank, BlogPost, FaqItem, DojoKun, GradingComponent, BeltRank, SelfDefenceLevel, SelfDefenceFeature, Lecture, DailySchedule, HistorySection, PricingTab, TerminologySection } from './types';

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    title: 'About Us',
    links: [
      { title: 'Our Dojo', href: '/our-dojo', description: 'Learn about our history and mission.' },
      { title: 'Facilities', href: '/facilities', description: 'Explore our state-of-the-art training space.' },
      { title: 'Mario Sequeira', href: '/mario-sequeira', description: 'Meet our founder and chief instructor.' },
      { title: 'Affiliations', href: '/affiliations', description: 'Our connections in the karate world.' },
    ],
  },
  {
    title: 'Courses',
    links: [
      { title: 'Pre-School', href: '/courses/pre-school', description: 'Fun and engaging classes for the little ones.' },
      { title: 'Scholars', href: '/courses/scholars', description: 'Building discipline and skill in young students.' },
      { title: 'Adults', href: '/courses/adults', description: 'Classes for all skill levels, from beginner to advanced.' },
      { title: 'Self Defence', href: '/courses/self-defence', description: 'Practical techniques for real-world situations.' },
      { title: 'Fitness', href: '/courses/fitness', description: 'Improve your strength and conditioning.' },
    ],
  },
  {
    title: 'Karate',
    links: [
      { title: 'History', href: '/history', description: 'The origins and evolution of Karate-Do.' },
      { title: 'Dojo Etiquette', href: '/dojo-etiquette', description: 'Understanding the rules and respect in the dojo.' },
      { title: 'Terminology', href: '/terminology', description: 'Learn the Japanese terms used in training.' },
      { title: 'Gradings', href: '/gradings', description: 'The path of progression in our dojo.' },
    ],
  },
];

export const featuredBlogPosts: FeaturedBlogPost[] = [
    { title: 'The Philosophy of Karate', href: '/blog/philosophy-of-karate', imageUrl: 'https://images.unsplash.com/photo-1593352222347-1422794a0857?q=80&w=200&auto=format&fit=crop', description: 'Beyond the physical techniques.' },
    { title: 'Training Tips for Beginners', href: '/blog/training-tips', imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=200&auto=format&fit=crop', description: 'Start your journey on the right foot.' },
];

export const teamMembers: TeamMember[] = [
    { name: 'Mario Sequeira', role: 'Founder & Chief Instructor', imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=400&auto=format&fit=crop', learnMoreUrl: '/mario-sequeira' },
    { name: 'Zenobia Sequeira', role: 'Co-Founder & Instructor', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop' },
    { name: 'Senior Instructor', role: '5th Dan Black Belt', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
];

export const infoCards: InfoCard[] = [
  { title: 'Preschool Classes', description: 'Engaging and fun introductions to karate for our youngest students.' },
  { title: 'Children\'s Program', description: 'Building discipline, confidence, and skill in a supportive environment.' },
  { title: 'Adult Karate', description: 'Comprehensive training for adults of all fitness and experience levels.' },
  { title: 'Self-Defence', description: 'Practical and effective techniques for real-world personal safety.' },
];

export const affiliationsData: Affiliation[] = [
  { name: 'World Karate<br/>Federation', description: 'We are proudly affiliated with the WKF, the largest international governing body of sport karate with over 130 member countries.', logoUrl: '/images/wkf-logo.png', learnMoreUrl: '#' },
  { name: 'Karate South Africa', description: 'As a member of KSA, we are part of the national body for karate in South Africa, recognized by SASCOC.', logoUrl: '/images/ksa-logo.png', learnMoreUrl: '#' },
];

export const danRanksData: DanRank[] = [
    { tagline: "First to Third Dan", japaneseName: "初段 - 三段", englishName: "Shodan - Sandan", description: "Holders of the first to third dan black belts. These practitioners have demonstrated a solid foundation and are on the path to mastery.", holders: [{ name: "John Smith" }, { name: "Emily Johnson" }] },
    { tagline: "Fourth & Fifth Dan", japaneseName: "四段 - 五段", englishName: "Yondan - Godan", description: "Advanced ranks representing a deep understanding of karate principles and significant teaching experience.", holders: [{ name: "Michael Williams" }, { name: "Jessica Brown" }] },
    { tagline: "Sixth Dan & Above", japaneseName: "六段以上", englishName: "Rokudan+", description: "Master-level ranks, often awarded for a lifetime of dedication and contribution to the art of karate.", holders: [{ name: "Mario Sequeira" }] },
];

export const blogPostsData: BlogPost[] = [
    { id: 1, slug: 'mastering-the-basics', isFeatured: true, title: 'Mastering the Basics: The Foundation of a Strong Karate Practice', excerpt: 'Discover why fundamental techniques are the key to advancing in your karate journey. We break down the importance of stances, blocks, and strikes.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop', category: 'Training Techniques', author: 'Mario Sequeira', authorImageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop', date: 'Oct 10, 2023', readTimeInMinutes: 5, content: 'Full blog post content goes here...' },
    { id: 2, slug: 'dojo-etiquette-101', title: 'Dojo Etiquette 101: The Unspoken Rules of Respect', excerpt: 'The dojo is a place of respect and discipline. Learn the essential etiquette that every karateka should know before stepping onto the mat.', imageUrl: 'https://images.unsplash.com/photo-1593352222347-1422794a0857?q=80&w=800&auto=format&fit=crop', category: 'Dojo Etiquette', author: 'Zenobia Sequeira', authorImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop', date: 'Oct 5, 2023', readTimeInMinutes: 4, content: '...' },
    { id: 3, slug: 'self-defense-mindset', title: 'The Self-Defense Mindset: Awareness and Prevention', excerpt: 'Effective self-defense begins long before a physical confrontation. We explore the mindset of awareness and prevention.', imageUrl: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=800&auto=format&fit=crop', category: 'Self-Defense', author: 'Senior Instructor', authorImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop', date: 'Sep 28, 2023', readTimeInMinutes: 6, content: '...' },
];

export const dojoEtiquetteFaqs: FaqItem[] = [
    { question: 'Bowing (Rei)', answer: 'The act of bowing is a sign of respect, humility, and trust.' },
    { question: 'Addressing Instructors', answer: 'Instructors should be addressed as "Sensei" or by their appropriate title.' },
    { question: 'Entering and Leaving the Dojo', answer: 'Always bow when entering or leaving the training area.' },
    { question: 'Uniform (Gi)', answer: 'Your gi should always be clean and in good repair.' },
];

export const dojoKun: DojoKun = {
    title: 'Dojo Kun (道場訓)',
    description: 'The Dojo Kun is a set of five guiding principles, recited at the end of each class, that frame the practice of karate.',
    quote: `一、人格完成に努むること<br/>
            一、誠の道を守ること<br/>
            一、努力の精神を養うこと<br/>
            一、礼儀を重んずること<br/>
            一、血気の勇を戒むること`,
    author: {
        name: 'Gichin Funakoshi',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gichin_Funakoshi.jpg/220px-Gichin_Funakoshi.jpg'
    }
};

export const gradingComponentsData: GradingComponent[] = [
    { japaneseName: '基本', englishName: 'Kihon', description: 'Kihon are the basic techniques, including stances, punches, kicks, blocks, and strikes.' },
    { japaneseName: '形', englishName: 'Kata', description: 'Kata are detailed choreographed patterns of movements practiced solo or in pairs.' },
    { japaneseName: '組手', englishName: 'Kumite', description: 'Kumite is the part of karate in which a person trains against an adversary.' },
];

export const beltRanksData: BeltRank[] = [
    { kyu: "10th Kyu", beltName: "White Belt", imageUrl: "/images/belts/white.svg", description: "Represents the beginning, a clean slate.", requirements: [{ category: 'Kihon', description: 'Basic stances and punches.' }] },
    { kyu: "9th Kyu", beltName: "Yellow Belt", imageUrl: "/images/belts/yellow.svg", description: "Symbolizes the first ray of sunlight, the start of knowledge.", requirements: [{ category: 'Kata', description: 'Taikyoku Shodan' }] },
];

export const selfDefenceLevels: SelfDefenceLevel[] = [
  { title: "Level 1: Foundational Skills", description: "Learn the basics of awareness, avoidance, and simple escape techniques.", imageUrl: "/images/self-defence-1.jpg" },
  { title: "Level 2: Intermediate Techniques", description: "Develop skills to counter common attacks and grabs.", imageUrl: "/images/self-defence-2.jpg" },
  { title: "Level 3: Advanced Scenarios", description: "Practice defenses against multiple attackers and weapon threats.", imageUrl: "/images/self-defence-3.jpg" },
];

export const selfDefenceFeatures: SelfDefenceFeature[] = [
  { title: "Pro-Active Concepts", description: "Learn to anticipate and de-escalate potential threats before they turn violent." },
  { title: "Practical Techniques", description: "Focus on simple, effective moves that work under pressure, regardless of size or strength." },
  { title: "Interactive Training", description: "Participate in hands-on drills and realistic scenarios to build muscle memory and confidence." },
  { title: "Comprehensive Manual", description: "Receive a detailed manual to review and practice the techniques covered in the course." },
];

export const lecturesData: Lecture[] = [
  { title: "Corporate Self-Defence Workshop", category: "Workshop", description: "Equip your team with essential safety skills in this engaging corporate workshop.", imageUrl: "/images/lecture-corporate.jpg" },
  { title: "Campus Safety Seminar", category: "Seminar", description: "A must for students, this seminar covers awareness, risk reduction, and basic self-protection.", imageUrl: "/images/lecture-campus.jpg" },
];

export const selfDefenceFaqs: FaqItem[] = [
  { question: "Do I need any prior experience?", answer: "No, our courses are designed for complete beginners. We start with the basics and build from there." },
  { question: "What should I wear?", answer: "Comfortable athletic clothing is recommended. No special uniform is required." },
  { question: "Is it physically demanding?", answer: "The courses are designed to be accessible to people of all fitness levels. You can participate at your own pace." },
];

export const scheduleData: DailySchedule[] = [
    { day: "Monday", classes: [{ time: "17:00 - 18:00", name: "Kids Karate", instructor: "Sensei Jane" }] },
    { day: "Tuesday", classes: [{ time: "18:00 - 19:30", name: "Adults Kihon", instructor: "Sensei Mario" }] },
    { day: "Wednesday", classes: [{ time: "17:00 - 18:00", name: "Kids Kumite", instructor: "Sensei John" }] },
    { day: "Thursday", classes: [{ time: "18:00 - 19:30", name: "Adults Kata", instructor: "Sensei Mario" }] },
    { day: "Friday", classes: [{ time: "17:00 - 18:00", name: "Advanced Kids", instructor: "Sensei Jane" }] },
    { day: "Saturday", classes: [{ time: "10:00 - 12:00", name: "Open Mat", instructor: "All Instructors" }] },
];

export const historySectionsData: HistorySection[] = [
  { title: "Okinawan Origins", description: "Karate's roots trace back to the Ryukyu Kingdom, now Okinawa, Japan. It developed from indigenous fighting arts and Chinese kenpō.", imageUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop", imageAlt: "Ancient Okinawan castle" },
  { title: "Introduction to Japan", description: "Gichin Funakoshi, an Okinawan master, is credited with introducing and popularizing karate on the main islands of Japan in the early 20th century.", imageUrl: "https://images.unsplash.com/photo-1574680096145-f844349f0409?q=80&w=800&auto=format&fit=crop", imageAlt: "Gichin Funakoshi" },
];

export const pricingTabsData: PricingTab[] = [
  {
    name: "Monthly",
    plans: [
      { name: "Basic", description: "Access to all group classes." },
      { name: "Premium", description: "Includes private lesson." },
    ],
    categories: [
      {
        name: "Features",
        features: [
          { name: "Group Classes", values: [true, true] },
          { name: "Private Lessons", values: ["-", "1/month"] },
        ],
      },
    ],
  },
];

export const terminologySections: TerminologySection[] = [
  { 
    title: "General Terms", 
    description: "Commonly used terms in the dojo.", 
    columns: 3, 
    terms: [
      { japaneseName: "道場", englishName: "Dojo (Training Hall)" },
      { japaneseName: "先生", englishName: "Sensei (Teacher)" },
      { japaneseName: "礼", englishName: "Rei (Bow)" },
    ]
  },
  { 
    title: "Stances", 
    japaneseTitle: "立ち方", 
    description: "Fundamental stances in karate.", 
    columns: 2, 
    terms: [
      { japaneseName: "前屈立ち", englishName: "Zenkutsu-dachi (Front Stance)" },
      { japaneseName: "後屈立ち", englishName: "Kōkutsu-dachi (Back Stance)" },
    ]
  },
];
