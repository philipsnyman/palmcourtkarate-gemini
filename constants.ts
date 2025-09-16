import React from 'react';
import type { MegaMenuColumn, TeamMember, InfoCard, Affiliation, DanRank } from './types';

// Icons for Mega Menu - Rewritten without JSX
const KarateIcon = () => React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  React.createElement('path', {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 2.25a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm-3.375 5.625a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm6.75 0a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm-6.04 4.5c.25.5.75.75 1.29.75h3.5a1.5 1.5 0 001.5-1.5v-1.5h-6.5v.75c0 .5.25.75.71.75z"
  })
);

const DojoIcon = () => React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  React.createElement('path', {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 12h6.75m-6.75 5.25h6.75M5.25 21v-2.25a2.25 2.25 0 012.25-2.25h8.25a2.25 2.25 0 012.25 2.25V21"
  })
);

const CoursesIcon = () => React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  React.createElement('path', {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
  })
);


export const megaMenuColumns: MegaMenuColumn[] = [
  {
    title: 'About Us',
    links: [
      { title: 'Our Dojo', href: '#', description: 'Learn about our history and philosophy.', icon: React.createElement(DojoIcon) },
      { title: 'Facilities', href: '#', description: 'Explore our state-of-the-art training center.', icon: React.createElement(DojoIcon) },
      { title: 'Mario Sequeira', href: '#', description: 'Meet our founder and chief instructor.', icon: React.createElement(KarateIcon) },
      { title: 'Affiliations', href: '/affiliations', description: 'Our connections in the karate world.', icon: React.createElement(KarateIcon) },
    ],
  },
  {
    title: 'Courses',
    links: [
      { title: 'Pre-School (Ages 3-5)', href: '#', description: 'Fun and engaging introduction to karate.', icon: React.createElement(CoursesIcon) },
      { title: 'Scholars (Ages 6-17)', href: '#', description: 'Developing discipline and skill.', icon: React.createElement(CoursesIcon) },
      { title: 'Adults (Ages 18+)', href: '#', description: 'For fitness, self-defense, and mastery.', icon: React.createElement(CoursesIcon) },
      { title: 'Self Defence', href: '#', description: 'Practical techniques for real-world situations.', icon: React.createElement(CoursesIcon) },
    ],
  },
  {
    title: 'Karate',
    links: [
        { title: 'History', href: '#', description: 'The origins of Goju-Ryu.', icon: React.createElement(KarateIcon) },
        { title: 'Dojo Etiquette', href: '#', description: 'The rules and customs of our dojo.', icon: React.createElement(DojoIcon) },
        { title: 'Terminology', href: '#', description: 'Learn the Japanese terms used in training.', icon: React.createElement(CoursesIcon) },
        { title: 'Gradings', href: '#', description: 'Understand the belt ranking system.', icon: React.createElement(CoursesIcon) },
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Mario Sequeira',
    role: 'Founder & Chief Instructor',
    imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Isabella Rossi',
    role: 'Senior Instructor (Sensei)',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Kenji Tanaka',
    role: 'Instructor (Sensei)',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
  },
];

export const infoCards: InfoCard[] = [
  {
    title: 'Preschoolers',
    description: 'Our preschooler classes introduce children aged 3-5 to karate in a fun, safe, and engaging environment. We focus on developing coordination, discipline, and confidence through age-appropriate activities and games.',
  },
  {
    title: 'Scholars',
    description: 'Designed for scholars aged 6-17, these classes build a strong foundation in traditional Goju-Ryu Karate-Do. Students learn kata, kumite, and self-defense while developing focus, respect, and perseverance.',
  },
  {
    title: 'Adults',
    description: 'Whether you\'re a beginner or have prior experience, our adult classes offer a comprehensive karate education. Improve your fitness, learn effective self-defense, and embark on a journey of personal growth.',
  },
  {
    title: 'Self Defence',
    description: 'Our specialized self-defense courses are open to the public and dojo members. Learn practical, real-world techniques to protect yourself and your loved ones in a supportive and controlled setting.',
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
    tagline: 'First Degree',
    japaneseName: '初段',
    englishName: 'Shodan',
    description: 'Represents the first step on the path of the black belt. Holders have demonstrated a solid understanding of the fundamentals of Goju-Ryu.',
    holders: [
      { name: 'John Smith', description: 'Graded 2022' },
      { name: 'Emily White', description: 'Graded 2022' },
      { name: 'Michael Brown', description: 'Graded 2023' },
    ],
  },
  {
    tagline: 'Second Degree',
    japaneseName: '弐段',
    englishName: 'Nidan',
    description: 'Holders have refined their techniques and begun to understand the deeper principles of karate. This rank requires increased responsibility and teaching ability.',
    holders: [
      { name: 'Jessica Green', description: 'Assistant Instructor' },
      { name: 'David Black', description: 'Graded 2021' },
    ],
  },
  {
    tagline: 'Third Degree',
    japaneseName: '参段',
    englishName: 'Sandan',
    description: 'A significant milestone, the Sandan rank signifies a mature practitioner who has started to develop their own understanding and application of Goju-Ryu.',
    holders: [
      { name: 'Kenji Tanaka', description: 'Instructor' },
    ],
  },
];