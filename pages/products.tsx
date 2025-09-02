import React from 'react';
import Head from 'next/head';
import Products from '../src/components/Products';

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Products - Premium Vitamins & Supplements | Nutriota</title>
        <meta name="description" content="Discover our comprehensive range of high-quality vitamins, minerals, and herbal supplements. Trusted by thousands across the UK and Europe." />
        <meta name="keywords" content="vitamins, supplements, herbal supplements, nutrition products, health products, vitamin d, magnesium, b vitamins" />
      </Head>
      <Products />
    </>
  );
}

