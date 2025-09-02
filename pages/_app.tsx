import React from 'react';
import type { AppProps } from 'next/app';
import SEOHead from '../src/components/SEOHead';
import ScrollToTop from '../src/components/ScrollToTop';
import ImagePreloader from '../src/components/ImagePreloader';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import InsiderClubModal from '../src/components/InsiderClubModal';
import { useInsiderClubModal } from '../src/hooks/useInsiderClubModal';
import '../src/i18n';
import '../src/index.css';
import '../src/components/Products.css';

export default function App({ Component, pageProps }: AppProps) {
  const { isModalOpen, closeModal } = useInsiderClubModal();

  return (
    <div className="min-h-screen bg-white">
      <SEOHead />
      <ScrollToTop />
      <ImagePreloader />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <InsiderClubModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
