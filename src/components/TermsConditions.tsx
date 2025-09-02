import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('terms.title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('terms.subtitle')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('terms.introduction')}
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.section1.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.section1.content')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.section2.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.section2.content')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.section3.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.section3.content')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.section4.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.section4.content')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.section5.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.section5.content')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.section6.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.section6.content')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.section7.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.section7.content')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.section8.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.section8.content')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.section9.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.section9.content')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.section10.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.section10.content')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.section11.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.section11.content')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.section12.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.section12.content')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('terms.section13.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.section13.content')}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
