import React from 'react';
import { Heart, Award, Clock, Cake } from 'lucide-react';
import LogoImage from '../img/Logo.jpg'

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-['Dancing_Script',_cursive]">Our Sweet Story</h2>
          <div className="w-24 h-1 bg-pink-200 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src={LogoImage}
                alt="Baker decorating a cake" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 w-full h-full bg-pink-100 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">About us</h3>
            <p className="text-gray-700 mb-6">
            Founded in 2020, Sweets & Baked began with a simple dream: to bring joy to people’s lives through the warmth of homemade cakes and pastries. What started as a small kitchen endeavor has grown into a beloved cake business known for its delicious, handcrafted creations and heartfelt service.
            we believe that every celebration deserves something sweet. From birthdays to weddings, or even just a quiet moment with coffee, our cakes are made to create memories. Each treat is crafted with love, using quality ingredients and a passion for baking that’s been with us since day one.
            </p>
      
            <div className="grid grid-cols-2 gap-6">
              <FeatureCard 
                icon={<Heart className="h-8 w-8 text-pink-500" />}
                title="Made with Love"
                description="Every cake is crafted with passion and care."
              />
              <FeatureCard 
                icon={<Award className="h-8 w-8 text-pink-500" />}
                title="Premium Quality"
                description="We use only the finest ingredients."
              />
              <FeatureCard 
                icon={<Clock className="h-8 w-8 text-pink-500" />}
                title="Fresh Daily"
                description="Our cakes are baked fresh every day."
              />
              <FeatureCard 
                icon={<Cake className="h-8 w-8 text-pink-500" />}
                title="Custom Designs"
                description="Personalized cakes for your special occasion."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
      <div className="mb-3">{icon}</div>
      <h4 className="font-medium text-pink-600 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};