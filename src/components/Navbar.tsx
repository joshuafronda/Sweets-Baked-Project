import React, { useState, useEffect } from 'react';
import { Cake, Menu, X } from 'lucide-react';
import LogoImage from '../img/Logo.jpg'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-pink-200 to-pink-100 shadow-lg overflow-hidden">
              <img 
                src={LogoImage}
                alt="Beautiful cake" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-pink-600 font-['Dancing_Script',_cursive]">
              
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#gallery">Our Cakes</NavLink>
            <NavLink href="#offers">Specials</NavLink>
            <NavLink href="#testimonials">Feedbacks</NavLink>
            {/* <NavLink href="#contact" isButton>Order Now</NavLink> */}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-pink-600 hover:text-pink-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-2">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#gallery" onClick={() => setIsOpen(false)}>Our Cakes</MobileNavLink>
            <MobileNavLink href="#offers" onClick={() => setIsOpen(false)}>Specials</MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</MobileNavLink>
            {/* <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Order Now</MobileNavLink> */}
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, isButton = false }: { href: string; children: React.ReactNode; isButton?: boolean }) => {
  return (
    <a
      href={href}
      className={`font-medium transition-colors duration-200 ${
        isButton
          ? 'bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200'
          : 'text-gray-700 hover:text-pink-500'
      }`}
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => {
  return (
    <a
      href={href}
      className="block py-2 px-4 text-base font-medium text-gray-700 hover:bg-pink-100 hover:text-pink-500 rounded-lg transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </a>
  );
};