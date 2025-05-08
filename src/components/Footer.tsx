import React from 'react';
import { Cake } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Cake className="h-8 w-8 text-white" />
              <span className="ml-2 text-2xl font-bold font-['Dancing_Script',_cursive]">
                Sweets&Baked
              </span>
            </div>
            <p className="text-pink-100 mb-4">
              Crafting delicious cakes and sweet memories since 2020.
            </p>
            <p className="text-pink-100">
              Made with love in Sweet City. 
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#gallery">Our Cakes</FooterLink>
              <FooterLink href="#offers">Special Offers</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Cake Categories</h3>
            <ul className="space-y-2">
              <FooterLink href="#gallery">Birthday Cakes</FooterLink>
              <FooterLink href="#gallery">Wedding Cakes</FooterLink>
              <FooterLink href="#gallery">Specialty Cakes</FooterLink>
              <FooterLink href="#gallery">Cupcakes</FooterLink>
              <FooterLink href="#gallery">Seasonal Specials</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-pink-100 mb-4">
              Subscribe to our newsletter for updates, promotions, and sweet inspiration!
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800"
              />
              <button 
                type="submit"
                className="bg-pink-800 hover:bg-pink-900 px-4 py-2 rounded-r-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-pink-500 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-pink-100 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Sweet & Baked . All rights reserved.
            </p>
            <div className="flex space-x-6">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <a 
        href={href}
        className="text-pink-100 hover:text-white transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
};