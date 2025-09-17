import { historySectionsData } from '../constants';

const HistoryPage = () => {
    return (
        <main className="main-wrapper">
            {historySectionsData.map((section, index) => (
                <section key={section.title} className={`py-16 md:py-24 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className={index % 2 === 1 ? 'lg:order-last' : 'lg:order-first'}>
                                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {section.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">TBC</h3>
                                        <p className="text-gray-600">TBC</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">TBC</h3>
                                        <p className="text-gray-600">TBC</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img loading="lazy" src={section.imageUrl} alt={section.imageAlt} className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[400px]" />
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </main>
    );
};

export default HistoryPage;