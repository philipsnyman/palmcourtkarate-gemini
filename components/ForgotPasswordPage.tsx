import { useState } from 'react';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real app, you would handle the API call to send the reset link here.
        console.log('Password reset request for:', email);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                {!submitted ? (
                    <div>
                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                                Forgot your password?
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                No problem. Enter the email address you used to sign up and we'll send you a link to reset your password.
                            </p>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-colors"
                                >
                                    Send Reset Link
                                </button>
                            </div>
                        </form>
                        <div className="text-sm text-center mt-6">
                            <a href="/auth" className="font-medium text-amber-800 hover:text-amber-700">
                                Back to Sign In
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                         <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                            Check your email
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            We've sent a password reset link to <span className="font-medium">{email}</span>. Please check your inbox and spam folder.
                        </p>
                         <div className="mt-6">
                            <a href="/auth" className="font-medium text-amber-800 hover:text-amber-700">
                                Back to Sign In
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
