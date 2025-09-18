import { useState } from 'react';
import type { ReactNode } from 'react';
import { megaMenuColumns, featuredBlogPosts } from '../constants';
import type { MegaMenuLink } from '../types';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const NavLink = ({ href, children, className }: NavLinkProps) => (
  <a href={href} className={`text-gray-600 hover:text-black transition-colors ${className}`}>
    {children}
  </a>
);

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <a href="/" className="block">
                            <img src="/images/PALM-COURT-KARATE.png" alt="Palm Court Karate Logo" className="h-10 w-auto"/>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink href="/" className="py-2">Home</NavLink>
                        <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                            <button className="text-gray-600 group-hover:text-black focus:outline-none py-2 flex items-center transition-colors">
                                About Us
                                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className={`absolute left-1/2 -translate-x-1/2 mt-2 w-screen max-w-5xl bg-white rounded-md shadow-xl z-20 transition-all duration-300 transform ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}>
                               <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
                                        {megaMenuColumns.map(col => (
                                            <div key={col.title}>
                                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{col.title}</h3>
                                                <ul>
                                                    {col.links.map((link: MegaMenuLink) => (
                                                        <li key={link.title} className="mb-1">
                                                            <a href={link.href} className="flex items-start p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                                                <div>
                                                                    <p className="font-semibold text-gray-900">{link.title}</p>
                                                                    <p className="text-sm text-gray-500">{link.description}</p>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg">
                                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Featured from Blog</h3>
                                      <div className="space-y-4">
                                        {featuredBlogPosts.map(post => (
                                          <a href={post.href} key={post.title} className="block group">
                                            <div className="flex items-start space-x-4">
                                                <img src={post.imageUrl} alt={post.title} className="w-20 h-16 object-cover rounded-md flex-shrink-0" />
                                                <div>
                                                  <p className="font-semibold text-gray-900 group-hover:text-amber-800 transition-colors">{post.title}</p>
                                                  <p className="text-sm text-gray-500">{post.description}</p>
                                                </div>
                                            </div>
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                        <NavLink href="/schedule" className="py-2">Schedule</NavLink>
                        <NavLink href="/black-belts" className="py-2">Black Belts</NavLink>
                        <NavLink href="/blog" className="py-2">Blog</NavLink>
                        <NavLink href="/contact-us" className="py-2">Contact Us</NavLink>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="/dashboard" className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                            Sign Up
                        </a>
                        <a href="/dashboard" className="px-5 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-black transition-colors">
                            Login
                        </a>
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
                        <NavLink href="/schedule" className="block px-3 py-2 rounded-md text-base font-medium">Schedule</NavLink>
                        <NavLink href="/black-belts" className="block px-3 py-2 rounded-md text-base font-medium">Black Belts</NavLink>
                        <NavLink href="/blog" className="block px-3 py-2 rounded-md text-base font-medium">Blog</NavLink>
                        <NavLink href="/contact-us" className="block px-3 py-2 rounded-md text-base font-medium">Contact Us</NavLink>
                    </div>
                    <div className="p-4 border-t border-gray-200 flex items-center space-x-4">
                       <a href="/dashboard" className="w-full text-center block px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors font-semibold">
                            Sign Up
                        </a>
                        <a href="/dashboard" className="w-full text-center block px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-black transition-colors font-semibold">
                            Login
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;