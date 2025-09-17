import { terminologySections } from '../constants';
import type { TerminologySection } from '../types';

const getGridClass = (title: string): string => {
    switch (title) {
        case 'Understanding the Black Belt Ranks':
        case 'Counting':
            return 'grid-cols-2 md:grid-cols-5';
        case 'General Terms':
            return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
        case 'Stances':
        case 'Kicking':
             return 'grid-cols-1 md:grid-cols-3';
        case 'Blocks':
            return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
        case 'Punches':
             return 'grid-cols-2 md:grid-cols-3';
        case 'Strikes':
            return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
        case 'Practice Fighting':
        case 'Supplementary Exercises':
            return 'grid-cols-1 md:grid-cols-2';
        default:
            return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
};

const TerminologySectionComponent = ({ section }: { section: TerminologySection }) => {
    const gridClass = getGridClass(section.title);

    return (
         <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        {section.tagline && <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2" dangerouslySetInnerHTML={{ __html: section.tagline }} />}
                        <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{section.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                        <div className={`grid ${gridClass} gap-x-8 gap-y-6`}>
                            {section.terms.map(term => (
                                <div key={term.japanese}>
                                    <h3 className="text-lg font-semibold text-gray-800" dangerouslySetInnerHTML={{ __html: term.japanese }} />
                                    <p className="text-gray-600">{term.english}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const TerminologyPage = () => (
    <main className="main-wrapper bg-white">
        {terminologySections.map((section, index) => (
            <div key={section.title} className={index > 0 ? 'border-t border-gray-200' : ''}>
                <TerminologySectionComponent section={section} />
            </div>
        ))}
    </main>
);

export default TerminologyPage;