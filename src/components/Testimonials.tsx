import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Happy Customer",
      quote: "The birthday cake for my daughter was absolutely stunning! Not only did it look beautiful, but it tasted amazing too. Everyone at the party was impressed!",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Groom",
      quote: "Our wedding cake was a dream come true. Sweet Delights took our vision and created something even more beautiful than we imagined. The cake was the highlight of our reception!",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "King Darell",
      role: "Event Planner",
      quote: "I've worked with many bakeries for client events, but Sweet Delights is by far the best. Their creativity, reliability, and delicious cakes have made them my go-to recommendation.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section id="testimonials" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-['Dancing_Script',_cursive]">Sweet Words from Our Customers</h2>
          <div className="w-24 h-1 bg-pink-200 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 text-pink-200 opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C21.236 6.021 19.951 8.196 19.5 11h3.5v10h-8.983zm-10 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C11.249 6.021 9.963 8.196 9.5 11h3.5v10h-9z" />
              </svg>
            </div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 text-pink-200 opacity-50 transform rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C21.236 6.021 19.951 8.196 19.5 11h3.5v10h-8.983zm-10 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C11.249 6.021 9.963 8.196 9.5 11h3.5v10h-9z" />
              </svg>
            </div>
            
            {/* Testimonial carousel */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="relative h-64">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`absolute w-full transition-opacity duration-1000 ${
                      index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <p className="text-gray-700 text-lg italic mb-8">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-600">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                      index === activeIndex ? 'bg-pink-500' : 'bg-pink-200'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 text-lg font-medium">
              Join our happy customers and order your cake today!
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 mt-4"
            >
              Start Your Sweet Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};