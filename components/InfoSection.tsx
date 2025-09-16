
import React from 'react';
import { infoCards } from '../constants';
import type { InfoCard } from '../types';

const InfoCardComponent: React.FC<{ card: InfoCard }> = ({ card }) => (
  <div className="flex flex-col">
    <div className="bg-gray-200 aspect-video flex items-center justify-center mb-6">
      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
    </div>
    <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{card.description}</p>
    <div className="mt-auto">
      <button className="px-8 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-300">
        Learn More
      </button>
    </div>
  </div>
);

const InfoSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {infoCards.map((card) => (
            <InfoCardComponent key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
