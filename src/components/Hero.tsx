import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const Hero = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleShopNow = () => {
    router.push('/products');
  };

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      image: "/images/HeroSectionFinal1.png",
      alt: "NUTRIOTA supplement bottle with natural background"
    },
    {
      id: 2,
      image: "/images/HeroSectionFinal3.png",
      alt: "NUTRIOTA Sport supplement with performance background"
    }
  ];

  // Auto-slide functionality disabled - only manual navigation

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Hero Carousel */}
      <div className="absolute inset-0 z-0">
        <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {heroSlides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative">
              <OptimizedImage
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                priority={slide.id === 1}
                loading={slide.id === 1 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout - Text on left side of bottle */}
        <div className="hidden lg:flex items-center min-h-[calc(100vh-5rem)]">
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {t(`hero.slide${currentSlide + 1}.title`)}
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-white mb-8 leading-relaxed drop-shadow-md max-w-2xl">
              {t(`hero.slide${currentSlide + 1}.subtitle`)}
            </p>
            
            <button 
              onClick={handleShopNow} 
              className="bg-[#0089CF] hover:bg-[#0074B7] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t(`hero.slide${currentSlide + 1}.shopNow`)}
            </button>
          </div>
        </div>

        {/* Mobile Layout - Text properly centered without background box */}
        <div className="lg:hidden flex flex-col justify-center items-center min-h-[calc(100vh-5rem)] px-4">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              {t(`hero.slide${currentSlide + 1}.title`)}
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base text-white mb-6 leading-relaxed drop-shadow-md">
              {t(`hero.slide${currentSlide + 1}.subtitle`)}
            </p>
            
            <button 
              onClick={handleShopNow} 
              className="bg-[#0089CF] hover:bg-[#0074B7] text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t(`hero.slide${currentSlide + 1}.shopNow`)}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Centered below the picture */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-20">
        <button 
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default Hero;