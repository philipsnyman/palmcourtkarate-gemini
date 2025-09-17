import { affiliationsData } from '../constants';
import type { Affiliation } from '../types';

type AffiliationCardProps = {
    affiliation: Affiliation;
};

const AffiliationCard = ({ affiliation }: AffiliationCardProps) => (
    <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Affiliate</div>
                <h2 className="text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: affiliation.name }} />
                <p className="text-gray-700 leading-relaxed mb-6">{affiliation.description}</p>
                <a 
                    href={affiliation.learnMoreUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition-colors"
                >
                    Learn More
                </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
                <img 
                    src={affiliation.logoUrl} 
                    alt={`${affiliation.name.replace(/<br\s*\/?>/gi, ' ')} logo`}
                    className="max-h-48 w-auto object-contain"
                />
            </div>
        </div>
    </section>
);


const AffiliationsPage = () => {
    return (
        <div className="bg-white">
            <header className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">Our Affiliations</h1>
                        <p className="text-lg text-gray-600">
                            Discover the organizations we are proudly affiliated with.
                        </p>
                    </div>
                </div>
            </header>
            
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="divide-y divide-gray-200">
                    {affiliationsData.map((aff) => (
                        <AffiliationCard key={aff.name.replace(/<br\s*\/?>/gi, ' ')} affiliation={aff} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default AffiliationsPage;