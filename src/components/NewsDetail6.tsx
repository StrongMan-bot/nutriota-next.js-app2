import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import ImportantBox from './ImportantBox';
import styles from '../styles/BlogTypography.module.css';

const NewsDetail6 = () => {
  const { t } = useTranslation('news6');
  const router = useRouter();

  const newsItem = {
    id: 6,
    title: t('title'),
    description: t('description'),
    image: "/images/NewsDetail6.jpg",
    date: t('date'),
    category: t('category'),
    author: t('author'),
    readTime: t('readTime'),
    content: `
      <p>${t('content.intro')}</p>

      <h3>${t('content.mentalHealthCrisis.title')}</h3>
      <p>${t('content.mentalHealthCrisis.text1')}</p>
      <p>${t('content.mentalHealthCrisis.text2')}</p>

      <h3>${t('content.brainFactory.title')}</h3>
      <p>${t('content.brainFactory.text1')}</p>
      
      <h4>${t('content.brainFactory.whatB6Does.title')}</h4>
      <ul>
        <li>${t('content.brainFactory.whatB6Does.list.0')}</li>
        <li>${t('content.brainFactory.whatB6Does.list.1')}</li>
        <li>${t('content.brainFactory.whatB6Does.list.2')}</li>
        <li>${t('content.brainFactory.whatB6Does.list.3')}</li>
        <li>${t('content.brainFactory.whatB6Does.list.4')}</li>
        <li>${t('content.brainFactory.whatB6Does.list.5')}</li>
      </ul>
      
      <p>${t('content.brainFactory.text2')}</p>
      
      <h4>${t('content.brainFactory.neurotransmitter.title')}</h4>
      <p>${t('content.brainFactory.neurotransmitter.text')}</p>
      <ul>
        <li>${t('content.brainFactory.neurotransmitter.list.0')}</li>
        <li>${t('content.brainFactory.neurotransmitter.list.1')}</li>
        <li>${t('content.brainFactory.neurotransmitter.list.2')}</li>
        <li>${t('content.brainFactory.neurotransmitter.list.3')}</li>
      </ul>

      <h3>${t('content.modernCrisis.title')}</h3>
      <p>${t('content.modernCrisis.text')}</p>
      
      <h4>${t('content.modernCrisis.signs.title')}</h4>
      <ul>
        <li>${t('content.modernCrisis.signs.list.0')}</li>
        <li>${t('content.modernCrisis.signs.list.1')}</li>
        <li>${t('content.modernCrisis.signs.list.2')}</li>
        <li>${t('content.modernCrisis.signs.list.3')}</li>
        <li>${t('content.modernCrisis.signs.list.4')}</li>
        <li>${t('content.modernCrisis.signs.list.5')}</li>
        <li>${t('content.modernCrisis.signs.list.6')}</li>
        <li>${t('content.modernCrisis.signs.list.7')}</li>
      </ul>
      
      <h4>${t('content.modernCrisis.hiddenDepression.title')}</h4>
      <p>${t('content.modernCrisis.hiddenDepression.text')}</p>
      <ul>
        <li>${t('content.modernCrisis.hiddenDepression.list.0')}</li>
        <li>${t('content.modernCrisis.hiddenDepression.list.1')}</li>
        <li>${t('content.modernCrisis.hiddenDepression.list.2')}</li>
        <li>${t('content.modernCrisis.hiddenDepression.list.3')}</li>
      </ul>

      <h3>${t('content.pmsConnection.title')}</h3>
      <p>${t('content.pmsConnection.text')}</p>
      
      <h4>${t('content.pmsConnection.helps.title')}</h4>
      <ul>
        <li>${t('content.pmsConnection.helps.list.0')}</li>
        <li>${t('content.pmsConnection.helps.list.1')}</li>
        <li>${t('content.pmsConnection.helps.list.2')}</li>
        <li>${t('content.pmsConnection.helps.list.3')}</li>
        <li>${t('content.pmsConnection.helps.list.4')}</li>
        <li>${t('content.pmsConnection.helps.list.5')}</li>
        <li>${t('content.pmsConnection.helps.list.6')}</li>
      </ul>
      
      <h4>${t('content.pmsConnection.hormoneBalance.title')}</h4>
      <p>${t('content.pmsConnection.hormoneBalance.text')}</p>
      <ul>
        <li>${t('content.pmsConnection.hormoneBalance.list.0')}</li>
        <li>${t('content.pmsConnection.hormoneBalance.list.1')}</li>
        <li>${t('content.pmsConnection.hormoneBalance.list.2')}</li>
        <li>${t('content.pmsConnection.hormoneBalance.list.3')}</li>
        <li>${t('content.pmsConnection.hormoneBalance.list.4')}</li>
      </ul>
      
      <h4>${t('content.pmsConnection.birthControl.title')}</h4>
      <p>${t('content.pmsConnection.birthControl.text')}</p>

      <h3>${t('content.stressB6.title')}</h3>
      <p>${t('content.stressB6.text')}</p>
      
      <h4>${t('content.stressB6.optimalLevels.title')}</h4>
      <ul>
        <li>${t('content.stressB6.optimalLevels.list.0')}</li>
        <li>${t('content.stressB6.optimalLevels.list.1')}</li>
        <li>${t('content.stressB6.optimalLevels.list.2')}</li>
        <li>${t('content.stressB6.optimalLevels.list.3')}</li>
        <li>${t('content.stressB6.optimalLevels.list.4')}</li>
        <li>${t('content.stressB6.optimalLevels.list.5')}</li>
      </ul>
      
      <p>${t('content.stressB6.stressCycle')}</p>

      <h3>${t('content.sleepConnection.title')}</h3>
      <p>${t('content.sleepConnection.text')}</p>
      
      <h4>${t('content.sleepConnection.problems.title')}</h4>
      <ul>
        <li>${t('content.sleepConnection.problems.list.0')}</li>
        <li>${t('content.sleepConnection.problems.list.1')}</li>
        <li>${t('content.sleepConnection.problems.list.2')}</li>
        <li>${t('content.sleepConnection.problems.list.3')}</li>
        <li>${t('content.sleepConnection.problems.list.4')}</li>
        <li>${t('content.sleepConnection.problems.list.5')}</li>
      </ul>

      <h3>${t('content.timeline.title')}</h3>
      <p><strong>${t('content.timeline.week1.title')}</strong> ${t('content.timeline.week1.text')}</p>
      <p><strong>${t('content.timeline.week2.title')}</strong> ${t('content.timeline.week2.text')}</p>
      <p><strong>${t('content.timeline.month2.title')}</strong> ${t('content.timeline.month2.text')}</p>
      <p><strong>${t('content.timeline.month3.title')}</strong> ${t('content.timeline.month3.text')}</p>
      
      <p>${t('content.timeline.energyBoost')}</p>

      <h3>${t('content.gettingB6Right.title')}</h3>
      
      <h4>${t('content.gettingB6Right.foods.title')}</h4>
      <ul>
        <li>${t('content.gettingB6Right.foods.list.0')}</li>
        <li>${t('content.gettingB6Right.foods.list.1')}</li>
        <li>${t('content.gettingB6Right.foods.list.2')}</li>
        <li>${t('content.gettingB6Right.foods.list.3')}</li>
        <li>${t('content.gettingB6Right.foods.list.4')}</li>
        <li>${t('content.gettingB6Right.foods.list.5')}</li>
        <li>${t('content.gettingB6Right.foods.list.6')}</li>
      </ul>
      
      <h4>${t('content.gettingB6Right.absorption.title')}</h4>
      <p>${t('content.gettingB6Right.absorption.text')}</p>
      <ul>
        <li>${t('content.gettingB6Right.absorption.list.0')}</li>
        <li>${t('content.gettingB6Right.absorption.list.1')}</li>
        <li>${t('content.gettingB6Right.absorption.list.2')}</li>
        <li>${t('content.gettingB6Right.absorption.list.3')}</li>
      </ul>
      
      <p>${t('content.gettingB6Right.supplementStrategy')}</p>
      <p>${t('content.gettingB6Right.proTip')}</p>
      
      <h4>${t('content.gettingB6Right.timing.title')}</h4>
      <ul>
        <li>${t('content.gettingB6Right.timing.list.0')}</li>
        <li>${t('content.gettingB6Right.timing.list.1')}</li>
        <li>${t('content.gettingB6Right.timing.list.2')}</li>
      </ul>

      <h3>${t('content.realTalk.title')}</h3>
      <p>${t('content.realTalk.text1')}</p>
      <p>${t('content.realTalk.text2')}</p>
      
      <h4>${t('content.realTalk.costIgnoring.title')}</h4>
      <p>${t('content.realTalk.costIgnoring.text')}</p>
      
      <h4>${t('content.realTalk.rippleEffect.title')}</h4>
      <p>${t('content.realTalk.rippleEffect.text')}</p>
      <ul>
        <li>${t('content.realTalk.rippleEffect.list.0')}</li>
        <li>${t('content.realTalk.rippleEffect.list.1')}</li>
        <li>${t('content.realTalk.rippleEffect.list.2')}</li>
        <li>${t('content.realTalk.rippleEffect.list.3')}</li>
        <li>${t('content.realTalk.rippleEffect.list.4')}</li>
        <li>${t('content.realTalk.rippleEffect.list.5')}</li>
      </ul>
      
      <p>${t('content.realTalk.finalThought1')}</p>
      <p>${t('content.realTalk.finalThought2')}</p>

      <h3>${t('content.warningSigns.title')}</h3>
      <p>${t('content.warningSigns.intro')}</p>
      
      <h4>${t('content.warningSigns.physical.title')}</h4>
      <ul>
        <li>${t('content.warningSigns.physical.list.0')}</li>
        <li>${t('content.warningSigns.physical.list.1')}</li>
        <li>${t('content.warningSigns.physical.list.2')}</li>
        <li>${t('content.warningSigns.physical.list.3')}</li>
        <li>${t('content.warningSigns.physical.list.4')}</li>
        <li>${t('content.warningSigns.physical.list.5')}</li>
        <li>${t('content.warningSigns.physical.list.6')}</li>
      </ul>
      
      <h4>${t('content.warningSigns.emotional.title')}</h4>
      <ul>
        <li>${t('content.warningSigns.emotional.list.0')}</li>
        <li>${t('content.warningSigns.emotional.list.1')}</li>
        <li>${t('content.warningSigns.emotional.list.2')}</li>
        <li>${t('content.warningSigns.emotional.list.3')}</li>
        <li>${t('content.warningSigns.emotional.list.4')}</li>
        <li>${t('content.warningSigns.emotional.list.5')}</li>
      </ul>
      
      <h4>${t('content.warningSigns.cognitive.title')}</h4>
      <ul>
        <li>${t('content.warningSigns.cognitive.list.0')}</li>
        <li>${t('content.warningSigns.cognitive.list.1')}</li>
        <li>${t('content.warningSigns.cognitive.list.2')}</li>
        <li>${t('content.warningSigns.cognitive.list.3')}</li>
        <li>${t('content.warningSigns.cognitive.list.4')}</li>
      </ul>

      <h3>${t('content.depressionConnection.title')}</h3>
      <p>${t('content.depressionConnection.text1')}</p>
      <p>${t('content.depressionConnection.text2')}</p>
      <p>${t('content.depressionConnection.text3')}</p>

      <h3>${t('content.actionPlan.title')}</h3>
      
      <h4>${t('content.actionPlan.step1.title')}</h4>
      <p>${t('content.actionPlan.step1.text')}</p>
      <ul>
        <li>${t('content.actionPlan.step1.list.0')}</li>
        <li>${t('content.actionPlan.step1.list.1')}</li>
        <li>${t('content.actionPlan.step1.list.2')}</li>
        <li>${t('content.actionPlan.step1.list.3')}</li>
        <li>${t('content.actionPlan.step1.list.4')}</li>
      </ul>
      
      <h4>${t('content.actionPlan.step2.title')}</h4>
      <ul>
        <li>${t('content.actionPlan.step2.list.0')}</li>
        <li>${t('content.actionPlan.step2.list.1')}</li>
        <li>${t('content.actionPlan.step2.list.2')}</li>
        <li>${t('content.actionPlan.step2.list.3')}</li>
      </ul>
      
      <h4>${t('content.actionPlan.step3.title')}</h4>
      <ul>
        <li>${t('content.actionPlan.step3.list.0')}</li>
        <li>${t('content.actionPlan.step3.list.1')}</li>
        <li>${t('content.actionPlan.step3.list.2')}</li>
        <li>${t('content.actionPlan.step3.list.3')}</li>
      </ul>
      
      <h4>${t('content.actionPlan.step4.title')}</h4>
      <ul>
        <li>${t('content.actionPlan.step4.list.0')}</li>
        <li>${t('content.actionPlan.step4.list.1')}</li>
        <li>${t('content.actionPlan.step4.list.2')}</li>
      </ul>

      <h3>${t('content.nextSteps.title')}</h3>
      <ul>
        <li><strong>${t('content.nextSteps.list.0').split(':')[0]}:</strong> ${t('content.nextSteps.list.0').split(':')[1]}</li>
        <li><strong>${t('content.nextSteps.list.1').split(':')[0]}:</strong> ${t('content.nextSteps.list.1').split(':')[1]}</li>
        <li><strong>${t('content.nextSteps.list.2').split(':')[0]}:</strong> ${t('content.nextSteps.list.2').split(':')[1]}</li>
        <li><strong>${t('content.nextSteps.list.3').split(':')[0]}:</strong> ${t('content.nextSteps.list.3').split(':')[1]}</li>
        <li><strong>${t('content.nextSteps.list.4').split(':')[0]}:</strong> ${t('content.nextSteps.list.4').split(':')[1]}</li>
      </ul>

      <h3>${t('content.conclusion.title')}</h3>
      <p>${t('content.conclusion.text')}</p>
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

export default NewsDetail6;