import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import ImportantBox from './ImportantBox';
import styles from '../styles/BlogTypography.module.css';

const NewsDetail2 = () => {
  const { t } = useTranslation('news2');
  const router = useRouter();

  const newsItem = {
    id: 2,
    title: t('title'),
    description: t('description'),
    image: "/images/NewsDetail2.jpg",
    date: t('date'),
    category: t('category'),
    author: t('author'),
    readTime: t('readTime'),
    content: `
      <div class="section-divider"></div>
      <p>${t('content.intro', 'While you\'re struggling with slow recovery and plateaued gains, the pros have been using this simple 3-ingredient formula to unlock their genetic potential.')}</p>
      <p>${t('content.question', 'You train hard. You eat clean. You get your sleep. But you\'re still watching others blow past you in strength and muscle gains. What are they doing that you\'re not?')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.missingLink', 'The Missing Link in Your Training Arsenal')}</h3>
      <p>${t('content.missingLinkText', 'Research reveals a growing trend of strength training, HIIT, and functional workouts among younger generations, but here\'s what most people miss: training is only half the equation. Recovery is where the real magic happens.')}</p>
      <p>${t('content.meetZMA', 'Meet ZMA - the powerhouse combination of Zinc, Magnesium, and Vitamin B6 that\'s been quietly transforming athletes\' performance for decades.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.bodyBetraying', 'Why Your Body is Betraying Your Hard Work')}</h3>
      <p>${t('content.bodyBetrayingText', 'Every brutal training session depletes your body of crucial minerals. You\'re literally sweating out your gains:')}</p>

      <div class="highlight-box">
        <ul>
          <li><strong>${t('content.zinc', 'Zinc')}</strong> - ${t('content.zincDesc', 'Essential for testosterone production and muscle repair')}</li>
          <li><strong>${t('content.magnesium', 'Magnesium')}</strong> - ${t('content.magnesiumDesc', 'Critical for muscle function and deep recovery sleep')}</li>
          <li><strong>${t('content.b6', 'Vitamin B6')}</strong> - ${t('content.b6Desc', 'The catalyst that makes everything work together')}</li>
        </ul>
      </div>

      <p>${t('content.ferrari', 'Without these, you\'re like a Ferrari running on regular gas. You\'ll move, but you\'ll never reach your full potential.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.scientificBreakthrough', 'The Scientific Breakthrough That Changes Everything')}</h3>
      <p>${t('content.scientificBreakthroughText', 'A groundbreaking study from 2000 looked at 27 football players over two months and found that daily ZMA supplements significantly increased muscle strength and power, as well as testosterone levels. These weren\'t weekend warriors - these were elite athletes pushing their bodies to the limit.')}</p>

      <div class="key-points-box">
        <h4>${t('content.results', 'The results were undeniable:')}</h4>
        <ul>
          <li>${t('content.result1', 'Significant increases in testosterone')}</li>
          <li>${t('content.result2', 'Boosted IGF-1 levels (your natural growth hormone)')}</li>
          <li>${t('content.result3', 'Measurable strength gains beyond training alone')}</li>
        </ul>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.whatHappensSleep', 'What Really Happens When You Sleep')}</h3>
      <p>${t('content.whatHappensSleepText', 'Here\'s what most people don\'t understand: your muscles don\'t grow in the gym. They grow while you sleep. ZMA transforms your recovery by:')}</p>

      <div class="step-box">
        <h4>${t('content.enhancingSleep', 'Enhancing Deep Sleep')}</h4>
        <p>${t('content.enhancingSleepText', 'The magical REM phase where growth hormone peaks')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.optimizingTestosterone', 'Optimizing Testosterone')}</h4>
        <p>${t('content.optimizingTestosteroneText', 'Especially powerful for men with zinc deficiency')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.acceleratingRepair', 'Accelerating Muscle Repair')}</h4>
        <p>${t('content.acceleratingRepairText', 'Your body becomes a recovery machine')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.reducingStress', 'Reducing Exercise-Induced Stress')}</h4>
        <p>${t('content.reducingStressText', 'Less cortisol, more gains')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.performanceEdge', 'The Performance Edge You\'ve Been Missing')}</h3>
      <p>${t('content.performanceEdgeText', 'While your competition is struggling with:')}</p>

      <div class="warning-box">
        <ul>
          <li>${t('content.struggle1', 'Sluggish recovery between workouts')}</li>
          <li>${t('content.struggle2', 'Plateau after plateau in strength gains')}</li>
          <li>${t('content.struggle3', 'Poor sleep quality sabotaging their progress')}</li>
          <li>${t('content.struggle4', 'Low energy during intense training phases')}</li>
        </ul>
      </div>

      <p>${t('content.youCouldBe', 'You could be experiencing:')}</p>

      <div class="tip-box">
        <ul>
          <li>${t('content.experience1', 'Faster recovery times that let you train harder, more often')}</li>
          <li>${t('content.experience2', 'Strength gains that leave others wondering what changed')}</li>
          <li>${t('content.experience3', 'Deep, restorative sleep that has you waking up refreshed')}</li>
          <li>${t('content.experience4', 'Sustained energy throughout your most demanding workouts')}</li>
        </ul>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.eliteSecret', 'The Elite Performance Secret They Don\'t Want You to Know')}</h3>
      <p>${t('content.eliteSecretText', 'Walk into any professional locker room and you\'ll find athletes obsessing over the tiniest details. They\'ll spend thousands on massage therapists, recovery boots, and cutting-edge training equipment. But the biggest performance enhancer might be sitting in a simple bottle containing three humble minerals.')}</p>
      <p>${t('content.zmaNotGlamorous', 'ZMA isn\'t glamorous. It doesn\'t promise instant results or miraculous transformations. But for those who understand the science of recovery, it\'s non-negotiable.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.hiddenCrisis', 'The Hidden Recovery Crisis')}</h3>
      <p>${t('content.hiddenCrisisText', 'Here\'s what\'s happening in your body after every intense workout:')}</p>

      <div class="comparison-box">
        <div class="comparison-item">
          <h4>${t('content.zincLoss', 'Zinc Loss Through Sweat')}</h4>
          <p>${t('content.zincLossText', 'You can lose up to 3mg of zinc in a single training session. That doesn\'t sound like much until you realize it represents 27% of your daily needs.')}</p>
        </div>
        <div class="comparison-divider"></div>
        <div class="comparison-item">
          <h4>${t('content.magnesiumDepletion', 'Magnesium Depletion')}</h4>
          <p>${t('content.magnesiumDepletionText', 'Stress, both physical and mental, burns through magnesium like fuel in a race car. Athletes need up to 20% more magnesium than sedentary people.')}</p>
        </div>
      </div>

      <div class="comparison-box">
        <div class="comparison-item">
          <h4>${t('content.b6Burnout', 'B6 Burnout')}</h4>
          <p>${t('content.b6BurnoutText', 'This vitamin is crucial for protein synthesis - the very process that builds muscle. Without adequate B6, you\'re lifting weights but not building strength.')}</p>
        </div>
        <div class="comparison-divider"></div>
        <div class="comparison-item">
          <h4>${t('content.cruelIrony', 'The Cruel Irony')}</h4>
          <p>${t('content.cruelIronyText', 'The harder you train, the more you deplete the very nutrients needed to recover from that training.')}</p>
        </div>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.zincFactor', 'The Zinc Factor: Your Testosterone\'s Best Friend')}</h3>
      <p>${t('content.zincFactorText', 'Zinc isn\'t just another mineral - it\'s the raw material for testosterone production. Research shows that even mild zinc deficiency can tank testosterone levels by up to 75%.')}</p>
      <p>${t('content.thinkAboutMoment', 'Think about that for a moment: you could be training perfectly, eating clean, and getting adequate sleep, but if your zinc is low, your hormonal foundation for muscle growth is crumbling.')}</p>

      <div class="key-points-box">
        <h4>${t('content.zincTestosterone', 'The Zinc-Testosterone Connection:')}</h4>
        <ul>
          <li>${t('content.connection1', 'Zinc is required for the enzymatic conversion that creates testosterone')}</li>
          <li>${t('content.connection2', 'Athletes lose significant zinc through sweat during intense training')}</li>
          <li>${t('content.connection3', 'Low zinc = low testosterone = poor recovery and strength gains')}</li>
          <li>${t('content.connection4', 'Optimal zinc = optimized natural testosterone production')}</li>
        </ul>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.magnesiumMaster', 'Magnesium: The Muscle Relaxation Master')}</h3>
      <p>${t('content.magnesiumMasterText', 'If zinc is about power, magnesium is about recovery. This mineral is involved in over 300 enzymatic reactions in your body, but for athletes, its role in muscle function is critical.')}</p>

      <div class="step-box">
        <h4>${t('content.magnesiumDoes', 'What Magnesium Does for Your Performance:')}</h4>
        <ul>
          <li>${t('content.magnesiumBenefit1', 'Regulates muscle contractions and prevents cramping')}</li>
          <li>${t('content.magnesiumBenefit2', 'Activates the parasympathetic nervous system for deep recovery')}</li>
          <li>${t('content.magnesiumBenefit3', 'Improves sleep quality by regulating melatonin')}</li>
          <li>${t('content.magnesiumBenefit4', 'Reduces inflammation and oxidative stress from training')}</li>
          <li>${t('content.magnesiumBenefit5', 'Enhances insulin sensitivity for better nutrient uptake')}</li>
        </ul>
      </div>

      <p>${t('content.withoutMagnesium', 'Without adequate magnesium, you\'re fighting your own recovery every single night.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.b6Catalyst', 'Vitamin B6: The Protein Synthesis Catalyst')}</h3>
      <p>${t('content.b6CatalystText', 'B6 might be the most underrated component of the ZMA formula, but it\'s absolutely essential for anyone serious about building muscle.')}</p>

      <div class="step-box">
        <h4>${t('content.b6Role', 'B6\'s Role in Muscle Building:')}</h4>
        <ul>
          <li>${t('content.b6Benefit1', 'Converts amino acids into usable proteins')}</li>
          <li>${t('content.b6Benefit2', 'Regulates growth hormone release during sleep')}</li>
          <li>${t('content.b6Benefit3', 'Supports neurotransmitter production for better training focus')}</li>
          <li>${t('content.b6Benefit4', 'Helps transport and utilize the other nutrients in the ZMA formula')}</li>
        </ul>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.sleepTriangle', 'The Sleep-Testosterone-Recovery Triangle')}</h3>
      <p>${t('content.sleepTriangleText', 'Here\'s where ZMA becomes truly powerful: these three nutrients work together to optimize the sleep-testosterone-recovery cycle that determines whether you build muscle or just break it down.')}</p>

      <div class="step-box">
        <h4>${t('content.stage1', 'Stage 1 - Deep Sleep Induction')}</h4>
        <p>${t('content.stage1Text', 'Magnesium activates your parasympathetic nervous system, shifting your body into recovery mode and promoting the deep sleep stages where magic happens.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.stage2', 'Stage 2 - Growth Hormone Release')}</h4>
        <p>${t('content.stage2Text', 'During deep sleep, your pituitary gland releases growth hormone in powerful pulses. B6 supports this process while zinc ensures optimal hormone production.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.stage3', 'Stage 3 - Testosterone Optimization')}</h4>
        <p>${t('content.stage3Text', 'Your body produces most of its testosterone during sleep. Zinc provides the raw materials, while magnesium ensures the deep sleep necessary for maximum production.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.stage4', 'Stage 4 - Muscle Protein Synthesis')}</h4>
        <p>${t('content.stage4Text', 'With optimal hormone levels and deep recovery sleep, your body shifts into muscle-building mode, using B6 to convert amino acids into new muscle tissue.')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.researchProves', 'The Research That Proves Everything')}</h3>
      <p>${t('content.researchProvesText', 'The landmark study that put ZMA on the map involved 27 NCAA football players during their spring training - a brutal period of twice-daily workouts and maximum physical stress.')}</p>

      <div class="key-points-box">
        <h4>${t('content.resultsUndeniable', 'The Results Were Undeniable:')}</h4>
        <ul>
          <li>${t('content.researchResult1', '32.4% increase in testosterone levels')}</li>
          <li>${t('content.researchResult2', '13.8% increase in IGF-1 (growth hormone)')}</li>
          <li>${t('content.researchResult3', 'Significant improvements in training performance')}</li>
          <li>${t('content.researchResult4', 'Better sleep quality and recovery markers')}</li>
        </ul>
      </div>

      <p>${t('content.compellingStudy', 'But here\'s what makes this study so compelling: the placebo group actually saw their testosterone levels DROP by 10.2% during the same training period. While the ZMA group was getting stronger and more hormonal optimized, the control group was getting more depleted and overtrained.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.twentyOneDay', 'The 21-Day Transformation Timeline')}</h3>

      <div class="step-box">
        <h4>${t('content.days1to7', 'Days 1-7: The Sleep Revolution')}</h4>
        <p>${t('content.days1to7Text', 'The magnesium kicks in first. You\'ll notice falling asleep faster, sleeping deeper, and waking up more refreshed. This foundation sets the stage for everything else.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.days8to14', 'Days 8-14: The Strength Surge')}</h4>
        <p>${t('content.days8to14Text', 'With better recovery comes better performance. You\'ll start hitting weights that felt heavy the week before. Recovery between sets improves noticeably.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.days15to21', 'Days 15-21: The Hormone Optimization')}</h4>
        <p>${t('content.days15to21Text', 'This is when the testosterone and growth hormone benefits compound. Muscle definition improves, strength gains accelerate, and that feeling of being "dialed in" becomes your new normal.')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.realAthletes', 'Real Athletes, Real Results')}</h3>

      <div class="testimonial-box">
        <p><em>"${t('content.testimonial1', 'I\'ve tried every supplement under the sun, but ZMA was different. Within two weeks, my recovery improved so much that I could train legs twice a week instead of once. My squat went up 30 pounds in a month.')}"</em> - ${t('content.marcus', 'Marcus, competitive powerlifter')}</p>
      </div>

      <div class="testimonial-box">
        <p><em>"${t('content.testimonial2', 'As a female athlete, I wasn\'t sure ZMA would work for me. But the sleep and recovery benefits were incredible. I stopped getting those overtraining symptoms and started hitting PRs again.')}"</em> - ${t('content.jessica', 'Jessica, CrossFit competitor')}</p>
      </div>

      <div class="testimonial-box">
        <p><em>"${t('content.testimonial3', 'I\'m 45 and thought my best training days were behind me. ZMA brought back that feeling of waking up recovered and ready to crush the gym. It\'s like I found my 30-year-old recovery ability again.')}"</em> - ${t('content.david', 'David, masters athlete')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.zmaProtocol', 'The ZMA Protocol for Maximum Results')}</h3>

      <div class="tip-box">
        <h4>${t('content.timingCritical', 'Timing is Critical')}</h4>
        <p>${t('content.timingCriticalText', 'Take ZMA 30-60 minutes before bed on an empty stomach. Food, especially calcium-rich foods, will block absorption and waste your money.')}</p>
      </div>

      <div class="tip-box">
        <h4>${t('content.consistencyKey', 'Consistency is Key')}</h4>
        <p>${t('content.consistencyKeyText', 'ZMA isn\'t a pre-workout that works immediately. It\'s a recovery optimizer that builds cumulative benefits over weeks and months.')}</p>
      </div>

      <div class="tip-box">
        <h4>${t('content.qualityMatters', 'Quality Matters')}</h4>
        <p>${t('content.qualityMattersText', 'Look for the specific forms used in research - zinc monomethionine aspartate, magnesium aspartate, and pyridoxine HCl (B6).')}</p>
      </div>

      <div class="warning-box">
        <h4>${t('content.avoidMistakes', 'Avoid These Mistakes:')}</h4>
        <ul>
          <li>${t('content.mistake1', 'Taking with calcium supplements or dairy products')}</li>
          <li>${t('content.mistake2', 'Taking with meals high in fiber or phytates')}</li>
          <li>${t('content.mistake3', 'Using cheap forms of zinc and magnesium that aren\'t well-absorbed')}</li>
          <li>${t('content.mistake4', 'Expecting immediate results instead of allowing 2-3 weeks for optimization')}</li>
        </ul>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.competitiveAdvantage', 'The Competitive Advantage You\'ve Been Missing')}</h3>
      <p>${t('content.competitiveAdvantageText', 'While your training partners are chasing the latest pre-workout or exotic supplement, you\'ll have the foundational recovery optimization that actually moves the needle on performance.')}</p>

      <div class="key-points-box">
        <h4>${t('content.zmaAdvantage', 'The ZMA advantage isn\'t flashy, but it\'s real:')}</h4>
        <ul>
          <li>${t('content.advantage1', 'Better sleep quality leads to better training quality')}</li>
          <li>${t('content.advantage2', 'Optimal testosterone means better muscle building and fat loss')}</li>
          <li>${t('content.advantage3', 'Enhanced recovery lets you train harder and more frequently')}</li>
          <li>${t('content.advantage4', 'Improved strength gains from better hormonal environment')}</li>
        </ul>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.performancePotential', 'Your Performance Potential is Waiting')}</h3>
      <p>${t('content.performancePotentialText', 'Every night you go to bed without optimal zinc, magnesium, and B6 levels is another night of suboptimal recovery. Every training session you complete without these minerals is leaving gains on the table.')}</p>
      <p>${t('content.researchSolid', 'The research is solid. The mechanism is clear. The only variable is whether you\'re willing to prioritize the unsexy fundamentals that create extraordinary results.')}</p>
      <p>${t('content.competitionWontWait', 'Your competition won\'t wait for you to figure this out. While they\'re struggling with poor recovery and hormonal decline, you could be optimizing the very foundation of athletic performance.')}</p>
      <p>${t('content.choiceSimple', 'The choice is simple: continue accepting suboptimal recovery as normal, or give your body the mineral foundation it needs to perform at its genetic potential.')}</p>

      <div class="conclusion-box">
        <h3>${t('content.finalCall', 'Your Next PR is Waiting')}</h3>
        <p>${t('content.finalCallText', 'Your next PR is waiting. Your best physique is achievable. Your competitive edge is three minerals away.')}</p>
        <p>${t('content.onlyQuestion', 'The only question left is: Are you ready to recover like a champion?')}</p>
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
            {t('backToMainNews')}
          </button>
        </div>
      </div>


    </div>
  );
};

export default NewsDetail2;