import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      message: ''
    });
    
    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-['Dancing_Script',_cursive]">Order Your Sweet Delight</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Ready to place an order or have questions? Reach out to us and we'll get back to you promptly.
          </p>
          <div className="w-24 h-1 bg-pink-200 mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-pink-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-pink-600 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Phone className="h-5 w-5 text-pink-500" />}
                  title="Phone"
                  content="0976-0797-662"
                />
                
                <ContactInfo 
                  icon={<Mail className="h-5 w-5 text-pink-500" />}
                  title="Email"
                  content="sweets&baked@gmail.com"
                />
                
                <ContactInfo 
                  icon={<MapPin className="h-5 w-5 text-pink-500" />}
                  title="Address"
                  content="Calicanto, Batangas City / Lipa City"
                />
                
                <ContactInfo 
                  icon={<Clock className="h-5 w-5 text-pink-500" />}
                  title="Hours"
                  content="Mon-Sat: always opened"
                />
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-pink-600 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <SocialButton 
                    href="https://www.facebook.com/SweetAndBaked2021" 
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                    </svg>
                  </SocialButton>
                  
                  <SocialButton 
                    href="https://www.instagram.com/sweetsandbaked/?igsh=MWdqcXFyMHo3eDFhbg%3D%3D#" 
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.181.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                    </svg>
                  </SocialButton>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-pink-600 mb-6">Order Form</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name*
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address*
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number*
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="date" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Pickup/Delivery Date*
                    </label>
                    <input 
                      type="date" 
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message*
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Please describe the cake you want (flavor, size, design, special requests, etc.)"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Order Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string 
}) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-3">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const SocialButton = ({ 
  children, 
  href,
  ...props 
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full bg-white text-pink-500 hover:bg-pink-500 hover:text-white flex items-center justify-center shadow-sm transition-colors duration-200"
      {...props}
    >
      {children}
    </a>
  );
};