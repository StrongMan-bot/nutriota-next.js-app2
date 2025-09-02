import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Search, ChevronLeft, ChevronRight, ExternalLink, Globe } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    // Initialize with German as default
    const currentLang = i18n.language || 'de';
    return currentLang === 'de' 
      ? { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
      : { code: 'en', name: 'English', flag: '🇬🇧' };
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLanguageLoading, setIsLanguageLoading] = useState(false);
  const router = useRouter();
  
  const handleLanguageChange = async (langCode: string) => {
    console.log('Language change requested:', langCode);
    
    // Prevent multiple simultaneous language changes
    if (isLanguageLoading) {
      console.log('Language change already in progress, ignoring request');
      return;
    }
    
    setIsLanguageLoading(true);
    
    try {
      await i18n.changeLanguage(langCode);
      console.log('i18n language changed to:', langCode);
      
      if (langCode === 'de') {
        setSelectedLanguage({ code: 'de', name: 'Deutsch', flag: '🇩🇪' });
      } else {
        setSelectedLanguage({ code: 'en', name: 'English', flag: '🇬🇧' });
      }
      
      console.log('Language state updated');
      
      // Small delay to show loading state
      setTimeout(() => {
        setIsLanguageLoading(false);
        console.log('Language loading completed');
      }, 300);
    } catch (error) {
      console.error('Error changing language:', error);
      setIsLanguageLoading(false);
    }
  };

  const dropdownRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Update selected language when i18n language changes
  useEffect(() => {
    const currentLang = i18n.language || 'de';
    if (currentLang === 'de') {
      setSelectedLanguage({ code: 'de', name: 'Deutsch', flag: '🇩🇪' });
    } else {
      setSelectedLanguage({ code: 'en', name: 'English', flag: '🇬🇧' });
    }
  }, [i18n.language]);

  // Product data for search
  const products = [
    {
      "category": "Supplements",
      "name": "Nutriota Alpha Lipoic Acid 500 mg 180 Capsules by Nutriota",
      "price": "€30.27",
      "image": "https://m.media-amazon.com/images/I/612BT9dEe5L._AC_SX522_.jpg",
      "link": "https://www.amazon.de/dp/B081D13S3P"
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B1 (Thiamine) 250 mg 180 Capsules by Nutriota",
      "price": "€20.17",
      "image": "https://m.media-amazon.com/images/I/61x3qasoXDL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0CKTYJJ4M"
    },
    {
      "category": "Supplements",
      "name": "Nutriota Propolis 1000 mg 180 Tablets by Nutriota",
      "price": "€18.15",
      "image": "https://m.media-amazon.com/images/I/610Xy2Pk7DL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B08428DH3Z"
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B6 12.5 mg 365 Tablets by Nutriota",
      "price": "€14.03",
      "image": "https://m.media-amazon.com/images/I/51d2cbMwKkL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B08B121XGR"
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B1 (Thiamine) 100 mg 180 Capsules by Nutriota",
      "price": "€12.11",
      "image": "https://m.media-amazon.com/images/I/61aqUq5-yfL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0D673DJR7"
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B1 (Thiamine) 200 mg 180 Tablets by Nutriota",
      "price": "€14.12",
      "image": "https://m.media-amazon.com/images/I/51xKfXcSPDL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0D5XYTPXD"
    },
    {
      "category": "Supplements",
      "name": "Nutriota Propolis 1000 mg 90 Capsules by Nutriota",
      "price": "€16.95",
      "image": "https://m.media-amazon.com/images/I/61ZO2+TLSPL._AC_SY300_SX300_.jpg",
      "link": "https://www.amazon.de/dp/B09L3SH83Z"
    },
    {
      "category": "Herbal Supplements",
      "name": "Nutriota Echinacea 500 mg 240 Tablets by Nutriota",
      "price": "€20.17",
      "image": "https://m.media-amazon.com/images/I/6175SKfTVaL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B08B16GMQ3"
    },
    {
      "category": "Supplements",
      "name": "Nutriota ZMA (Zinc (10 mg) + Magnesium (187.5 mg) + Vitamin B6 (6 mg)) 120 Capsules by Nutriota",
      "price": "€9.98",
      "image": "https://m.media-amazon.com/images/I/61-RHjTQvaL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0DGMD369V"
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B2 (Riboflavin) 250 mg 180 Capsules by Nutriota",
      "price": "€30.27",
      "image": "https://m.media-amazon.com/images/I/61dMCF-WIdL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0CXJ3CK9K"
    },
    {
      "category": "Supplements",
      "name": "Nutriota Shilajit 1500 mg 180 Capsules by Nutriota",
      "price": "€22.45",
      "image": "https://m.media-amazon.com/images/I/61qXpAC5jlL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0D1RBLDZS"
    },
    {
      "category": "Supplements",
      "name": "Nutriota Silica 250 mg (120 Capsules) by Nutriota",
      "price": "€25.23",
      "image": "https://m.media-amazon.com/images/I/61LsVX06PkL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B09ZVP7LCM"
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B5 (Pantothenic Acid) 500 mg 120 Capsules by Nutriota",
      "price": "€25.23",
      "image": "https://m.media-amazon.com/images/I/61L25cJYjoL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0D4LZ9WBC"
    },
    {
      "category": "Vitamins",
      "name": "Nutriota Vitamin B3 (Nicotinamide) 500 mg 180 Capsules by Nutriota",
      "price": "€18.07",
      "image": "https://m.media-amazon.com/images/I/61UTpl0xAOL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "link": "https://www.amazon.de/dp/B0845TMGBN"
    }
  ];

  const carouselItems = [
    { id: 1, titleKey: "carousel.vitamins.title", descriptionKey: "carousel.vitamins.description", image: "/images/Vitamin header.jpg" },
    { id: 2, titleKey: "carousel.supplements.title", descriptionKey: "carousel.supplements.description", image: "/images/Supplements header.jpg" },
    { id: 3, titleKey: "carousel.herbalSupplements.title", descriptionKey: "carousel.herbalSupplements.description", image: "/images/Herbal Supplements header.jpg" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 100) setIsScrolled(false);
      else if (currentScrollY > lastScrollY && currentScrollY > 100) setIsScrolled(true);
      else if (currentScrollY < lastScrollY && currentScrollY <= 100) setIsScrolled(false);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isProductsOpen) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isProductsOpen, carouselItems.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) setIsProductsOpen(false);
      if (languageRef.current && !languageRef.current.contains(target)) setIsLanguageOpen(false);
      if (searchRef.current && !searchRef.current.contains(target)) {
        setShowSearchResults(false);
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.length > 0) {
      // Navigate to products page with search query
              router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSearchResults(false);
      setIsSearchOpen(false);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim().length > 0) {
      // Filter products based on search query - improved to handle multiple words
      const filtered = products.filter(product =>
        {
          const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
          const productName = product.name.toLowerCase();
          const productCategory = product.category.toLowerCase();
          
          // Check if all search terms are found in either name or category
          return searchTerms.every(term => 
            productName.includes(term) || productCategory.includes(term)
          );
        }
      );
      setSearchResults(filtered.slice(0, 5)); // Limit to 5 results
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleProductClick = (product: any) => {
    // Find the product index to redirect to the correct product page
    const productIndex = products.findIndex(p => p.name === product.name);
    if (productIndex !== -1) {
      router.push(`/products/${productIndex + 1}`);
    }
    setSearchQuery('');
    setShowSearchResults(false);
    setIsSearchOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => { if (e.key === 'Enter') handleSearch(e as any); };
  const handleLogoError = () => setLogoError(true);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  const handleCategoryClick = (category: string) => {
            if (category === 'All Products') router.push('/products');
        else router.push(`/products?category=${encodeURIComponent(category)}`);
    setIsProductsOpen(false);
    setIsMenuOpen(false);
  };

  // Mobile language toggle function
  const handleMobileLanguageToggle = () => {
    if (isLanguageLoading) return;
    
    const targetLanguage = selectedLanguage.code === 'de' ? 'en' : 'de';
    handleLanguageChange(targetLanguage);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100 transition-all duration-500 ease-in-out ${isScrolled ? 'h-14' : 'h-20'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">

          {/* Left Side: Logo + Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                {!logoError ? (
                  <img src="/images/nutriota.png" alt="Nutriota" className={`w-auto transition-all duration-500 ease-in-out ${isScrolled ? 'h-10' : 'h-16'}`} onError={handleLogoError} loading="eager"/>
                ) : (
                  <div className={`flex items-center justify-center bg-blue-100 rounded-full transition-all duration-500 ease-in-out ${isScrolled ? 'h-10 w-10' : 'h-16 w-16'}`}>
                    <span className={`text-[#0089CF] font-bold transition-all duration-500 ${isScrolled ? 'text-lg' : 'text-2xl'}`}>N</span>
                  </div>
                )}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <div className="relative" ref={dropdownRef}>
                <button onMouseEnter={() => setIsProductsOpen(true)} className={`flex items-center text-gray-700 hover:text-[#0089CF] transition-all duration-300 font-semibold ${isScrolled ? 'text-sm' : 'text-base'}`} aria-expanded={isProductsOpen} aria-haspopup="true">
                  {t('header.products')} <ChevronDown size={isScrolled ? 14 : 16} className={`ml-1 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-3 w-[800px] bg-white rounded-xl shadow-xl border border-gray-100 z-50" onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
                    <div className="flex">
                      <div className="w-1/3 p-6 border-r border-gray-100">
                        <div className="space-y-1">
                          <div className="text-lg font-bold text-gray-900 mb-4 cursor-default">{t('products.categories')}</div>
                          <button onClick={() => handleCategoryClick('Vitamins')} className="block w-full text-left py-2 px-3 text-gray-700 hover:text-[#0089CF] hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">{t('products.vitamins')}</button>
                          <button onClick={() => handleCategoryClick('Supplements')} className="block w-full text-left py-2 px-3 text-gray-700 hover:text-[#0089CF] hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">{t('products.supplements')}</button>
                          <button onClick={() => handleCategoryClick('Herbal Supplements')} className="block w-full text-left py-2 px-3 text-gray-700 hover:text-[#0089CF] hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">{t('products.herbalSupplements')}</button>
                          <button onClick={() => handleCategoryClick('All Products')} className="block w-full text-left py-2 px-3 text-gray-700 hover:text-[#0089CF] hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">{t('products.allProducts')}</button>
                        </div>
                      </div>
                      <div className="w-2/3 p-6">
                        <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
                          <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {carouselItems.map((item) => (
                              <div key={item.id} className="w-full flex-shrink-0 flex items-center justify-between px-8">
                                <div className="flex-1">
                                  <h3 className={`font-bold text-gray-900 mb-2 leading-tight ${
                                    t(item.titleKey).length > 20 ? 'text-lg' : 'text-2xl'
                                  }`}>
                                    {t(item.titleKey)}
                                  </h3>
                                  <p className={`text-gray-600 leading-relaxed ${
                                    t(item.descriptionKey).length > 60 ? 'text-xs' : 'text-sm'
                                  }`}>
                                    {t(item.descriptionKey)}
                                  </p>
                                </div>
                                <div className="flex-shrink-0 ml-6">
                                  <OptimizedImage
                                    src={item.image}
                                    alt={t(item.titleKey)}
                                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-lg shadow-lg"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                          <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200"><ChevronLeft size={16} className="text-gray-600" /></button>
                          <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200"><ChevronRight size={16} className="text-gray-600" /></button>
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {carouselItems.map((_, index) => (
                              <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-200 ${currentSlide === index ? 'bg-[#0089CF]' : 'bg-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/news" className={`text-gray-700 hover:text-[#0089CF] transition-all duration-300 font-semibold ${isScrolled ? 'text-sm' : 'text-base'}`}>{t('header.news')}</Link>
              <Link href="/about" className={`text-gray-700 hover:text-[#0089CF] transition-all duration-300 font-semibold ${isScrolled ? 'text-sm' : 'text-base'}`}>{t('header.about')}</Link>
              <Link href="/contact" className={`text-gray-700 hover:text-[#0089CF] transition-all duration-300 font-semibold ${isScrolled ? 'text-sm' : 'text-base'}`}>{t('header.contact')}</Link>
            </nav>
          </div>

          {/* Right Side: Search + Language */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex relative">
              <div className="relative" ref={searchRef}>
                <input 
                  type="text" 
                  placeholder={t('header.searchPlaceholder')} 
                  value={searchQuery} 
                  onChange={handleSearchInputChange}
                  onKeyPress={handleKeyPress} 
                  className={`pl-4 pr-10 border border-gray-200 rounded-full text-sm bg-gray-50 focus:bg-white focus:border-[#0089CF] focus:ring-2 focus:ring-blue-100 transition-all duration-500 outline-none ${isScrolled ? 'py-1.5 w-48' : 'py-2.5 w-64'}`} 
                />
                <button onClick={handleSearch} className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0089CF] transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}><Search size={isScrolled ? 16 : 18} /></button>
                
                {/* Search Results Dropdown */}
                {showSearchResults && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50 max-h-80 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      <div className="py-2">
                        {searchResults.map((product, index) => (
                          <button
                            key={index}
                            onClick={() => handleProductClick(product)}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 text-left"
                          >
                            <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                              <OptimizedImage
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {product.name.length > 50 ? `${product.name.substring(0, 50)}...` : product.name}
                              </p>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-xs text-[#0089CF] bg-blue-50 px-2 py-1 rounded-full">
                                  {product.category}
                                </span>
                                <span className="text-sm font-semibold text-gray-900">{product.price}</span>
                              </div>
                            </div>

                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="py-8 text-center text-gray-500">
                        <p className="text-sm">No products found.</p>
                      </div>
                    )}
                </div>
                )}
              </div>
            </div>

            {/* Language */}
            <div className="hidden lg:flex relative" ref={languageRef}>
              <button onClick={() => setIsLanguageOpen(!isLanguageOpen)} className={`flex items-center space-x-2 px-3 border border-gray-200 rounded-full bg-gray-50 hover:bg-white hover:border-[#0089CF] transition-all duration-500 min-w-[110px] ${isScrolled ? 'py-1.5' : 'py-2.5'}`} aria-expanded={isLanguageOpen} aria-haspopup="true">
                <span className={`transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-base'}`}>{selectedLanguage.flag}</span>
                <span className={`font-medium text-gray-700 transition-all duration-300 truncate ${isScrolled ? 'text-xs' : 'text-sm'}`}>{selectedLanguage.name}</span>
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {/* Changed order: Deutsch first, then English */}
                  <button 
                    onClick={() => {
                      if (!isLanguageLoading) {
                        handleLanguageChange('de');
                        setIsLanguageOpen(false);
                      }
                    }} 
                    className="w-full text-left flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-[#0089CF] hover:bg-gray-50 transition-colors duration-200"
                    disabled={isLanguageLoading}
                  >
                    <span className="text-lg">🇩🇪</span>
                    <span className="font-medium text-sm truncate">Deutsch</span>
                    {isLanguageLoading && selectedLanguage.code !== 'de' && (
                      <div className="ml-auto animate-spin rounded-full h-3 w-3 border-b-2 border-[#0089CF]"></div>
                    )}
                  </button>
                  <button 
                    onClick={() => {
                      if (!isLanguageLoading) {
                        handleLanguageChange('en');
                        setIsLanguageOpen(false);
                      }
                    }} 
                    className="w-full text-left flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-[#0089CF] hover:bg-gray-50 transition-colors duration-200"
                    disabled={isLanguageLoading}
                  >
                    <span className="text-lg">🇬🇧</span>
                    <span className="font-medium text-sm truncate">English</span>
                    {isLanguageLoading && selectedLanguage.code !== 'en' && (
                      <div className="ml-auto animate-spin rounded-full h-3 w-3 border-b-2 border-[#0089CF]"></div>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu buttons */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Search icon */}
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-gray-700 hover:text-[#0089CF] transition-colors duration-200 p-2" aria-label="Search">
                <Search size={isScrolled ? 20 : 22} />
              </button>
              
              {/* Language icon - UPDATED FOR MOBILE */}
              <button 
                onClick={handleMobileLanguageToggle} 
                className="flex items-center justify-center text-gray-700 hover:text-[#0089CF] transition-colors duration-200 p-2 bg-gray-50 rounded-full border border-gray-200 w-12 h-12" 
                aria-label="Toggle language"
                disabled={isLanguageLoading}
              >
                <span className="text-xl">
                  {selectedLanguage.code === 'de' ? '🇬🇧' : '🇩🇪'}
                </span>
                {isLanguageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-full">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0089CF]"></div>
                  </div>
                )}
              </button>
              
              {/* Hamburger menu */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-[#0089CF] transition-colors duration-200 p-2" aria-label="Toggle menu">
                {isMenuOpen ? <X size={isScrolled ? 22 : 24} /> : <Menu size={isScrolled ? 22 : 24} />}
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Search Panel */}
        {isSearchOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 z-40 p-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder={t('header.searchPlaceholder')} 
                value={searchQuery} 
                onChange={handleSearchInputChange}
                onKeyPress={handleKeyPress} 
                className="w-full pl-5 pr-12 py-3 border border-gray-200 rounded-full text-base bg-gray-50 focus:bg-white focus:border-[#0089CF] outline-none" 
                autoFocus
              />
              <button onClick={handleSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0089CF]">
                <Search size={20} />
              </button>
              
              {/* Search Results Dropdown */}
              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50 max-h-80 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <div className="py-2">
                      {searchResults.map((product, index) => (
                        <button
                          key={index}
                          onClick={() => handleProductClick(product)}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 text-left"
                        >
                          <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                            <OptimizedImage
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {product.name.length > 50 ? `${product.name.substring(0, 50)}...` : product.name}
                            </p>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs text-[#0089CF] bg-blue-50 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              <span className="text-sm font-semibold text-gray-900">{product.price}</span>
                            </div>
                          </div>

                        </button>
                      ))}
                    </div>
                  ) : searchQuery.trim().length > 0 && (
                    <div className="py-8 text-center text-gray-500">
                      <p className="text-sm">No products found.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden fixed left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto ${isScrolled ? 'top-14' : 'top-20'}`}>
            <div className="py-6 px-4">
              <nav className="flex flex-col space-y-1">
                {/* Product heading (non-clickable) */}
                <div className="text-lg font-bold text-gray-900 py-3 px-4 cursor-default">{t('header.products')}</div>
                
                {/* Product options (no categories) */}
                <div className="ml-4 flex flex-col space-y-1">
                  <button onClick={() => handleCategoryClick('Vitamins')} className="text-gray-700 hover:text-[#0089CF] transition-colors duration-200 text-left py-3 px-4 font-medium text-lg">
                    {t('products.vitamins')}
                  </button>
                  <button onClick={() => handleCategoryClick('Supplements')} className="text-gray-700 hover:text-[#0089CF] transition-colors duration-200 text-left py-3 px-4 font-medium text-lg">
                    {t('products.supplements')}
                  </button>
                  <button onClick={() => handleCategoryClick('Herbal Supplements')} className="text-gray-700 hover:text-[#0089CF] transition-colors duration-200 text-left py-3 px-4 font-medium text-lg">
                    {t('products.herbalSupplements')}
                  </button>
                  <button onClick={() => handleCategoryClick('All Products')} className="text-gray-700 hover:text-[#0089CF] transition-colors duration-200 text-left py-3 px-4 font-medium text-lg">
                    {t('products.allProducts')}
                  </button>
                </div>
                
                <div className="border-t border-gray-200 my-2"></div>
                
                <Link href="/news" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#0089CF] transition-colors duration-200 font-medium text-lg py-3 px-4 text-left">{t('header.news')}</Link>
                <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#0089CF] transition-colors duration-200 font-medium text-lg py-3 px-4 text-left">{t('header.about')}</Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#0089CF] transition-colors duration-200 font-medium text-lg py-3 px-4 text-left">{t('header.contact')}</Link>
              </nav>
            </div>
          </div>
        )}

      </div>
      
      {/* Language Loading Overlay */}
      {isLanguageLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center gap-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#0089CF]"></div>
            <span className="text-gray-700 font-medium">Switching language...</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;