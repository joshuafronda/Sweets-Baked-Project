import React from 'react';
import { LucideGift, Sparkles, Star } from 'lucide-react';

export const SpecialOffers = () => {
  return (
    <section id="offers" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-['Dancing_Script',_cursive]">Special Offers</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover our seasonal specials and limited-time offers.
          </p>
          <div className="w-24 h-1 bg-pink-200 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SpecialOfferCard 
            title="Birthday Special"
            description="20% off on all birthday cakes ordered at least 3 days in advance."
            icon={<LucideGift className="h-10 w-10 text-pink-500" />}
            color="bg-gradient-to-br from-pink-100 to-pink-200"
          />
          
          <SpecialOfferCard 
            title="Seasonal Flavor"
            description="Try our limited-time Strawberry Champagne cake, available this month only."
            icon={<Sparkles className="h-10 w-10 text-purple-500" />}
            color="bg-gradient-to-br from-purple-100 to-purple-200"
            featured={true}
          />
          
          <SpecialOfferCard 
            title="Loyalty Rewards"
            description="Join our sweet rewards program and get a free cake on your fifth order."
            icon={<Star className="h-10 w-10 text-yellow-500" />}
            color="bg-gradient-to-br from-yellow-100 to-yellow-200"
          />
        </div>
        
        <div className="mt-16 bg-pink-50 rounded-2xl p-8 shadow-inner">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">Custom Cake Consultation</h3>
              <p className="text-gray-700 mb-4">
                Dream of a unique cake for your special occasion? Schedule a free consultation 
                with our cake designer to bring your vision to life.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-pink-400 mr-2"></span>
                  Personalized design tailored to your event
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-pink-400 mr-2"></span>
                  Flavor sampling during consultation
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-pink-400 mr-2"></span>
                  Specialized dietary options available (gluten-free, vegan)
                </li>
              </ul>
              <a 
                href="#contact" 
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Book a Consultation
              </a>
            </div>
            <div className="md:w-1/3">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/4686958/pexels-photo-4686958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Custom cake consultation" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -top-3 -left-3 bg-pink-200 rounded-full p-3 shadow-md">
                  <Sparkles className="h-6 w-6 text-pink-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SpecialOfferCard = ({ 
  title, 
  description, 
  icon, 
  color, 
  featured = false 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  color: string; 
  featured?: boolean;
}) => {
  return (
    <div className={`rounded-lg p-6 ${color} ${
      featured ? 'transform scale-105 shadow-lg' : 'shadow-md'
    } hover:shadow-lg transition-all duration-300`}>
      <div className={`
        h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto
        ${featured ? 'bg-white' : 'bg-pink-50'}
      `}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center text-pink-600 mb-3">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
      {featured && (
        <div className="mt-6 text-center">
          <span className="inline-block bg-white text-pink-500 text-sm font-medium px-4 py-1 rounded-full">
            Limited Time
          </span>
        </div>
      )}
    </div>
  );
};