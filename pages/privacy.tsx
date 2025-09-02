import React from 'react';
import Head from 'next/head';
import PrivacyPolicy from '../src/components/PrivacyPolicy';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Nutriota</title>
        <meta name="description" content="Privacy policy and data protection information for Nutriota supplements. Learn how we protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, user privacy" />
      </Head>
      <PrivacyPolicy />
    </>
  );
}

