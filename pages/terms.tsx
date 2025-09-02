import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import TermsConditions from '../src/components/TermsConditions';
import SEOHead from '../src/components/SEOHead';

const TermsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title={t('terms.seo.title')}
        description={t('terms.seo.description')}
        keywords={t('terms.seo.keywords')}
      />
      <TermsConditions />
    </>
  );
};

export default TermsPage;
