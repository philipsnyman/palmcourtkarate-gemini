import React from 'react';
import type { MegaMenuLink, TeamMember, InfoCard, Affiliation, BlogPost, FaqItem, GradingComponent, BeltRank, TerminologySection } from './types';

export const megaMenuColumns: { title: string; links: MegaMenuLink[] }[] = [
  {
    title: 'About Us',
    links: [
      { title: 'Our Dojo', href: '/about-us/our-dojo', description: 'Place of the Way' },
      { title: 'Facilities', href: '/about-us/facilities', description: 'TBC' },
      { title: 'Mario Sequeira', href: '/about-us/mario-sequeira', description: 'Owner & Instructor' },
      { title: 'Affiliations', href: '/about-us/affiliations', description: 'TBC' },
    ],
  },
  {
    title: 'Karate',
    links: [
      { title: 'History', href: '/karate/history', description: 'TBC' },
      { title: 'Gradings', href: '/karate/gradings', description: 'TBC' },
      { title: 'Dojo Etiquette', href: '/karate/dojo-etiquette', description: 'Martial Arts begins and ends with respect.' },
      { title: 'Terminology', href: '/karate/terminology', description: 'Learn key Japanese terms.' },
    ],
  },
  {
    title: 'Courses',
    links: [
      { title: 'Pre-School', href: '#', description: 'TBC' },
      { title: 'Scholars', href: '#', description: 'Karate for K1-12' },
      { title: 'Adults', href: '#', description: 'TBC' },
      { title: 'Self Defence', href: '#', description: 'TBC' },
    ],
  },
];


export const featuredBlogPosts = [
    {
        title: 'The Philosophy of Goju-Ryu',
        description: 'Discover the core principles that guide our practice.',
        href: '/blog/philosophy-of-goju-ryu',
        imageUrl: 'https://images.unsplash.com/photo-1593352222347-1422794a0857?q=80&w=200&auto=format&fit=crop',
    },
    {
        title: 'Training Tips for Beginners',
        description: 'Start your karate journey on the right foot with these tips.',
        href: '/blog/training-tips-for-beginners',
        imageUrl: 'https://images.unsplash.com/photo-1574680096145-f844349f0409?q=80&w=200&auto=format&fit=crop',
    }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Mario Sequeira',
    role: 'Founder & Chief Instructor',
    imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
    learnMoreUrl: '/about-us/mario-sequeira'
  },
  {
    name: 'Zenobia Sequeira',
    role: 'Co-Founder & Senior Instructor',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    name: 'John Doe',
    role: 'Instructor',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
];

export const infoCards: InfoCard[] = [
    {
        title: 'Preschoolers (Ages 3-6)',
        description: 'Our specialized program introduces young children to karate in a fun and engaging way, focusing on coordination, discipline, and basic skills.',
    },
    {
        title: 'Children (Ages 7-12)',
        description: 'Aimed at school-aged children, these classes build a strong foundation in Goju-Ryu karate, improving focus, confidence, and physical fitness.',
    },
    {
        title: 'Teens & Adults',
        description: 'Whether you are a beginner or have prior experience, our adult classes cater to all levels, focusing on self-defense, fitness, and advanced techniques.',
    },
    {
        title: 'Family Classes',
        description: 'Train together as a family! Our family classes provide a unique opportunity for parents and children to learn and grow together in a supportive environment.',
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
    },
];


export const danRanksData = [
  {
    tagline: 'First to Third Dan',
    japaneseName: '有段者',
    englishName: 'Yudansha',
    description: 'The Yudansha are the black belt holders who have achieved a level of proficiency and understanding in the art. This is just the beginning of a lifelong journey.',
    holders: [
      { name: 'John Smith' }, { name: 'Emily Johnson' }, { name: 'Michael Williams' }, { name: 'Sarah Brown' },
      { name: 'David Jones' }, { name: 'Jessica Garcia' }, { name: 'Chris Miller' }, { name: 'Amanda Davis' },
      { name: 'James Rodriguez' }, { name: 'Linda Martinez' }, { name: 'Robert Hernandez' }, { name: 'Patricia Lopez' },
    ]
  },
  {
    tagline: 'Fourth & Fifth Dan',
    japaneseName: '高段者',
    englishName: 'Kodansha',
    description: 'The Kodansha are senior black belts who have dedicated many years to training and teaching. They hold titles of Renshi or Shihan, signifying their advanced knowledge and leadership.',
    holders: [
      { name: 'William Clark' }, { name: 'Elizabeth Lewis' }, { name: 'Richard Walker' }, { name: 'Susan Hall' }
    ]
  },
];

export const blogPostsData: BlogPost[] = [
    {
        id: 1,
        slug: 'the-philosophy-of-goju-ryu',
        title: 'The Philosophy of Goju-Ryu: Finding Balance in Hard and Soft',
        excerpt: 'Goju-Ryu, meaning "hard-soft style," is more than just a fighting technique. It\'s a philosophy for life. This post explores the core principles of Goju-Ryu and how they can be applied both inside and outside the dojo.',
        imageUrl: 'https://images.unsplash.com/photo-1593352222347-1422794a0857?q=80&w=800&auto=format&fit=crop',
        category: 'Karate Tips',
        author: 'Mario Sequeira',
        authorImageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop',
        date: 'Oct 10, 2023',
        readTimeInMinutes: 5,
        isFeatured: true,
    },
    {
        id: 2,
        slug: 'mastering-sanchin-kata',
        title: 'Mastering Sanchin Kata: The Foundation of Goju-Ryu',
        excerpt: 'Sanchin kata is one of the most important and fundamental katas in Goju-Ryu. Learn about its history, purpose, and the correct techniques to build a strong foundation for your karate practice.',
        imageUrl: 'https://images.unsplash.com/photo-1574680096145-f844349f0409?q=80&w=800&auto=format&fit=crop',
        category: 'Training Techniques',
        author: 'Zenobia Sequeira',
        authorImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
        date: 'Sep 25, 2023',
        readTimeInMinutes: 7,
        isFeatured: false,
    },
    {
        id: 3,
        slug: 'dojo-etiquette-why-it-matters',
        title: 'Dojo Etiquette: More Than Just Bowing',
        excerpt: 'Respect and discipline are at the heart of karate. This post delves into the importance of dojo etiquette, explaining the meaning behind the rituals and why they are essential for every student\'s growth.',
        imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop',
        category: 'Dojo Etiquette',
        author: 'John Doe',
        authorImageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
        date: 'Sep 12, 2023',
        readTimeInMinutes: 4,
        isFeatured: false,
    },
    {
        id: 4,
        slug: 'self-defense-for-everyone',
        title: 'Practical Self-Defense Techniques for Everyday Situations',
        excerpt: 'Karate provides effective tools for self-defense. In this article, we cover some basic but highly effective techniques that anyone can learn to stay safe in real-world scenarios.',
        imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
        category: 'Self-Defense',
        author: 'Mario Sequeira',
        authorImageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop',
        date: 'Aug 30, 2023',
        readTimeInMinutes: 6,
        isFeatured: false,
    },
];

export const dojoEtiquetteFaqs: FaqItem[] = [
    {
        question: 'What is dojo etiquette?',
        answer: React.createElement(
            'ul',
            { role: 'list', className: 'list-disc pl-5 space-y-2' },
            React.createElement('li', null, 'Always be on time for your classes.'),
            React.createElement('li', null, 'Remove shoes and all jewellery before entering the dojo.'),
            React.createElement('li', null, 'Let seniors enter the dojo first.'),
            React.createElement('li', null, 'Be polite to your instructors, seniors and elders.'),
            React.createElement('li', null, 'Line up according to belt (the highest belt on the left of the dojo) and start warming up.'),
            React.createElement('li', null, 'When entering and exiting the dojo, remember to bow.'),
            React.createElement('li', null, 'When bowing at the beginning of the class, say ‘onegai shimasu”, which means ‘please teach me’. At the end of the class, you will bow again and say ‘arigato gozaimashita”, meaning ‘thank you for teaching me’.'),
            React.createElement('li', null, 'While training, listen carefully and seriously to the advice of your sensei and always acknowledge that you have heard and understood the advice.'),
            React.createElement('li', null, 'Keep your ‘gi’ (training clothes) neat and tidy.'),
            React.createElement('li', null, 'Keep your fingernails and toe nails short to prevent injury.'),
            React.createElement('li', null, 'Know your physical condition, stamina and strength well – do not force yourself to do the impossible.'),
            React.createElement('li', null, 'Handle all equipment with care and put it back in the right place.')
        )
    },
    {
        question: 'Why is etiquette important?',
        answer: 'Etiquette is important in a karate dojo as it creates a respectful and disciplined environment. It helps students develop self-discipline, focus, and humility, which are essential qualities in martial arts.',
    },
    {
        question: 'How can I learn dojo etiquette?',
        answer: 'Learning dojo etiquette is part of the karate training process. Instructors will teach and reinforce proper etiquette during classes, and students are expected to observe and follow the examples set by senior students.',
    },
    {
        question: 'What happens if I break dojo etiquette?',
        answer: 'Breaking dojo etiquette may result in disciplinary actions, such as verbal warnings, extra training, or temporary suspension from classes. It is important to understand and respect the rules of the dojo.',
    },
    {
        question: 'Can I ask questions during training?',
        answer: 'Yes, you can ask questions during training if you need clarification or guidance. However, it is important to wait for an appropriate time, such as a designated Q&A session, to minimize disruptions to the class.',
    },
];


export const dojoKun = {
    title: 'Dōjō kun (道場訓)',
    description: 'The Dōjō Kun serves as a guiding framework for practitioners on their martial arts journey. It underscores the significance of pursuing truth, striving for excellence, exhibiting respect towards others, and cultivating harmony. This foundation promotes ongoing self-improvement and nurtures discipline among its members.',
    quote: 'Hitotsu - Be humble and polite.<br>Hitotsu - Train considering your physical strength<br>Hitotsu - Practice earnestly with creativity.<br>Hitotsu - Be calm and swift.<br>Hitotsu - Take care of your health.<br>Hitotsu - Live a plain life.<br>Hitotsu - Do not be too proud or modest.<br>Hitotsu - Continue your training with patience.',
    author: {
        name: 'Sensei Teruo Chinen',
        imageUrl: '/images/Teruo-chinen.png',
    }
};

export const gradingComponentsData: GradingComponent[] = [
    {
        japaneseName: '基本',
        englishName: 'Kihon',
        description: 'Kihon is a Japanese term meaning "basics" or "fundamentals." The term is used to refer to the basic techniques that are taught and practiced as the foundation of most Japanese martial arts.',
    },
    {
        japaneseName: '型',
        englishName: 'Kata',
        description: 'Kata is a Japanese word meaning "form". It refers to a detailed choreographed pattern of martial arts movements. It is practiced in Japanese martial arts as a way to memorise and perfect the movements being executed.',
    },
    {
        japaneseName: '組手',
        englishName: 'Kumite',
        description: 'Kumite literally translated means "grappling hands" or in another word it means "sparring" and is one of the three main sections of karate training, along with "Kata" and "Kihon". "Kumite" is the part of karate in which a person trains against one or more adversaries, using the techniques learned from the "Kihon" and "Kata".',
    },
     {
        japaneseName: '補助運動',
        englishName: 'Fitness',
        description: 'Hojo undō is a Japanese language term, translated as "supplementary exercises", that refers to conditioning exercises used in martial arts, especially in karate. Hojo undō training was designed to develop ambidextrous physical strength, stamina, muscle coordination, speed, and posture.',
    },
    {
        japaneseName: '掛け手',
        englishName: 'Kakie',
        description: 'Kakie is a traditional training method that focuses on developing close-range combat skills, sensitivity, and the ability to respond to an opponent\'s movements through tactile feedback. Kakie can be translated as "pushing hands" or "hooking hands," and it involves two practitioners maintaining continuous contact between their arms while performing various techniques.',
    },
    {
        japaneseName: '分解',
        englishName: 'Bunkai',
        description: 'Bunkai, literally meaning "analysis"or "disassembly", is a term used in Japanese martial arts referring to process of analysing kata and extracting fighting techniques from the movements of a "form" (kata). The extracted fighting techniques are called Oyo.',
    },
];

export const beltRanksData: BeltRank[] = [
    {
        kyu: '10th Kyu',
        beltName: 'White Belt ( Ungraded )',
        imageUrl: '/images/white-karate-belt.png',
        description: 'TBC Ungraded',
        requirements: [
            { category: 'Kihon', description: 'Basic kihon (basic punch, block, and kick techniques and basic stances)' },
            { category: 'Kata', description: 'Tachi kata (stance kata)' },
            { category: 'Kumite', description: 'No contact to very light contact randori' },
        ],
    },
    {
        kyu: '9th Kyu',
        beltName: 'White Belt ( Graded )',
        imageUrl: '/images/white-karate-belt.png',
        description: 'TBC',
        requirements: [
            { category: 'Minimum Training Time', description: '3 months or 25 sessions' },
            { category: 'Terminology', description: 'Counting to 10 in Japanese and some basic terms like junbi undo, kihon training, kumite, directions and sides' },
            { category: 'Kihon', description: 'Basic Kihon (basic punch, block, and kick techniques and basic stances)' },
            { category: 'Kata', description: 'Gekisai Dai Ichi (basic sequence)' },
            { category: 'Kumite', description: 'Sandan Gi number 1 and light contact randori' },
            { category: 'Fitness', description: 'Push-ups, sit-ups, crunches, air squats, squat thrusts, star jumps, a mile run, etc.' },
        ],
    },
];

export const terminologySections: TerminologySection[] = [
  {
    title: 'Understanding the Black Belt Ranks',
    description: "The dan (段) ranking system is extensively utilized by Japanese, Okinawan, Korean, and various other martial arts organizations to indicate an individual's proficiency within a specific system. Originally employed as a ranking system to assess skill level in a particular discipline, it has its origins in a Go school during the Edo period. Since then, it has become integrated into the majority of modern Japanese fine and martial arts practices.",
    terms: [
      { japanese: '<strong>初段 Shodan</strong>', english: '1st Dan' },
      { japanese: '<strong>二段 Nidan</strong>', english: '2nd Dan' },
      { japanese: '<strong>三段 Sandan</strong>', english: '3rd Dan' },
      { japanese: '<strong>四段 Yondan</strong>', english: '4th Dan' },
      { japanese: '<strong>五段 Godan</strong>', english: '5th Dan' },
      { japanese: '<strong>六段 Rokudan</strong>', english: '6th Dan' },
      { japanese: '<strong>七段 Nanadan</strong>', english: '7th Dan' },
      { japanese: '<strong>八段 Hachidan</strong>', english: '8th Dan' },
      { japanese: '<strong>九段 Kudan</strong>', english: '9th Dan' },
      { japanese: '<strong>十段 Jūdan</strong>', english: '10th Dan' },
    ]
  },
  {
    title: 'Counting',
    description: "In Goju-Ryu Karate, counting during practice uses traditional Japanese numbers. Here's how to count from 1 to 10. These numbers are often used during repetitions of exercises, strikes, or techniques in training.",
    terms: [
      { japanese: '<strong>いち Ichi</strong>', english: 'One' },
      { japanese: '<strong>に Ni</strong>', english: 'Two' },
      { japanese: '<strong>さん San</strong>', english: 'Three' },
      { japanese: '<strong>し Shi</strong>', english: 'Four' },
      { japanese: '<strong>ご Go</strong>', english: 'Five' },
      { japanese: '<strong>ろく Roku</strong>', english: 'Six' },
      { japanese: '<strong>しち Shichi</strong>', english: 'Seven' },
      { japanese: '<strong>はち Hachi</strong>', english: 'Eight' },
      { japanese: '<strong>く Ku</strong>', english: 'Nine' },
      { japanese: '<strong>じゅう Jū</strong>', english: 'Ten' },
    ]
  },
  {
    title: 'General Terms',
    description: "These terms are important for understanding the culture, training structure, and techniques in Goju-Ryu karate.",
    terms: [
      { japanese: '<strong>上段 Jōdan</strong>', english: 'Upper Area (Face)' },
      { japanese: '<strong>中段 Chūdan</strong>', english: 'Middle Area (Chest)' },
      { japanese: '<strong>下段 Gedan</strong>', english: 'Lower Area (Stomach)' },
      { japanese: '<strong>構え Kamae</strong>', english: 'Combative Posture' },
      { japanese: '<strong>はじめ Hajime</strong>', english: 'Begin' },
      { japanese: '<strong>正坐 Seiza</strong>', english: 'Sit Down' },
      { japanese: '<strong>用意 Yoi</strong>', english: 'Ready' },
      { japanese: '<strong>上げ Age</strong>', english: 'Stand up' },
      { japanese: '<strong>左 Hidari</strong>', english: 'Left' },
      { japanese: '<strong>止め Yame</strong>', english: 'Stop' },
      { japanese: '<strong>右 Migi</strong>', english: 'Right' },
      { japanese: '<strong>決め Kime</strong>', english: 'Focus' },
      { japanese: '<strong>半 Han</strong>', english: 'Half' },
      { japanese: '<strong>礼 Rei</strong>', english: 'Bow' },
    ]
  },
  {
    tagline: '立ち',
    title: 'Stances',
    description: "In Goju-Ryu Karate, stances, or Dachi, form the foundation of strong techniques and balance. These stances focus on rootedness and fluid transitions.",
    terms: [
      { japanese: '<strong>立ち Dachi</strong>', english: 'Stance' },
      { japanese: '<strong>三戦立ち Sanchin Dachi</strong>', english: 'Hourglass Stance, Small Stance' },
      { japanese: '<strong>閉足立ち Heisoku Dachi</strong>', english: 'Closed Foot Stance' },
      { japanese: '<strong>前屈立ち Zenkutsu Dachi</strong>', english: 'Front, Stretched Stance' },
      { japanese: '<strong>結び立ち Musubi Dachi</strong>', english: 'Heels Together, Feet Apart Stance' },
      { japanese: '<strong>四股立ち Shiko Dachi</strong>', english: 'Straddle Leg Stance' },
      { japanese: '<strong>平行立ち Heiko Dachi</strong>', english: 'Feet Shoulder-Width Apart Stance' },
      { japanese: '<strong>猫足立ち Nekoashi Dachi</strong>', english: 'Cat Stance' },
      { japanese: '<strong>八字立ち Hachiji Dachi</strong>', english: 'Natural Stance, Feet Slightly Apart' },
    ]
  },
  {
    tagline: '受け技',
    title: 'Blocks',
    description: "In Goju-Ryu Karate, blocking techniques, known as Uke Waza, are fundamental for defense. These blocks are performed with precise timing and body movement to effectively neutralize attacks.",
    terms: [
      { japanese: '<strong>受け Uke</strong>', english: 'Block' },
      { japanese: '<strong>小受け Ko Uke</strong>', english: 'Wrist Block' },
      { japanese: '<strong>上げ受け Age Uke</strong>', english: 'Rising Block' },
      { japanese: '<strong>回し受け Mawashi Uke</strong>', english: 'Roundhouse Block' },
      { japanese: '<strong>中段受け Chudan Uke</strong>', english: 'Chest Block' },
      { japanese: '<strong>外受け Soto Uke</strong>', english: 'Outside Chest Block' },
      { japanese: '<strong>下段払い Gedan Barai</strong>', english: 'Stomach Block' },
      { japanese: '<strong>下段回し受け Gedan Mawashi Uke</strong>', english: 'Lower Roundhouse Block' },
      { japanese: '<strong>引き受け Hiki Uke</strong>', english: 'Open Hand Chest Block' },
      { japanese: '<strong>諸手受け Morote Uke</strong>', english: 'Double Block ( Chest and Stomach )' },
    ]
  },
  {
    tagline: '突き技',
    title: 'Punches',
    description: "In Goju-Ryu Karate, punches, or Tsuki Waza, are key techniques that focus on power, precision, and proper body mechanics. These punches are executed with strong focus on form, breathing, and body alignment.",
    terms: [
      { japanese: '<strong>突き Zuki</strong>', english: 'Punch' },
      { japanese: '<strong>逆突き Gyaku Zuki</strong>', english: 'Reverse Punch' },
      { japanese: '<strong>直突き Choku Zuki</strong>', english: 'Straight Punch' },
      { japanese: '<strong>追い突き Oi Zuki</strong>', english: 'Lunge Punch' },
      { japanese: '<strong>裏突き Ura Zuki</strong>', english: 'Short Punch' },
      { japanese: '<strong>刻み突き Kizama Zuki</strong>', english: 'Jab' },
      { japanese: '<strong>二本突き Nihon Zuki</strong>', english: 'Double Punch' },
      { japanese: '<strong>諸手突き Morote Zuki</strong>', english: 'Double Punch ( Thrust of Both Hands )' },
      { japanese: '<strong>三本突き Sanbon Zuki</strong>', english: 'Triple Punch' },
    ]
  },
  {
    tagline: '当て身技',
    title: 'Strikes',
    description: "In Goju-Ryu Karate, strikes, or Atemi Waza, focus on delivering powerful and precise blows using various parts of the body. Goju-Ryu emphasizes close-range combat with controlled and powerful strikes, often using open-hand techniques for versatility.",
    terms: [
      { japanese: '<strong>打ち Uchi</strong>', english: 'Strike' },
      { japanese: '<strong>貫手 Nukite</strong>', english: 'Spear-Hand Thrust' },
      { japanese: '<strong>猿臂打ち Empi Uchi</strong>', english: 'Elbow Strike' },
      { japanese: '<strong>鉄槌打ち Tetsui Uchi</strong>', english: 'Hammer Fist Strike' },
      { japanese: '<strong>裏拳打ち Uraken Uchi</strong>', english: 'Back Fist Strike' },
      { japanese: '<strong>掌底打ち Shotei Uchi</strong>', english: 'Palm Heel Strike' },
      { japanese: '<strong>手刀打ち Shuto Uchi</strong>', english: 'Knife-Hand Strike' },
    ]
  },
  {
    tagline: '蹴り技',
    title: 'Kicking',
    description: "In Goju-Ryu Karate, kicking techniques, or Geri Waza, are essential and focus on both power and precision. Goju-Ryu emphasizes controlled, close-range kicks with a focus on maintaining balance and fluidity. Kicking in Goju-Ryu is often combined with hand techniques for an effective offense.",
    terms: [
      { japanese: '<strong>蹴り Geri</strong>', english: 'Kick' },
      { japanese: '<strong>関節蹴り Kansetse Geri</strong>', english: 'Stamping Kick' },
      { japanese: '<strong>前蹴り Mae Geri</strong>', english: 'Front Kick' },
      { japanese: '<strong>膝蹴り Hiza Geri</strong>', english: 'Knee Kick' },
      { japanese: '<strong>回し蹴り Mawashi Geri</strong>', english: 'Roundhouse Kick' },
      { japanese: '<strong>足払い Ashibarai</strong>', english: 'Foot Sweep' },
      { japanese: '<strong>横蹴り蹴込み Yoko Geri Kekomi</strong>', english: 'Side Thrust Kick' },
      { japanese: '<strong>前飛び蹴り Mae Tobi Geri</strong>', english: 'Jumping Front Kick' },
      { japanese: '<strong>後ろ蹴り Ushiro Geri</strong>', english: 'Back Kick' },
    ]
  },
  {
    tagline: '組手',
    title: 'Practice Fighting',
    description: "In Goju-Ryu Karate, practice fighting (kumite) integrates both soft and hard techniques, aligning with the style’s focus on balance between flexibility and power.",
    terms: [
      { japanese: '<strong>組手 Kumite</strong>', english: 'Sparring ( During a Tournament )' },
      { japanese: '<strong>乱取り Randori</strong>', english: 'Slow Continuous Sparring ( Emphasising Technique )' },
      { japanese: '<strong>基本一本 Kihon Ippon</strong>', english: 'One Step Sparring' },
      { japanese: '<strong>自由組手 Jiyu Kumite</strong>', english: 'Hard and Fast Controlled Freestyle Fighting' },
    ]
  },
  {
    tagline: '補助運動',
    title: 'Supplementary Exercises',
    description: "Hojo Undo refers to supplementary training exercises in traditional karate, particularly in Goju-Ryu. These exercises use specialized tools to condition the body and develop strength, endurance, and technique, focusing on functional fitness for martial arts.",
    terms: [
      { japanese: '<strong>鎚子 Chishi</strong>', english: 'Concrete or Stone Weight on a Wooden Handle' },
      { japanese: '<strong>巻藁 Makiwara</strong>', english: 'Striking Post with Rubber Padding' },
      { japanese: '<strong>握り瓶 Nigiri Game</strong>', english: 'Gripping Jars' },
      { japanese: '<strong>金剛圏 Kongoken</strong>', english: 'Heavy Rectangular Hoop' },
    ]
  },
];