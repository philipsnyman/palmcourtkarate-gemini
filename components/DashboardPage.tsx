import { useState, ReactNode, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import type { User, StudentUser, ParentUser, InstructorUser, AdminUser, ParentStudentUser, StudentProfile } from '../types';
import AIPersonalTrainer from './AIPersonalTrainer';
import { mockUsers } from '../constants';

// --- SHARED COMPONENTS ---

const UserPlaceholderIcon = () => (
    <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const DashboardCard = ({ title, children, className }: { title: string, children: ReactNode, className?: string }) => (
    <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-200 ${className}`}>
        <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
        {children}
    </div>
);

// --- STUDENT & PARENT COMPONENTS ---

const StudentProgressTracker = ({ studentProfile }: { studentProfile: StudentProfile }) => {
    const percentage = Math.round((studentProfile.progress.classesAttended / studentProfile.progress.classesRequired) * 100);
    return (
        <DashboardCard title={`${studentProfile.name.split(' ')[0]}'s Progress`}>
            <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                    <img src={studentProfile.currentRank.imageUrl} alt={studentProfile.currentRank.name} className="w-24 h-16 object-contain" />
                    <p className="text-center font-semibold text-gray-800 mt-1">{studentProfile.currentRank.name}</p>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-baseline mb-1">
                        <span className="text-sm font-medium text-gray-600">Next Rank: <span className="font-bold text-gray-800">{studentProfile.nextRank.name}</span></span>
                        <span className="text-sm font-semibold text-amber-800">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-700 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-right">{studentProfile.progress.classesAttended} of {studentProfile.progress.classesRequired} classes attended</p>
                </div>
            </div>
        </DashboardCard>
    );
};

// --- ROLE-BASED DASHBOARD VIEWS ---

const StudentView = ({ user }: { user: StudentUser | ParentStudentUser }) => (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <AIPersonalTrainer studentProfile={user.studentProfile} />
                <StudentProgressTracker studentProfile={user.studentProfile} />
            </div>
            <div className="space-y-8">
                <DashboardCard title="Next Class">
                    <p className="font-bold">{user.studentProfile.nextClass.name}</p>
                    <p className="text-sm text-gray-600">{user.studentProfile.nextClass.day} @ {user.studentProfile.nextClass.time}</p>
                    <a href="/schedule" className="mt-4 inline-block text-sm font-semibold text-amber-800 hover:text-amber-900">View Full Schedule &rarr;</a>
                </DashboardCard>
                <DashboardCard title="Quick Links">
                     <div className="grid grid-cols-2 gap-4">
                        <a href="/booking" className="p-4 bg-gray-100 text-center rounded-md hover:bg-gray-200 transition-colors font-semibold">Book a Class</a>
                        <a href="/profile" className="p-4 bg-gray-100 text-center rounded-md hover:bg-gray-200 transition-colors font-semibold">My Profile</a>
                    </div>
                </DashboardCard>
            </div>
        </div>
    </main>
);

const ParentView = ({ user }: { user: ParentUser | ParentStudentUser }) => (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
            {user.children.map(child => (
                <div key={child.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <StudentProgressTracker studentProfile={child} />
                    <div className="mt-4 flex gap-4 border-t pt-4">
                        <a href="/booking" className="px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-md hover:bg-black">Book a class for {child.name.split(' ')[0]}</a>
                        <a href="/schedule" className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-semibold rounded-md hover:bg-gray-200">View Schedule</a>
                    </div>
                </div>
            ))}
        </div>
    </main>
);

const InstructorView = ({ user }: { user: InstructorUser }) => (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardCard title="My Teaching Schedule Today">
            {user.teachingSchedule.length > 0 ? (
                <ul className="space-y-3">
                    {user.teachingSchedule.map((cls, idx) => (
                        <li key={idx} className="p-3 bg-gray-50 rounded-md">
                            <span className="font-semibold">{cls.time}</span> - {cls.name}
                        </li>
                    ))}
                </ul>
            ) : <p>No classes scheduled for today.</p>}
        </DashboardCard>
    </main>
);

const AdminView = () => (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardCard title="Admin Tools">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="#" className="p-4 bg-gray-100 text-center rounded-md hover:bg-gray-200 font-semibold">Manage Users</a>
                <a href="#" className="p-4 bg-gray-100 text-center rounded-md hover:bg-gray-200 font-semibold">Edit Schedule</a>
                <a href="#" className="p-4 bg-gray-100 text-center rounded-md hover:bg-gray-200 font-semibold">Post Announcement</a>
                <a href="#" className="p-4 bg-gray-100 text-center rounded-md hover:bg-gray-200 font-semibold">View Reports</a>
            </div>
        </DashboardCard>
    </main>
);

// --- MAIN PAGE COMPONENT ---
const DashboardPage = () => {
    const { user, switchUser } = useAuth();
    const [activeTab, setActiveTab] = useState<'student' | 'parent'>('student');

    if (!user) {
        useEffect(() => { window.location.href = '/auth'; }, []);
        return <div className="text-center p-8 bg-gray-50 min-h-screen">Redirecting to login...</div>;
    }

    const PersonaSwitcher = () => (
        <div className="absolute top-6 right-6 bg-white p-3 rounded-lg shadow-lg border border-gray-200 z-10">
            <label htmlFor="persona-switcher" className="block text-xs font-medium text-gray-500 mb-1">Switch Persona (Demo)</label>
            <select
                id="persona-switcher"
                value={user.role}
                onChange={(e) => switchUser(e.target.value as User['role'])}
                className="text-sm rounded-md border-gray-300 shadow-sm focus:border-amber-700 focus:ring-amber-700"
            >
                {Object.keys(mockUsers).map(role => (
                    <option key={role} value={role} className="capitalize">{role.replace('-', ' & ')}</option>
                ))}
            </select>
        </div>
    );

    const Header = () => (
        <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden border-2 border-gray-200 flex-shrink-0">
                        {user.profilePictureUrl ? <img src={user.profilePictureUrl} alt="Profile" className="w-full h-full object-cover" /> : <UserPlaceholderIcon />}
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Welcome, {user.name.split(' ')[0]}!</h1>
                        <p className="text-gray-600 mt-1">Your {user.role.replace('-', ' & ')} dashboard.</p>
                    </div>
                </div>
                {user.role === 'parent-student' && (
                     <div className="mt-4 border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            <button onClick={() => setActiveTab('student')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'student' ? 'border-amber-700 text-amber-800' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                                My Student View
                            </button>
                             <button onClick={() => setActiveTab('parent')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'parent' ? 'border-amber-700 text-amber-800' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                                My Parent View
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
    
    const renderContent = () => {
        switch (user.role) {
            case 'student': return <StudentView user={user} />;
            case 'parent': return <ParentView user={user} />;
            case 'instructor': return <InstructorView user={user} />;
            case 'admin': return <AdminView />;
            case 'parent-student':
                return activeTab === 'student' ? <StudentView user={user} /> : <ParentView user={user} />;
            default: return null;
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen relative">
            <PersonaSwitcher />
            <Header />
            {renderContent()}
        </div>
    );
};

export default DashboardPage;