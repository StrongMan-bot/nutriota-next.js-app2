import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = '/images/nutriota.png',
  url
}) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  // Generate page-specific SEO data
  const getPageSEO = () => {
    const baseUrl = 'https://nutriota-supplements-y7k8.bolt.host';
    const currentUrl = url || `${baseUrl}${router.pathname}`;
    
    switch (router.pathname) {
      case '/':
        return {
          title: title || 'Nutriota - Daily Wellness, Simplified | Premium Supplements',
          description: description || t('hero.subtitle') + ' ' + t('about.description1'),
          keywords: keywords || 'vitamin supplements, health supplements, nutrition, wellness, vitamins, minerals, herbal supplements',
          image: image || '/images/test hero section.jpg'
        };
      case '/products':
        return {
          title: title || `${t('products.title')} - Premium Vitamins & Supplements | Nutriota`,
          description: description || t('bestSellers.subtitle'),
          keywords: keywords || 'vitamins, supplements, herbal supplements, nutrition products, health products',
          image: image
        };
      case '/about':
        return {
          title: title || `${t('header.about')} - Our Mission & Values | Nutriota`,
          description: description || t('aboutUs.hero.description'),
          keywords: keywords || 'about nutriota, company mission, nutritional excellence, supplement quality',
          image: image
        };
      case '/news':
        return {
          title: title || `${t('header.news')} - Health Tips & Wellness Articles | Nutriota`,
          description: description || t('news.subtitle'),
          keywords: keywords || 'health news, wellness tips, nutrition science, vitamin research',
          image: image
        };
      case '/contact':
        return {
          title: title || `${t('header.contact')} - Get in Touch | Nutriota`,
          description: description || t('contact.title'),
          keywords: keywords || 'contact nutriota, customer support, health questions',
          image: image
        };
      case '/privacy':
        return {
          title: title || `${t('privacy.title')} | Nutriota`,
          description: description || 'Privacy policy and data protection information for Nutriota supplements.',
          keywords: keywords || 'privacy policy, data protection, GDPR compliance',
          image: image
        };
      default:
        if (router.pathname.startsWith('/news/')) {
          return {
            title: title || `Health Article | Nutriota News`,
            description: description || 'Read the latest health and wellness insights from Nutriota experts.',
            keywords: keywords || 'health article, wellness tips, nutrition advice',
            image: image
          };
        }
        return {
          title: title || 'Nutriota - Premium Health Supplements',
          description: description || 'Clean, transparent supplements designed for modern lifestyles.',
          keywords: keywords || 'health supplements, vitamins, nutrition',
          image: image
        };
    }
  };

  const seoData = getPageSEO();
  const currentUrl = url || `https://nutriota-supplements-y7k8.bolt.host${router.pathname}`;

  React.useEffect(() => {
    // Update document title
    document.title = seoData.title;
    
    // Set HTML lang attribute for SEO
    document.documentElement.lang = i18n.language || 'de';

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', seoData.description);
    updateMetaTag('keywords', seoData.keywords);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'Nutriota');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateMetaTag('', seoData.title, 'og:title');
    updateMetaTag('', seoData.description, 'og:description');
    updateMetaTag('', seoData.image, 'og:image');
    updateMetaTag('', currentUrl, 'og:url');
    updateMetaTag('', 'website', 'og:type');
    updateMetaTag('', 'Nutriota', 'og:site_name');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seoData.title);
    updateMetaTag('twitter:description', seoData.description);
    updateMetaTag('twitter:image', seoData.image);

    // Additional SEO tags
    updateMetaTag('theme-color', '#0089CF');
    updateMetaTag('msapplication-TileColor', '#0089CF');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

  }, [seoData.title, seoData.description, seoData.keywords, seoData.image, currentUrl]);

  return null;
};

export default SEOHead;