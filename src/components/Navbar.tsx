import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoImage from '../img/Logo.jpg'
import { motion, AnimatePresence } from 'framer-motion';

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Fixed Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo and Brand */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-pink-200 to-pink-100 shadow-lg overflow-hidden ring-2 ring-pink-200"
              >
                <img 
                  src={LogoImage}
                  alt="Sweet Delights Logo" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#gallery">Our Cakes</NavLink>
              <NavLink href="#offers">Specials</NavLink>
              <NavLink href="#testimonials">Feedbacks</NavLink>
            </div>
            
            {/* Mobile Menu Button */}
            <motion.div 
              className="md:hidden"
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-pink-600 hover:text-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-200 rounded-lg transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[72px] left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm shadow-lg overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-72px)] overflow-y-auto">
                <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                <MobileNavLink href="#gallery" onClick={() => setIsOpen(false)}>Our Cakes</MobileNavLink>
                <MobileNavLink href="#offers" onClick={() => setIsOpen(false)}>Specials</MobileNavLink>
                <MobileNavLink href="#testimonials" onClick={() => setIsOpen(false)}>Feedbacks</MobileNavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-[72px] md:h-[88px]"></div>
    </>
  );
};

const NavLink = ({ href, children, isButton = false }: { href: string; children: React.ReactNode; isButton?: boolean }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`font-medium transition-all duration-200 ${
        isButton
          ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
          : 'text-gray-700 hover:text-pink-500 px-3 py-2 rounded-lg hover:bg-pink-50'
      }`}
    >
      {children}
    </motion.a>
  );
};

const MobileNavLink = ({ 
  href, 
  children, 
  onClick,
  isButton = false 
}: { 
  href: string; 
  children: React.ReactNode; 
  onClick: () => void;
  isButton?: boolean;
}) => {
  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.95 }}
      className={`block py-2.5 px-4 text-base font-medium rounded-lg transition-all duration-200 ${
        isButton
          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center shadow-md'
          : 'text-gray-700 hover:bg-pink-50 hover:text-pink-500'
      }`}
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
};