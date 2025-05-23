import React, { useState } from 'react';
import weddingImage1 from '../img/wedding_1.jpg';
import weddingImage2 from '../img/wedding_2.jpg';
import weddingImage3 from '../img/wedding_3.jpg';
import weddingImage4 from '../img/wedding_4.jpg';
import weddingImage5 from '../img/wedding_5.jpg';
import weddingImage6 from '../img/wedding_6.jpg';
import weddingImage7 from '../img/wedding_7.jpg';
import weddingImage8 from '../img/wedding_8.jpg';
import weddingImage9 from '../img/wedding_9.jpg';
import weddingImage10 from '../img/wedding_10.jpg';
import weddingImage11 from '../img/wedding_11.jpg';
import weddingImage12 from '../img/wedding_12.jpg';
import weddingImage13 from '../img/wedding_13.jpg';
import weddingImage14 from '../img/wedding_14.jpg';
import weddingImage15 from '../img/wedding_15.jpg';

import birthdayImage from '../img/birthday_1.jpg'
import birthdayImage2 from '../img/birthday_2.jpg'
import birthdayImage3 from '../img/birthday_3.jpg'
import birthdayImage4 from '../img/birthday_4.jpg'
import birthdayImage5 from '../img/birthday_5.jpg'
import birthdayImage6 from '../img/birthday_6.jpg'
import birthdayImage7 from '../img/birthday_7.jpg'
import birthdayImage8 from '../img/birthday_8.jpg'
import birthdayImage9 from '../img/birthday_9.jpg'
import birthdayImage10 from '../img/birthday_10.jpg'
import birthdayImage11 from '../img/birthday_11.jpg'
import birthdayImage12 from '../img/birthday_12.jpg'
import birthdayImage13 from '../img/birthday_13.jpg'
import birthdayImage14 from '../img/birthday_14.jpg'

import specialty1 from '../img/specialty_1.jpg'

import Stack from './Stack';

interface Cake {
  id: number;
  name: string;
  category: string;
  image: string;
  additionalImages?: string[];
}

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const cakes: Cake[] = [
    {
      id: 1,
      name: "75th Birthday Cake",
      category: "birthday",
      image: birthdayImage,
      additionalImages: []
    },
    {
      id: 2,
      name: "Wedding Elegance",
      category: "wedding",
      image: weddingImage1,
      additionalImages: [weddingImage1, weddingImage2,weddingImage3, weddingImage4,weddingImage5, weddingImage6,weddingImage7, weddingImage8,weddingImage9, weddingImage10, weddingImage11, weddingImage12, weddingImage13, weddingImage14, weddingImage15 ]
    },
    {
      id: 3,
      name: "Chocolate Dream",
      category: "specialty",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      name: "60th Birthday Cake",
      category: "birthday",
      image: birthdayImage,
      additionalImages: [birthdayImage2, birthdayImage3, birthdayImage4, birthdayImage5, birthdayImage6, birthdayImage7, birthdayImage8, birthdayImage9, birthdayImage10, birthdayImage11, birthdayImage12, birthdayImage13, birthdayImage14 ]
    },
    {
      id: 5,
      name: "Celebration Tower",
      category: "wedding",
      image: weddingImage2
    },
    {
      id: 6,
      name: "Fruit Fantasy",
      category: "specialty",
      image: specialty1,
      additionalImages: []
    }
  ];

  const categories = ['all', 'birthday', 'wedding', 'specialty'];
  
  const getFilteredCakes = (category: string) => {
    return category === 'all' 
      ? cakes 
      : cakes.filter(cake => cake.category === category);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCake(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedCake?.additionalImages) {
      setCurrentImageIndex((prev) => 
        prev === selectedCake.additionalImages!.length ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCake?.additionalImages) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedCake.additionalImages!.length : prev - 1
      );
    }
  };

  const currentImage = selectedCake && 
    (currentImageIndex === 0 
      ? selectedCake.image 
      : selectedCake.additionalImages?.[currentImageIndex - 1]);

  const renderStack = (category: string) => {
    const filteredCakes = getFilteredCakes(category);
    // Create an array of all images from all cakes in this category
    const stackImages = filteredCakes.flatMap(cake => {
      const allImages = [cake.image];
      if (cake.additionalImages) {
        allImages.push(...cake.additionalImages);
      }
      return allImages.map((img, index) => ({
        id: `${cake.id}-${index}`,
        img: img
      }));
    });

    const isSingleCategory = activeCategory !== 'all';
    const cardDimensions = isSingleCategory 
      ? { 
          width: window.innerWidth < 768 ? 300 : 400,
          height: window.innerWidth < 768 ? 300 : 400 
        }
      : { 
          width: window.innerWidth < 768 ? 250 : 400,
          height: window.innerWidth < 768 ? 250 : 400 
        };

    return (
      <div key={category} className="flex flex-col items-center mb-12">
        {category !== 'all' && (
          <h3 className="text-2xl font-semibold text-pink-600 mb-6 capitalize">
            {category} Cakes
          </h3>
        )}
        <Stack
          randomRotation={true}
          sensitivity={window.innerWidth < 768 ? 120 : 180}
          sendToBackOnClick={false}
          cardDimensions={cardDimensions}
          cardsData={stackImages}
          animationConfig={{
            stiffness: window.innerWidth < 768 ? 200 : 260,
            damping: window.innerWidth < 768 ? 25 : 20
          }}
        />
      </div>
    );
  };

  return (
    <section id="gallery" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-['Dancing_Script',_cursive]">Sweets & Baked</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Delight in our handcrafted cakes, meticulously designed and delivered with care—perfect for any occasion..
          </p>
          <div className="w-24 h-1 bg-pink-200 mx-auto mt-4"></div>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-pink-100 rounded-full">
            {categories.map(category => (
              <CategoryButton 
                key={category}
                isActive={activeCategory === category} 
                onClick={() => setActiveCategory(category)}
              >
                {category === 'all' ? 'All Cakes' : category.charAt(0).toUpperCase() + category.slice(1)}
              </CategoryButton>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCategory === 'all' 
            ? categories.filter(cat => cat !== 'all').map(category => renderStack(category))
            : (
              <div className="col-span-full flex justify-center">
                {renderStack(activeCategory)}
              </div>
            )
          }
        </div>
        
        <div className="text-center mt-12">
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedCake && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative h-[70vh]">
              <img 
                src={currentImage || ''}
                alt={selectedCake.name}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              {selectedCake.additionalImages && selectedCake.additionalImages.length > 0 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Image Thumbnails */}
            {selectedCake.additionalImages && selectedCake.additionalImages.length > 0 && (
              <div className="flex gap-2 p-4 overflow-x-auto">
                <div 
                  className={`flex-shrink-0 w-20 h-20 cursor-pointer border-2 ${
                    currentImageIndex === 0 ? 'border-pink-500' : 'border-transparent'
                  }`}
                  onClick={() => setCurrentImageIndex(0)}
                >
                  <img 
                    src={selectedCake.image} 
                    alt="Main"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                {selectedCake.additionalImages.map((img, index) => (
                  <div 
                    key={index}
                    className={`flex-shrink-0 w-20 h-20 cursor-pointer border-2 ${
                      currentImageIndex === index + 1 ? 'border-pink-500' : 'border-transparent'
                    }`}
                    onClick={() => setCurrentImageIndex(index + 1)}
                  >
                    <img 
                      src={img} 
                      alt={`${selectedCake.name} ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

const CategoryButton = ({ 
  isActive, 
  onClick, 
  children 
}: { 
  isActive: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
        isActive 
          ? 'bg-white text-pink-500 shadow-sm' 
          : 'text-gray-600 hover:text-pink-600'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};