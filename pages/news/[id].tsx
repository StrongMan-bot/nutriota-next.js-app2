import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NewsDetail from '../../src/components/NewsDetail';

export default function NewsDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Health Article | Nutriota News</title>
        <meta name="description" content="Read expert insights on health, nutrition, and wellness from Nutriota's team of specialists." />
        <meta name="keywords" content="health article, wellness tips, nutrition advice, supplement guide" />
      </Head>
      <NewsDetail />
    </>
  );
}

