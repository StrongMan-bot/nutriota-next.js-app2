import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';
import { Star, ExternalLink, ArrowLeft } from 'lucide-react';

interface ProductDetailProps {
  productId: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const { t, i18n } = useTranslation(`product${productId}`);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);

  // Product data with image arrays for each product
  const products = [
    {
      id: "1",
      name: "Nutriota Alpha Lipoic Acid 500 mg 180 Capsules",
      price: "€30.27",
      images: [
        "/images/ProductImage1.jpg",
        "/images/ProductImage1.2.jpg",
        "/images/ProductImage1.3.jpg",
        "/images/ProductImage1.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B081D13S3P",
      rating: 4.5,
      reviews: "400+ ratings",
      category: "Supplements"
    },
    {
      id: "2",
      name: "Nutriota Vitamin B1 (Thiamine) 250 mg 180 Capsules",
      price: "€20.17",
      images: [
        "/images/ProductImage2.jpg",
        "/images/ProductImage2.2.jpg",
        "/images/ProductImage2.3.jpg",
        "/images/ProductImage2.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B0CKTYJJ4M",
      rating: 4.6,
      reviews: "150+ ratings",
      category: "Vitamins"
    },
    {
      id: "3",
      name: "Nutriota Propolis 2000 mg 180 Tablets",
      price: "€18.15",
      images: [
        "/images/ProductImage3.jpg",
        "/images/ProductImage3.2.jpg",
        "/images/ProductImage3.3.jpg",
        "/images/ProductImage3.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B08428DH3Z",
      rating: 4.5,
      reviews: "300+ ratings",
      category: "Supplements"
    },
    {
      id: "4",
      name: "Nutriota Vitamin B6 12.5 mg 365 Tablets",
      price: "€14.03",
      images: [
        "/images/ProductImage4.jpg",
        "/images/ProductImage4.2.jpg",
        "/images/ProductImage4.3.jpg",
        "/images/ProductImage4.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B08B121XGR",
      rating: 4.6,
      reviews: "300+ ratings",
      category: "Vitamins"
    },
    {
      id: "5",
      name: "Nutriota Vitamin B1 (Thiamine) 100 mg 180 Capsules",
      price: "€12.11",
      images: [
        "/images/ProductImage5.jpg",
        "/images/ProductImage5.2.jpg",
        "/images/ProductImage5.3.jpg",
        "/images/ProductImage5.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B0D673DJR7",
      rating: 4.6,
      reviews: "100+ ratings",
      category: "Vitamins"
    },
    {
      id: "6",
      name: "Nutriota Vitamin B1 (Thiamine) 200 mg 180 Tablets",
      price: "€14.12",
      images: [
        "/images/ProductImage6.jpg",
        "/images/ProductImage6.2.jpg",
        "/images/ProductImage6.3.jpg",
        "/images/ProductImage6.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B0D5XYTPXD",
      rating: 4.6,
      reviews: "50+ ratings",
      category: "Vitamins"
    },
    {
      id: "7",
      name: "Nutriota Propolis 2000 mg 90 Capsules",
      price: "€16.95",
      images: [
        "/images/ProductImage7.jpg",
        "/images/ProductImage7.2.jpg",
        "/images/ProductImage7.3.jpg",
        "/images/ProductImage7.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B09L3SH83Z",
      rating: 4.4,
      reviews: "150+ ratings",
      category: "Supplements"
    },
    {
      id: "8",
      name: "Nutriota Echinacea 500 mg 240 Tablets",
      price: "€20.17",
      images: [
        "/images/ProductImage8.jpg",
        "/images/ProductImage8.2.jpg",
        "/images/ProductImage8.3.jpg",
        "/images/ProductImage8.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B08B16GMQ3",
      rating: 4.6,
      reviews: "250+ ratings",
      category: "Herbal Supplements"
    },
    {
      id: "9",
      name: "Nutriota Vitamin B3 (Nicotinamide) 500 mg 180 Capsules",
      price: "€18.07",
      images: [
        "/images/ProductImage9.jpg",
        "/images/ProductImage9.2.jpg",
        "/images/ProductImage9.3.jpg",
        "/images/ProductImage9.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B0845TMGBN",
      rating: 4.5,
      reviews: "200+ ratings",
      category: "Vitamins"
    },
    {
      id: "10",
      name: "Nutriota ZMA (Zinc (10 mg) + Magnesium (187.5 mg) + Vitamin B6 (6 mg)) 120 Capsules",
      price: "€9.98",
      images: [
        "/images/ProductImage10.jpg",
        "/images/ProductImage10.2.jpg",
        "/images/ProductImage10.3.jpg",
        "/images/ProductImage10.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B0DGMD369V",
      rating: 4.6,
      reviews: "50+ ratings",
      category: "Supplements"
    },
    {
      id: "11",
      name: "Nutriota Vitamin B2 (Riboflavin) 250 mg 180 Capsules",
      price: "€30.27",
      images: [
        "/images/ProductImage11.jpg",
        "/images/ProductImage11.2.jpg",
        "/images/ProductImage11.3.jpg",
        "/images/ProductImage11.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B0CXJ3CK9K",
      rating: 4.6,
      reviews: "50+ ratings",
      category: "Vitamins"
    },
    {
      id: "12",
      name: "Nutriota Shilajit 1500 mg 180 Capsules",
      price: "€22.45",
      images: [
        "/images/ProductImage12.jpg",
        "/images/ProductImage12.2.jpg",
        "/images/ProductImage12.3.jpg",
        "/images/ProductImage12.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B0D1RBLDZS",
      rating: 4.2,
      reviews: "50+ ratings",
      category: "Supplements"
    },
    {
      id: "13",
      name: "Nutriota Silica 250 mg (120 Capsules)",
      price: "€25.23",
      images: [
        "/images/ProductImage13.jpg",
        "/images/ProductImage13.2.jpg",
        "/images/ProductImage13.3.jpg",
        "/images/ProductImage13.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B09ZVP7LCM",
      rating: 4.2,
      reviews: "40+ ratings",
      category: "Supplements"
    },
    {
      id: "14",
      name: "Nutriota Vitamin B5 (Pantothenic Acid) 500 mg 120 Capsules",
      price: "€25.23",
      images: [
        "/images/ProductImage14.jpg",
        "/images/ProductImage14.2.jpg",
        "/images/ProductImage14.3.jpg",
        "/images/ProductImage14.4.jpg"
      ],
      link: "https://www.amazon.de/dp/B0D4LZ9WBC",
      rating: 4.4,
      reviews: "30+ ratings",
      category: "Vitamins"
    }
  ];

  const product = products.find(p => p.id === productId);

  // Reset selected image when product changes
  useEffect(() => {
    setSelectedImage(0);
  }, [productId]);

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

  const tabs = [
    { id: 'description', label: t('productDescription') },
    { id: 'ingredients', label: t('ingredients') },
    { id: 'information', label: t('generalInformation') }
  ];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <button
            onClick={() => router.push('/products')}
            className="bg-[#0089CF] text-white px-6 py-2 rounded-lg hover:bg-[#0070A3] transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.push('/products')}
          className="flex items-center gap-2 text-[#0089CF] hover:text-[#0070A3] mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">{t('backToProducts')}</span>
        </button>

        {/* Product Details */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Left Side - Product Images with Carousel */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {/* Thumbnail Images - Optimized for 4:5 ratio */}
              <div className="flex flex-col gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-12 h-15 cursor-pointer border-2 rounded-lg overflow-hidden transition-all ${
                      selectedImage === index 
                        ? 'border-[#0089CF] shadow-md' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <OptimizedImage
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Main Image - Optimized container for 1:2 ratio (first image) */}
              <div className="flex-1 max-w-xs">
                <div className={`w-full border border-gray-200 rounded-lg bg-white p-8 flex items-center justify-center ${
                  selectedImage === 0 ? 'min-h-80' : 'max-h-80'
                }`}>
                  <OptimizedImage
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className={`object-contain ${
                      selectedImage === 0 ? 'w-36 h-auto' : 'max-w-full max-h-full'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Product Info */}
            <div className="space-y-6 -ml-8 lg:-ml-16 flex flex-col justify-center">
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                
                {/* Star Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.reviews}
                  </span>
                </div>

                {/* Price and Buy Button */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-[#0089CF]">
                    {product.price}
                  </span>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0089CF] hover:bg-[#0070A3] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={14} />
                    {t('buyOnAmazon')}
                  </a>
                </div>

                {/* About the item section */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {t('aboutItem')}
                  </h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {t('aboutContent')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="border-t border-gray-200">
            <div className="flex flex-wrap border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'text-[#0089CF] border-b-2 border-[#0089CF] bg-blue-50'
                      : 'text-gray-600 hover:text-[#0089CF] hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 lg:p-8">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {t('descriptionContent')}
                  </p>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {t('ingredientsContent')}
                  </p>
                </div>
              )}

              {activeTab === 'information' && (
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {t('informationContent')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Explore More Products Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {t('exploreMoreProducts')}
          </h2>
          <p className="text-gray-600 text-center mb-6">
            {t('exploreMoreDescription')}
          </p>
          <div className="text-center">
            <button
              onClick={() => router.push('/products')}
              className="bg-[#0089CF] hover:bg-[#0070A3] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              {t('viewAllProducts')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;