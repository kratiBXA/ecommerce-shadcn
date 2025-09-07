"use client"
import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg shadow-xl">
        {/* Images */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <div className="w-full flex-shrink-0 relative" key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute bottom-5 left-5 text-white text-xl font-semibold bg-black bg-opacity-40 px-4 py-2 rounded-lg">
                <span>Exclusive Offer</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          &#8592;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          &#8594;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            } hover:bg-blue-500`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
