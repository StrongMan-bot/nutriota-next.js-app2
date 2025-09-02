import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import OptimizedImage from './OptimizedImage';

const BestSellers = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const bestSellerProducts = [
    {
      id: 1,
      name: "Nutriota Alpha Lipoic Acid 500 mg 180 Capsules",
      price: "€30.27",
      image: "https://m.media-amazon.com/images/I/612BT9dEe5L._AC_SX522_.jpg",
      link: "https://www.amazon.de/dp/B081D13S3P",
      rating: 4.5,
      reviews: "400+ " + t('products.ratings'),
      category: t('products.supplements')
    },
    {
      id: 3,
      name: "Nutriota Propolis 2000 mg 180 Tablets",
      price: "€18.15",
      image: "https://m.media-amazon.com/images/I/610Xy2Pk7DL.__AC_SX300_SY300_QL70_ML2_.jpg",
      link: "https://www.amazon.de/dp/B08428DH3Z",
      rating: 4.5,
      reviews: "300+ " + t('products.ratings'),
      category: t('products.supplements')
    },
    {
      id: 4,
      name: "Nutriota Vitamin B6 12.5 mg 365 Tablets",
      price: "€14.03",
      image: "https://m.media-amazon.com/images/I/51d2cbMwKkL.__AC_SX300_SY300_QL70_ML2_.jpg",
      link: "https://www.amazon.de/dp/B08B121XGR",
      rating: 4.6,
      reviews: "300+ " + t('products.ratings'),
      category: t('products.vitamins')
    },
    {
      id: 8,
      name: "Nutriota Echinacea 500 mg 240 Tablets",
      price: "€20.17",
      image: "https://m.media-amazon.com/images/I/6175SKfTVaL.__AC_SX300_SY300_QL70_ML2_.jpg",
      link: "https://www.amazon.de/dp/B08B16GMQ3",
      rating: 4.6,
      reviews: "250+ " + t('products.ratings'),
      category: t('products.herbalSupplements')
    }
  ];

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

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }

    return stars;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('bestSellers.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('bestSellers.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellerProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
              <div 
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => router.push(`/products/${product.id}`)}
              >
                <OptimizedImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-100 text-[#0089CF] px-2 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0089CF] text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Star size={12} className="fill-current" />
                    {t('products.bestSeller')}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 
                  className="text-base font-semibold text-gray-900 mb-3 line-clamp-2 cursor-pointer hover:text-[#0089CF] transition-colors"
                  onClick={() => router.push(`/products/${product.id}`)}
                >
                  {product.name}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#0089CF]">
                      {product.price}
                    </span>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0089CF] hover:bg-[#0070A3] text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-200 flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={12} />
                      {t('products.buyOnAmazon')}
                    </a>
                  </div>
                  
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
      </div>
    </section>
  );
};

export default BestSellers;