import React from 'react';
import type { MegaMenuColumn, TeamMember, InfoCard, Affiliation, DanRank, FeaturedBlogPost, BlogPost } from './types';

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    title: 'About Us',
    links: [
      { title: 'Our Dojo', href: '#', description: 'Place of the Way' },
      { title: 'Facilities', href: '#', description: 'Explore our training center' },
      { title: 'Mario Sequeira', href: '#', description: 'Owner & Instructor' },
      { title: 'Affiliations', href: '/affiliations', description: 'Our karate connections' },
    ],
  },
  {
    title: 'Karate',
    links: [
        { title: 'History', href: '#', description: 'The origins of Goju-Ryu' },
        { title: 'Gradings', href: '#', description: 'The belt ranking system' },
        { title: 'Dojo Etiquette', href: '#', description: 'Begins and ends with respect' },
        { title: 'Terminology', href: '#', description: 'Learn the Japanese terms' },
    ]
  },
  {
    title: 'Courses',
    links: [
      { title: 'Pre-School', href: '#', description: 'Fun intro for ages 3-5' },
      { title: 'Scholars', href: '#', description: 'Karate for K1-12' },
      { title: 'Adults', href: '#', description: 'Fitness & self-defense' },
      { title: 'Self Defence', href: '#', description: 'Practical, real-world skills' },
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
    learnMoreUrl: '#',
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
        name: 'Okinawa Goju-Ryu Karate-Do Kyokai (OGKK)',
        description: 'The Okinawa Goju-Ryu Karate-Do Kyokai (OGKK) is the official governing body for Goju-Ryu karate in Okinawa, Japan. Our dojo is a proud member, ensuring our teachings are authentic and adhere to the highest standards of traditional Okinawan karate.',
        logoUrl: '/images/ogkk-logo.png',
    },
    {
        name: 'South African Goju-Ryu Karate-Do Association (SAGKA)',
        description: 'As a member of SAGKA, we are part of a national network of dojos dedicated to the practice and promotion of Goju-Ryu Karate in South Africa. This affiliation provides our students with opportunities for national-level competitions, seminars, and gradings.',
        logoUrl: '/images/sagka-logo.png',
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
