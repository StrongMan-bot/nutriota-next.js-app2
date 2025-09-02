import React from 'react';
import Head from 'next/head';
import AboutUs from '../src/components/AboutUs';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Our Mission & Values | Nutriota</title>
        <meta name="description" content="Learn about Nutriota's mission to empower individuals across the UK and Europe through high-quality, scientifically-backed nutritional supplements." />
        <meta name="keywords" content="about nutriota, company mission, nutritional excellence, supplement quality, health company" />
      </Head>
      <AboutUs />
    </>
  );
}

