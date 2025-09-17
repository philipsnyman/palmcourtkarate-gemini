import { useState } from 'react';
import type { ReactNode } from 'react';
import { selfDefenceLevels, selfDefenceFeatures, lecturesData, selfDefenceFaqs } from '../constants';
import type { SelfDefenceLevel, SelfDefenceFeature, Lecture, FaqItem } from '../types';

const SelfDefencePage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const handleFaqClick = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <main className="main-wrapper">
            <header className="relative bg-gray-900 text-white py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/getty-images-UFrVrS68CQs-unsplash.jpg"
                        alt="Self defence class"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">Learn to Defend Yourself</h1>
                        <p className="text-lg text-gray-200">
                            At Palm Court Karate Centre, we understand the importance of self-defense. Our Self-Defence courses are designed to provide you with effective, pro-active, and practical concepts and techniques that will help you disable an attacker and ensure your safety. With our interactive and participative approach, you'll gain the confidence and skills needed to handle any tricky situation. Don't let fear hold you back - join us and empower yourself today.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <a href="#" className="inline-block px-8 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-200 transition-colors shadow-lg">Sign Up</a>
                            <a href="#" className="inline-block px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors">Learn More</a>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            {selfDefenceLevels.map((level, index) => (
                                <button
                                    key={level.title}
                                    onClick={() => setActiveTab(index)}
                                    className={`w-full text-left p-6 rounded-lg transition-colors mb-4 ${activeTab === index ? 'bg-gray-100 shadow' : 'hover:bg-gray-50'}`}
                                >
                                    <h3 className="text-xl font-bold mb-2">{level.title}</h3>
                                    <p className="text-gray-600 text-sm">{level.description}</p>
                                </button>
                            ))}
                        </div>
                        <div className="lg:col-span-2">
                            {selfDefenceLevels.map((level, index) => (
                                <div key={level.title} className={`${activeTab === index ? 'block' : 'hidden'}`}>
                                    <div className="relative">
                                        <img src={level.imageUrl} alt={level.title} className="w-full h-auto object-cover rounded-lg shadow-xl aspect-[4/3]" />
                                        <div className="mt-6">
                                            <a href="#" className="inline-block px-8 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-black transition-colors">Sign Up</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Empower</p>
                            <h2 className="text-4xl font-bold mb-4">Learn Effective Self-Defence Techniques</h2>
                            <p className="text-gray-600 mb-8">
                                Our self-defense courses are carefully tailored to educate you on practical concepts and techniques essential for disabling an attacker and escaping safely. With an emphasis on hands-on training, our courses are interactive, engaging, and highly informative. Each course includes a comprehensive manual and a certificate upon completion.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="inline-block px-8 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-black transition-colors">Join</a>
                                <a href="#" className="inline-block px-8 py-3 bg-transparent text-amber-800 font-semibold rounded-md hover:bg-amber-50 transition-colors group flex items-center">
                                    <span>Enroll</span>
                                    <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {selfDefenceFeatures.map(feature => (
                                <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Empower</div>
                        <h2 className="text-4xl font-bold mb-4">Talks and Lectures</h2>
                        <p className="text-lg text-gray-600">Learn practical self-defence techniques to protect yourself.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {lecturesData.map(lecture => (
                             <div key={lecture.title} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100">
                                <img src={lecture.imageUrl} alt={lecture.title} className="w-full h-64 object-cover" />
                                <div className="p-8">
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{lecture.category}</p>
                                    <h3 className="text-2xl font-bold mb-3">{lecture.title}</h3>
                                    <p className="text-gray-600 mb-6">{lecture.description}</p>
                                    <div className="flex gap-4">
                                        <a href="#" className="inline-block px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-black transition-colors text-sm">Sign Up</a>
                                        <a href="#" className="inline-block px-6 py-2 bg-transparent text-amber-800 font-semibold rounded-md hover:bg-amber-50 transition-colors text-sm group flex items-center">
                                            <span>Learn More</span>
                                            <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                             </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">FAQs</h2>
                        <p className="text-lg text-gray-600">Find answers to common questions about our Self-Defence courses.</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {selfDefenceFaqs.map((faq, index) => (
                             <div key={index} className="border-b border-gray-200">
                                <button
                                    onClick={() => handleFaqClick(index)}
                                    className="w-full flex justify-between items-center text-left py-5"
                                >
                                    <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                                    <div className={`w-6 h-6 flex-shrink-0 transform transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-screen' : 'max-h-0'}`}>
                                    <div className="pb-5 pr-8">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="mt-16 text-center max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
                        <p className="text-gray-600 mb-8">Contact us for more information.</p>
                        <a href="/contact-us" className="inline-block px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SelfDefencePage;
