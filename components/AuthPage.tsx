import { useState } from 'react';

const GoogleIcon = () => (
    <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
        <path fill="currentColor" d="M488 261.8C488 403.3 381.5 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-76.2 76.2C322.3 121.3 287.6 102.3 248 102.3c-73.4 0-134.3 59.4-134.3 132.8s60.9 132.8 134.3 132.8c76.3 0 119.5-50.5 124.3-76.8h-124.3v-95.2H488z"></path>
    </svg>
);

const AppleIcon = () => (
    <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C39.2 141.6 0 184.2 0 241.2c0 61.6 44.5 102.9 93.7 114.3 13.2 3.1 28.5 4.7 42.1 4.7 14.2 0 25.4-1.2 35.6-3.6 10.1-2.4 20.6-5.6 30.9-5.6 10.2 0 21.6 3.1 30.9 5.6 10.2 2.4 21.5 3.6 35.6 3.6 13.6 0 28.9-1.6 42.1-4.7 49.2-11.4 93.7-52.7 93.7-114.3 0-11.3-2.5-22.1-7.2-32.2zM218.4 83.5c13.2-14.8 23.3-34.3 23.3-54.8 0-8.9-2.2-16.8-6.1-23.8-10.4-19.3-31.3-30.8-51.4-30.8-20.1 0-41 11.4-51.4 30.8-3.9 7-6.1 14.9-6.1 23.8 0 20.5 10.1 40 23.3 54.8 13.2 14.8 33.1 24.8 51.4 24.8s38.2-10 51.4-24.8z"></path>
    </svg>
);


const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic
        alert(`Thank you for ${isSignUp ? 'signing up' : 'signing in'}! You will now be redirected to the booking page.`);
        // Simulate redirect after successful auth
        window.location.href = '/booking';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto shadow-2xl rounded-lg overflow-hidden my-8">
                {/* Left side: Image */}
                <div className="hidden md:block md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Karate practitioner"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right side: Form */}
                <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-gray-50">
                    <div className="w-full max-w-md mx-auto">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-900">{isSignUp ? 'Create an account' : 'Sign in to your account'}</h1>
                            <p className="text-gray-600 mt-2">
                                {isSignUp ? 'Join our dojo and start your journey.' : 'Welcome back! Please enter your details.'}
                            </p>
                        </div>
                        
                        {/* Social Logins */}
                        <div className="flex flex-col sm:flex-row gap-3">
                             <button className="w-full inline-flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700 transition-colors">
                                <GoogleIcon />
                                <span className="ml-3">Sign {isSignUp ? 'up' : 'in'} with Google</span>
                            </button>
                            <button className="w-full inline-flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700 transition-colors">
                                <AppleIcon />
                                <span className="ml-3">Sign {isSignUp ? 'up' : 'in'} with Apple</span>
                            </button>
                        </div>

                        <div className="my-6 flex items-center">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {isSignUp && (
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <div className="mt-1">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-700 focus:border-amber-700 sm:text-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-700 focus:border-amber-700 sm:text-sm"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    {!isSignUp && (
                                         <div className="text-sm">
                                            <a href="/forgot-password" className="font-medium text-amber-800 hover:text-amber-700">Forgot your password?</a>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete={isSignUp ? "new-password" : "current-password"}
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-700 focus:border-amber-700 sm:text-sm"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-colors"
                                >
                                    {isSignUp ? 'Sign Up' : 'Sign In'}
                                </button>
                            </div>
                        </form>
                        
                        <p className="mt-8 text-center text-sm text-gray-600">
                            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                            <button onClick={() => setIsSignUp(!isSignUp)} className="ml-1 font-medium text-amber-800 hover:text-amber-700 focus:outline-none">
                                {isSignUp ? 'Sign In' : 'Sign Up'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;