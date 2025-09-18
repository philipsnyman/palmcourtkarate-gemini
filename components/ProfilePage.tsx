import { useState, FormEvent, useRef } from 'react';
import { mockUserData } from '../constants';

const UserPlaceholderIcon = () => (
    <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const ProfilePage = () => {
    const [formData, setFormData] = useState({
        name: mockUserData.name,
        email: mockUserData.email,
        profilePictureUrl: mockUserData.profilePictureUrl,
    });
    const [isEditing, setIsEditing] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (!isEditing) setIsEditing(true);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, profilePictureUrl: reader.result as string }));
                if (!isEditing) setIsEditing(true);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleCancel = () => {
        setFormData({
            name: mockUserData.name,
            email: mockUserData.email,
            profilePictureUrl: mockUserData.profilePictureUrl,
        });
        setIsEditing(false);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // In a real app, this would be an API call
        alert(`Profile updated successfully!\nName: ${formData.name}\nEmail: ${formData.email}`);
        setIsEditing(false);
    };
    
    const handleDeleteAccount = () => {
        if (window.confirm('Are you sure you want to delete your account? This action is irreversible.')) {
            alert('Account deletion process initiated. We are sad to see you go!');
            // In a real app, redirect or log out the user
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
                    <p className="text-gray-600 mt-1">Manage your personal information and account settings.</p>
                </div>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Personal Information */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-3">Personal Information</h2>
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {/* Profile Picture Section */}
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div className="w-32 h-32 rounded-full bg-gray-100 overflow-hidden mb-4 border-2 border-gray-200 flex items-center justify-center">
                                        {formData.profilePictureUrl ? (
                                            <img src={formData.profilePictureUrl} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            <UserPlaceholderIcon />
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                        accept="image/png, image/jpeg, image/gif"
                                        aria-label="Upload profile picture"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-semibold rounded-md hover:bg-gray-200 transition-colors"
                                    >
                                        Change Picture
                                    </button>
                                </div>
                                {/* User Details Section */}
                                <div className="w-full space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Karate Progress */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                             <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-3">Karate Progress</h2>
                             <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                                <div className="text-center">
                                    <p className="text-sm font-medium text-gray-500">Current Rank</p>
                                    <img src={mockUserData.currentRank.imageUrl} alt={mockUserData.currentRank.name} className="w-24 h-16 object-contain my-2 mx-auto" />
                                    <p className="font-semibold">{mockUserData.currentRank.name}</p>
                                </div>
                                <div className="text-center text-gray-400 text-2xl font-light hidden sm:block">&rarr;</div>
                                <div className="text-center">
                                    <p className="text-sm font-medium text-gray-500">Next Rank</p>
                                    <div className="w-24 h-16 flex items-center justify-center my-2 mx-auto">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">?</div>
                                    </div>
                                    <p className="font-semibold">{mockUserData.nextRank.name}</p>
                                </div>
                                <div className="border-l border-gray-200 pl-8 ml-auto text-sm">
                                    <p><span className="font-semibold">Classes Attended:</span> {mockUserData.progress.classesAttended} / {mockUserData.progress.classesRequired}</p>
                                    <p><span className="font-semibold">Next Grading:</span> {mockUserData.progress.nextGradingDate}</p>
                                </div>
                             </div>
                        </div>
                        
                        {/* Account Settings */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                             <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-3">Account Settings</h2>
                             <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold">Change Password</h3>
                                    <p className="text-sm text-gray-600">Update your password for better security.</p>
                                    <button type="button" onClick={() => alert('Redirecting to change password page...')} className="mt-2 px-4 py-2 bg-gray-100 text-gray-800 text-sm font-semibold rounded-md hover:bg-gray-200 transition-colors">
                                        Change Password
                                    </button>
                                </div>
                                <div className="border-t border-red-200 pt-6">
                                    <h3 className="font-semibold text-red-700">Delete Account</h3>
                                    <p className="text-sm text-gray-600">Permanently remove your account and all associated data. This action cannot be undone.</p>
                                    <button type="button" onClick={handleDeleteAccount} className="mt-2 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition-colors">
                                        Delete My Account
                                    </button>
                                </div>
                             </div>
                        </div>

                        {/* Form Actions */}
                        {isEditing && (
                            <div className="flex justify-end gap-4">
                                <button type="button" onClick={handleCancel} className="px-6 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700">
                                    Cancel
                                </button>
                                <button type="submit" className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                    Save Changes
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;