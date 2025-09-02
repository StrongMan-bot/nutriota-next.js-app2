import React from 'react';
import { Star, Smile, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyNutriota = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Star,
      title: t('whyNutriota.lovedOnAmazon.title'),
      description: t('whyNutriota.lovedOnAmazon.description'),
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: Smile,
      title: t('whyNutriota.moneyBackGuarantee.title'),
      description: t('whyNutriota.moneyBackGuarantee.description'),
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: Eye,
      title: t('whyNutriota.carefullyManufactured.title'),
      description: t('whyNutriota.carefullyManufactured.description'),
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('whyNutriota.title')}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.iconBg} ${feature.borderColor} border-2 mb-6`}>
                  <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyNutriota;

