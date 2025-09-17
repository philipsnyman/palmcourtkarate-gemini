import { terminologySections } from '../constants';
import type { TerminologySection } from '../types';

const TerminologyPage = () => {
    return (
        <main className="main-wrapper">
            {terminologySections.map((section: TerminologySection, sectionIndex: number) => (
                <section key={section.title} className={`py-12 md:py-16 ${sectionIndex % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="logo_component">
                            <div className="w-layout-grid logo_content">
                                <div className="logo_content-left">
                                    <div className="margin-bottom margin-small">
                                        <h2 className="text-3xl md:text-4xl font-bold">
                                            {section.japaneseTitle && <span className="font-serif mr-3" lang="ja">{section.japaneseTitle}</span>}
                                            {section.title}
                                        </h2>
                                    </div>
                                    <p className="text-gray-600 max-w-3xl">{section.description}</p>
                                </div>
                                <div className={`mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${section.columns} gap-x-8 gap-y-4`}>
                                    {section.terms.map(term => (
                                        <div key={term.japaneseName} className="wrapper">
                                            <h5 className="font-bold text-lg" dangerouslySetInnerHTML={{ __html: term.japaneseName }}></h5>
                                            <div className="text-gray-500">{term.englishName}</div>
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
