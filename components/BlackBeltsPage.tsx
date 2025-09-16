import React from 'react';
import { danRanksData } from '../constants';
import type { DanRank } from '../types';

const BlackBeltsPage: React.FC = () => {
    return (
        <div className="bg-white">
            <header className="py-16 text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Palm Court Karate Black Belts</h1>
                        <p className="text-base md:text-lg text-gray-600 mb-6">
                            Join Palm Court Karate Centre and embark on a journey to become a black belt in traditional Okinawa Goju-Ryu Karate-Do. Our internationally recognized dojo offers high-quality instruction for preschoolers, children, and adults.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                                Learn More
                            </a>
                            <a href="#" className="inline-block px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <img 
                        src="/images/pck-black-belts.jpeg" 
                        alt="Palm Court Karate black belts montage" 
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>

                <main>
                    {danRanksData.map((rank, index) => (
                        <section key={rank.englishName} className={`py-12 ${index > 0 ? 'border-t border-gray-200' : ''}`}>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                {/* Left Column */}
                                <div className="lg:col-span-1">
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{rank.tagline}</p>
                                    <h2 className="text-3xl font-bold mb-4">
                                        <span className="font-serif mr-3" lang="ja">{rank.japaneseName}</span>
                                        {rank.englishName}
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">{rank.description}</p>
                                </div>
                                
                                {/* Right Column */}
                                <div className="lg:col-span-2">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                                        {rank.holders.map(holder => (
                                            <div key={holder.name}>
                                                <h3 className="text-md font-semibold text-gray-800">{holder.name}</h3>
                                                <p className="text-sm text-gray-500">{holder.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </main>
            </div>
        </div>
    );
};

export default BlackBeltsPage;