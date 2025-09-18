import { useState, useEffect, useCallback, ReactNode } from 'react';
import { mockUserData } from '../constants';
import type { UserData } from '../types';

type DashboardCardProps = {
    title: string;
    children: ReactNode;
    className?: string;
};

const UserPlaceholderIcon = () => (
    <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const DashboardCard = ({ title, children, className }: DashboardCardProps) => (
    <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-200 ${className}`}>
        <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
        {children}
    </div>
);

const ProgressTracker = ({ user }: { user: UserData }) => {
    const percentage = Math.round((user.progress.classesAttended / user.progress.classesRequired) * 100);

    return (
        <DashboardCard title="My Progress">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                    <img src={user.currentRank.imageUrl} alt={user.currentRank.name} className="w-24 h-16 object-contain" />
                    <p className="text-center font-semibold text-gray-800 mt-1">{user.currentRank.name}</p>
                    <p className="text-center text-sm text-gray-500">{user.currentRank.kyu}</p>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-baseline mb-1">
                        <span className="text-sm font-medium text-gray-600">Next Rank: <span className="font-bold text-gray-800">{user.nextRank.name}</span></span>
                         <span className="text-sm font-semibold text-amber-800">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-700 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-right">
                        {user.progress.classesAttended} of {user.progress.classesRequired} classes attended
                    </p>
                </div>
            </div>
             <div className="mt-6 text-center bg-gray-50 p-4 rounded-md">
                <p className="font-semibold text-gray-800">Next Grading Opportunity</p>
                <p className="text-gray-600">{user.progress.nextGradingDate}</p>
            </div>
        </DashboardCard>
    );
};

const AnnouncementsCarousel = ({ announcements }: { announcements: UserData['announcements'] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextAnnouncement = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, [announcements.length]);

    const prevAnnouncement = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + announcements.length) % announcements.length);
    };
    
    useEffect(() => {
        const timer = setTimeout(nextAnnouncement, 7000); // Change every 7 seconds
        return () => clearTimeout(timer);
    }, [currentIndex, nextAnnouncement]);

    if (!announcements || announcements.length === 0) {
        return <p className="text-sm text-gray-500 text-center">No announcements at this time.</p>;
    }

    const currentAnnouncement = announcements[currentIndex];

    return (
        <div className="relative flex flex-col items-center justify-center min-h-[100px]">
            <div key={currentIndex} className="text-center animate-fade-in px-8">
                <p className="font-semibold text-gray-800 text-sm mb-1">{currentAnnouncement.title}</p>
                <p className="text-xs text-gray-500">{currentAnnouncement.date}</p>
            </div>

            <button onClick={prevAnnouncement} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-800 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-amber-700" aria-label="Previous announcement">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button onClick={nextAnnouncement} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-800 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-amber-700" aria-label="Next announcement">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
            
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                {announcements.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-amber-800' : 'bg-gray-300 hover:bg-gray-400'}`}
                        aria-label={`Go to announcement ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};


const DashboardPage = () => {
    const user = mockUserData;

    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden border-2 border-gray-200 flex-shrink-0">
                            {user.profilePictureUrl ? (
                                <img src={user.profilePictureUrl} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <UserPlaceholderIcon />
                            )}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                Welcome back, {user.name.split(' ')[0]}!
                            </h1>
                            <p className="text-gray-600 mt-1">Here's your personal dojo dashboard.</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <DashboardCard title="Your Next Class">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-amber-100 rounded-full">
                                    <svg className="w-8 h-8 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-gray-800">{user.nextClass.name}</p>
                                    <p className="text-gray-600">{user.nextClass.day} @ {user.nextClass.time}</p>
                                    <p className="text-sm text-gray-500">with {user.nextClass.instructor}</p>
                                </div>
                                <a href="/schedule" className="ml-auto px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-md hover:bg-black transition-colors">
                                    View Full Schedule
                                </a>
                            </div>
                        </DashboardCard>

                        <ProgressTracker user={user} />
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <DashboardCard title="Quick Links">
                            <div className="grid grid-cols-2 gap-4">
                                <a href="/booking" className="p-4 bg-gray-100 text-center rounded-md hover:bg-gray-200 transition-colors">
                                    <p className="font-semibold">Book a Class</p>
                                </a>
                                 <a href="#" className="p-4 bg-gray-100 text-center rounded-md hover:bg-gray-200 transition-colors">
                                    <p className="font-semibold">Pay Fees</p>
                                </a>
                                 <a href="/profile" className="p-4 bg-gray-100 text-center rounded-md hover:bg-gray-200 transition-colors">
                                    <p className="font-semibold">View Profile</p>
                                </a>
                                <a href="/contact-us" className="p-4 bg-gray-100 text-center rounded-md hover:bg-gray-200 transition-colors">
                                    <p className="font-semibold">Contact Us</p>
                                </a>
                            </div>
                        </DashboardCard>
                        
                        <DashboardCard title="Dojo Announcements">
                            {user.announcements.length > 3 ? (
                                <AnnouncementsCarousel announcements={user.announcements} />
                            ) : user.announcements.length > 0 ? (
                                <ul className="space-y-4">
                                    {user.announcements.map(ann => (
                                        <li key={ann.id} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                                            <p className="font-semibold text-gray-800 text-sm">{ann.title}</p>
                                            <p className="text-xs text-gray-500">{ann.date}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-gray-500">No announcements at this time.</p>
                            )}
                        </DashboardCard>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;