import type { ReactNode } from 'react';

const footerLinkColumns = [
  {
    title: 'Main',
    links: [
      { text: 'Home', href: '/' },
      { text: 'Black Belts', href: '/black-belts' },
      { text: 'Blog', href: '/blog' },
      { text: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { text: 'Our Dojo', href: '/about-us/our-dojo' },
      { text: 'Facilities', href: '/about-us/facilities' },
      { text: 'Mario Sequeira', href: '/about-us/mario-sequeira' },
      { text: 'Affiliations', href: '/about-us/affiliations' },
    ],
  },
  {
    title: 'Courses',
    links: [
      { text: 'Pre-School', href: '#' },
      { text: 'Scholars', href: '#' },
      { text: 'Adults', href: '#' },
      { text: 'Self Defence', href: '#' },
    ],
  },
  {
    title: 'Karate',
    links: [
      { text: 'History', href: '/karate/history' },
      { text: 'Dojo Etiquette', href: '/karate/dojo-etiquette' },
      { text: 'Terminology', href: '/karate/terminology' },
      { text: 'Gradings', href: '/karate/gradings' },
    ],
  },
];

type SocialIconProps = {
  href: string;
  children: ReactNode;
  label: string;
};

const SocialIcon = ({ href, children, label }: SocialIconProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
    <span className="sr-only">{label}</span>
    {children}
  </a>
);

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4 mb-8 lg:mb-0">
                        <a href="/" className="inline-block mb-4">
                            <img src="/images/PALM-COURT-KARATE.png" alt="Palm Court Karate Logo" className="h-10 w-auto filter invert brightness-0" />
                        </a>
                        <div className="text-gray-400 text-sm max-w-xs">
                            <p className="font-semibold">Address:</p>
                            <p>27 Janssens Rd, Constantia Kloof, Roodepoort, 1709</p>
                            <p className="font-semibold mt-4">Contact:</p>
                             <a href="tel:+27832286331" className="block hover:text-white transition-colors">+27 (0)83 228 6331</a>
                             <a href="mailto:info@palmcourtkarate.co.za?subject=Contact%20Us" className="block hover:text-white transition-colors">info@palmcourtkarate.co.za</a>
                        </div>
                        <div className="flex space-x-5 mt-6">
                            <SocialIcon href="https://www.facebook.com/palmcourtkarate/" label="Facebook">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>
                            </SocialIcon>
                        </div>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                      {footerLinkColumns.map((section) => (
                          <div key={section.title}>
                              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">{section.title === 'Main' ? '' : section.title}</h3>
                              <ul className="space-y-3">
                                  {section.links.map((link) => (
                                      <li key={link.text}>
                                          <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">{link.text}</a>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      ))}
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Palm Court Karate Centre. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;