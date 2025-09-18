
import type { ReactNode } from 'react';

const achievements = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: '6th Dan Black Belt (OGKK)',
        description: 'Represents decades of dedication and a profound mastery of Goju-Ryu karate.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'International Judge & Referee',
        description: 'Holds qualifications as an All Africa UFAK Judge B (Kumite/Kata) and A-class Referee.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
        ),
        title: 'Leadership in Karate',
        description: 'Served as Chief Referee for South Africa (2012) and Vice President for the Africa Goju Karate Federation (2012-2018).',
    },
    {
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'National Champion',
        description: 'A decorated competitor, holding titles as a former National Goju-Ryu Kumite and Kata champion.',
    },
];

type AchievementCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
};

const AchievementCard = ({ icon, title, description }: AchievementCardProps) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="mt-1 text-gray-600">{description}</p>
        </div>
    </div>
);

const MarioSequeiraPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gray-800 py-32 text-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1574680096145-f844349f0409?q=80&w=2070&auto=format&fit=crop" alt="Dojo background" className="absolute inset-0 w-full h-full object-cover opacity-30"/>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 tracking-tight">Mario Sequeira</h1>
                        <p className="text-xl text-gray-200">
                           Owner, Head Instructor & 6th Dan Black Belt
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            {/* Inspired by the old site's portrait */}
                            <img 
                                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1887&auto=format&fit=crop" 
                                alt="Sensei Mario Sequeira" 
                                className="rounded-lg shadow-2xl object-cover w-full max-w-sm h-auto aspect-[3/4]" 
                            />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">A Lifetime of Dedication</p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">A Legacy of Excellence in Karate-Do</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    With a prestigious 6th Dan Black Belt, Sensei Mario Sequeira's journey in karate is marked by decades of dedication, competition, and leadership. As the founder and head instructor of Palm Court Karate Centre, he has created a nurturing environment where students can explore the profound depths of traditional Goju-Ryu Karate.
                                </p>
                                <p>
                                    Sensei Mario's expertise extends beyond the dojo. He is an internationally recognized official, having served in critical roles such as the Chief Referee for South Africa and Vice President for the Africa Goju Karate Federation. His extensive experience as a competitor, including national championships in both kumite and kata, informs his practical and insightful teaching style, empowering students to achieve their own personal excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Achievements Section */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                         <h2 className="text-4xl font-bold text-gray-900 mb-4">Qualifications & Key Achievements</h2>
                         <p className="text-lg text-gray-600">A career defined by a commitment to the art and sport of Karate.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-4xl mx-auto">
                        {achievements.map((ach) => (
                            <AchievementCard key={ach.title} {...ach} />
                        ))}
                         <div className="md:col-span-2 text-center mt-8">
                             <div className="flex items-start space-x-4 max-w-lg mx-auto">
                                <div className="flex-shrink-0">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M12 12L8 9.778 4 12v7.5L8 22l4-2.222" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 text-left">National Diploma in Business Economics</h3>
                                    <p className="mt-1 text-gray-600 text-left">Combining martial arts discipline with a strong academic foundation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Gallery Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Sensei in Action</h2>
                        <p className="text-lg text-gray-600">Moments from a lifetime of practice, teaching, and community.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg">
                            {/* Inspired by the old site's group photo */}
                            <img src="https://images.unsplash.com/photo-1614926593558-185c7538b251?q=80&w=2070&auto=format&fit=crop" alt="Sensei Mario with students" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                             {/* Inspired by the old site's action shot */}
                            <img src="https://images.unsplash.com/photo-1593352222347-1422794a0857?q=80&w=1887&auto=format&fit=crop" alt="Karate action shot" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" alt="Training session" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="col-span-2 rounded-lg overflow-hidden shadow-lg">
                            <img src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=2070&auto=format&fit=crop" alt="Dojo atmosphere" className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MarioSequeiraPage;
