import { useState } from 'react';
import type { ReactNode } from 'react';
import { gradingComponentsData, beltRanksData } from '../constants';
import type { GradingComponent, BeltRank } from '../types';

const GradingComponentCard = ({ component }: { component: GradingComponent }) => (
    <div>
        <h3 className="text-2xl font-bold mb-2">{component.japaneseName} {component.englishName}</h3>
        <p className="text-gray-600">{component.description}</p>
    </div>
);

const RequirementIcon = () => (
    <div className="flex-shrink-0 w-6 h-6 text-amber-800">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor"></path>
        </svg>
    </div>
);

const BeltRankAccordionItem = ({ rank, isOpen, onClick }: { rank: BeltRank, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
            <button
                onClick={onClick}
                className="w-full flex items-center text-left p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                aria-expanded={isOpen}
            >
                <img src={rank.imageUrl} loading="lazy" alt={`${rank.beltName} belt`} className="w-16 h-10 object-contain mr-4" />
                <div className="flex-grow">
                    <div className="text-xs font-semibold text-gray-500">{rank.kyu}</div>
                    <div className="text-lg font-semibold text-gray-900">{rank.beltName}</div>
                </div>
                <div className={`w-6 h-6 flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <div className="p-6">
                    <p className="text-gray-600 mb-6">{rank.description}</p>
                    <div className="space-y-4">
                        {rank.requirements.map(req => (
                            <div key={req.category} className="flex items-start space-x-3">
                                <RequirementIcon />
                                <p className="text-gray-700">
                                    <span className="font-semibold">{req.category}:</span> {req.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


const GradingsPage = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const handleAccordionClick = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <main className="main-wrapper">
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Discover</div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">How do Gradings Work?</h2>
                        <p className="text-lg text-gray-600">
                            Have you observed the white uniforms and the variety of colored belts? For newcomers to Karate, here is an explanation of the grading system. White through green belts undergo grading, typically three times annually, while blue through third brown belts are graded twice a year. Younger students receive a red stripe upon passing a grading, and upon earning two red stripes, they advance to the next belt rank.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {gradingComponentsData.map(component => (
                            <GradingComponentCard key={component.englishName} component={component} />
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        {beltRanksData.map((rank, index) => (
                            <BeltRankAccordionItem
                                key={`${rank.beltName}-${index}`}
                                rank={rank}
                                isOpen={openAccordion === index}
                                onClick={() => handleAccordionClick(index)}
                            />
                        ))}
                    </div>

                    <div className="mt-16 text-center max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-600 mb-8">Get in touch with Palm Court Karate Centre today.</p>
                        <a href="/contact-us" className="inline-block px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GradingsPage;
