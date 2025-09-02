import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProductDetail from '../../src/components/ProductDetail';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Product {id} - Premium Vitamins & Supplements | Nutriota</title>
        <meta name="description" content="Discover our high-quality vitamins and supplements. Trusted by thousands across the UK and Europe." />
        <meta name="keywords" content="vitamins, supplements, herbal supplements, nutrition products, health products" />
      </Head>
      <ProductDetail productId={id as string} />
    </>
  );
}
