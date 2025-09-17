import React from 'react';
import type { MegaMenuColumn, TeamMember, InfoCard, Affiliation, DanRank, FeaturedBlogPost, BlogPost, FaqItem, GradingComponent, BeltRank, HistorySection, TerminologySection, PricingTab, SelfDefenceLevel, SelfDefenceFeature, Lecture, DailySchedule } from './types';

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    title: 'About Us',
    links: [
      { title: 'Our Dojo', href: '/our-dojo', description: 'Place of the Way' },
      { title: 'Facilities', href: '/facilities', description: 'Explore our training center' },
      { title: 'Mario Sequeira', href: '/mario-sequeira', description: 'Owner & Instructor' },
      { title: 'Affiliations', href: '/affiliations', description: 'Our karate connections' },
    ],
  },
  {
    title: 'Karate',
    links: [
        { title: 'History', href: '/history', description: 'The origins of Goju-Ryu' },
        { title: 'Gradings', href: '/gradings', description: 'The belt ranking system' },
        { title: 'Dojo Etiquette', href: '/dojo-etiquette', description: 'Begins and ends with respect' },
        { title: 'Terminology', href: '/terminology', description: 'Learn the Japanese terms' },
    ]
  },
  {
    title: 'Courses',
    links: [
      { title: 'Pee-Wee', href: '/courses/pee-wee', description: 'Fun intro for ages 3-5' },
      { title: 'Scholars', href: '/courses/scholars', description: 'Karate for K1-12' },
      { title: 'Adults', href: '/courses/adults', description: 'Fitness & self-defense' },
      { title: 'Self Defence', href: '/courses/self-defence', description: 'Practical, real-world skills' },
      { title: 'Fitness', href: '/courses/fitness', description: 'Improve strength & stamina' },
    ],
  },
];

export const featuredBlogPosts: FeaturedBlogPost[] = [
    {
        title: 'Celebrating a Year in Our New Dojo',
        href: '#',
        description: 'A look back at our first year.',
        imageUrl: 'https://images.unsplash.com/photo-1574680096145-f844349f0409?q=80&w=400&auto=format&fit=crop',
    },
    {
        title: 'Fitness Challenge 2023',
        href: '#',
        description: 'A new format for a new era.',
        imageUrl: 'https://images.unsplash.com/photo-1549576490-b44133552ba4?q=80&w=400&auto=format&fit=crop',
    }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Mario Sequeira',
    role: 'Owner & Head Instructor',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop',
    learnMoreUrl: '/mario-sequeira',
  },
  {
    name: 'Zenobia Sequeira',
    role: 'Owner & Administrator',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Alexa-Zen Sequeira',
    role: 'Assistant Instructor',
    imageUrl: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=300&auto=format&fit=crop',
  },
];

export const infoCards: InfoCard[] = [
  {
    title: 'History of Karate',
    description: 'Karate, with its rich history, has evolved from Okinawa to emphasise both physical and mental strength, blending traditional techniques with a philosophy of self-improvement and respect.',
  },
  {
    title: 'How Gradings Work',
    description: "Grading in karate is a structured process that evaluates a student's progress and mastery of techniques. It involves a series of tests that assess skills, knowledge, and discipline.",
  },
  {
    title: 'Dojo Etiquette',
    description: 'Understanding dojo etiquette is crucial for maintaining respect and discipline. It involves following specific protocols that reflect the values and traditions of Karate-Do.',
  },
  {
    title: 'Terminology',
    description: "Karate terminology is essential for understanding the art's rich history and techniques. Familiarizing yourself with these terms enhances your learning experience.",
  },
];

export const affiliationsData: Affiliation[] = [
    {
        name: 'O.G.K.K Gauteng<br>South Africa',
        description: 'At Palm Court Karate Centre, we are proud to be affiliated with O.G.K.K. Gauteng South Africa, a highly respected karate organization. This affiliation ensures that our instructors and students receive international recognition for their skills and achievements.',
        logoUrl: '/images/OGKK-BADGE.jpg',
        learnMoreUrl: 'https://gojukarate.co.za/',
    },
    {
        name: 'Karate South Africa (KSA)',
        description: 'We are proud to be affiliated with Karate South Africa (KSA), a prestigious organization that promotes excellence in the martial arts. Our affiliation with KSA ensures that our instructors and students meet the highest standards of training and expertise.',
        logoUrl: '/images/KSA-Logo.png',
        learnMoreUrl: 'https://karate-sa.org/',
    },
    {
        name: 'African Goju-Ryu Karate Federation',
        description: 'At Palm Court Karate Centre, we are proud to be affiliated with the African Goju-Ryu Karate Federation. This affiliation allows us to provide our students with access to a wider network of karate practitioners and opportunities for growth.',
        logoUrl: '/images/african-goju-ryu-karate-federation-logo.jpeg',
        learnMoreUrl: 'https://agkf.co.za/',
    }
];

export const danRanksData: DanRank[] = [
  {
    tagline: '6th Dan',
    japaneseName: '六段',
    englishName: 'Rokudan',
    description: 'In Goju-Ryu Karate, the rank of Rokudan signifies a highly advanced level of expertise, leadership, and contribution to the art. This rank represents a deep mastery of Goju-Ryu principles, both technically and philosophically, and is usually reserved for those who have dedicated decades to the practice of karate. Rokudan practitioners are often considered senior instructors or masters within their dojo or organization, playing a key role in preserving the tradition and passing on the knowledge of Goju-Ryu to future generations.',
    holders: [
      { name: 'Mario Sequeira', description: '' }
    ],
  },
  {
    tagline: '5th Dan',
    japaneseName: '五段',
    englishName: 'Godan',
    description: 'In Goju-Ryu Karate, the rank of Godan represents a high level of expertise, experience, and authority within the art. This rank signifies that the practitioner has achieved an advanced understanding of both the technical and philosophical aspects of Goju-Ryu. At Godan, a karateka is typically regarded as a senior instructor or master-level practitioner. This rank is not just about technical skill but also about leadership, teaching, and the embodiment of Goju-Ryu’s principles in daily life.',
    holders: [
      { name: 'Nicholas Chalmers', description: '' }
    ],
  },
  {
    tagline: '4th Dan',
    japaneseName: '四段',
    englishName: 'Yondan',
    description: 'In Goju-Ryu Karate, the rank of Yondan represents an advanced level of skill, knowledge, and leadership within the system. At this stage, a practitioner is considered a senior student or instructor, often holding significant responsibilities in teaching, mentoring, and contributing to the overall development of the art. Yondan is a prestigious rank, indicating a deep commitment to both the physical and philosophical aspects of Goju-Ryu, as well as to the broader karate community.',
    holders: [
      { name: 'Ryan Peel', description: '' },
      { name: 'Shaun Bouwer', description: '' },
      { name: 'Mauritz Kotze', description: '' },
      { name: 'Kyle Chalmers', description: '' },
    ],
  },
  {
    tagline: '3rd Dan',
    japaneseName: '三段',
    englishName: 'Sandan',
    description: 'In Goju-Ryu Karate, achieving the rank of Sandan is a significant milestone, reflecting a deep understanding of the art and the practitioner\'s dedication to both physical and mental development. By the time a karateka reaches Sandan, they are typically considered advanced practitioners with significant experience, often taking on leadership roles within the dojo. Sandan also signifies a deeper exploration of the spiritual and philosophical aspects of Goju-Ryu, beyond just physical proficiency.',
    holders: [
      { name: 'James Chalmers', description: '' },
      { name: 'Neil Kelham', description: '' },
      { name: 'Jayde Taylor', description: '' },
      { name: 'Tyrone Gray', description: '' },
      { name: 'Brandan du Toit', description: '' },
      { name: 'Jacques van Wyk', description: '' },
    ],
  },
  {
    tagline: '2nd Dan',
    japaneseName: '二段',
    englishName: 'Nidan',
    description: 'In Goju-Ryu Karate, the rank of Nidan represents a significant advancement beyond the Shodan level. Achieving Nidan signifies that the practitioner has further refined their skills, deepened their understanding of the art, and continued their journey towards mastery. At this level, there is a greater emphasis on teaching, application, and advanced techniques, with a focus on integrating the philosophical and spiritual elements of Goju-Ryu into both practice and daily life.',
    holders: [
      { name: 'Martin Pindak', description: '' },
      { name: 'Andrew Gilgannon', description: '' },
      { name: 'Nikola Bochukov', description: '' },
      { name: 'Martin Sardianos', description: '' },
      { name: 'Violeta Markovic’', description: '' },
      { name: 'Diogo Rente', description: '' },
      { name: 'Cleveland Crossling Snr', description: '' },
      { name: 'Orlando Crossling', description: '' },
    ],
  },
  {
    tagline: '1st Dan',
    japaneseName: '初段',
    englishName: 'Shodan',
    description: 'In Goju-Ryu Karate, achieving the rank of Shodan is a significant milestone. It represents a level of competence in both the physical and mental aspects of the art. While some may view it as a "mastery" rank, in many traditional martial arts, Shodan is considered the beginning of one\'s deeper journey into the practice - it is often translated as "beginning degree."',
    holders: [
      { name: 'Alexa- Zen Sequeira', description: '' }, { name: 'Maria Crossling', description: '' },
      { name: 'Thomas Smart', description: '' }, { name: 'Ethan Jodaan', description: '' },
      { name: 'Matthew Bantich', description: '' }, { name: 'Jordan Owen', description: '' },
      { name: 'Jana Du Plessis', description: '' }, { name: 'Matias Maidana', description: '' },
      { name: 'Kailesh Ramsewak', description: '' }, { name: 'Keegan Stranack', description: '' },
      { name: 'Ane van der Westhuizen', description: '' }, { name: 'Steven Greenwood', description: '' },
      { name: 'Byron Bahnemann', description: '' }, { name: 'Siyabonga Ndlangalavu', description: '' },
      { name: 'Kaelen Lang', description: '' }, { name: 'Ernst Viljoen', description: '' },
      { name: 'Kyle Posthumus', description: '' }, { name: 'Ayeesha Ishbekhene', description: '' },
      { name: 'Sumari Marx', description: '' }, { name: 'Dominique Cocksedge', description: '' },
      { name: 'Jon-Jon Jenks', description: '' }, { name: 'Micheal Azih', description: '' },
      { name: 'Tristan Fin', description: '' }, { name: 'Candice Viljoen', description: '' },
      { name: 'Jordan Lang', description: '' }, { name: 'Gregory Fok', description: '' },
      { name: 'Andrew Mallinson', description: '' }, { name: 'Ricardo Kleinhans', description: '' },
      { name: 'Jean-Luc Cilliers', description: '' }, { name: 'Teya Paulsen', description: '' },
      { name: 'Cameron Jenks', description: '' }, { name: 'Garrick Brickhill', description: '' },
      { name: 'Ivan Janse van Rensburg', description: '' }, { name: 'Devon Jones', description: '' },
      { name: 'Jeanne Fourie', description: '' }, { name: 'Annuscha Reyneke', description: '' },
      { name: 'Aiden Brickhill', description: '' }, { name: 'Dylan Du Toit', description: '' },
      { name: 'Aimee Stoltz', description: '' }, { name: 'Nadine Liebich', description: '' },
      { name: 'Angel N Maidana', description: '' }, { name: 'Bianca Kotze', description: '' },
      { name: 'Thamasanqa Ndlovu', description: '' }, { name: 'Dylan Davies', description: '' },
      { name: 'Mohand Isbikhene', description: '' }, { name: 'Conrad Cilliers', description: '' },
      { name: 'Jean de Villiers', description: '' }, { name: 'Morgan Mellody', description: '' },
      { name: 'Robert Markovic’', description: '' }, { name: 'Joshua Doolabh', description: '' },
      { name: 'Deacon van Pletzen', description: '' }, { name: 'Smolly Lebepe', description: '' },
      { name: 'Matthew van Dyk', description: '' }, { name: 'Tarrin Skeepers', description: '' },
      { name: 'Zara Kelly', description: '' }, { name: 'Madelein Venter', description: '' },
      { name: 'Shaylin Soomar', description: '' }, { name: 'Jaclynn Meintjes', description: '' },
      { name: 'Owen Pace', description: '' }, { name: 'Jared Bezuidenhout', description: '' },
      { name: 'Rushaylin Moodley', description: '' }, { name: 'Kaelin Kesavjee', description: '' },
      { name: 'Nikita Naicker', description: '' }, { name: 'Busisiwe Mazibuko', description: '' },
      { name: 'Ryan Snyman', description: '' }, { name: 'Munesu Mfokozanah', description: '' },
      { name: 'Juan Gous', description: '' }, { name: 'Angelika Voudouris', description: '' },
    ],
  },
  {
    tagline: '1st Dan (Junior)',
    japaneseName: '初段補',
    englishName: 'Shodan Ho',
    description: 'In Goju-Ryu Karate, "Shodan Ho" is often used to represent a provisional black belt rank, typically awarded to students who have demonstrated a solid understanding of the fundamental techniques, kata, and kumite, but still require further development before being awarded full Shodan status.',
    holders: [
      { name: 'Kurt Schloeser', description: '' }, { name: 'Jonathan Reyneke', description: '' },
      { name: 'Calvin Da Silva', description: '' }, { name: 'Anton Petrenko', description: '' },
      { name: 'Kezia Bolton', description: '' }, { name: 'Gillian Willenburg', description: '' },
      { name: 'Shanon Valamvanos', description: '' }, { name: 'Clayton Bahnemann', description: '' },
      { name: 'Kayden Busarello', description: '' }, { name: 'Tristan Smith', description: '' },
      { name: 'Andrea Bekker', description: '' }, { name: 'Boris Petrenco', description: '' },
      { name: 'Erin van Heerden', description: '' }, { name: 'Chardele Williamson', description: '' },
      { name: 'Dayna Vos', description: '' }, { name: 'Keon Roohani', description: '' },
      { name: 'Dean Fin', description: '' }, { name: 'Sheldon Bland', description: '' },
      { name: 'Luke Davis', description: '' }, { name: 'Jordan Joseph', description: '' },
      { name: 'Joshua Joseph', description: '' }, { name: 'Ronan Thompson', description: '' },
      { name: 'Callum Thompson', description: '' }, { name: 'Connor Pike', description: '' },
      { name: 'Jason Glass', description: '' }, { name: 'Kiana Sivpersad', description: '' },
      { name: 'Eugene Cilliers', description: '' }, { name: 'Divashen Subramoney', description: '' },
      { name: 'Dasendhran Subramoney', description: '' }, { name: 'Njabulo Mazibuko', description: '' },
      { name: 'James Bowker', description: '' }, { name: 'Tyler Keindl', description: '' },
      { name: 'Liam Dyason', description: '' }, { name: 'Kai Poulsen', description: '' },
      { name: 'Nkahloleng Mampuru', description: '' }, { name: 'Anabella Martinez', description: '' },
      { name: 'Carmen Atkinson', description: '' }, { name: 'Munashe Mfokozanah', description: '' },
      { name: 'Kyle Mansour', description: '' }, { name: 'Paige Daniels', description: '' },
      { name: 'Ethan du Plessis', description: '' }, { name: 'Antonio de Ponte', description: '' },
      { name: 'Sydney Owen', description: '' }, { name: 'Alain Robinson', description: '' },
      { name: 'Connor Govender', description: '' }, { name: 'Jaryn Jones', description: '' },
      { name: 'Daniella De Freitas', description: '' }, { name: 'Samara Doolabh', description: '' },
      { name: 'Miguel Pluck', description: '' }, { name: 'Kaylisha Soomar', description: '' },
      { name: 'Thomas Smart', description: '' }, { name: 'Adrian Gideon', description: '' },
      { name: 'Michael Duvenhage', description: '' }, { name: 'Tapiwa Mtambanengwe', description: '' },
      { name: 'Matthew Bantich', description: '' }, { name: 'Matthew Willis', description: '' },
      { name: 'Adriaan Venter', description: '' }, { name: 'Keegan Fraser', description: '' },
      { name: 'Ethan Jordaan', description: '' }, { name: 'Kynan Attfield', description: '' },
      { name: 'Kristen Baxter', description: '' }, { name: 'Paige Chappell', description: '' },
      { name: 'Ryan Esterhuizen', description: '' }, { name: 'Rogan Kelly', description: '' },
      { name: 'Amel Maistry', description: '' }, { name: 'Amiel Maistry', description: '' },
      { name: 'Gabriel Naicker', description: '' }, { name: 'Ashreya Naidoo', description: '' },
      { name: 'Darien Schwarz', description: '' }, { name: 'Kanthum Subramoney', description: '' },
    ],
  },
];

export const blogPostsData: BlogPost[] = [
    {
        id: 1,
        slug: 'celebrating-a-year-in-our-new-dojo',
        title: 'Celebrating a Year in Our New Dojo',
        category: 'Karate',
        excerpt: "Palm Court Karate marks the first anniversary of our beautiful new dojo. From starting a small home dojo during the pandemic to building a vibrant karate family, we're grateful for this incredible journey. Thank you to our dedicated students, supportive families, and passionate instructors for making our dojo a second home. Here's to many more years of growth and martial arts excellence!",
        imageUrl: '/images/Placeholder-Image---Landscape.svg',
        author: 'Mario Sequeira',
        authorImageUrl: '/images/placeholder-image.svg',
        date: '25 May 2022',
        readTimeInMinutes: 5,
        isFeatured: true,
    },
    {
        id: 2,
        slug: 'the-evolution-of-our-karate-training',
        title: 'The Evolution of Our Karate Training',
        category: 'Karate',
        excerpt: 'TBC',
        imageUrl: '/images/Placeholder-Image---Landscape.svg',
        author: 'Mario Sequeira',
        authorImageUrl: '/images/placeholder-image.svg',
        date: '19 April 2022',
        readTimeInMinutes: 6,
        isFeatured: false,
    },
    {
        id: 3,
        slug: 'fitness-challenge-2023-a-new-format-for-a-new-era',
        title: 'Fitness Challenge 2023: A New Format for a New Era',
        category: 'Category',
        excerpt: 'TBC',
        imageUrl: '/images/Placeholder-Image---Landscape.svg',
        author: 'Mario Sequeira',
        authorImageUrl: '/images/placeholder-image.svg',
        date: '23 April 2022',
        readTimeInMinutes: 7,
        isFeatured: false,
    },
    {
        id: 4,
        slug: 'ogkk-gauteng-kata-championships-2024-a-day-of-precision-and-innovation',
        title: 'OGKK Gauteng Kata Championships 2024: A Day of Precision and Innovation',
        category: 'Category',
        excerpt: 'TBC',
        imageUrl: '/images/Placeholder-Image---Landscape.svg',
        author: 'Mario Sequeira',
        authorImageUrl: '/images/placeholder-image.svg',
        date: '27 July 2024',
        readTimeInMinutes: 7,
        isFeatured: false,
    },
    {
        id: 5,
        slug: 'the-journey-to-black-belt-a-testament-to-perseverance',
        title: 'The Journey to Black Belt: A Testament to Perseverance',
        category: 'Category',
        excerpt: 'TBC',
        imageUrl: '/images/Placeholder-Image---Landscape.svg',
        author: 'Mario Sequeira',
        authorImageUrl: '/images/placeholder-image.svg',
        date: '22 October 2023',
        readTimeInMinutes: 7,
        isFeatured: false,
    },
    {
        id: 6,
        slug: 'embracing-the-elements-winter-training-at-palm-court-karate',
        title: 'Embracing the Elements: Winter Training at Palm Court Karate',
        category: 'Category',
        excerpt: 'TBC',
        imageUrl: '/images/Placeholder-Image---Landscape.svg',
        author: 'Mario Sequeira',
        authorImageUrl: '/images/placeholder-image.svg',
        date: '10 July 2024',
        readTimeInMinutes: 7,
        isFeatured: false,
    },
];

const dojoEtiquetteRules = [
    'Always be on time for your classes.',
    'Remove shoes and all jewellery before entering the dojo.',
    'Let seniors enter the dojo first.',
    'Be polite to your instructors, seniors and elders.',
    'Line up according to belt (the highest belt on the left of the dojo) and start warming up.',
    'When entering and exiting the dojo, remember to bow.',
    'When bowing at the beginning of the class, say ‘onegai shimasu”, which means ‘please teach me’. At the end of the class, you will bow again and say ‘arigato gozaimashita”, meaning ‘thank you for teaching me’.',
    'While training, listen carefully and seriously to the advice of your sensei and always acknowledge that you have heard and understood the advice.',
    'Keep your ‘gi’ (training clothes) neat and tidy.',
    'Keep your fingernails and toe nails short to prevent injury.',
    'Know your physical condition, stamina and strength well – do not force yourself to do the impossible.',
    'Handle all equipment with care and put it back in the right place.',
];

export const dojoEtiquetteFaqs: FaqItem[] = [
    {
        question: 'What is dojo etiquette?',
        answer: React.createElement(
            'ul',
            { className: "list-disc pl-5 space-y-2 text-gray-600" },
            dojoEtiquetteRules.map((rule, index) => React.createElement('li', { key: index }, rule))
        )
    },
    {
        question: 'Why is etiquette important?',
        answer: 'Etiquette is important in a karate dojo as it creates a respectful and disciplined environment. It helps students develop self-discipline, focus, and humility, which are essential qualities in martial arts.'
    },
    {
        question: 'How can I learn dojo etiquette?',
        answer: 'Learning dojo etiquette is part of the karate training process. Instructors will teach and reinforce proper etiquette during classes, and students are expected to observe and follow the examples set by senior students.'
    },
    {
        question: 'What happens if I break dojo etiquette?',
        answer: 'Breaking dojo etiquette may result in disciplinary actions, such as verbal warnings, extra training, or temporary suspension from classes. It is important to understand and respect the rules of the dojo.'
    },
    {
        question: 'Can I ask questions during training?',
        answer: 'Yes, you can ask questions during training if you need clarification or guidance. However, it is important to wait for an appropriate time, such as a designated Q&A session, to minimize disruptions to the class.'
    }
];

export const dojoKun = {
    title: '道場訓 Dōjō kun',
    description: 'The Dōjō Kun serves as a guiding framework for practitioners on their martial arts journey. It underscores the significance of pursuing truth, striving for excellence, exhibiting respect towards others, and cultivating harmony. This foundation promotes ongoing self-improvement and nurtures discipline among its members.',
    quote: 'Hitotsu - Be humble and polite.<br/>Hitotsu - Train considering your physical strength<br/>Hitotsu - Practice earnestly with creativity.<br/>Hitotsu - Be calm and swift.<br/>Hitotsu - Take care of your health.<br/>Hitotsu - Live a plain life.<br/>Hitotsu - Do not be too proud or modest.<br/>Hitotsu - Continue your training with patience.',
    author: {
        name: 'Sensei Teruo Chinen',
        imageUrl: '/images/sensei-teruo-chinen.png'
    }
};

export const gradingComponentsData: GradingComponent[] = [
    { japaneseName: '基本', englishName: 'Kihon', description: 'Kihon is a Japanese term meaning "basics" or "fundamentals." The term is used to refer to the basic techniques that are taught and practiced as the foundation of most Japanese martial arts.' },
    { japaneseName: '型', englishName: 'Kata', description: 'Kata is a Japanese word meaning "form". It refers to a detailed choreographed pattern of martial arts movements. It is practiced in Japanese martial arts as a way to memorise and perfect the movements being executed.' },
    { japaneseName: '組手', englishName: 'Kumite', description: 'Kumite literally translated means "grappling hands" or in another word it means "sparring" and is one of the three main sections of karate training, along with "Kata" and "Kihon". "Kumite" is the part of karate in which a person trains against one or more adversaries, using the techniques learned from the "Kihon" and "Kata".' },
    { japaneseName: '補助運動', englishName: 'Fitness', description: 'Hojo undō is a Japanese language term, translated as "supplementary exercises", that refers to conditioning exercises used in martial arts, especially in karate. Hojo undō training was designed to develop ambidextrous physical strength, stamina, muscle coordination, speed, and posture.' },
    { japaneseName: '掛け手', englishName: 'Kakie', description: 'Kakie is a traditional training method that focuses on developing close-range combat skills, sensitivity, and the ability to respond to an opponent\'s movements through tactile feedback. Kakie can be translated as "pushing hands" or "hooking hands," and it involves two practitioners maintaining continuous contact between their arms while performing various techniques.' },
    { japaneseName: '分解', englishName: 'Bunkai', description: 'Bunkai, literally meaning "analysis"or "disassembly", is a term used in Japanese martial arts referring to process of analysing kata and extracting fighting techniques from the movements of a "form" (kata). The extracted fighting techniques are called Oyo.' },
];

export const beltRanksData: BeltRank[] = [
    { kyu: '10th Kyu', beltName: 'White Belt ( Ungraded )', imageUrl: '/images/white-karate-belt.png', description: 'TBC Ungraded', requirements: [
        { category: 'Kihon', description: 'Basic kihon (basic punch, block, and kick techniques and basic stances)' },
        { category: 'Kata', description: 'Tachi kata (stance kata)' },
        { category: 'Kumite', description: 'No contact to very light contact randori' },
    ]},
    { kyu: '9th Kyu', beltName: 'White Belt ( Graded )', imageUrl: '/images/white-karate-belt.png', description: 'TBC', requirements: [
        { category: 'Minimum Training Time', description: '3 months or 25 sessions' },
        { category: 'Terminology', description: 'Counting to 10 in Japanese and some basic terms like junbi undo, kihon training, kumite, directions and sides' },
        { category: 'Kihon', description: 'Basic Kihon (basic punch, block, and kick techniques and basic stances)' },
        { category: 'Kata', description: 'Gekisai Dai Ichi (basic sequence)' },
        { category: 'Kumite', description: 'Sandan Gi number 1 and light contact randori' },
        { category: 'Fitness', description: 'Push-ups, sit-ups, crunches, air squats, squat thrusts, star jumps, a mile run, etc.' },
    ]},
    { kyu: '8th Kyu', beltName: 'Junior Yellow Belt', imageUrl: '/images/yellow-karate-belt-j.png', description: 'TBC', requirements: [
        { category: 'Minimum Training Time', description: 'TBC' },
        { category: 'Terminology', description: 'TBC' },
        { category: 'Kihon', description: 'TBC' },
        { category: 'Kata', description: 'TBC' },
        { category: 'Kumite', description: 'TBC' },
        { category: 'Kakie', description: 'TBC' },
        { category: 'Fitness', description: 'TBC' },
    ]},
    { kyu: '8th Kyu', beltName: 'Yellow Belt', imageUrl: '/images/yellow-karate-belt.png', description: 'TBC', requirements: [
        { category: 'Minimum Training Time', description: 'TBC' },
        { category: 'Terminology', description: 'TBC' },
        { category: 'Kihon', description: 'TBC' },
        { category: 'Kata', description: 'TBC' },
        { category: 'Kumite', description: 'TBC' },
        { category: 'Kakie', description: 'TBC' },
        { category: 'Fitness', description: 'TBC' },
    ]},
    { kyu: '7th Kyu', beltName: 'Junior Orange Belt', imageUrl: '/images/orange-karate-belt-junior.png', description: 'TBC', requirements: [
        { category: 'Minimum Training Time', description: 'TBC' },
        { category: 'Terminology', description: 'TBC' },
        { category: 'Kihon', description: 'TBC' },
        { category: 'Kata', description: 'TBC' },
        { category: 'Bunkai', description: 'TBC' },
        { category: 'Kumite', description: 'TBC' },
        { category: 'Kakie', description: 'TBC' },
        { category: 'Fitness', description: 'TBC' },
    ]},
    { kyu: '7th Kyu', beltName: 'Orange Belt', imageUrl: '/images/orange-karate-belt.png', description: 'TBC', requirements: [
        { category: 'Minimum Training Time', description: 'TBC' },
        { category: 'Terminology', description: 'TBC' },
        { category: 'Kihon', description: 'TBC' },
        { category: 'Kata', description: 'TBC' },
        { category: 'Bunkai', description: 'TBC' },
        { category: 'Kumite', description: 'TBC' },
        { category: 'Kakie', description: 'TBC' },
        { category: 'Fitness', description: 'TBC' },
    ]},
    { kyu: '6th Kyu', beltName: 'Green Belt', imageUrl: '/images/green-karate-belt.png', description: 'TBC', requirements: [
        { category: 'Minimum Training Time', description: 'TBC' },
        { category: 'Terminology', description: 'TBC' },
        { category: 'Kihon', description: 'TBC' },
        { category: 'Kata', description: 'TBC' },
        { category: 'Bunkai', description: 'TBC' },
        { category: 'Kumite', description: 'TBC' },
        { category: 'Kakie', description: 'TBC' },
        { category: 'Fitness', description: 'TBC' },
    ]},
    { kyu: '5th Kyu', beltName: 'Blue Belt', imageUrl: '/images/blue-karate-belt.png', description: 'TBC', requirements: [
        { category: 'Minimum Training Time', description: 'TBC' },
        { category: 'Terminology', description: 'TBC' },
        { category: 'Kihon', description: 'TBC' },
        { category: 'Kata', description: 'TBC' },
        { category: 'Bunkai', description: 'TBC' },
        { category: 'Kumite', description: 'TBC' },
        { category: 'Kakie', description: 'TBC' },
        { category: 'Fitness', description: 'TBC' },
    ]},
    { kyu: '4th Kyu', beltName: 'Purple Belt', imageUrl: '/images/purple-karate-belt.png', description: 'TBC', requirements: [
        { category: 'Minimum Training Time', description: 'TBC' },
        { category: 'Terminology', description: 'TBC' },
        { category: 'Kihon', description: 'TBC' },
        { category: 'Kata', description: 'TBC' },
        { category: 'Bunkai', description: 'TBC' },
        { category: 'Kumite', description: 'TBC' },
        { category: 'Kakie', description: 'TBC' },
        { category: 'Fitness', description: 'TBC' },
    ]},
    { kyu: '3rd Kyu', beltName: 'Brown Belt (First)', imageUrl: '/images/brown-karate-belt.png', description: 'TBC', requirements: [
        { category: 'Minimum Training Time', description: 'TBC' },
        { category: 'Terminology', description: 'TBC' },
        { category: 'Kihon', description: 'TBC' },
        { category: 'Kata', description: 'TBC' },
        { category: 'Bunkai', description: 'TBC' },
        { category: 'Kumite', description: 'TBC' },
        { category: 'Kakie', description: 'TBC' },
        { category: 'Fitness', description: 'TBC' },
        { category: 'Other Requirements', description: 'TBC' },
    ]},
    { kyu: '2nd Kyu', beltName: 'Brown Belt (Second)', imageUrl: '/images/brown-karate-belt.png', description: 'TBC', requirements: [
        { category: 'Minimum Training Time', description: 'TBC' },
        { category: 'Terminology', description: 'TBC' },
        { category: 'Kihon', description: 'TBC' },
        { category: 'Kata', description: 'TBC' },
        { category: 'Bunkai', description: 'TBC' },
        { category: 'Kumite', description: 'TBC' },
        { category: 'Kakie', description: 'TBC' },
        { category: 'Fitness', description: 'TBC' },
    ]},
    { kyu: '1st Kyu', beltName: 'Brown Belt (Third)', imageUrl: '/images/brown-karate-belt.png', description: 'TBC', requirements: [
        { category: 'Minimum Training Time', description: 'TBC' },
        { category: 'Terminology', description: 'TBC' },
        { category: 'Kihon', description: 'TBC' },
        { category: 'Kata', description: 'TBC' },
        { category: 'Bunkai', description: 'TBC' },
        { category: 'Kumite', description: 'TBC' },
        { category: 'Kakie', description: 'TBC' },
        { category: 'Fitness', description: 'TBC' },
    ]},
    { kyu: '1st Dan', beltName: 'Junior Black', imageUrl: '/images/black-karate-belt-1.png', description: 'TBC', requirements: [
        { category: 'Minimum Training Time', description: 'TBC' },
        { category: 'Terminology', description: 'TBC' },
        { category: 'Kihon', description: 'TBC' },
        { category: 'Kata', description: 'TBC' },
        { category: 'Bunkai', description: 'TBC' },
        { category: 'Kumite', description: 'TBC' },
        { category: 'Kakie', description: 'TBC' },
        { category: 'Fitness', description: 'TBC' },
    ]},
    { kyu: '1st Dan', beltName: 'Black Belt', imageUrl: '/images/black-karate-belt.png', description: 'TBC', requirements: [
        { category: 'Minimum Training Time', description: 'TBC' },
        { category: 'Terminology', description: 'TBC' },
        { category: 'Kihon', description: 'TBC' },
        { category: 'Kata', description: 'TBC' },
        { category: 'Bunkai', description: 'TBC' },
        { category: 'Kumite', description: 'TBC' },
        { category: 'Kakie', description: 'TBC' },
        { category: 'Fitness', description: 'TBC' },
        { category: 'Other Requirements', description: 'TBC' },
    ]},
];

export const historySectionsData: HistorySection[] = [
    {
        title: 'The Origins of Karate',
        description: 'Karate originated on the small Japanese island of Okinawa, where the local people developed this martial art to defend themselves against armed invaders. Practicing in secret, they formed \'Karate-Do,\' which translates to \'the way of the empty hand.\' Over time, several styles emerged, including Goju-Ryu, meaning \'hard and gentle school.\' Goju-Ryu focuses on close-range self-defense techniques, incorporating circular blocks, joint manipulations, and low kicks, while blending dynamic tension with deep breathing exercises.',
        imageUrl: 'https://images.unsplash.com/photo-1593352222347-1422794a0857?q=80&w=1200&auto=format&fit=crop',
        imageAlt: 'Ancient Okinawan scroll depicting martial arts.',
    },
    {
        title: 'Founders of the Goju-Ryu Karate Style',
        description: 'Goju-Ryu was founded in the late 1920s by Chojun Miyagi, who was a dedicated student of Kanryo Higoanna. Higoanna, originally from Naha, Okinawa, had studied Chinese martial arts and brought these techniques back to Okinawa, laying the groundwork for the Naha-te style. Miyagi refined these methods further, introducing elements such as the Sanchin kata, and continued to teach until his passing. Ei’ichi Miyazato, one of his devoted students, later took on the leadership role, ensuring the preservation and global dissemination of Goju-Ryu.',
        imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
        imageAlt: 'Portrait of Chojun Miyagi.',
    },
    {
        title: 'Finding a Name',
        description: 'The name Goju-Ryu was derived from the \'Bubishi,\' an ancient martial arts manuscript. During a tournament, a student of Miyagi was unable to name his school, prompting Miyagi to establish a formal identity. He chose \'Goju-Ryu,\' which translates to \'hard-soft style,\' symbolizing its distinctive combination of powerful strikes and smooth, flowing movements. This name was officially registered with the Butokukai, Japan\'s Martial Arts Association, in 1933, solidifying Goju-Ryu\'s status in the martial arts world.',
        imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop',
        imageAlt: 'A page from the Bubishi manuscript.',
    },
    {
        title: 'The Garden Dojo',
        description: 'Miyagi\'s \'Garden Dojo\' emerged as a pivotal training hub in Okinawa, particularly in the post-WWII period. Here, he guided prominent students like Seiko Higa, Meitoku Yagi, and Ei’ichi Miyazato. These disciples played a crucial role in spreading Goju-Ryu beyond Okinawa, founding dojos globally and safeguarding Miyagi\'s teachings. After Miyagi\'s death, his students paid tribute to his legacy by establishing their own schools, thereby continuing the Goju-Ryu tradition.',
        imageUrl: 'https://images.unsplash.com/photo-1574680096145-f844349f0409?q=80&w=1200&auto=format&fit=crop',
        imageAlt: 'A traditional Japanese garden dojo setting.',
    }
];

export const terminologySections: TerminologySection[] = [
    {
        title: 'Understanding the Black Belt Ranks',
        description: 'The dan (段) ranking system is extensively utilized by Japanese, Okinawan, Korean, and various other martial arts organizations to indicate an individual\'s proficiency within a specific system. Originally employed as a ranking system to assess skill level in a particular discipline, it has its origins in a Go school during the Edo period. Since then, it has become integrated into the majority of modern Japanese fine and martial arts practices.',
        columns: 2,
        terms: [
            { japaneseName: '初段 Shodan', englishName: '1st Dan' },
            { japaneseName: '二段 Nidan', englishName: '2nd Dan' },
            { japaneseName: '三段 Sandan', englishName: '3rd Dan' },
            { japaneseName: '四段 Yondan', englishName: '4th Dan' },
            { japaneseName: '五段 Godan', englishName: '5th Dan' },
            { japaneseName: '六段 Rokudan', englishName: '6th Dan' },
            { japaneseName: '七段 Nanadan', englishName: '7th Dan' },
            { japaneseName: '八段 Hachidan', englishName: '8th Dan' },
            { japaneseName: '九段 Kudan', englishName: '9th Dan' },
            { japaneseName: '十段 Jūdan', englishName: '10th Dan' },
        ]
    },
    {
        title: 'Counting',
        description: 'In Goju-Ryu Karate, counting during practice uses traditional Japanese numbers. Here\'s how to count from 1 to 10. These numbers are often used during repetitions of exercises, strikes, or techniques in training.',
        columns: 2,
        terms: [
            { japaneseName: 'いち Ichi', englishName: 'One' },
            { japaneseName: 'に Ni', englishName: 'Two' },
            { japaneseName: 'さん San', englishName: 'Three' },
            { japaneseName: 'し Shi', englishName: 'Four' },
            { japaneseName: 'ご Go', englishName: 'Five' },
            { japaneseName: 'ろく Roku', englishName: 'Six' },
            { japaneseName: 'しち Shichi', englishName: 'Seven' },
            { japaneseName: 'はち Hachi', englishName: 'Eight' },
            { japaneseName: 'く Ku', englishName: 'Nine' },
            { japaneseName: 'じゅう Jū', englishName: 'Ten' },
        ]
    },
    {
        title: 'General Terms',
        description: 'These terms are important for understanding the culture, training structure, and techniques in Goju-Ryu karate.',
        columns: 3,
        terms: [
            { japaneseName: '上段 Jōdan', englishName: 'Upper Area (Face)' },
            { japaneseName: '中段 Chūdan', englishName: 'Middle Area (Chest)' },
            { japaneseName: '下段 Gedan', englishName: 'Lower Area (Stomach)' },
            { japaneseName: '構え Kamae', englishName: 'Combative Posture' },
            { japaneseName: 'はじめ Hajime', englishName: 'Begin' },
            { japaneseName: '正坐 Seiza', englishName: 'Sit Down' },
            { japaneseName: '用意 Yoi', englishName: 'Ready' },
            { japaneseName: '上げ Age', englishName: 'Stand up' },
            { japaneseName: '左 Hidari', englishName: 'Left' },
            { japaneseName: '止め Yame', englishName: 'Stop' },
            { japaneseName: '右 Migi', englishName: 'Right' },
            { japaneseName: '決め Kime', englishName: 'Focus' },
            { japaneseName: '半 Han', englishName: 'Half' },
            { japaneseName: '礼 Rei', englishName: 'Bow' },
        ]
    },
    {
        title: 'Stances',
        japaneseTitle: '立ち',
        description: 'In Goju-Ryu Karate, stances, or Dachi, form the foundation of strong techniques and balance. These stances focus on rootedness and fluid transitions.',
        columns: 2,
        terms: [
            { japaneseName: '立ち Dachi', englishName: 'Stance' },
            { japaneseName: '三戦立ち Sanchin Dachi', englishName: 'Hourglass Stance, Small Stance' },
            { japaneseName: '閉足立ち Heisoku Dachi', englishName: 'Closed Foot Stance' },
            { japaneseName: '前屈立ち Zenkutsu Dachi', englishName: 'Front, Stretched Stance' },
            { japaneseName: '結び立ち Musubi Dachi', englishName: 'Heels Together, Feet Apart Stance' },
            { japaneseName: '四股立ち Shiko Dachi', englishName: 'Straddle Leg Stance' },
            { japaneseName: '平行立ち Heiko Dachi', englishName: 'Feet Shoulder-Width Apart Stance' },
            { japaneseName: '猫足立ち Nekoashi Dachi', englishName: 'Cat Stance' },
            { japaneseName: '八字立ち Hachiji Dachi', englishName: 'Natural Stance, Feet Slightly Apart' },
        ]
    },
    {
        title: 'Blocks',
        japaneseTitle: '受け技',
        description: 'In Goju-Ryu Karate, blocking techniques, known as Uke Waza, are fundamental for defense. These blocks are performed with precise timing and body movement to effectively neutralize attacks.',
        columns: 2,
        terms: [
            { japaneseName: '受け Uke', englishName: 'Block' },
            { japaneseName: '小受け Ko Uke', englishName: 'Wrist Block' },
            { japaneseName: '上げ受け Age Uke', englishName: 'Rising Block' },
            { japaneseName: '回し受け Mawashi Uke', englishName: 'Roundhouse Block' },
            { japaneseName: '中段受け Chudan Uke', englishName: 'Chest Block' },
            { japaneseName: '外受け Soto Uke', englishName: 'Outside Chest Block' },
            { japaneseName: '下段払い Gedan Barai', englishName: 'Stomach Block' },
            { japaneseName: '下段回し受け Gedan Mawashi Uke', englishName: 'Lower Roundhouse Block' },
            { japaneseName: '引き受け Hiki Uke', englishName: 'Open Hand Chest Block' },
            { japaneseName: '諸手受け Morote Uke', englishName: 'Double Block ( Chest and Stomach )' },
        ]
    },
    {
        title: 'Punches',
        japaneseTitle: '突き技',
        description: 'In Goju-Ryu Karate, punches, or Tsuki Waza, are key techniques that focus on power, precision, and proper body mechanics. These punches are executed with strong focus on form, breathing, and body alignment.',
        columns: 2,
        terms: [
            { japaneseName: '突き Zuki', englishName: 'Punch' },
            { japaneseName: '逆突き Gyaku Zuki', englishName: 'Reverse Punch' },
            { japaneseName: '直突き Choku Zuki', englishName: 'Straight Punch' },
            { japaneseName: '追い突き Oi Zuki', englishName: 'Lunge Punch' },
            { japaneseName: '裏突き Ura Zuki', englishName: 'Short Punch' },
            { japaneseName: '刻み突き Kizama Zuki', englishName: 'Jab' },
            { japaneseName: '二本突き Nihon Zuki', englishName: 'Double Punch' },
            { japaneseName: '諸手突き Morote Zuki', englishName: 'Double Punch ( Thrust of Both Hands )' },
            { japaneseName: '三本突き Sanbon Zuki', englishName: 'Triple Punch' },
        ]
    },
    {
        title: 'Strikes',
        japaneseTitle: '当て身技',
        description: 'In Goju-Ryu Karate, strikes, or Atemi Waza, focus on delivering powerful and precise blows using various parts of the body. Goju-Ryu emphasizes close-range combat with controlled and powerful strikes, often using open-hand techniques for versatility.',
        columns: 2,
        terms: [
            { japaneseName: '打ち Uchi', englishName: 'Strike' },
            { japaneseName: '貫手 Nukite', englishName: 'Spear-Hand Thrust' },
            { japaneseName: '猿臂打ち Empi Uchi', englishName: 'Elbow Strike' },
            { japaneseName: '鉄槌打ち Tetsui Uchi', englishName: 'Hammer Fist Strike' },
            { japaneseName: '裏拳打ち Uraken Uchi', englishName: 'Back Fist Strike' },
            { japaneseName: '掌底打ち Shotei Uchi', englishName: 'Palm Heel Strike' },
            { japaneseName: '手刀打ち Shuto Uchi', englishName: 'Knife-Hand Strike' },
        ]
    },
    {
        title: 'Kicking',
        japaneseTitle: '蹴り技',
        description: 'In Goju-Ryu Karate, kicking techniques, or Geri Waza, are essential and focus on both power and precision. Goju-Ryu emphasizes controlled, close-range kicks with a focus on maintaining balance and fluidity. Kicking in Goju-Ryu is often combined with hand techniques for an effective offense.',
        columns: 2,
        terms: [
            { japaneseName: '蹴り Geri', englishName: 'Kick' },
            { japaneseName: '関節蹴り Kansetse Geri', englishName: 'Stamping Kick' },
            { japaneseName: '前蹴り Mae Geri', englishName: 'Front Kick' },
            { japaneseName: '膝蹴り Hiza Geri', englishName: 'Knee Kick' },
            { japaneseName: '回し蹴り Mawashi Geri', englishName: 'Roundhouse Kick' },
            { japaneseName: '足払い Ashibarai', englishName: 'Foot Sweep' },
            { japaneseName: '横蹴り蹴込み Yoko Geri Kekomi', englishName: 'Side Thrust Kick' },
            { japaneseName: '前飛び蹴り Mae Tobi Geri', englishName: 'Jumping Front Kick' },
            { japaneseName: '後ろ蹴り Ushiro Geri', englishName: 'Back Kick' },
        ]
    },
    {
        title: 'Practice Fighting',
        japaneseTitle: '組手',
        description: 'In Goju-Ryu Karate, practice fighting (kumite) integrates both soft and hard techniques, aligning with the style’s focus on balance between flexibility and power.',
        columns: 2,
        terms: [
            { japaneseName: '組手 Kumite', englishName: 'Sparring ( During a Tournament )' },
            { japaneseName: '乱取り Randori', englishName: 'Slow Continuous Sparring ( Emphasising Technique )' },
            { japaneseName: '基本一本 Kihon Ippon', englishName: 'One Step Sparring' },
            { japaneseName: '自由組手 Jiyu Kumite', englishName: 'Hard and Fast Controlled Freestyle Fighting' },
        ]
    },
    {
        title: 'Supplementary Exercises',
        japaneseTitle: '補助運動',
        description: 'Hojo Undo refers to supplementary training exercises in traditional karate, particularly in Goju-Ryu. These exercises use specialized tools to condition the body and develop strength, endurance, and technique, focusing on functional fitness for martial arts.',
        columns: 2,
        terms: [
            { japaneseName: '鎚子 Chishi', englishName: 'Concrete or Stone Weight on a Wooden Handle' },
            { japaneseName: '巻藁 Makiwara', englishName: 'Striking Post with Rubber Padding' },
            { japaneseName: '握り瓶 Nigiri Game', englishName: 'Gripping Jars' },
            { japaneseName: '金剛圏 Kongoken', englishName: 'Heavy Rectangular Hoop' },
        ]
    },
];

export const pricingTabsData: PricingTab[] = [
    {
        name: 'Pre-School',
        plans: [
            { name: 'Once a Week', description: 'R400 per month' },
            { name: 'Twice a Week', description: 'R500 per month' },
            { name: 'Unlimited', description: 'R600 per month' },
        ],
        categories: [
            {
                name: 'Features',
                features: [
                    { name: 'Access to all Pre-School classes', values: [true, true, true] },
                    { name: 'Flexible attendance', values: [false, true, true] },
                    { name: 'Personalised attention', values: [true, true, true] },
                    { name: 'Progress tracking', values: [false, true, true] },
                    { name: 'Access to special events', values: [false, false, true] },
                ]
            }
        ]
    },
    {
        name: 'Junior Scholars',
        plans: [
            { name: 'Basic', description: 'R500 per month' },
            { name: 'Intermediate', description: 'R600 per month' },
            { name: 'Advanced', description: 'R700 per month' },
        ],
        categories: [
            {
                name: 'Features',
                features: [
                    { name: 'Access to all Junior Scholar classes', values: [true, true, true] },
                    { name: 'Grading opportunities', values: [true, true, true] },
                    { name: 'Access to workshops', values: [false, true, true] },
                    { name: 'Competition training', values: [false, false, true] },
                ]
            }
        ]
    },
    {
        name: 'Senior Scholars',
        plans: [
            { name: 'Basic', description: 'R600 per month' },
            { name: 'Intermediate', description: 'R700 per month' },
            { name: 'Advanced', description: 'R800 per month' },
        ],
        categories: [
            {
                name: 'Features',
                features: [
                    { name: 'Access to all Senior Scholar classes', values: [true, true, true] },
                    { name: 'Advanced kata training', values: [true, true, true] },
                    { name: 'Leadership opportunities', values: [false, true, true] },
                    { name: 'International competitions', values: [false, false, true] },
                ]
            }
        ]
    },
    {
        name: 'Adults',
        plans: [
            { name: 'Standard', description: 'R700 per month' },
            { name: 'Premium', description: 'R800 per month' },
            { name: 'Elite', description: 'R900 per month' },
        ],
        categories: [
            {
                name: 'Features',
                features: [
                    { name: 'Access to all Adult classes', values: [true, true, true] },
                    { name: 'Self-defence workshops', values: [true, true, true] },
                    { name: 'Advanced weapon training', values: [false, true, true] },
                    { name: 'Instructor training program', values: [false, false, true] },
                ]
            }
        ]
    }
];

export const selfDefenceLevels: SelfDefenceLevel[] = [
    {
        title: 'Level 1 Self Defence Course',
        description: 'This comprehensive four-hour course provides instruction on preventative measures and fundamental practical techniques including: preventative and awareness strategies, mental and physical self-defense tactics, conflict avoidance strategies, and vital body targeting techniques. Additionally, the course covers anti-hijack safety procedures.',
        imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Level 2 Self Defence Course',
        description: 'Full-day comprehensive theoretical and practical course covering preventative measures, awareness, mental self-defense, physical self-defense, important points to remember, rules for confrontation, practical application, rape prevention, basic anti-hijacking techniques, and EMS self-defense.',
        imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Level 3 Self Defence Course',
        description: '8-hour reality-based scenario training covering preventative measures, awareness, mental and physical self-defense, key points for confrontation, practical application, rape prevention, basic anti-hijacking techniques, and EMS self-defense. Requirements include martial arts experience or a level 2 certificate.',
        imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop',
    },
];

export const selfDefenceFeatures: SelfDefenceFeature[] = [
    { title: 'High School Girls', description: 'This comprehensive course is specifically tailored for high school students, emphasizing both the theoretical and practical aspects of self-defense techniques. (8-Hour Course)' },
    { title: 'Male Self-Defence', description: 'TBC' },
    { title: 'Security Guards', description: 'Security Guard Training in Unarmed Defense and Baton Techniques' },
    { title: 'Medical Staff', description: 'Training for medical personnel such as nurses and paramedics in defensive techniques.' },
    { title: 'School Teachers', description: 'Training for school personnel such as teachers and administrators in defensive techniques.' },
];

export const lecturesData: Lecture[] = [
    {
        category: 'Scholars',
        title: 'Primary and High School',
        description: 'Lectures on the self-defense mindset and the importance of respect.',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    },
    {
        category: 'Adults',
        title: 'Corporate and University',
        description: 'Lectures on Self-Defense Mindset and Martial Arts Principles in Practical Applications',
        imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    }
];

export const selfDefenceFaqs: FaqItem[] = [
    {
        question: 'What is self-defence?',
        answer: 'Self-defence is the practice of techniques and strategies to protect oneself from physical harm or danger.'
    },
    {
        question: 'Who can take these courses?',
        answer: 'Our Self-Defence courses are open to individuals of all ages and fitness levels.'
    },
    {
        question: 'Are the courses hands-on?',
        answer: 'Yes, our Self-Defence courses are highly interactive and practical, focusing on real-life scenarios.'
    },
    {
        question: 'What will I learn?',
        answer: 'In our Self-Defence courses, you will learn effective techniques to disable an attacker and escape safely.'
    },
    {
        question: 'How long are the courses?',
        answer: 'The duration of our Self-Defence courses varies depending on the program, ranging from a few weeks to several months.'
    },
];

export const scheduleData: DailySchedule[] = [
    {
        day: 'Monday',
        classes: [
            { time: '14:30 - 15:00', name: 'Pee-Wee', instructor: 'Sensei Mario' },
            { time: '15:00 - 15:45', name: 'Junior Scholars', instructor: 'Sensei Mario' },
            { time: '15:45 - 16:30', name: 'Junior Scholars', instructor: 'Sensei Mario' },
            { time: '16:30 - 17:15', name: 'Junior Scholars', instructor: 'Sensei Mario' },
            { time: '17:15 - 18:00', name: 'Senior Scholars', instructor: 'Sensei Mario' },
            { time: '18:00 - 19:00', name: 'Adults', instructor: 'Sensei Mario' },
        ],
    },
    {
        day: 'Tuesday',
        classes: [
            { time: '15:00 - 15:45', name: 'Junior Scholars', instructor: 'Sensei Mario' },
            { time: '15:45 - 16:30', name: 'Junior Scholars', instructor: 'Sensei Mario' },
            { time: '16:30 - 17:15', name: 'Junior Scholars', instructor: 'Sensei Mario' },
            { time: '17:15 - 18:00', name: 'Senior Scholars', instructor: 'Sensei Mario' },
            { time: '18:00 - 19:00', name: 'Adults', instructor: 'Sensei Mario' },
        ],
    },
    {
        day: 'Wednesday',
        classes: [
            { time: '14:30 - 15:00', name: 'Pee-Wee', instructor: 'Sensei Mario' },
            { time: '15:00 - 15:45', name: 'Junior Scholars', instructor: 'Sensei Mario' },
            { time: '15:45 - 16:30', name: 'Junior Scholars', instructor: 'Sensei Mario' },
            { time: '16:30 - 17:15', name: 'Junior Scholars', instructor: 'Sensei Mario' },
            { time: '17:15 - 18:00', name: 'Senior Scholars', instructor: 'Sensei Mario' },
            { time: '18:00 - 19:00', name: 'Adults', instructor: 'Sensei Mario' },
        ],
    },
    {
        day: 'Thursday',
        classes: [
            { time: '15:00 - 15:45', name: 'Junior Scholars', instructor: 'Sensei Mario' },
            { time: '15:45 - 16:30', name: 'Junior Scholars', instructor: 'Sensei Mario' },
            { time: '16:30 - 17:15', name: 'Junior Scholars', instructor: 'Sensei Mario' },
            { time: '17:15 - 18:00', name: 'Senior Scholars', instructor: 'Sensei Mario' },
            { time: '18:00 - 19:00', name: 'Adults', instructor: 'Sensei Mario' },
        ],
    },
    {
        day: 'Friday',
        classes: [
            { time: '14:30 - 15:00', name: 'Pee-Wee', instructor: 'Sensei Mario' },
            { time: '15:00 - 15:45', name: 'Junior Scholars', instructor: 'Sensei Mario' },
            { time: '15:45 - 16:30', name: 'Junior Scholars', instructor: 'Sensei Mario' },
        ],
    },
    {
        day: 'Saturday',
        classes: [
            { time: '08:00 - 09:00', name: 'All Grades', instructor: 'Sensei Mario' },
        ],
    },
];