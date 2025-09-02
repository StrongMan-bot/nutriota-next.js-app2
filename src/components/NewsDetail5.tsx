import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import ImportantBox from './ImportantBox';
import styles from '../styles/BlogTypography.module.css';

const NewsDetail5 = () => {
  const { t } = useTranslation('news5');
  const router = useRouter();

  const newsItem = {
    id: 5,
    title: t('title'),
    description: t('description'),
    image: "/images/NewsDetail5.jpg",
    date: t('date'),
    category: t('category'),
    author: t('author'),
    readTime: t('readTime'),
    content: `
      <h3>${t('content.section1.title')}</h3>
      <p>${t('content.section1.text1')}</p>
      <p>${t('content.section1.text2')}</p>
      <p>${t('content.section1.text3')}</p>

      <h3>${t('content.section2.title')}</h3>
      <p>${t('content.section2.text')}</p>

      <h3>${t('content.section3.title')}</h3>
      <p>${t('content.section3.text1')}</p>
      <p>${t('content.section3.text2')}</p>
      <ul>
        <li>${t('content.section3.list.item1')}</li>
        <li>${t('content.section3.list.item2')}</li>
        <li>${t('content.section3.list.item3')}</li>
        <li>${t('content.section3.list.item4')}</li>
        <li>${t('content.section3.list.item5')}</li>
      </ul>
      <p>${t('content.section3.text3')}</p>
      <p>${t('content.section3.text4')}</p>

      <h3>${t('content.section4.title')}</h3>
      <p>${t('content.section4.text')}</p>

      <h4>${t('content.section4.subsection1.title')}</h4>
      <ul>
        <li>${t('content.section4.subsection1.list.item1')}</li>
        <li>${t('content.section4.subsection1.list.item2')}</li>
        <li>${t('content.section4.subsection1.list.item3')}</li>
        <li>${t('content.section4.subsection1.list.item4')}</li>
        <li>${t('content.section4.subsection1.list.item5')}</li>
        <li>${t('content.section4.subsection1.list.item6')}</li>
        <li>${t('content.section4.subsection1.list.item7')}</li>
      </ul>

      <h4>${t('content.section4.subsection2.title')}</h4>
      <ul>
        <li>${t('content.section4.subsection2.list.item1')}</li>
        <li>${t('content.section4.subsection2.list.item2')}</li>
        <li>${t('content.section4.subsection2.list.item3')}</li>
        <li>${t('content.section4.subsection2.list.item4')}</li>
        <li>${t('content.section4.subsection2.list.item5')}</li>
        <li>${t('content.section4.subsection2.list.item6')}</li>
      </ul>

      <p>${t('content.section4.text2')}</p>

      <h3>${t('content.section5.title')}</h3>
      <p>${t('content.section5.text1')}</p>
      <p>${t('content.section5.text2')}</p>

      <h4>${t('content.section5.subsection1.title')}</h4>
      <p>${t('content.section5.subsection1.text')}</p>

      <h4>${t('content.section5.subsection2.title')}</h4>
      <p>${t('content.section5.subsection2.text')}</p>

      <h4>${t('content.section5.subsection3.title')}</h4>
      <p>${t('content.section5.subsection3.text')}</p>

      <h4>${t('content.section5.subsection4.title')}</h4>
      <p>${t('content.section5.subsection4.text')}</p>

      <h4>${t('content.section5.subsection5.title')}</h4>
      <p>${t('content.section5.subsection5.text')}</p>

      <h4>${t('content.section5.subsection6.title')}</h4>
      <p>${t('content.section5.subsection6.text')}</p>

      <h3>${t('content.section6.title')}</h3>
      <p>${t('content.section6.text1')}</p>
      <p>${t('content.section6.text2')}</p>
      <p>${t('content.section6.text3')}</p>

      <h4>${t('content.section6.subsection1.title')}</h4>
      <p>${t('content.section6.subsection1.text')}</p>
      <ul>
        <li>${t('content.section6.subsection1.list.item1')}</li>
        <li>${t('content.section6.subsection1.list.item2')}</li>
        <li>${t('content.section6.subsection1.list.item3')}</li>
        <li>${t('content.section6.subsection1.list.item4')}</li>
        <li>${t('content.section6.subsection1.list.item5')}</li>
      </ul>

      <h4>${t('content.section6.subsection2.title')}</h4>
      <p>${t('content.section6.subsection2.text')}</p>
      <ul>
        <li>${t('content.section6.subsection2.list.item1')}</li>
        <li>${t('content.section6.subsection2.list.item2')}</li>
        <li>${t('content.section6.subsection2.list.item3')}</li>
        <li>${t('content.section6.subsection2.list.item4')}</li>
        <li>${t('content.section6.subsection2.list.item5')}</li>
        <li>${t('content.section6.subsection2.list.item6')}</li>
      </ul>

      <h3>${t('content.section7.title')}</h3>
      <p>${t('content.section7.text')}</p>

      <h4>${t('content.section7.subsection1.title')}</h4>
      <p>${t('content.section7.subsection1.text')}</p>

      <h4>${t('content.section7.subsection2.title')}</h4>
      <p>${t('content.section7.subsection2.text')}</p>

      <h4>${t('content.section7.subsection3.title')}</h4>
      <p>${t('content.section7.subsection3.text')}</p>

      <h4>${t('content.section7.subsection4.title')}</h4>
      <p>${t('content.section7.subsection4.text')}</p>

      <h3>${t('content.section8.title')}</h3>
      <p>${t('content.section8.text1')}</p>
      <p>${t('content.section8.text2')}</p>
      <p>${t('content.section8.text3')}</p>

      <h3>${t('content.section9.title')}</h3>
      <p>${t('content.section9.text')}</p>

      <h4>${t('content.section9.subsection1.title')}</h4>
      <ul>
        <li>${t('content.section9.subsection1.list.item1')}</li>
        <li>${t('content.section9.subsection1.list.item2')}</li>
        <li>${t('content.section9.subsection1.list.item3')}</li>
        <li>${t('content.section9.subsection1.list.item4')}</li>
        <li>${t('content.section9.subsection1.list.item5')}</li>
        <li>${t('content.section9.subsection1.list.item6')}</li>
        <li>${t('content.section9.subsection1.list.item7')}</li>
      </ul>

      <h4>${t('content.section9.subsection2.title')}</h4>
      <p>${t('content.section9.subsection2.text')}</p>
      <ul>
        <li>${t('content.section9.subsection2.list.item1')}</li>
        <li>${t('content.section9.subsection2.list.item2')}</li>
        <li>${t('content.section9.subsection2.list.item3')}</li>
        <li>${t('content.section9.subsection2.list.item4')}</li>
      </ul>

      <h4>${t('content.section9.subsection3.title')}</h4>
      <p>${t('content.section9.subsection3.text')}</p>

      <h3>${t('content.section10.title')}</h3>
      <p>${t('content.section10.text1')}</p>
      <p>${t('content.section10.text2')}</p>
      <p>${t('content.section10.text3')}</p>
    `
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Back Button */}
        <button 
          onClick={() => router.push('/news')}
          className="flex items-center gap-2 text-[#0089CF] hover:text-[#0074B7] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          {t('backToNews')}
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <OptimizedImage
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#0089CF] px-3 py-1 rounded-full text-sm font-medium">
                  {newsItem.category}
                </span>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} />
                  {newsItem.date}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User size={16} />
                  {newsItem.author}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} />
                  {newsItem.readTime}
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                {newsItem.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div 
            className={`prose prose-lg max-w-none ${styles.blogContent}`}
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t('discoverMore')}
          </h3>
          <button 
            onClick={() => router.push('/news')}
            className="bg-[#0089CF] text-white px-6 py-3 rounded-lg hover:bg-[#0074B7] transition-colors font-semibold"
          >
            {t('backToNews')}
          </button>
        </div>
      </div>


    </div>
  );
};

export default NewsDetail5;