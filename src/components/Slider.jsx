import React, { useState, useEffect } from "react";
import img1 from "../assets/IMG-20250923-WA0009.jpg";
import img2 from "../assets/IMG-20250923-WA0010.jpg";
import img3 from "../assets/IMG-20250923-WA0011.jpg";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative overflow-hidden rounded-lg shadow-2xl bg-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.7)]">
        {/* Image Container */}
        <div className="relative aspect-video">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

          {/* Inner Black Shadow */}
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] rounded-lg"></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white rounded-full p-1 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110 bg-black/30 backdrop-blur-sm"
          aria-label="Previous image"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white rounded-full p-1 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110 bg-black/30 backdrop-blur-sm"
          aria-label="Next image"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Line Indicator */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-white w-6 sm:w-8"
                  : "bg-white/60 hover:bg-white/80 w-4 sm:w-6"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
