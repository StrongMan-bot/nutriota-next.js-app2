import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const News = () => {
  const { t } = useTranslation('news');
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  // Get news items from translation file
  const newsItems = [
    {
      id: 1,
      title: t('articles.article1.title'),
      description: t('articles.article1.description'),
      image: "/images/NewsDetail1.jpg",
      date: t('articles.article1.date'),
      category: t('articles.article1.category')
    },
    {
      id: 2,
      title: t('articles.article2.title'),
      description: t('articles.article2.description'),
      image: "/images/NewsDetail2.jpg",
      date: t('articles.article2.date'),
      category: t('articles.article2.category')
    },
    {
      id: 3,
      title: t('articles.article3.title'),
      description: t('articles.article3.description'),
      image: "/images/NewsDetail3.jpg",
      date: t('articles.article3.date'),
      category: t('articles.article3.category')
    },
    {
      id: 4,
      title: "Silica & Shilajit: Ancient Remedies for Modern Health",
      description: "The Secret Beauty Minerals Your Grandmother Knew About (But You Forgot). Two ancient powerhouses—silica and shilajit—are making a massive comeback, and for good reason.",
      image: "/images/NewsDetail4.jpg",
      date: "December 20, 2024",
      category: "Beauty & Wellness"
    },
    {
      id: 5,
      title: t('articles.article5.title'),
      description: t('articles.article5.description'),
      image: "/images/NewsDetail5.jpg",
      date: t('articles.article5.date'),
      category: t('articles.article5.category')
    },
    {
      id: 6,
      title: t('articles.article6.title'),
      description: t('articles.article6.description'),
      image: "/images/NewsDetail6.jpg",
      date: t('articles.article6.date'),
      category: t('articles.article6.category')
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const handleNewsClick = (newsId: number) => {
            router.push(`/news/${newsId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* News Carousel */}
        <div className="relative mb-16">
          <div className="relative h-96 md:h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {newsItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 relative cursor-pointer" onClick={() => handleNewsClick(item.id)}>
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-[#0089CF] px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <Calendar size={16} />
                        {item.date}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-lg opacity-90 mb-4 max-w-2xl">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#0089CF] font-semibold">
                      {t('readFullStory')} <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article 
              key={item.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => handleNewsClick(item.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0089CF] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  {item.date}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0089CF] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-[#0089CF] font-semibold group-hover:gap-3 transition-all">
                  {t('readFullStory')} <ArrowRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;