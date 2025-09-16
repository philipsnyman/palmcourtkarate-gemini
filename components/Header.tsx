// FIX: The original file content was a placeholder, causing module resolution errors.
// This new content provides a fully functional, responsive header component.
import React, { useState } from 'react';
import { megaMenuColumns } from '../constants';
import type { MegaMenuLink } from '../types';

const NavLink: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({ href, children, className }) => (
  <a href={href} className={`text-gray-600 hover:text-black transition-colors ${className}`}>
    {children}
  </a>
);

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-xl font-bold tracking-widest text-amber-800" style={{ letterSpacing: '0.1em' }}>
                            PALM COURT KARATE
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink href="/" className="py-2">Home</NavLink>
                        {megaMenuColumns.map(col => (
                            <div key={col.title} className="relative group">
                                <button className="text-gray-600 group-hover:text-black focus:outline-none py-2 flex items-center transition-colors">
                                    {col.title}
                                    <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-96 bg-white rounded-md shadow-xl z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible transform translate-y-4 group-hover:translate-y-0">
                                   <div className="p-5">
                                        <ul>
                                            {col.links.map((link: MegaMenuLink) => (
                                                <li key={link.title} className="mb-1">
                                                    <a href={link.href} className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                                        {link.icon && <div className="mr-4 mt-1 flex-shrink-0 text-amber-800">{link.icon}</div>}
                                                        <div>
                                                            <p className="font-semibold text-gray-900">{link.title}</p>
                                                            <p className="text-sm text-gray-500">{link.description}</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <NavLink href="/black-belts" className="py-2">Black Belts</NavLink>
                        <NavLink href="/blog" className="py-2">Blog</NavLink>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink href="/contact-us" className="py-2">Contact Us</NavLink>
                        <button className="px-6 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition-colors">
                            Book a Free Class
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-black focus:outline-none p-2 -mr-2">
                            <span className="sr-only">Open menu</span>
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink href="/" className="block px-3 py-2 rounded-md text-base font-medium">Home</NavLink>
                        {megaMenuColumns.map(col => (
                            <div key={col.title} className="py-2">
                                <h3 className="px-3 font-semibold text-gray-500 uppercase tracking-wider text-sm">{col.title}</h3>
                                {col.links.map(link => (
                                    <a key={link.title} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                        ))}
                        <NavLink href="/black-belts" className="block px-3 py-2 rounded-md text-base font-medium">Black Belts</NavLink>
                        <NavLink href="/blog" className="block px-3 py-2 rounded-md text-base font-medium">Blog</NavLink>
                        <NavLink href="/contact-us" className="block px-3 py-2 rounded-md text-base font-medium">Contact Us</NavLink>
                    </div>
                    <div className="p-4 border-t border-gray-200">
                       <button className="w-full px-6 py-3 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition-colors font-semibold">
                            Book a Free Class
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;