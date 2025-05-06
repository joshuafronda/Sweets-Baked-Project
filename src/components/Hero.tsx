import React from 'react';
import LogoImage from '../img/Logo.jpg'

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pink-200 opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-pink-100 opacity-60 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-purple-100 opacity-60 animate-float-delayed"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-yellow-100 opacity-60 animate-float-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-4 font-['Dancing_Script',_cursive]">
             Kaye Andrea 
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              BASTA KUNG ANO
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a 
                href="#gallery" 
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Our Cakes
              </a>
              <a 
                href="https://www.facebook.com/messages/t/106520124956484" 
                className="bg-white hover:bg-pink-50 text-pink-500 font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg border border-pink-200 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-pink-200 to-pink-100 shadow-lg mx-auto overflow-hidden">
                <img 
                  src={LogoImage}
                  alt="Beautiful cake" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};