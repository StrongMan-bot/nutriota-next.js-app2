import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

const About = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleLearnMore = () => {
    router.push('/about');
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image - Left Side */}
          <div className="order-1">
            <OptimizedImage
              src="/images/AboutUsFinalist.png"
              alt="Premium supplement bottles with natural botanical background"
              className="w-full h-80 md:h-96 rounded-xl shadow-lg"
              priority={true}
              loading="eager"
            />
          </div>
          
          {/* Content - Right Side */}
          <div className="order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.description2')}
            </p>
            <button onClick={handleLearnMore} className="bg-[#0089CF] hover:bg-[#0074B7] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              {t('about.discoverUs')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;