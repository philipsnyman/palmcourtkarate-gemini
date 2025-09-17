import type { ReactNode } from 'react';

const FacilitiesPage = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Header Section */}
            <header className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Welcome</div>
                        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">Our Training Space</h1>
                        <p className="text-lg text-gray-600">
                            Discover our state-of-the-art facilities designed to enhance your karate training experience.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <a href="#" className="inline-block px-8 py-3 bg-amber-800 text-white font-semibold rounded-md hover:bg-amber-900 transition-colors shadow">
                                Learn More
                            </a>
                            <a href="#" className="inline-block px-8 py-3 bg-gray-100 text-amber-800 font-semibold rounded-md hover:bg-gray-200 transition-colors">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {/* Training Equipment Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Experience Excellence with Our High-Quality Training Equipment at Palm Court Karate</h2>
                                <p className="text-gray-600 mb-8">
                                    At Palm Court Karate Centre, we believe that quality training equipment is essential for effective learning. Our dojo is equipped with top-notch gear to enhance your martial arts experience.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Training Gear</h3>
                                        <p className="text-gray-600">Our equipment supports all skill levels, ensuring safety and performance for every student.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Safety First</h3>
                                        <p className="text-gray-600">We prioritize your safety with high-quality protective gear and training tools.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img loading="lazy" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop" alt="Training equipment" className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[400px]" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Spacious Dojo Area Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                            <div>
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Welcome</div>
                                <h2 className="text-4xl font-bold">Experience Our Spacious Dojo Area</h2>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-8">
                                    Our dojo provides a welcoming and expansive environment for all students. With ample space for training, you can focus on mastering your skills.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                                    <div className="flex items-start space-x-4">
                                        <img loading="lazy" src="/images/icon.svg" alt="" className="w-10 h-10 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Training Space</h3>
                                            <p className="text-gray-600">Designed for comfort and functionality, our training area enhances your karate experience.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <img loading="lazy" src="/images/icon.svg" alt="" className="w-10 h-10 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Community Hub</h3>
                                            <p className="text-gray-600">Join a vibrant community dedicated to traditional Karate-Do and personal growth.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <a href="#" className="inline-block px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors">
                                        Learn More
                                    </a>
                                    <a href="#" className="inline-block px-8 py-3 bg-transparent text-amber-800 font-semibold rounded-md hover:bg-amber-50 transition-colors">
                                        Sign Up &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                        <img loading="lazy" src="https://images.unsplash.com/photo-1549477119-34e715206034?q=80&w=1200&auto=format&fit=crop" alt="Spacious Dojo Area" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </div>
                </section>

                {/* Modern Facilities Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Comfort</div>
                                <h2 className="text-4xl font-bold mb-4">Modern Facilities for Your Training Experience</h2>
                                <p className="text-gray-600 mb-8">
                                    Our changing rooms and showers are designed to provide a refreshing and convenient experience for all students. Enjoy a clean and welcoming environment that enhances your training routine.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center">
                                        <svg className="w-6 h-6 text-amber-800 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span>Spacious changing rooms for your convenience.</span>
                                    </li>
                                    <li className="flex items-center">
                                         <svg className="w-6 h-6 text-amber-800 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span>Private showers for a refreshing experience.</span>
                                    </li>
                                    <li className="flex items-center">
                                         <svg className="w-6 h-6 text-amber-800 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span>Clean facilities to enhance your training.</span>
                                    </li>
                                </ul>
                                 <div className="flex gap-4">
                                    <a href="#" className="inline-block px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition-colors">
                                        Learn More
                                    </a>
                                    <a href="#" className="inline-block px-8 py-3 bg-transparent text-amber-800 font-semibold rounded-md hover:bg-amber-50 transition-colors">
                                        Sign Up &rarr;
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img loading="lazy" src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800&auto=format&fit=crop" alt="Modern changing rooms" className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[400px]" />
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Facility Showcase Gallery */}
                <section className="py-24 bg-gray-50">
                     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-4xl font-bold mb-4">Facility Showcase</h2>
                            <p className="text-gray-600">Explore our state-of-the-art training environment.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="col-span-2 row-span-2">
                                <img src="https://images.unsplash.com/photo-1549477119-34e715206034?q=80&w=800&auto=format&fit=crop" alt="Gallery image 1" className="w-full h-full object-cover rounded-lg shadow-md" />
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop" alt="Gallery image 2" className="w-full h-full object-cover rounded-lg shadow-md" />
                            </div>
                             <div>
                                <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=400&auto=format&fit=crop" alt="Gallery image 3" className="w-full h-full object-cover rounded-lg shadow-md" />
                            </div>
                            <div className="col-span-2">
                                <img src="https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=800&auto=format&fit=crop" alt="Gallery image 4" className="w-full h-full object-cover rounded-lg shadow-md" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default FacilitiesPage;