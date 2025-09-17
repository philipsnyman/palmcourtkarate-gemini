import { useState } from 'react';
import type { ReactNode } from 'react';
import { dojoEtiquetteFaqs, dojoKun } from '../constants';
import type { FaqItem } from '../types';

const AccordionItem = ({ item, isOpen, onClick }: { item: FaqItem, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-5"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                <div className={`w-6 h-6 flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <div className="pb-5 pr-8">
                   <div className="text-gray-600"> {item.answer}</div>
                </div>
            </div>
        </div>
    );
};

const DojoEtiquettePage = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const handleAccordionClick = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <main className="main-wrapper">
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                                <span className="font-serif mr-3" lang="ja">礼儀</span> Dojo Etiquette
                            </h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Given that we all learn by trial and error, it is understood that mistakes will be made within a dojo. However, it is crucial to emphasize that certain standards of behavior are non-negotiable. This expectation applies uniformly to every member of the dojo community, irrespective of their rank. It is imperative for all students to be well-versed in and observe the prescribed dojo etiquette.
                            </p>
                            <a href="/contact-us" className="inline-block px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition-colors">
                                Contact
                            </a>
                        </div>
                        <div>
                            {dojoEtiquetteFaqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    item={faq}
                                    isOpen={openAccordion === index}
                                    onClick={() => handleAccordionClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <header className="bg-gray-50 py-16 md:py-24">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">{dojoKun.title}</h1>
                        <p className="text-lg text-gray-600">{dojoKun.description}</p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg p-8 md:p-12 bg-white shadow-sm">
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            <div className="md:col-span-2">
                                <blockquote className="text-xl text-gray-800 italic leading-relaxed" dangerouslySetInnerHTML={{ __html: dojoKun.quote }} />
                            </div>
                            <div className="text-center flex flex-col items-center">
                                <img 
                                    src={dojoKun.author.imageUrl} 
                                    alt={dojoKun.author.name} 
                                    className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-white shadow-md"
                                />
                                <cite className="font-semibold not-italic">{dojoKun.author.name}</cite>
                            </div>
                        </div>
                    </div>
                 </div>
            </header>
        </main>
    );
};

export default DojoEtiquettePage;