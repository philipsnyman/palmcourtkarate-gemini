import { infoCards } from '../constants';
import type { InfoCard } from '../types';

type InfoCardComponentProps = {
  card: InfoCard;
  index: number;
};

const InfoCardComponent = ({ card, index }: InfoCardComponentProps) => (
  <div className="flex flex-col">
    <div className="bg-gray-200 aspect-[4/3] flex items-center justify-center mb-6 overflow-hidden rounded-lg">
      <img 
        src={`https://images.unsplash.com/photo-1593352222347-1422794a0857?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&random=${index}`}
        alt={card.title}
        className="w-full h-full object-cover"
      />
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

const InfoSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {infoCards.map((card, index) => (
            <InfoCardComponent key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;