import { useState } from 'react';
import type { ReactNode } from 'react';

type ToggleSwitchProps = {
    label: string;
    enabled: boolean;
    onChange: (enabled: boolean) => void;
    disabled?: boolean;
};

const ToggleSwitch = ({ label, enabled, onChange, disabled = false }: ToggleSwitchProps) => (
    <div className="flex items-center justify-between">
        <span className="sr-only">{label}</span>
        <button
            type="button"
            onClick={() => !disabled && onChange(!enabled)}
            className={`${enabled ? 'bg-amber-800' : 'bg-gray-200'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={disabled}
            aria-pressed={enabled}
        >
            <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
            />
        </button>
    </div>
);


type CookieCategoryProps = {
    title: string;
    description: string;
    children: ReactNode;
    alwaysOn?: boolean;
};

const CookieCategory = ({ title, description, children, alwaysOn = false }: CookieCategoryProps) => (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt className="text-sm font-medium text-gray-900">
            <h3 className="text-lg font-bold">{title}</h3>
            {alwaysOn && <p className="text-xs text-gray-500 uppercase mt-1">Always Active</p>}
        </dt>
        <dd className="mt-1 flex items-center justify-between text-sm text-gray-700 sm:col-span-2 sm:mt-0">
            <p className="flex-grow pr-4">{description}</p>
            {children}
        </dd>
    </div>
);

const CookieSettingsPage = () => {
    const [performanceCookies, setPerformanceCookies] = useState(true);
    const [functionalCookies, setFunctionalCookies] = useState(true);
    const [marketingCookies, setMarketingCookies] = useState(false);

    const handleSave = () => {
        // In a real app, you'd save these preferences to localStorage or a cookie.
        console.log({
            performanceCookies,
            functionalCookies,
            marketingCookies
        });
        alert('Your cookie preferences have been saved.');
    };
    
    const handleAcceptAll = () => {
        setPerformanceCookies(true);
        setFunctionalCookies(true);
        setMarketingCookies(true);
        // In a real app, you'd save these preferences to localStorage or a cookie.
        console.log({
            performanceCookies: true,
            functionalCookies: true,
            marketingCookies: true
        });
        alert('All cookies have been accepted.');
    };


    return (
        <div className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-gray-700">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Cookie Settings</h1>
                    <p className="text-lg leading-relaxed mb-8">
                        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences below.
                    </p>

                    <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
                        <CookieCategory
                            title="Strictly Necessary Cookies"
                            description="These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site. These cookies cannot be disabled."
                            alwaysOn
                        >
                            <ToggleSwitch
                                label="Strictly Necessary Cookies"
                                enabled={true}
                                onChange={() => {}}
                                disabled={true}
                            />
                        </CookieCategory>

                        <CookieCategory
                            title="Performance & Analytics Cookies"
                            description="These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site."
                        >
                            <ToggleSwitch
                                label="Performance & Analytics Cookies"
                                enabled={performanceCookies}
                                onChange={setPerformanceCookies}
                            />
                        </CookieCategory>
                        
                        <CookieCategory
                            title="Functional Cookies"
                            description="These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages."
                        >
                             <ToggleSwitch
                                label="Functional Cookies"
                                enabled={functionalCookies}
                                onChange={setFunctionalCookies}
                            />
                        </CookieCategory>

                        <CookieCategory
                            title="Marketing Cookies"
                            description="These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites."
                        >
                            <ToggleSwitch
                                label="Marketing Cookies"
                                enabled={marketingCookies}
                                onChange={setMarketingCookies}
                            />
                        </CookieCategory>
                    </div>
                    
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                         <button
                            onClick={handleSave}
                            className="w-full sm:w-auto px-8 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-black transition-colors"
                        >
                            Save Preferences
                        </button>
                        <button
                            onClick={handleAcceptAll}
                            className="w-full sm:w-auto px-8 py-3 bg-amber-800 text-white font-semibold rounded-md hover:bg-amber-900 transition-colors"
                        >
                            Accept All Cookies
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CookieSettingsPage;