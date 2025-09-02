import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import ImportantBox from './ImportantBox';
import styles from '../styles/BlogTypography.module.css';

const NewsDetail4 = () => {
  const { t } = useTranslation('news4');
  const router = useRouter();

  const newsItem = {
    id: 4,
    title: t('title'),
    description: t('description'),
    image: "/images/NewsDetail4.jpg",
    date: t('date'),
    category: t('category'),
    author: t('author'),
    readTime: t('readTime'),
    content: `
      <div class="section-divider"></div>
      <p>${t('content.intro')}</p>
      <p>${t('content.socialMediaScene')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.beautyIndustrySecret')}</h3>
      <p>${t('content.beautyIndustrySecretText')}</p>
      <p>${t('content.enterSilicaShilajit')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.silicaSection')}</h3>
      <p>${t('content.silicaIntro')}</p>
      <p>${t('content.silicaBenefits')}</p>

      <div class="highlight-box">
        <ul>
          <li>${t('content.silicaBenefit1')}</li>
          <li>${t('content.silicaBenefit2')}</li>
          <li>${t('content.silicaBenefit3')}</li>
          <li>${t('content.silicaBenefit4')}</li>
          <li>${t('content.silicaBenefit5')}</li>
        </ul>
      </div>

      <p>${t('content.silicaConstructionWorker')}</p>
      <p>${t('content.silicaAging')}</p>

      <div class="warning-box">
        <h4>${t('content.silicaShortageSigns')}</h4>
        <ul>
          <li>${t('content.silicaSign1')}</li>
          <li>${t('content.silicaSign2')}</li>
          <li>${t('content.silicaSign3')}</li>
          <li>${t('content.silicaSign4')}</li>
          <li>${t('content.silicaSign5')}</li>
        </ul>
      </div>

      <p>${t('content.silicaSources')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.shilajitSection')}</h3>
      <p>${t('content.shilajitIntro')}</p>
      <p>${t('content.shilajitFormation')}</p>

      <div class="step-box">
        <h4>${t('content.shilajitBenefits')}</h4>
        <ul>
          <li>${t('content.shilajitBenefit1')}</li>
          <li>${t('content.shilajitBenefit2')}</li>
          <li>${t('content.shilajitBenefit3')}</li>
          <li>${t('content.shilajitBenefit4')}</li>
          <li>${t('content.shilajitBenefit5')}</li>
        </ul>
      </div>

      <p>${t('content.shilajitMagic')}</p>

      <div class="key-points-box">
        <h4>${t('content.energyTimeline')}</h4>
        <ul>
          <li>${t('content.energyWeek1')}</li>
          <li>${t('content.energyWeek2')}</li>
          <li>${t('content.energyWeek3to4')}</li>
          <li>${t('content.energyMonth2')}</li>
        </ul>
      </div>

      <p>${t('content.immunityBoost')}</p>
      <p>${t('content.vitaminsComparison')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.scienceSection')}</h3>
      <p>${t('content.scienceIntro')}</p>

      <div class="step-box">
        <h4>${t('content.mitochondrialSupport')}</h4>
      </div>

      <div class="step-box">
        <h4>${t('content.antioxidantPowerhouse')}</h4>
      </div>

      <div class="step-box">
        <h4>${t('content.nutrientTransport')}</h4>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.comboSection')}</h3>
      <p>${t('content.comboIntro')}</p>

      <div class="tip-box">
        <h4>${t('content.dreamTeamBenefits')}</h4>
        <ul>
          <li>${t('content.comboBenefit1')}</li>
          <li>${t('content.comboBenefit2')}</li>
          <li>${t('content.comboBenefit3')}</li>
          <li>${t('content.comboBenefit4')}</li>
          <li>${t('content.comboBenefit5')}</li>
          <li>${t('content.comboBenefit6')}</li>
          <li>${t('content.comboBenefit7')}</li>
        </ul>
      </div>

      <p>${t('content.synergisticEffect')}</p>

      <div class="testimonial-box">
        <p><em>"${t('content.testimonial1')}"</em></p>
      </div>

      <div class="testimonial-box">
        <p><em>"${t('content.testimonial2')}"</em></p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.qualitySection')}</h3>
      <p>${t('content.qualityIntro')}</p>

      <div class="comparison-box">
        <div class="comparison-item">
          <h4>${t('content.silicaQuality')}</h4>
          <ul>
            <li>${t('content.silicaQuality1')}</li>
            <li>${t('content.silicaQuality2')}</li>
            <li>${t('content.silicaQuality3')}</li>
            <li>${t('content.silicaQuality4')}</li>
          </ul>
        </div>
        <div class="comparison-divider"></div>
        <div class="comparison-item">
          <h4>${t('content.shilajitQuality')}</h4>
          <ul>
            <li>${t('content.shilajitQuality1')}</li>
            <li>${t('content.shilajitQuality2')}</li>
            <li>${t('content.shilajitQuality3')}</li>
            <li>${t('content.shilajitQuality4')}</li>
          </ul>
        </div>
      </div>

      <div class="warning-box">
        <h4>${t('content.redFlags')}</h4>
        <ul>
          <li>${t('content.redFlag1')}</li>
          <li>${t('content.redFlag2')}</li>
          <li>${t('content.redFlag3')}</li>
          <li>${t('content.redFlag4')}</li>
        </ul>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.gettingStarted')}</h3>
      <p>${t('content.gettingStartedIntro')}</p>

      <div class="tip-box">
        <h4>${t('content.dosage')}</h4>
        <p>${t('content.shilajitDosage')}</p>
        <p>${t('content.routine')}</p>
      </div>

      <div class="tip-box">
        <h4>${t('content.timingMatters')}</h4>
        <ul>
          <li>${t('content.timing1')}</li>
          <li>${t('content.timing2')}</li>
          <li>${t('content.timing3')}</li>
          <li>${t('content.timing4')}</li>
        </ul>
      </div>

      <div class="key-points-box">
        <h4>${t('content.expectations')}</h4>
        <ul>
          <li>${t('content.expectation1')}</li>
          <li>${t('content.expectation2')}</li>
          <li>${t('content.expectation3')}</li>
          <li>${t('content.expectation4')}</li>
        </ul>
      </div>

      <div class="conclusion-box">
        <h3>${t('content.conclusion')}</h3>
      </div>
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

export default NewsDetail4;