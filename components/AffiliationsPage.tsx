import { affiliationsData } from '../constants';
import type { Affiliation } from '../types';

type AffiliationCardProps = {
    affiliation: Affiliation;
};

const AffiliationCard = ({ affiliation }: AffiliationCardProps) => (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">
        <div className="md:col-span-2">
            <p className="text-sm font-semibold text-gray-600 mb-2 tracking-wide">Affiliate</p>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">{affiliation.name}</h3>
            <p className="text-gray-600 leading-relaxed mb-8">{affiliation.description}</p>
            <button className="px-8 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-300">
              Learn More
            </button>
        </div>
        <div className="flex justify-center md:justify-start">
            <img src={affiliation.logoUrl} alt={`${affiliation.name} logo`} className="max-h-48 w-auto object-contain" />
        </div>
    </div>
);

const AffiliationsPage = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left max-w-4xl mb-16">
                    <h2 className="text-6xl font-extrabold mb-4">Our Affiliations</h2>
                    <p className="text-lg text-gray-600">
                        Discover the organizations we are proudly affiliated with.
                    </p>
                </div>
                <div className="space-y-20">
                    {affiliationsData.map((aff) => (
                        <AffiliationCard key={aff.name} affiliation={aff} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AffiliationsPage;