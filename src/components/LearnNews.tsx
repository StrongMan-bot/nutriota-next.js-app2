import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen, Leaf, Zap } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import Newsletter from './Newsletter';

const LearnNews = () => {
  const { t } = useTranslation('learnnews');
  const router = useRouter();

  const articles = [
    {
      id: 1,
      icon: <Zap className="w-6 h-6" />,
      image: "/images/NewsDetail1.jpg",
    },
    {
      id: 2,
      icon: <Leaf className="w-6 h-6" />,
      image: "/images/NewsDetail2.jpg",
    },
    {
      id: 3,
      icon: <BookOpen className="w-6 h-6" />,
      image: "/images/NewsDetail3.jpg",
    }
  ];

  const handleReadMore = (articleId: number) => {
            router.push(`/news/${articleId}`);
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={article.image}
                    alt={t(`articles.${index}.title`)}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-100 text-[#0089CF] px-3 py-1 rounded-full text-sm font-medium">
                      {t(`articles.${index}.category`)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#0089CF] mr-3">
                      {article.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#0089CF] transition-colors">
                      {t(`articles.${index}.title`)}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t(`articles.${index}.snippet`)}
                  </p>

                  <button 
                    onClick={() => handleReadMore(article.id)}
                    className="inline-flex items-center gap-2 text-[#0089CF] font-semibold hover:text-[#0074B7] transition-colors group"
                  >
                    {t('readMore')}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <Newsletter />
    </>
  );
};

export default LearnNews;