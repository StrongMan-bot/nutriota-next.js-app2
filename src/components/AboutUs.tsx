import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Eye, Building, Users, Heart, Globe, Award, Leaf } from 'lucide-react';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t('aboutUs.hero.title')}
          </h1>
          <h2 className="text-2xl text-blue-600 font-medium mb-8">
            {t('aboutUs.hero.subtitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('aboutUs.hero.description')}
          </p>
        </div>

                {/* Background Section */}
        <div className="mb-20 animate-slide-up">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-blue-600" />
              <h3 className="text-3xl font-semibold text-gray-900">{t('aboutUs.background.title')}</h3>
            </div>
            <h4 className="text-xl font-medium text-blue-600 mb-4">
              {t('aboutUs.background.subtitle')}
            </h4>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('aboutUs.background.description')}
            </p>
          </div>
        </div>

        {/* DZH B.V. Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-10 mb-20 animate-fade-in">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
              <h3 className="text-3xl font-semibold text-gray-900">{t('aboutUs.dzh.title')}</h3>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {t('aboutUs.dzh.description')}
              </p>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    {t('aboutUs.dzh.service')}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/images/aboutus-distributor.png" 
                alt="DZH B.V. distribution center" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20 animate-slide-up">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-600 tracking-wide uppercase mb-4">
                  {t('aboutUs.mission.title')}
                </h3>
                <h4 className="text-4xl font-bold text-gray-900 leading-tight mb-8">
                  {t('aboutUs.mission.subtitle')}
                </h4>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('aboutUs.mission.paragraph1')}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('aboutUs.mission.paragraph2')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wellness Section */}
        <div className="mb-20 animate-slide-up">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-8 h-8 text-blue-600" />
                    <h5 className="text-2xl font-semibold text-gray-900">{t('aboutUs.mission.wellness.title')}</h5>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t('aboutUs.mission.wellness.description')}
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="High-quality supplements" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

                {/* Vision Section */}
        <div className="mb-20 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-600 tracking-wide uppercase mb-4">
                  {t('aboutUs.vision.title')}
                </h3>
                <h4 className="text-4xl font-bold text-gray-900 leading-tight mb-8">
                  {t('aboutUs.vision.subtitle')}
                </h4>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('aboutUs.vision.description')}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('aboutUs.vision.paragraph2')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center rounded-2xl p-12 text-white animate-pulse" style={{background: 'linear-gradient(to right, #0089CF, #0066A3)'}}>
          <h3 className="text-3xl font-bold mb-6">
            {t('aboutUs.hero.subtitle')}
          </h3>
          <p className="text-xl mb-8 opacity-90">
            {t('aboutUs.hero.description')}
          </p>
          <button 
            onClick={() => window.location.href = '/products'}
            className="bg-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            style={{color: '#0089CF'}}
          >
            {t('products.title')}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;