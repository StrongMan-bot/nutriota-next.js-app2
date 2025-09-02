import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import de from './locales/de.json';
import en_products from './locales/en_products.json';
import de_products from './locales/de_products.json';
import en_news from './locales/en_news.json';
import de_news from './locales/de_news.json';
import en_news0 from './locales/en_news0.json';
import de_news0 from './locales/de_news0.json';
import en_news1 from './locales/en_news1.json';
import de_news1 from './locales/de_news1.json';
import en_news2 from './locales/en_news2.json';
import de_news2 from './locales/de_news2.json';
import en_news3 from './locales/en_news3.json';
import de_news3 from './locales/de_news3.json';
import en_news4 from './locales/en_news4.json';
import de_news4 from './locales/de_news4.json';
import en_news5 from './locales/en_news5.json';
import de_news5 from './locales/de_news5.json';
import en_news6 from './locales/en_news6.json';
import de_news6 from './locales/de_news6.json';
import en_testimonial from './locales/en_testimonial.json';
import de_testimonial from './locales/de_testimonial.json';
import en_learnnews from './locales/en_learnnews.json';
import de_learnnews from './locales/de_learnnews.json';

// Import product translation files
import en_product1 from './locales/en_product1.json';
import de_product1 from './locales/de_product1.json';
import en_product2 from './locales/en_product2.json';
import de_product2 from './locales/de_product2.json';
import en_product3 from './locales/en_product3.json';
import de_product3 from './locales/de_product3.json';
import en_product4 from './locales/en_product4.json';
import de_product4 from './locales/de_product4.json';
import en_product5 from './locales/en_product5.json';
import de_product5 from './locales/de_product5.json';
import en_product6 from './locales/en_product6.json';
import de_product6 from './locales/de_product6.json';
import en_product7 from './locales/en_product7.json';
import de_product7 from './locales/de_product7.json';
import en_product8 from './locales/en_product8.json';
import de_product8 from './locales/de_product8.json';
import en_product9 from './locales/en_product9.json';
import de_product9 from './locales/de_product9.json';
import en_product10 from './locales/en_product10.json';
import de_product10 from './locales/de_product10.json';
import en_product11 from './locales/en_product11.json';
import de_product11 from './locales/de_product11.json';
import en_product12 from './locales/en_product12.json';
import de_product12 from './locales/de_product12.json';
import en_product13 from './locales/en_product13.json';
import de_product13 from './locales/de_product13.json';
import en_product14 from './locales/en_product14.json';
import de_product14 from './locales/de_product14.json';

const resources = {
  en: {
    translation: en,
    products: en_products,
    news: en_news,
    news0: en_news0,
    news1: en_news1,
    news2: en_news2,
    news3: en_news3,
    news4: en_news4,
    news5: en_news5,
    news6: en_news6,
    testimonial: en_testimonial,
    learnnews: en_learnnews,
    product1: en_product1,
    product2: en_product2,
    product3: en_product3,
    product4: en_product4,
    product5: en_product5,
    product6: en_product6,
    product7: en_product7,
    product8: en_product8,
    product9: en_product9,
    product10: en_product10,
    product11: en_product11,
    product12: en_product12,
    product13: en_product13,
    product14: en_product14
  },
  de: {
    translation: de,
    products: de_products,
    news: de_news,
    news0: de_news0,
    news1: de_news1,
    news2: de_news2,
    news3: de_news3,
    news4: de_news4,
    news5: de_news5,
    news6: de_news6,
    testimonial: de_testimonial,
    learnnews: de_learnnews,
    product1: de_product1,
    product2: de_product2,
    product3: de_product3,
    product4: de_product4,
    product5: de_product5,
    product6: de_product6,
    product7: de_product7,
    product8: de_product8,
    product9: de_product9,
    product10: de_product10,
    product11: de_product11,
    product12: de_product12,
    product13: de_product13,
    product14: de_product14
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de', // German fallback
    lng: 'de', // Explicitly set German as default
    debug: false,
    
    // Ensure synchronous loading for react-snap
    initImmediate: false,
    react: {
      useSuspense: false // Disable Suspense for react-snap compatibility
    },
    
    interpolation: {
      escapeValue: false
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage']
    }
  });

export default i18n;