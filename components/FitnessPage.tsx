import React, { useState } from 'react';
import { pricingTabsData } from '../constants';

const CheckIcon = () => (
    <div className="w-6 h-6 text-green-500">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
    </div>
);

const FitnessPage = () => {
    const [activeTab, setActiveTab] = useState(pricingTabsData[0].name);

    const renderFeatureValue = (value: string | boolean) => {
        if (typeof value === 'boolean') {
            return value ? <CheckIcon /> : null;
        }
        return <span>{value}</span>;
    };

    return (
        <main className="main-wrapper">
            <section className="section">
                <div className="py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="mb-6">
                            <h2 className="text-4xl font-bold">Coming Soon</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Affordable</div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
                        <p className="text-lg text-gray-600">Choose the plan that suits your needs</p>
                    </div>
                    
                    <div className="mt-12">
                        <div className="flex justify-center border-b border-gray-200">
                            {pricingTabsData.map(tab => (
                                <button
                                    key={tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                    className={`px-4 py-3 font-semibold text-sm transition-colors ${activeTab === tab.name ? 'border-b-2 border-amber-800 text-amber-800' : 'text-gray-500 hover:text-amber-700'}`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                        <div className="mt-8">
                            {pricingTabsData.map(tab => (
                                <div key={tab.name} className={`${activeTab === tab.name ? 'block' : 'hidden'}`}>
                                    <div className="overflow-x-auto">
                                        <div className="min-w-full inline-block align-middle">
                                            <table className="min-w-full border-separate" style={{borderSpacing: '0 8px'}}>
                                                <thead>
                                                    <tr>
                                                        <th className="py-3 px-6 text-left w-1/4"></th>
                                                        {tab.plans.map(plan => (
                                                            <th key={plan.name} className="py-3 px-6 text-left w-1/4">
                                                                <h3 className="text-lg font-bold">{plan.name}</h3>
                                                                <p className="text-sm text-gray-500 font-normal">{plan.description}</p>
                                                                 <a href="#" className="mt-4 inline-block w-full text-center px-4 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-black transition-colors">Get started</a>
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {tab.categories.map((category) => (
                                                        <React.Fragment key={category.name}>
                                                            <tr><td colSpan={tab.plans.length + 1} className="pt-6 pb-2"><h4 className="text-xl font-bold">{category.name}</h4></td></tr>
                                                            {category.features.map(feature => (
                                                                <tr key={feature.name} className="bg-white">
                                                                    <td className="py-4 px-6 font-medium text-gray-700 rounded-l-lg">{feature.name}</td>
                                                                    {feature.values.map((value, valIndex) => (
                                                                        <td key={valIndex} className={`py-4 px-6 text-center ${valIndex === feature.values.length -1 ? 'rounded-r-lg': ''}`}>
                                                                            {renderFeatureValue(value)}
                                                                        </td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </React.Fragment>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FitnessPage;
