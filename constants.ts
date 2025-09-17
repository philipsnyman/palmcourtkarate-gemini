import type {
  MegaMenuColumn,
  FeaturedBlogPost,
  TeamMember,
  InfoCard,
  Affiliation,
  DanRank,
  BlogPost,
  FaqItem,
  DojoKun,
  GradingComponent,
  BeltRank,
  SelfDefenceLevel,
  SelfDefenceFeature,
  Lecture,
  ScheduleDay,
  HistorySection,
  PricingTab,
  TerminologySection,
} from './types';

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    title: 'About Us',
    links: [
      { title: 'Our Dojo', href: '/our-dojo', description: 'Learn about our history and philosophy.' },
      { title: 'Facilities', href: '/facilities', description: 'Explore our state-of-the-art training center.' },
      { title: 'Mario Sequeira', href: '/mario-sequeira', description: 'Meet our founder and chief instructor.' },
      { title: 'Affiliations', href: '/affiliations', description: 'Our connections in the karate world.' },
    ],
  },
  {
    title: 'Karate',
    links: [
      { title: 'History', href: '/history', description: 'The origins of Goju-Ryu karate.' },
      { title: 'Gradings', href: '/gradings', description: 'Understand our belt ranking system.' },
      { title: 'Dojo Etiquette', href: '/dojo-etiquette', description: 'The rules and customs of our dojo.' },
      { title: 'Terminology', href: '/terminology', description: 'Learn essential Japanese karate terms.' },
    ],
  },
  {
    title: 'Courses',
    links: [
      { title: 'Pee-Wee (Ages 4-6)', href: '/courses/pee-wee', description: 'Fun and engaging introduction to karate.' },
      { title: 'Scholars (Ages 7-15)', href: '/courses/scholars', description: 'Developing skills and discipline.' },
      { title: 'Adults (Ages 16+)', href: '/courses/adults', description: 'For all fitness and skill levels.' },
      { title: 'Self Defence', href: '/courses/self-defence', description: 'Practical techniques for personal safety.' },
      { title: 'Fitness', href: '/courses/fitness', description: 'Improve your strength and conditioning.' },
    ],
  },
];

export const featuredBlogPosts: FeaturedBlogPost[] = [
    {
        title: 'The Philosophy of Goju-Ryu',
        href: '/blog/philosophy-of-goju-ryu',
        imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=200&auto=format&fit=crop',
        description: 'Exploring the core principles of our style.',
    },
    {
        title: 'Training for Your First Grading',
        href: '/blog/first-grading-tips',
        imageUrl: 'https://images.unsplash.com/photo-1574680096145-f844349f0409?q=80&w=200&auto=format&fit=crop',
        description: 'Tips and advice to help you prepare.',
    },
];

export const teamMembers: TeamMember[] = [
    {
      name: 'Mario Sequeira',
      role: 'Founder & Chief Instructor',
      imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      learnMoreUrl: '/mario-sequeira',
    },
    {
      name: 'Zenobia Sequeira',
      role: 'Co-founder & Senior Instructor',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Senior Instructor',
      role: 'Senior Instructor',
      imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

export const infoCards: InfoCard[] = [
  {
    title: 'Pee-Wee Karate',
    description: 'Our Pee-Wee Karate program is designed for children aged 4-6, providing a fun and engaging introduction to martial arts.',
  },
  {
    title: 'Scholars Karate',
    description: 'For students aged 7-15, our Scholars Karate program focuses on developing discipline, respect, and self-confidence through structured training.',
  },
  {
    title: 'Adults Karate',
    description: 'Our adult classes cater to all skill levels, from beginners to advanced practitioners, offering a challenging and rewarding experience.',
  },
  {
    title: 'Self-Defence',
    description: 'Learn practical and effective self-defence techniques in our specialised courses, designed to empower you with the skills to stay safe.',
  },
];

export const affiliationsData: Affiliation[] = [
    {
        name: 'South African<br>Goju-Ryu Karate-Do',
        description: 'We are proud members of the South African Goju-Ryu Karate-Do organization, upholding the traditions and standards of Goju-Ryu in the region.',
        learnMoreUrl: '#',
        logoUrl: '/images/affiliation-logo-1.png'
    },
    {
        name: 'International Okinawan<br>Goju-Ryu Karate-Do Federation',
        description: 'Our dojo is affiliated with the IOGKF, connecting us with a global community of practitioners dedicated to preserving the teachings of Goju-Ryu.',
        learnMoreUrl: '#',
        logoUrl: '/images/affiliation-logo-2.png'
    }
];

export const danRanksData: DanRank[] = [
    {
        tagline: '5th Degree Black Belt',
        japaneseName: '五段',
        englishName: 'Godan',
        description: 'Represents a mastery of the physical techniques and a deep understanding of the principles of Goju-Ryu. Holders of this rank are senior instructors.',
        holders: [
            { name: 'Mario Sequeira', description: 'Chief Instructor' }
        ]
    },
    {
        tagline: '4th Degree Black Belt',
        japaneseName: '四段',
        englishName: 'Yondan',
        description: 'Signifies a high level of proficiency and leadership within the dojo. These individuals are key to mentoring lower-ranked students.',
        holders: [
            { name: 'Zenobia Sequeira' }
        ]
    },
    {
        tagline: '3rd Degree Black Belt',
        japaneseName: '参段',
        englishName: 'Sandan',
        description: 'A rank of significant achievement, demonstrating advanced skill and dedication to the art.',
        holders: [
            { name: 'Senior Student 1' },
            { name: 'Senior Student 2' }
        ]
    }
];


export const blogPostsData: BlogPost[] = [
    {
        id: '1',
        slug: 'mastering-the-basics',
        imageUrl: 'https://images.unsplash.com/photo-1549477119-34e715206034?q=80&w=800&auto=format&fit=crop',
        title: 'Mastering the Basics: The Foundation of Karate',
        category: 'Training Techniques',
        excerpt: 'Discover why a strong foundation in the basics is crucial for advancing in your karate journey.',
        authorImageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop',
        author: 'Mario Sequeira',
        date: 'Oct 10, 2023',
        readTimeInMinutes: 5,
        isFeatured: true
    },
    {
        id: '2',
        slug: 'the-importance-of-kata',
        imageUrl: 'https://images.unsplash.com/photo-1593352222347-1422794a0857?q=80&w=800&auto=format=fit',
        title: 'The Importance of Kata in Goju-Ryu',
        category: 'Karate Tips',
        excerpt: 'Kata is more than just a sequence of moves. It\'s a library of techniques and a form of moving meditation.',
        authorImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format=fit',
        author: 'Zenobia Sequeira',
        date: 'Sep 25, 2023',
        readTimeInMinutes: 7
    },
];

export const dojoEtiquetteFaqs: FaqItem[] = [
    {
        question: 'Entering and Leaving the Dojo',
        answer: 'Upon entering or leaving the dojo, a standing bow (ritsurei) is performed, facing the front of the dojo (shomen). This shows respect for the training space.'
    },
    {
        question: 'Bowing (Rei)',
        answer: 'Bowing is a fundamental sign of respect. A bow is performed when entering/leaving the dojo, stepping on/off the mat, and to instructors and partners before and after training.'
    },
    {
        question: 'Addressing Instructors',
        answer: 'Instructors are addressed by their title, such as "Sensei" or "Shihan," followed by their last name. This demonstrates respect for their rank and experience.'
    },
];

export const dojoKun: DojoKun = {
    title: 'Dojo Kun (道場訓)',
    description: 'The Dojo Kun is a set of five guiding principles recited at the end of each class. It serves as a reminder of the ethical and moral standards expected of all karateka.',
    quote: `
        一、人格完成に努むること<br><em>(Hitotsu, jinkaku kansei ni tsutomuru koto)</em> - Strive for the perfection of character.<br><br>
        一、誠の道を守ること<br><em>(Hitotsu, makoto no michi o mamoru koto)</em> - Defend the paths of truth.<br><br>
        一、努力の精神を養うこと<br><em>(Hitotsu, doryoku no seishin o yashinau koto)</em> - Foster the spirit of effort.<br><br>
        一、礼儀を重んずること<br><em>(Hitotsu, reigi o omonzuru koto)</em> - Honor the principles of etiquette.<br><br>
        一、血気の勇を戒むること<br><em>(Hitotsu, kekki no yū o imashimuru koto)</em> - Guard against impetuous courage.
    `,
    author: {
        name: 'Gichin Funakoshi',
        imageUrl: '/images/funakoshi.jpg',
    },
};

export const gradingComponentsData: GradingComponent[] = [
    {
        japaneseName: '基本',
        englishName: 'Kihon',
        description: 'Kihon involves practicing the fundamental techniques of karate, including stances, blocks, punches, and kicks. It is the foundation upon which all other skills are built.',
    },
    {
        japaneseName: '形',
        englishName: 'Kata',
        description: 'Kata are choreographed patterns of movements that simulate combat scenarios. They are essential for developing proper form, technique, and mental focus.',
    },
    {
        japaneseName: '組手',
        englishName: 'Kumite',
        description: 'Kumite is the application of techniques with a partner. It ranges from pre-arranged sparring drills to free sparring, developing timing, distance, and control.',
    },
];


export const beltRanksData: BeltRank[] = [
    {
        kyu: '10th Kyu',
        beltName: 'White Belt',
        imageUrl: '/images/belts/white.png',
        description: 'The white belt signifies a new beginning, the birth of a new karateka. The student is pure and without knowledge of the art.',
        requirements: [
            { category: 'Kihon', description: 'Basic stances, punches, and blocks.' },
            { category: 'Kata', description: 'Taikyoku Gedan.' },
            { category: 'Kumite', description: 'Basic three-step sparring (Sanbon Kumite).' },
        ]
    },
    {
        kyu: '9th Kyu',
        beltName: 'Yellow Belt',
        imageUrl: '/images/belts/yellow.png',
        description: 'The yellow belt represents the first ray of sunlight, signifying that the student is beginning to see the light of karate.',
        requirements: [
            { category: 'Kihon', description: 'Improved basic techniques and combinations.' },
            { category: 'Kata', description: 'Taikyoku Chudan.' },
            { category: 'Kumite', description: 'Gohon Kumite (five-step sparring).' },
        ]
    }
];

export const selfDefenceLevels: SelfDefenceLevel[] = [
    { title: 'Level 1: Awareness & Prevention', description: 'Foundational skills for situational awareness and avoiding conflict.', imageUrl: '/images/self-defence-1.jpg' },
    { title: 'Level 2: Basic Techniques', description: 'Learn essential strikes, blocks, and escapes from common grabs.', imageUrl: '/images/self-defence-2.jpg' },
    { title: 'Level 3: Advanced Scenarios', description: 'Practice defending against more complex attacks and multiple opponents.', imageUrl: '/images/self-defence-3.jpg' },
];

export const selfDefenceFeatures: SelfDefenceFeature[] = [
    { title: 'Practical Techniques', description: 'Learn simple, effective moves that work in real-world situations.' },
    { title: 'Scenario-Based Training', description: 'Practice your skills in realistic scenarios to build confidence.' },
    { title: 'Expert Instructors', description: 'Train with experienced instructors in a safe, supportive environment.' },
    { title: 'All Fitness Levels Welcome', description: 'Our courses are designed for everyone, regardless of fitness or experience.' },
];

export const lecturesData: Lecture[] = [
    {
        title: 'Corporate Self-Defence Workshops',
        category: 'Workshops',
        description: 'Equip your team with vital safety skills through our engaging and interactive corporate workshops.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d3077884978e?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'School Safety Programs',
        category: 'Programs',
        description: 'Tailored talks and practical sessions for students on awareness, anti-bullying, and personal safety.',
        imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop',
    },
];

export const selfDefenceFaqs: FaqItem[] = [
    { question: 'Do I need any prior experience?', answer: 'No prior experience is necessary. Our courses are designed for beginners and are accessible to everyone.' },
    { question: 'What should I wear?', answer: 'Comfortable athletic clothing is recommended. No special uniform is required for self-defence courses.' },
    { question: 'Is it physically demanding?', answer: 'The courses are designed to be manageable for all fitness levels. We focus on technique over raw strength.' },
];

export const scheduleData: ScheduleDay[] = [
    {
        day: 'Monday',
        classes: [
            { time: '4:00 PM - 5:00 PM', name: 'Pee-Wee Karate', instructor: 'Sensei Zenobia' },
            { time: '5:00 PM - 6:00 PM', name: 'Scholars Karate', instructor: 'Sensei Mario' },
            { time: '6:00 PM - 7:30 PM', name: 'Adults Karate', instructor: 'Sensei Mario' },
        ]
    },
    {
        day: 'Tuesday',
        classes: [
             { time: '5:00 PM - 6:00 PM', name: 'Scholars Karate', instructor: 'Sensei Mario' },
             { time: '6:00 PM - 7:30 PM', name: 'Adults Karate', instructor: 'Sensei Mario' },
        ]
    },
    {
        day: 'Wednesday',
        classes: [
            { time: '4:00 PM - 5:00 PM', name: 'Pee-Wee Karate', instructor: 'Sensei Zenobia' },
            { time: '5:00 PM - 6:00 PM', name: 'Scholars Karate', instructor: 'Sensei Mario' },
            { time: '6:00 PM - 7:30 PM', name: 'Adults Karate', instructor: 'Sensei Mario' },
        ]
    },
    {
        day: 'Thursday',
        classes: [
            { time: '5:00 PM - 6:00 PM', name: 'Scholars Karate', instructor: 'Sensei Mario' },
            { time: '6:00 PM - 7:30 PM', name: 'Adults Karate', instructor: 'Sensei Mario' },
        ]
    },
    {
        day: 'Friday',
        classes: [
            { time: '5:00 PM - 6:30 PM', name: 'Advanced Kata', instructor: 'Sensei Mario' },
        ]
    },
    {
        day: 'Saturday',
        classes: [
            { time: '9:00 AM - 10:00 AM', name: 'Family Class', instructor: 'All Instructors' },
            { time: '10:00 AM - 11:00 AM', name: 'Open Mat', instructor: 'Supervised' },
        ]
    }
];

export const historySectionsData: HistorySection[] = [
    {
        title: 'The Origins of Goju-Ryu',
        description: 'Goju-Ryu is one of the main traditional Okinawan styles of karate, featuring a combination of hard and soft techniques. Its roots can be traced back to Chojun Miyagi, who founded the style.',
        imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
        imageAlt: 'Chojun Miyagi'
    },
    {
        title: 'Goju-Ryu in South Africa',
        description: 'The style was introduced to South Africa in the mid-20th century and has since grown to become one of the most popular forms of karate in the country, with a strong community of practitioners.',
        imageUrl: 'https://images.unsplash.com/photo-1574680096145-f844349f0409?q=80&w=800&auto=format&fit=crop',
        imageAlt: 'Karate practitioners in South Africa'
    }
];

export const pricingTabsData: PricingTab[] = [
    {
        name: 'Karate',
        plans: [
            { name: 'Pee-Wee', description: 'Ages 4-6' },
            { name: 'Scholars', description: 'Ages 7-15' },
            { name: 'Adults', description: 'Ages 16+' },
        ],
        categories: [
            {
                name: 'Features',
                features: [
                    { name: 'Classes per week', values: ['2', '3', '3'] },
                    { name: 'Access to open mat', values: [false, true, true] },
                    { name: 'Grading eligibility', values: [true, true, true] },
                ]
            },
            {
                name: 'Pricing',
                features: [
                    { name: 'Monthly', values: ['R400', 'R500', 'R600'] },
                    { name: 'Quarterly', values: ['R1100', 'R1400', 'R1700'] },
                ]
            }
        ]
    }
];

export const terminologySections: TerminologySection[] = [
    {
        title: 'General Terms',
        description: 'Essential vocabulary used in the dojo during training.',
        columns: 3,
        terms: [
            { japaneseName: '道場', englishName: 'Dojo (Training Hall)' },
            { japaneseName: '先生', englishName: 'Sensei (Instructor)' },
            { japaneseName: '礼', englishName: 'Rei (Bow)' },
            { japaneseName: '始め', englishName: 'Hajime (Begin)' },
            { japaneseName: '止め', englishName: 'Yame (Stop)' },
            { japaneseName: '用意', englishName: 'Yoi (Ready)' },
        ]
    },
    {
        title: 'Stances (Dachi)',
        japaneseTitle: '立ち',
        description: 'The foundation of all movements in karate.',
        columns: 2,
        terms: [
            { japaneseName: '自然体', englishName: 'Shizentai (Natural Stance)' },
            { japaneseName: '前屈立ち', englishName: 'Zenkutsu-dachi (Forward Stance)' },
            { japaneseName: '後屈立ち', englishName: 'Kokutsu-dachi (Back Stance)' },
            { japaneseName: '騎馬立ち', englishName: 'Kiba-dachi (Horse Stance)' },
        ]
    }
];
