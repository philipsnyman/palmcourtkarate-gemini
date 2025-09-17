import { danRanksData } from '../constants';

const BlackBeltsPage = () => {
    return (
        <div className="bg-white">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="space-y-24">
                    {danRanksData.map((rank) => (
                        <section key={rank.englishName}>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                                {/* Left Column: Rank Info */}
                                <div className="lg:col-span-5">
                                    <p className="text-sm font-semibold text-gray-500 mb-2">{rank.tagline}</p>
                                    <h2 className="text-5xl font-bold mb-4 flex flex-wrap items-baseline">
                                        <span className="font-serif mr-4" lang="ja">{rank.japaneseName}</span>
                                        <span className="text-4xl">{rank.englishName}</span>
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">{rank.description}</p>
                                </div>
                                
                                {/* Right Column: Holders List */}
                                <div className="lg:col-span-7">
                                    {rank.holders.length > 0 && (
                                        <div className="border border-gray-200 rounded-lg shadow-sm">
                                            {rank.holders.map((holder, index) => (
                                                <div key={holder.name} className={`p-4 ${index > 0 ? 'border-t border-gray-200' : ''}`}>
                                                    <h3 className="font-semibold text-lg text-gray-900">{holder.name}</h3>
                                                    {(holder.description || 'TBC') && (
                                                        <p className="text-sm text-gray-500 mt-1">{holder.description || 'TBC'}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default BlackBeltsPage;
