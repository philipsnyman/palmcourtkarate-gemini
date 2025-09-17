import { terminologySections } from '../constants';
import type { TerminologySection } from '../types';

const getGridColsClass = (columns: number) => {
    // This function maps a number to a static Tailwind CSS class string.
    // Tailwind's JIT compiler needs to see the full class name in the source to generate it.
    const colClasses: { [key: number]: string } = {
        1: 'md:grid-cols-1',
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
    };
    return colClasses[columns] || 'md:grid-cols-2'; // Default to 2 columns
};

const TerminologyPage = () => {
    return (
        <main className="main-wrapper">
            {terminologySections.map((section, index) => (
                <section key={section.title} className={`py-16 ${index > 0 ? 'border-t border-gray-200' : ''}`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                            {/* Left column for title/description */}
                            <div className="lg:col-span-4">
                                {section.japaneseTitle && (
                                     <h3 className="text-lg font-medium text-gray-500 mb-2" lang="ja">
                                        {section.japaneseTitle}
                                    </h3>
                                )}
                                <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
                                <p className="text-gray-600 leading-relaxed">{section.description}</p>
                            </div>
                            {/* Right column for the grid of terms */}
                            <div className="lg:col-span-8">
                                <div className={`grid grid-cols-1 sm:grid-cols-2 ${getGridColsClass(section.columns)} gap-4`}>
                                    {section.terms.map(term => (
                                        <div key={term.japaneseName} className="bg-gray-50 border border-gray-200 rounded-md p-4">
                                            <h3 className="font-bold text-xl" dangerouslySetInnerHTML={{ __html: term.japaneseName }}></h3>
                                            <p className="text-gray-500 text-sm mt-1">{term.englishName}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </main>
    );
};

export default TerminologyPage;