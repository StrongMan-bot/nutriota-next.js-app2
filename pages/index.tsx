import React from 'react';
import Head from 'next/head';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import BestSellers from '../src/components/BestSellers';
import WhyNutriota from '../src/components/WhyNutriota';
import Testimonials from '../src/components/Testimonials';
import LearnNews from '../src/components/LearnNews';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nutriota - Daily Wellness, Simplified | Premium Supplements</title>
        <meta name="description" content="Clean, transparent supplements designed for modern lifestyles. High-quality vitamins, minerals, and herbal blends for daily wellness." />
        <meta name="keywords" content="vitamin supplements, health supplements, nutrition, wellness, vitamins, minerals, herbal supplements, nutriota" />
        <meta property="og:image" content="/images/test hero section.jpg" />
      </Head>
      <Hero />
      <About />
      <BestSellers />
      <WhyNutriota />
      <Testimonials />
      <LearnNews />
    </>
  );
}

