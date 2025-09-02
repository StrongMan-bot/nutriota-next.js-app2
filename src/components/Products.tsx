import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import OptimizedImage from './OptimizedImage';

import { Star, ExternalLink } from 'lucide-react'; // Import Star and ExternalLink icons

const Products = () => {
  const { t, i18n } = useTranslation('products');
  const router = useRouter();
  const { search, category } = router.query;
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [chatInitialized, setChatInitialized] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // Function to force change user message colors - IMMEDIATE VERSION
  const forceChangeUserMessageColors = (immediate = false) => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return;
    
    const applyColors = () => {
      // Target all possible user message elements
      const selectors = [
        '.n8n-chat__message--user',
        '.n8n-chat__message--user *',
        '[class*="user"][class*="message"]',
        '[class*="message"][class*="user"]',
        '.n8n-chat div[style*="background-color: rgb(52, 211, 153)"]',
        '.n8n-chat div[style*="background-color: #34d399"]',
        '.n8n-chat div[style*="background: rgb(52, 211, 153)"]',
        '.n8n-chat div[style*="background: #34d399"]',
        '.n8n-chat div[style*="background-color: rgb(16, 185, 129)"]',
        '.n8n-chat div[style*="background: rgb(16, 185, 129)"]',
        '.n8n-chat div[style*="background-color: #10b981"]',
        '.n8n-chat div[style*="background: #10b981"]'
      ];
      
      let foundElements = false;
      
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
          const htmlElement = element as HTMLElement;
          htmlElement.style.setProperty('background-color', '#0089CF', 'important');
          htmlElement.style.setProperty('background', '#0089CF', 'important');
          htmlElement.style.setProperty('color', '#fff', 'important');
          foundElements = true;
        });
      });
      
      // More aggressive approach - check ALL divs in chat
      document.querySelectorAll('.n8n-chat div, .n8n-chat span, .n8n-chat p').forEach(element => {
        const htmlElement = element as HTMLElement;
        const computedStyle = window.getComputedStyle(htmlElement);
        const elementStyle = htmlElement.style;
        
        // Check if it's a user message by various indicators
        if (
          computedStyle.marginLeft === 'auto' || 
          computedStyle.justifyContent === 'flex-end' || 
          computedStyle.textAlign === 'right' ||
          elementStyle.backgroundColor?.includes('rgb(52, 211, 153)') ||
          elementStyle.backgroundColor?.includes('#34d399') ||
          elementStyle.backgroundColor?.includes('rgb(16, 185, 129)') ||
          elementStyle.backgroundColor?.includes('#10b981') ||
          htmlElement.style.background?.includes('rgb(52, 211, 153)') ||
          htmlElement.style.background?.includes('#34d399') ||
          htmlElement.style.background?.includes('rgb(16, 185, 129)') ||
          htmlElement.style.background?.includes('#10b981')
        ) {
          htmlElement.style.setProperty('background-color', '#0089CF', 'important');
          htmlElement.style.setProperty('background', '#0089CF', 'important');
          htmlElement.style.setProperty('color', '#fff', 'important');
          foundElements = true;
        }
        
        // Check for green colors in computed styles
        if (computedStyle.backgroundColor.includes('rgb(52, 211, 153)') || 
            computedStyle.backgroundColor.includes('rgb(16, 185, 129)')) {
          htmlElement.style.setProperty('background-color', '#0089CF', 'important');
          htmlElement.style.setProperty('background', '#0089CF', 'important');
          htmlElement.style.setProperty('color', '#fff', 'important');
          foundElements = true;
        }
        
        // Check for green colors in inline styles
        if (htmlElement.style.cssText.includes('rgb(52, 211, 153)') || 
            htmlElement.style.cssText.includes('#34d399') ||
            htmlElement.style.cssText.includes('rgb(16, 185, 129)') ||
            htmlElement.style.cssText.includes('#10b981')) {
          htmlElement.style.setProperty('background-color', '#0089CF', 'important');
          htmlElement.style.setProperty('background', '#0089CF', 'important');
          htmlElement.style.setProperty('color', '#fff', 'important');
          foundElements = true;
        }
      });
      
      console.log('Chat color override applied, found elements:', foundElements);
    };

    if (immediate) {
      applyColors();
      // Also run multiple times quickly to catch any delayed rendering
      setTimeout(applyColors, 10);
      setTimeout(applyColors, 50);
      setTimeout(applyColors, 100);
    } else {
      applyColors();
      setTimeout(applyColors, 100);
      setTimeout(applyColors, 300);
    }
  };

  // Detect language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  // Initialize chatbot only on Products page
  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return;
    
    if (!chatInitialized) {
      // Initialize N8N chat
      createChat({
        webhookUrl: 'https://ragn02.app.n8n.cloud/webhook/8f0c6820-e476-43fe-b057-dda4521b4407/chat',
        initialMessages: [
          t('chatbot.initialMessage')
        ],
        theme: {
          primaryColor: '#0089CF', // blue theme
        },
      });

      setChatInitialized(true);
    }
  }, [chatInitialized, t]);

  // Reinitialize chat when language changes
  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return;
    
    if (chatInitialized) {
      // Remove existing chat
      const chatElements = document.querySelectorAll('.n8n-chat, .n8n-chat__launcher, .n8n-chat__window');
      chatElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      
      // Reset and reinitialize
      setChatInitialized(false);
      setTimeout(() => setChatInitialized(true), 100);
    }
  }, [currentLanguage]);

  // Set up color override system after chat is initialized
  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return;
    
    if (chatInitialized) {
      // Initial color override
      forceChangeUserMessageColors(true);
      
      // Set up MutationObserver to watch for new messages - IMMEDIATE RESPONSE
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Check if any added node contains message elements
            mutation.addedNodes.forEach(node => {
              if (node.nodeType === 1) { // Element node
                // Apply colors immediately - no delay
                forceChangeUserMessageColors(true);
              }
            });
          }
          
          // Also watch for style changes
          if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            const target = mutation.target;
            const htmlTarget = target as HTMLElement;
            if (htmlTarget.style.backgroundColor?.includes('rgb(52, 211, 153)') ||
                htmlTarget.style.backgroundColor?.includes('#34d399') ||
                htmlTarget.style.backgroundColor?.includes('rgb(16, 185, 129)') ||
                htmlTarget.style.backgroundColor?.includes('#10b981')) {
              htmlTarget.style.setProperty('background-color', '#0089CF', 'important');
              htmlTarget.style.setProperty('color', '#fff', 'important');
            }
          }
        });
      });

      // Start observing the entire document to catch chat messages anywhere
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });

      // Also run the color override very frequently for the first few seconds
      const quickInterval = setInterval(() => forceChangeUserMessageColors(true), 100);
      setTimeout(() => clearInterval(quickInterval), 5000); // Stop after 5 seconds
      
      // Then run less frequently as backup
      const colorInterval = setInterval(() => forceChangeUserMessageColors(), 1000);

      // Cleanup function
      return () => {
        observer.disconnect();
        clearInterval(quickInterval);
        clearInterval(colorInterval);
      };
    }
  }, [chatInitialized]);

  // Separate useEffect for floating bubble - runs once after chat is initialized
  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return;
    
    if (chatInitialized) {
      // Create floating bubble message
      const createFloatingBubble = () => {
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble-message';
        bubble.textContent = t('chatbot.bubbleMessage');
        document.body.appendChild(bubble);

        // Auto-remove bubble after 5 seconds
        setTimeout(() => {
          bubble.classList.add('fade-out');
          setTimeout(() => {
            if (document.body.contains(bubble)) {
              document.body.removeChild(bubble);
            }
          }, 300); // Wait for fade-out animation
        }, 5000);
      };

      // Show floating bubble after a short delay to ensure chat is loaded
      const bubbleTimeout = setTimeout(createFloatingBubble, 1000);

      // Cleanup function for this effect
      return () => {
        clearTimeout(bubbleTimeout);
      };
    }
  }, [chatInitialized, t]);

  // Cleanup function - only runs when component unmounts
  useEffect(() => {
    return () => {
      // Skip if not in browser environment
      if (typeof window === 'undefined') return;
      
      // Remove any remaining floating bubbles
      const bubbles = document.querySelectorAll('.chat-bubble-message');
      bubbles.forEach(bubble => {
        if (document.body.contains(bubble)) {
          document.body.removeChild(bubble);
        }
      });

      // Remove chat widget elements
      const chatElements = document.querySelectorAll('.n8n-chat, .n8n-chat__launcher, .n8n-chat__window');
      chatElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });

      // Reset chat initialized state
      setChatInitialized(false);
    };
  }, []);

  // List of best seller product names
  const bestSellerProducts = [
    "Nutriota Alpha Lipoic Acid 500 mg 180 Capsules",
    "Nutriota Propolis 1000 mg 180 Tablets",
    "Nutriota Vitamin B6 12.5 mg 365 Tablets",
    "Nutriota Echinacea 500 mg 240 Tablets",
    "Nutriota Vitamin B3 (Nicotinamide) 500 mg 180 Capsules"
  ];

  // Product data from JSON with ratings added
  const products = [
    {
      "category": "Supplements",
      "name": "Nutriota Alpha Lipoic Acid 500 mg 180 Capsules",
      "price": "€30.27",
      "image": "https://m.media-amazon.com/images/I/612BT9dEe5L._AC_SX522_.jpg",
      "link": "https://www.amazon.de/dp/B081D13S3P",
      "rating": 4.5,
      "reviews": "400+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B1 (Thiamine) 250 mg 180 Capsules",
      "price": "€20.17",
      "image": "https://m.media-amazon.com/images/I/61x3qasoXDL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0CKTYJJ4M",
      "rating": 4.6,
      "reviews": "150+ " + t('ratings')
    },
    {
      "category": "Supplements",
      "name": "Nutriota Propolis 2000 mg 180 Tablets",
      "price": "€18.15",
      "image": "https://m.media-amazon.com/images/I/610Xy2Pk7DL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B08428DH3Z",
      "rating": 4.5,
      "reviews": "300+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B6 12.5 mg 365 Tablets",
      "price": "€14.03",
      "image": "https://m.media-amazon.com/images/I/51d2cbMwKkL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B08B121XGR",
      "rating": 4.6,
      "reviews": "300+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B1 (Thiamine) 100 mg 180 Capsules",
      "price": "€12.11",
      "image": "https://m.media-amazon.com/images/I/61aqUq5-yfL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0D673DJR7",
      "rating": 4.6,
      "reviews": "100+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B1 (Thiamine) 200 mg 180 Tablets",
      "price": "€14.12",
      "image": "https://m.media-amazon.com/images/I/51xKfXcSPDL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0D5XYTPXD",
      "rating": 4.6,
      "reviews": "50+ " + t('ratings')
    },
    {
      "category": "Supplements",
      "name": "Nutriota Propolis 2000 mg 90 Capsules",
      "price": "€16.95",
      "image": "https://m.media-amazon.com/images/I/61ZO2+TLSPL._AC_SY300_SX300_.jpg",
      "link": "https://www.amazon.de/dp/B09L3SH83Z",
      "rating": 4.4,
      "reviews": "150+ " + t('ratings')
    },
    {
      "category": "Herbal Supplements",
      "name": "Nutriota Echinacea 500 mg 240 Tablets",
      "price": "€20.17",
      "image": "https://m.media-amazon.com/images/I/6175SKfTVaL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B08B16GMQ3",
      "rating": 4.6,
      "reviews": "250+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B3 (Nicotinamide) 500 mg 180 Capsules",
      "price": "€18.07",
      "image": "https://m.media-amazon.com/images/I/61UTpl0xAOL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0845TMGBN",
      "rating": 4.5,
      "reviews": "200+ " + t('ratings')
    },
    {
      "category": "Supplements",
      "name": "Nutriota ZMA (Zinc (10 mg) + Magnesium (187.5 mg) + Vitamin B6 (6 mg)) 120 Capsules",
      "price": "€9.98",
      "image": "https://m.media-amazon.com/images/I/61-RHjTQvaL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0DGMD369V",
      "rating": 4.6,
      "reviews": "50+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B2 (Riboflavin) 250 mg 180 Capsules",
      "price": "€30.27",
      "image": "https://m.media-amazon.com/images/I/61dMCF-WIdL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0CXJ3CK9K",
      "rating": 4.6,
      "reviews": "50+ " + t('ratings')
    },
    {
      "category": "Supplements",
      "name": "Nutriota Shilajit 1500 mg 180 Capsules",
      "price": "€22.45",
      "image": "https://m.media-amazon.com/images/I/61qXpAC5jlL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0D1RBLDZS",
      "rating": 4.2,
      "reviews": "50+ " + t('ratings')
    },
    {
      "category": "Supplements",
      "name": "Nutriota Silica 250 mg (120 Capsules)",
      "price": "€25.23",
      "image": "https://m.media-amazon.com/images/I/61LsVX06PkL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B09ZVP7LCM",
      "rating": 4.2,
      "reviews": "40+ " + t('ratings')
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B5 (Pantothenic Acid) 500 mg 120 Capsules",
      "price": "€25.23",
      "image": "https://m.media-amazon.com/images/I/61L25cJYjoL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0D4LZ9WBC",
      "rating": 4.4,
      "reviews": "30+ " + t('ratings')
    }
  ];

  const categories = ['All Products', 'Vitamins', 'Supplements', 'Herbal Supplements'];

  // Handle category filtering from URL params
  useEffect(() => {
    if (category && categories.includes(category as string)) {
      setSelectedCategory(category as string);
    }
  }, [category, categories]);

  // Filter products based on selected category
  useEffect(() => {
    if (selectedCategory === 'All Products') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All Products') {
      router.push('/products');
    } else {
              router.push(`/products?category=${encodeURIComponent(category)}`);
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }

    // Fill remaining stars with empty stars
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }

    return stars;
  };

  return (
    <div className="products-page min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Categories - Mobile: Top, Desktop: Sidebar */}
          <div className="w-full lg:w-64 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-28 bg-white rounded-xl shadow-lg p-4 lg:p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{t('categories')}</h2>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:space-y-2 lg:gap-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg font-medium transition-all duration-200 text-sm lg:text-base ${
                      selectedCategory === category
                        ? 'bg-[#0089CF] text-white shadow-md'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-[#0089CF]'
                    }`}
                  >
                    {category === 'All Products' ? t('allProducts') : 
                     category === 'Vitamins' ? t('vitamins') : 
                     category === 'Supplements' ? t('supplements') : 
                     category === 'Herbal Supplements' ? t('herbalSupplements') : category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'All Products' ? t('allProducts') : 
                 selectedCategory === 'Vitamins' ? t('vitamins') : 
                 selectedCategory === 'Supplements' ? t('supplements') : 
                 selectedCategory === 'Herbal Supplements' ? t('herbalSupplements') : selectedCategory}
              </h1>
              <p className="text-sm lg:text-base text-gray-600">
                {selectedCategory === 'All Products' 
                  ? t('showingAll', { count: filteredProducts.length })
                  : t('showingCategory', { count: filteredProducts.length, category: 
                    selectedCategory === 'Vitamins' ? t('vitamins') : 
                    selectedCategory === 'Supplements' ? t('supplements') : 
                    selectedCategory === 'Herbal Supplements' ? t('herbalSupplements') : selectedCategory })
                }
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div 
                    className="relative h-48 lg:h-64 overflow-hidden cursor-pointer"
                    onClick={() => router.push(`/products/${index + 1}`)}
                  >
                    <OptimizedImage
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-100 text-[#0089CF] px-2 py-1 rounded-full text-xs font-medium">
                        {product.category === 'Vitamins' ? t('vitamins') : 
                         product.category === 'Supplements' ? t('supplements') : 
                         product.category === 'Herbal Supplements' ? t('herbalSupplements') : product.category}
                      </span>
                    </div>
                    
                    {/* Best Seller Badge */}
                    {bestSellerProducts.includes(product.name) && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#0089CF] text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <Star size={12} className="fill-current" />
                          {t('bestSeller')}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 lg:p-6">
                    <h3 
                      className="text-sm lg:text-base font-semibold text-gray-900 mb-3 line-clamp-2 cursor-pointer hover:text-[#0089CF] transition-colors"
                      onClick={() => router.push(`/products/${index + 1}`)}
                    >
                      {product.name}
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-lg lg:text-xl font-bold text-[#0089CF]">
                          {product.price}
                        </span>
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#0089CF] hover:bg-[#0070A3] text-white px-2 lg:px-3 py-1 lg:py-1.5 rounded-md text-xs font-medium transition-colors duration-200 flex items-center gap-1"
                        >
                          <ExternalLink size={12} />
                          {t('buyOnAmazon')}
                        </a>
                      </div>
                      
                      {/* Star Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {renderStars(product.rating)}
                        </div>
                        <span className="text-xs text-gray-600">
                          {product.reviews}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-500 font-bold text-xl">N</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('noProducts')}</h3>
                <p className="text-gray-600">{t('noProductsDesc')}</p>
              </div>
            )}
          </div>
        </div>
        <div id="chat-container"></div>
      </div>
    </div>
  );
};

export default Products;