import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import ImportantBox from './ImportantBox';
import styles from '../styles/BlogTypography.module.css';

const NewsDetail3 = () => {
  const { t, i18n } = useTranslation('news3');
  const router = useRouter();

  const newsItem = {
    id: 3,
    title: t('title'),
    description: t('description'),
    image: "/images/NewsDetail3.jpg",
    date: t('date'),
    category: t('category'),
    author: t('author'),
    readTime: t('readTime'),
    content: i18n.language === 'de' ? `
      <h3>Das revolutionäre Anti-Aging-Molekül, von dem Ihr Arzt nicht spricht</h3>
      <p>Wissenschaftler nennen es "das universelle Antioxidans". Beauty-Experten flüstern über seine hautverändernden Kräfte. Aber die meisten Menschen haben noch nie von diesem zellulären Jungbrunnen gehört, der sich in aller Öffentlichkeit verbirgt.</p>

      <h3>Die Entdeckung, die alles verändert</h3>
      <p>Während Sie Hunderte von Cremes und Behandlungen ausgeben, die nur die Oberfläche behandeln, arbeitet ein Molekül auf der tiefsten Ebene - Ihren Mitochondrien - um tatsächlich die Alterung von innen heraus zu verlangsamen.</p>

      <h4>Alpha-Liponsäure (ALA): Der universelle Zellschutz</h4>
      <p>Die Anti-Aging-Effekte dieses natürlichen Antioxidans, das in menschlichen Geweben synthetisiert wird, haben in den letzten Jahren ein wachsendes Interesse geweckt. Aber hier ist das Außergewöhnliche: Es ist sowohl wasser- als auch fettlöslich, was bedeutet, dass es jede einzelne Zelle in Ihrem Körper schützen kann.</p>

      <h3>Warum Ihre Haut schneller altert als sie sollte</h3>
      <p>Jeden Tag sind Ihre Zellen Angriffen ausgesetzt:</p>
      <ul>
        <li><strong>Freie Radikale</strong> aus Umweltverschmutzung, Stress und UV-Strahlen</li>
        <li><strong>Glykation</strong> - wenn Zuckermoleküle Ihr Kollagen schädigen</li>
        <li><strong>Entzündungen</strong>, die gesundes Gewebe abbauen</li>
        <li><strong>Oxidativer Stress</strong>, der die zelluläre Alterung beschleunigt</li>
      </ul>

      <h3>Der zelluläre Zeitmaschinen-Effekt</h3>
      <p>Alpha-Liponsäure neutralisiert nicht nur eine Art von freien Radikalen - es ist wie ein Hauptschlüssel, der Schutz für jeden Teil Ihrer Zelle freischaltet:</p>
      <ul>
        <li><strong>Recycelt andere Antioxidantien</strong> - Bringt Vitamin C, Vitamin E und Glutathion wieder zum Leben</li>
        <li><strong>Schützt Ihre Mitochondrien</strong> - Die Kraftwerke Ihrer Zellen bleiben jung und energetisch</li>
        <li><strong>Verhindert Glykation</strong> - Verhindert, dass Zucker altersbeschleunigende Advanced Glycation End Products (AGEs) bildet</li>
        <li><strong>Reduziert Entzündungen</strong> - Beruhigt die chronische Entzündung, die Sie von innen altert</li>
      </ul>

      <h3>Die sichtbare Transformation</h3>
      <p>Innerhalb weniger Wochen mit optimalen ALA-Spiegeln bemerken Menschen:</p>
      <ul>
        <li>Haut, die mit einem gesunden Glanz strahlt, den sie seit Jahren nicht gesehen haben</li>
        <li>Reduzierte Fältchen, da zelluläre Reparaturmechanismen auf Hochtouren laufen</li>
        <li>Gleichmäßigeren Teint durch verringerte Entzündungsschäden</li>
        <li>Verbesserte Textur durch verbesserten Kollagenschutz</li>
      </ul>

      <h3>Mehr als nur Schönheit: Der Ganzkörper-Reset</h3>
      <p>Die Anti-Aging-Eigenschaften von ALA gehen weit über die Haut hinaus:</p>
      <ul>
        <li><strong>Erhöhte Energie</strong> - Ihre Mitochondrien werden effizienter und geben Ihnen die Vitalität eines Jüngeren</li>
        <li><strong>Schärfere geistige Klarheit</strong> - Geschützte Gehirnzellen bedeuten bessere Konzentration und Gedächtnis</li>
        <li><strong>Verbesserte Regeneration</strong> - Ihr Körper erholt sich schneller von Stress und Bewegung</li>
        <li><strong>Bessere Blutzuckerkontrolle</strong> - ALA hilft Ihren Zellen, Glukose effektiver zu nutzen</li>
      </ul>

      <h3>Die Forschung, die die Wirksamkeit beweist</h3>
      <p>Kürzliche Studien haben gezeigt, dass ALA auf Virusinfektionen wirken kann, indem es biochemische, virologische, immunologische und neurologische Parameter moduliert. Aber die Anti-Aging-Forschung ist besonders vielversprechend.</p>

      <h4>Die wissenschaftlichen Grundlagen</h4>
      <p>ALA ist eine kurzketten Schwefel enthaltende Fettsäure, die in den Mitochondrien aller Arten von eukaryotischen Zellen vorkommt. Sowohl die oxidierte als auch die reduzierte Form bieten einen starken Schutz vor altersbedingten Zellschäden.</p>

      <h3>Die zellulären Altersbeschleuniger, die Sie gerade angreifen</h3>
      <p>Jede Sekunde sind Ihre Zellen Belagerungen durch eine unsichtbare Armee von Altersbeschleunigern ausgesetzt:</p>
      <ul>
        <li><strong>Freie Radikale</strong> - Diese instabilen Moleküle stehlen Elektronen von Ihren gesunden Zellen</li>
        <li><strong>Glykationsangriff</strong> - Zuckermoleküle binden sich an Proteine wie Kollagen</li>
        <li><strong>Entzündungsfeuer</strong> - Chronische Entzündungen brennen durch Ihren Körper wie ein langsames Feuer</li>
        <li><strong>Mitochondrieller Verfall</strong> - Ihre zellulären Kraftwerke verlieren allmählich an Effizienz</li>
      </ul>

      <h3>Die Qualitätsstandards, die wichtig sind</h3>
      <p>Die Nahrungsergänzungsmittelindustrie ist mit minderwertigen ALA-Produkten überschwemmt, die keine Ergebnisse liefern. Hier ist, worauf Sie achten sollten:</p>
      <ul>
        <li><strong>R-Alpha-Liponsäure</strong> - Dies ist die natürlich vorkommende Form, die Ihr Körper tatsächlich verwendet</li>
        <li><strong>Stabilisierte Formulierung</strong> - Reines ALA ist instabil und baut sich schnell ab</li>
        <li><strong>Richtige Dosierung</strong> - Die Forschung unterstützt 300-600mg täglich für Anti-Aging-Vorteile</li>
        <li><strong>Drittanbieter-Tests</strong> - Ihr ALA sollte von einem unabhängigen Labor auf Reinheit getestet werden</li>
      </ul>

      <h3>Die 90-Tage-Jugend-Herausforderung</h3>
      <ul>
        <li><strong>Monat 1: Die Grundlage</strong> - Ihre zellulären Antioxidans-Abwehrkräfte stärken sich</li>
        <li><strong>Monat 2: Die sichtbaren Veränderungen</strong> - Die Haut beginnt strahlender und glatter auszusehen</li>
        <li><strong>Monat 3: Die Transformation</strong> - Die kumulativen Effekte werden unbestreitbar</li>
      </ul>

      <h3>Lassen Sie nicht die Zeit gewinnen</h3>
      <p>Jeder Tag, der ohne optimale ALA-Spiegel vergeht, ist ein weiterer Tag unkontrollierter zellulärer Alterung. Aber Sie haben mehr Kontrolle über Ihren Alterungsprozess, als Sie sich jemals vorgestellt haben.</p>

      <p>Der Jungbrunnen ist kein mythischer Quell - es ist die zelluläre Regeneration, die jetzt in Ihren Mitochondrien stattfindet. Geben Sie ihm den ALA-Vorteil und entdecken Sie, wie es sich anfühlt, rückwärts zu altern.</p>
    ` : `
      <h3>The Age-Reversing Molecule Your Doctor Isn't Telling You About</h3>
      <p>Scientists call it "the universal antioxidant." Beauty gurus whisper about its skin-transforming powers. But most people have never heard of the cellular fountain of youth hiding in plain sight.</p>

      <h3>The Discovery That Changes Everything</h3>
      <p>While you're spending hundreds on creams and procedures that only treat the surface, there's a molecule working at the deepest level - your mitochondria - to actually slow down aging from the inside out.</p>

      <h4>Alpha Lipoic Acid (ALA): The Universal Cellular Protector</h4>
      <p>The anti-aging effects of this natural antioxidant synthesized in human tissues have attracted a growing interest in recent years. But here's what makes it extraordinary: it's both water AND fat-soluble, meaning it can protect every single cell in your body.</p>

      <h3>Why Your Skin Is Aging Faster Than It Should</h3>
      <p>Every day, your cells are under attack from:</p>
      <ul>
        <li><strong>Free radicals</strong> from pollution, stress, and UV rays</li>
        <li><strong>Glycation</strong> - when sugar molecules damage your collagen</li>
        <li><strong>Inflammation</strong> that breaks down healthy tissue</li>
        <li><strong>Oxidative stress</strong> that accelerates cellular aging</li>
      </ul>

      <h3>The Cellular Time Machine Effect</h3>
      <p>Alpha Lipoic Acid doesn't just neutralize one type of free radical - it's like having a master key that unlocks protection for every part of your cell:</p>
      <ul>
        <li><strong>Recycles Other Antioxidants</strong> - Brings vitamin C, vitamin E, and glutathione back to life</li>
        <li><strong>Protects Your Mitochondria</strong> - The powerhouses of your cells stay young and energetic</li>
        <li><strong>Prevents Glycation</strong> - Stops sugar from creating age-accelerating Advanced Glycation End Products (AGEs)</li>
        <li><strong>Reduces Inflammation</strong> - Calms the chronic inflammation that ages you from the inside</li>
      </ul>

      <h3>The Visible Transformation</h3>
      <p>Within weeks of optimal ALA levels, people notice:</p>
      <ul>
        <li>Skin that glows with a healthy radiance they haven't seen in years</li>
        <li>Reduced fine lines as cellular repair mechanisms kick into high gear</li>
        <li>Even skin tone as inflammatory damage heals</li>
        <li>Improved texture from enhanced collagen protection</li>
      </ul>

      <h3>Beyond Beauty: The Total Body Reset</h3>
      <p>ALA's anti-aging properties extend far beyond skin deep:</p>
      <ul>
        <li><strong>Enhanced Energy</strong> - Your mitochondria become more efficient, giving you the vitality of someone years younger</li>
        <li><strong>Sharper Mental Clarity</strong> - Protected brain cells mean better focus and memory</li>
        <li><strong>Improved Recovery</strong> - Your body bounces back from stress and exercise faster</li>
        <li><strong>Better Blood Sugar Control</strong> - ALA helps your cells use glucose more effectively</li>
      </ul>

      <h3>The Research That Proves It Works</h3>
      <p>Recent studies have demonstrated that ALA can act on viral infections by modulating biochemical, virological, immunological, and neurological parameters. But the anti-aging research is where things get really exciting.</p>

      <h4>The Scientific Foundation</h4>
      <p>ALA is a short-chain sulfur-containing fatty acid occurring in the mitochondria of all kinds of eukaryotic cells, and both the oxidized and reduced forms provide powerful protection against age-related cellular damage.</p>

      <h3>The Cellular Age Accelerators Attacking You Right Now</h3>
      <p>Every second, your cells are under siege from an invisible army of age accelerators:</p>
      <ul>
        <li><strong>Free Radical Assault</strong> - These unstable molecules steal electrons from your healthy cells</li>
        <li><strong>Glycation Attack</strong> - Sugar molecules bind to proteins like collagen</li>
        <li><strong>Inflammatory Fire</strong> - Chronic low-level inflammation burns through your body like a slow fire</li>
        <li><strong>Mitochondrial Decay</strong> - Your cellular power plants gradually lose efficiency</li>
      </ul>

      <h3>The Quality Standards That Matter</h3>
      <p>The supplement industry is flooded with inferior ALA products that won't deliver results. Here's what to look for:</p>
      <ul>
        <li><strong>R-Alpha Lipoic Acid</strong> - This is the naturally occurring form that your body actually uses</li>
        <li><strong>Stabilized Formulation</strong> - Pure ALA is unstable and degrades quickly</li>
        <li><strong>Proper Dosage</strong> - Research supports 300-600mg daily for anti-aging benefits</li>
        <li><strong>Third-Party Testing</strong> - Your ALA should be tested for purity and potency by an independent laboratory</li>
      </ul>

      <h3>The 90-Day Youth Challenge</h3>
      <ul>
        <li><strong>Month 1: The Foundation</strong> - Your cellular antioxidant defenses strengthen</li>
        <li><strong>Month 2: The Visible Changes</strong> - Skin begins to look brighter and smoother</li>
        <li><strong>Month 3: The Transformation</strong> - The cumulative effects become undeniable</li>
      </ul>

      <h3>Don't Let Time Win</h3>
      <p>Every day that passes without optimal ALA levels is another day of unchecked cellular aging. But you have more control over your aging process than you ever imagined.</p>

      <p>The fountain of youth isn't a mythical spring - it's the cellular regeneration happening in your mitochondria right now. Give it the ALA advantage, and discover what it feels like to age backwards.</p>
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

export default NewsDetail3;