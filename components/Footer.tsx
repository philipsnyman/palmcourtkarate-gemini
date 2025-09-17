import type { ReactNode } from 'react';

type FooterLinkProps = {
  href: string;
  children: ReactNode;
};

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <a href={href} className="text-gray-500 hover:text-black transition-colors">
      {children}
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-2 mb-8 xl:mb-0">
             <a href="/" className="inline-block mb-6">
                <img src="/images/PALM-COURT-KARATE.png" alt="Palm Court Karate Logo" className="h-10 w-auto"/>
            </a>
            <div className="text-sm">
                <p className="font-semibold mb-1">Address:</p>
                <p className="text-gray-600 mb-4">27 Janssens Rd, Constantia Kloof, Roodepoort, 1709</p>
                <p className="font-semibold mb-1">Contact:</p>
                <a href="tel:+27832286331" className="text-gray-600 block hover:text-black">+27 (0)83 228 6331</a>
                <a href="mailto:info@palmcourtkarate.co.za" className="text-gray-600 block hover:text-black">info@palmcourtkarate.co.za</a>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-black"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></a>
              <a href="#" className="text-gray-500 hover:text-black"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.25-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg></a>
              <a href="#" className="text-gray-500 hover:text-black"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="#" className="text-gray-500 hover:text-black"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              <a href="#" className="text-gray-500 hover:text-black"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
          </div>
          
          <div className="text-sm">
            <h4 className="font-bold mb-4 text-base">About Us</h4>
            <ul className="space-y-2">
              <FooterLink href="/our-dojo">Our Dojo</FooterLink>
              <FooterLink href="/facilities">Facilities</FooterLink>
              <FooterLink href="/mario-sequeira">Mario Sequeira</FooterLink>
              <FooterLink href="/affiliations">Affiliations</FooterLink>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="font-bold mb-4 text-base">Courses</h4>
            <ul className="space-y-2">
              <FooterLink href="/courses/pre-school">Pre-School</FooterLink>
              <FooterLink href="/courses/scholars">Scholars</FooterLink>
              <FooterLink href="/courses/adults">Adults</FooterLink>
              <FooterLink href="/courses/self-defence">Self Defence</FooterLink>
              <FooterLink href="/courses/fitness">Fitness</FooterLink>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="font-bold mb-4 text-base">Karate</h4>
            <ul className="space-y-2">
              <FooterLink href="/history">History</FooterLink>
              <FooterLink href="/dojo-etiquette">Dojo Etiquette</FooterLink>
              <FooterLink href="/terminology">Terminology</FooterLink>
              <FooterLink href="/gradings">Gradings</FooterLink>
            </ul>
          </div>
          
          <div className="text-sm">
            <h4 className="font-bold mb-4 text-base">Navigate</h4>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/schedule">Schedule</FooterLink>
              <FooterLink href="/black-belts">Black Belts</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contact-us">Contact Us</FooterLink>
            </ul>
          </div>


        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2023 Palm Court Karate Centre. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="/privacy-policy" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
            <a href="#" className="hover:text-black">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;