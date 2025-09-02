import React from 'react';
import Head from 'next/head';
import News from '../../src/components/News';

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>Health News & Wellness Tips | Nutriota</title>
        <meta name="description" content="Stay updated with the latest health discoveries, wellness tips, and nutrition science from Nutriota's expert team." />
        <meta name="keywords" content="health news, wellness tips, nutrition science, vitamin research, supplement studies" />
      </Head>
      <News />
    </>
  );
}

