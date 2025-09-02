import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import ImportantBox from './ImportantBox';
import styles from '../styles/BlogTypography.module.css';

const NewsDetail1 = () => {
  const { t } = useTranslation('news1');
  const router = useRouter();

  const newsItem = {
    id: 1,
    title: t('title', 'Your Energy is Vanishing and You Don\'t Even Know Why: The Hidden B-Vitamin Crisis'),
    description: t('description', 'Are you tired all the time? Brain fog hitting you like a truck? Your body might be screaming for help. Discover the hidden B-vitamin crisis that\'s draining your energy and how to fix it.'),
    image: "/images/NewsDetail1.jpg",
    date: t('date', 'December 15, 2024'),
    category: t('category', 'Energy & Wellness'),
    author: t('author', 'Nutriota Team'),
    readTime: t('readTime', '12 min read'),
    content: `
      <div class="section-divider"></div>
      <p>${t('content.intro', 'Are you tired all the time? Brain fog hitting you like a truck? Your body might be screaming for help.')}</p>
      <p>${t('content.shockingTruth', 'Here\'s the shocking truth: Extended cooking, food processing and excess alcohol consumption can destroy or reduce the availability of many of these vitamins. Your modern lifestyle is literally stealing your energy at the cellular level.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.silentThieves', 'The Silent Energy Thieves in Your Daily Life')}</h3>
      <p>${t('content.silentThievesText', 'Every morning latte, every late-night Netflix binge, every processed meal is quietly draining your B-vitamin reserves. Think about it:')}</p>

      <div class="highlight-box">
        <ul>
          <li><strong>${t('content.fastFood', 'That fast food lunch?')}</strong> ${t('content.fastFoodText', 'Loaded with empty calories but stripped of the B-vitamins your body desperately needs')}</li>
          <li><strong>${t('content.weekendDrinks', 'Weekend drinks with friends?')}</strong> ${t('content.weekendDrinksText', 'Alcohol is a B-vitamin destroyer, especially targeting B1, B6, and B12')}</li>
          <li><strong>${t('content.chronicStress', 'Chronic stress from work?')}</strong> ${t('content.chronicStressText', 'It burns through your B-vitamin stores faster than you can say "deadline"')}</li>
        </ul>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.powerSource', 'Why B-Vitamins Are Your Body\'s Power Source')}</h3>
      <p>${t('content.powerSourceText', 'Think of B-vitamins as your cellular spark plugs. Without them, your energy engine sputters and fails. Here\'s what each one does for you:')}</p>

      <div class="step-box">
        <h4>${t('content.b1', 'B1 (Thiamine) - Your brain\'s best friend')}</h4>
        <p>${t('content.b1Text', 'Keeps your nervous system sharp and your mind clear.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.b2', 'B2 (Riboflavin) - The energy converter')}</h4>
        <p>${t('content.b2Text', 'Turns your food into actual usable energy.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.b3', 'B3 (Niacin) - Your circulation hero')}</h4>
        <p>${t('content.b3Text', 'Keeps blood flowing and skin glowing.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.b5', 'B5 (Pantothenic Acid) - The stress buster')}</h4>
        <p>${t('content.b5Text', 'A higher intake of vitamin B5 could reduce the odds of COVID-19 by 47%')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.b6', 'B6 (Pyridoxine) - Your mood stabilizer')}</h4>
        <p>${t('content.b6Text', 'Essential for making the neurotransmitters that keep you happy.')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.warningSigns', 'The Warning Signs Your Body Is Sending')}</h3>
      <p>${t('content.warningSignsText', 'Your body is constantly sending you signals. Are you listening?')}</p>

      <div class="warning-box">
        <ul>
          <li>${t('content.sign1', 'Feeling exhausted even after 8 hours of sleep')}</li>
          <li>${t('content.sign2', 'Brain fog that makes simple tasks feel impossible')}</li>
          <li>${t('content.sign3', 'Mood swings that come out of nowhere')}</li>
          <li>${t('content.sign4', 'Muscle cramps and weird tingling sensations')}</li>
          <li>${t('content.sign5', 'Skin that looks dull and lifeless')}</li>
        </ul>
      </div>

      <p>${t('content.notJustAging', 'These aren\'t just "getting older" symptoms. They\'re your body\'s SOS signals.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.modernDiet', 'The Modern Diet Disaster')}</h3>
      <p>${t('content.modernDietText', 'In 2025, food trends are being driven in part by social media trends, and many Americans plan to start new eating patterns. But here\'s the problem: most trendy diets are missing the B-vitamin foundation your body needs.')}</p>
      <p>${t('content.processedFoods', 'Processed foods dominate our plates, but they\'re nutritional wastelands. That convenience comes at a devastating cost to your energy and vitality.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.comebackPlan', 'Your Energy Comeback Plan')}</h3>
      <p>${t('content.comebackPlanText', 'The good news? You can turn this around faster than you think. Your body is incredibly resilient when you give it what it needs.')}</p>

      <div class="tip-box">
        <h4>${t('content.startWithBComplex', 'Start with the full B-complex family')}</h4>
        <p>${t('content.startWithBComplexText', 'Don\'t pick favorites. Your body needs all of them working together like a well-oiled machine.')}</p>
      </div>

      <div class="tip-box">
        <h4>${t('content.timingMatters', 'Timing matters')}</h4>
        <p>${t('content.timingMattersText', 'Take B-vitamins in the morning. They\'re energizing and can interfere with sleep if taken too late.')}</p>
      </div>

      <div class="tip-box">
        <h4>${t('content.qualityCounts', 'Quality counts')}</h4>
        <p>${t('content.qualityCountsText', 'Look for forms your body can actually use. Cheap synthetic versions often pass right through you.')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.hiddenEpidemic', 'The Hidden Epidemic Nobody\'s Talking About')}</h3>
      <p>${t('content.hiddenEpidemicText', 'You\'re not alone in this struggle. Millions of people are walking around in a fog of fatigue, thinking it\'s just part of modern life. But here\'s what\'s really happening:')}</p>

      <div class="key-points-box">
        <h4>${t('content.perfectStorm', 'The Perfect Storm of Depletion:')}</h4>
        <ul>
          <li>${t('content.storm1', 'Ultra-processed foods stripped of natural B-vitamins during manufacturing')}</li>
          <li>${t('content.storm2', 'Chronic stress from work, relationships, and constant connectivity')}</li>
          <li>${t('content.storm3', 'Poor gut health preventing proper vitamin absorption')}</li>
          <li>${t('content.storm4', 'Medications that interfere with B-vitamin metabolism')}</li>
          <li>${t('content.storm5', 'Alcohol consumption that literally flushes these vitamins from your system')}</li>
        </ul>
      </div>

      <p>${t('content.notJustTired', 'This isn\'t just about being tired. This is about your brain, your heart, your nervous system, and your metabolism all crying out for help.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.dominoEffect', 'The Domino Effect of B-Vitamin Deficiency')}</h3>
      <p>${t('content.dominoEffectText', 'When your B-vitamins run low, everything starts falling apart in a predictable cascade:')}</p>

      <div class="step-box">
        <h4>${t('content.first', 'First: Your energy crashes')}</h4>
        <p>${t('content.firstText', 'Simple tasks become mountains to climb.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.then', 'Then: Your mood destabilizes')}</h4>
        <p>${t('content.thenText', 'Irritability, anxiety, and depression creep in.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.next', 'Next: Your brain fog thickens')}</h4>
        <p>${t('content.nextText', 'You can\'t think straight, remember names, or focus on important tasks.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.finally', 'Finally: Your body starts breaking down')}</h4>
        <p>${t('content.finallyText', 'Muscle weakness, digestive issues, and compromised immunity follow.')}</p>
      </div>

      <p>${t('content.goodNews', 'But here\'s the good news: this cascade can be reversed just as predictably.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.powerhouseBreakdown', 'The B-Vitamin Powerhouse Breakdown')}</h3>

      <div class="comparison-box">
        <div class="comparison-item">
          <h4>${t('content.b1Detailed', 'B1 (Thiamine) - The Energy Igniter')}</h4>
          <p>${t('content.b1DetailedText', 'Your cells can\'t convert carbs into energy without it. Low B1 equals instant fatigue and mental confusion. Alcohol is thiamine\'s biggest enemy, which explains why heavy drinkers often suffer from severe fatigue and "brain fog."')}</p>
        </div>
        <div class="comparison-divider"></div>
        <div class="comparison-item">
          <h4>${t('content.b2Detailed', 'B2 (Riboflavin) - The Cellular Energizer')}</h4>
          <p>${t('content.b2DetailedText', 'This vitamin literally lights up your cells\' energy factories. Without enough B2, you feel like your internal battery is constantly dying. It\'s also crucial for healthy skin, eyes, and red blood cells.')}</p>
        </div>
      </div>

      <div class="comparison-box">
        <div class="comparison-item">
          <h4>${t('content.b3Detailed', 'B3 (Niacin) - The Circulation Hero')}</h4>
          <p>${t('content.b3DetailedText', 'Poor circulation? Cold hands and feet? Mental sluggishness? B3 deficiency could be the culprit. This vitamin keeps your blood flowing and your brain sharp.')}</p>
        </div>
        <div class="comparison-divider"></div>
        <div class="comparison-item">
          <h4>${t('content.b5Detailed', 'B5 (Pantothenic Acid) - The Stress Shield')}</h4>
          <p>${t('content.b5DetailedText', 'Your adrenal glands devour B5 when you\'re under stress. Without adequate levels, stress becomes overwhelming, and your body can\'t produce the hormones needed to cope with daily challenges.')}</p>
        </div>
      </div>

      <div class="comparison-box">
        <div class="comparison-item">
          <h4>${t('content.b6Detailed', 'B6 (Pyridoxine) - The Mood Master')}</h4>
          <p>${t('content.b6DetailedText', 'This is your brain\'s best friend for making serotonin, dopamine, and other feel-good chemicals. Low B6 often shows up as depression, irritability, and sleep problems.')}</p>
        </div>
        <div class="comparison-divider"></div>
        <div class="comparison-item">
          <h4>${t('content.b12Detailed', 'B12 - The Nerve Protector')}</h4>
          <p>${t('content.b12DetailedText', 'Perhaps the most famous B-vitamin, B12 keeps your nervous system intact and your mind sharp. Deficiency can mimic serious neurological conditions and is epidemic among older adults.')}</p>
        </div>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.modernLifeDestroyers', 'The Modern Life B-Vitamin Destroyers')}</h3>

      <div class="warning-box">
        <h4>${t('content.coffeeHabit', 'Your Morning Coffee Habit')}</h4>
        <p>${t('content.coffeeHabitText', 'That daily caffeine fix? It\'s accelerating B-vitamin depletion. Caffeine acts as a diuretic, flushing water-soluble B-vitamins right out of your system.')}</p>

        <h4>${t('content.wineWindDown', 'Your Evening Wine Wind-Down')}</h4>
        <p>${t('content.wineWindDownText', 'Alcohol doesn\'t just block B-vitamin absorption - it actively destroys them. One glass of wine can deplete your B1 stores for hours.')}</p>

        <h4>${t('content.processedConvenience', 'Your Processed Food Convenience')}</h4>
        <p>${t('content.processedConvenienceText', 'That grab-and-go breakfast bar, frozen dinner, or fast-food lunch? They\'re nutritional black holes that demand B-vitamins for digestion but provide none in return.')}</p>

        <h4>${t('content.highStressLifestyle', 'Your High-Stress Lifestyle')}</h4>
        <p>${t('content.highStressLifestyleText', 'Every deadline, argument, or worry literally burns through your B-vitamin reserves like fuel in a fire.')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.thirtyDayRevolution', 'The 30-Day Energy Revolution Protocol')}</h3>

      <div class="step-box">
        <h4>${t('content.week1', 'Week 1: The Foundation')}</h4>
        <p>${t('content.week1Text', 'Your body starts rebuilding its B-vitamin stores. Sleep begins improving first - you\'ll notice falling asleep easier and waking up less groggy.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.week2', 'Week 2: The Momentum')}</h4>
        <p>${t('content.week2Text', 'Energy levels stabilize throughout the day. That 3 PM crash becomes less severe, then disappears entirely. Mental clarity sharpens noticeably.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.week3', 'Week 3: The Transformation')}</h4>
        <p>${t('content.week3Text', 'Mood swings level out. You feel more emotionally resilient and less reactive to stress. People start commenting on how much better you look.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.week4', 'Week 4: The New You')}</h4>
        <p>${t('content.week4Text', 'Sustained energy becomes your new normal. You\'re sleeping better, thinking clearer, and feeling more like your best self than you have in years.')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.realStories', 'Real Stories from Real People')}</h3>

      <div class="testimonial-box">
        <p><em>"${t('content.testimonial1', 'I thought I was just getting older and had to accept being tired all the time. After three weeks on a complete B-complex, I feel like I got my life back. I wake up energized and stay sharp all day long."')}</em> - ${t('content.sarah', 'Sarah, 42')}</p>
      </div>

      <div class="testimonial-box">
        <p><em>"${t('content.testimonial2', 'My doctor said my blood work was "normal," but I felt anything but normal. Adding B-vitamins changed everything. My anxiety decreased, my focus improved, and I actually have energy for my kids after work now."')}</em> - ${t('content.mike', 'Mike, 38')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.qualityGameChanger', 'The Quality Game-Changer')}</h3>
      <p>${t('content.qualityGameChangerText', 'Not all B-vitamin supplements are created equal. Here\'s what separates the life-changing formulas from the useless imposters:')}</p>

      <div class="key-points-box">
        <ul>
          <li><strong>${t('content.bioavailableForms', 'Bioavailable Forms:')}</strong> ${t('content.bioavailableFormsText', 'Look for methylated B-vitamins that your body can actually use, not cheap synthetic versions that pass right through you.')}</li>
          <li><strong>${t('content.properRatios', 'Proper Ratios:')}</strong> ${t('content.properRatiosText', 'B-vitamins work as a team. Taking high doses of one can create imbalances with the others.')}</li>
          <li><strong>${t('content.thirdPartyTesting', 'Third-Party Testing:')}</strong> ${t('content.thirdPartyTestingText', 'Your supplement should be tested for purity and potency by an independent lab.')}</li>
          <li><strong>${t('content.noFillers', 'No Fillers or Junk:')}</strong> ${t('content.noFillersText', 'Artificial colors, unnecessary binding agents, and allergens have no place in a premium formula.')}</li>
        </ul>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.investmentPays', 'The Investment That Pays Dividends')}</h3>
      <p>${t('content.investmentPaysText', 'Think about what low energy is really costing you:')}</p>

      <div class="warning-box">
        <ul>
          <li>${t('content.cost1', 'Missed opportunities because you\'re too tired to pursue them')}</li>
          <li>${t('content.cost2', 'Relationship strain from irritability and low mood')}</li>
          <li>${t('content.cost3', 'Career limitations from poor focus and productivity')}</li>
          <li>${t('content.cost4', 'Health problems from a compromised immune system')}</li>
          <li>${t('content.cost5', 'Lost enjoyment of hobbies and activities you used to love')}</li>
        </ul>
      </div>

      <p>${t('content.lessThanCoffee', 'A quality B-complex supplement costs less than a daily coffee habit, but the returns - in energy, mood, and quality of life - are immeasurable.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.dontLetSlip', 'Don\'t Let Another Day Slip Away')}</h3>
      <p>${t('content.dontLetSlipText', 'Your energy is your most precious resource. Every day you delay is another day of feeling less than your best, another day of your body struggling to function optimally without the nutrients it desperately needs.')}</p>

      <p>${t('content.stopAccepting', 'Stop accepting fatigue as your new normal. Stop blaming your busy schedule for your exhaustion. Stop thinking that feeling tired, foggy, and overwhelmed is just part of getting older.')}</p>

      <p>${t('content.bodyTrying', 'Your body has been trying to tell you something important, and now you know how to listen. The solution isn\'t complicated, expensive, or time-consuming. It\'s as simple as giving your cells the B-vitamins they need to create the energy you deserve.')}</p>

      <p>${t('content.researchClear', 'The research is clear. The testimonials are compelling. The only question remaining is: Are you ready to feel amazing again?')}</p>

      <div class="conclusion-box">
        <h3>${t('content.futureSelf', 'Your Future Energized Self is Counting on You')}</h3>
        <p>${t('content.futureSelfText', 'Your future energized self is counting on the decision you make today. Choose vitality. Choose clarity. Choose the B-vitamin advantage.')}</p>
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
          {t('backToNews', 'Back to News')}
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
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
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
            {t('discoverMore', 'Discover More Health Tips and Wellness Articles')}
          </h3>
          <button 
            onClick={() => router.push('/news')}
            className="bg-[#0089CF] text-white px-6 py-3 rounded-lg hover:bg-[#0074B7] transition-colors font-semibold"
          >
            {t('backToMainNews', 'Back to the Main News Page')}
          </button>
        </div>
      </div>


    </div>
  );
};

export default NewsDetail1;