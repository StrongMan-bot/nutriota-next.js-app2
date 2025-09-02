import { useEffect } from 'react';

const ImagePreloader = () => {
  useEffect(() => {
    // Skip preloading during react-snap crawling to prevent build issues
    if (navigator.userAgent === 'ReactSnap') {
      return;
    }
    
    // Preload critical hero image immediately
    const heroImage = new Image();
    heroImage.src = '/images/test hero section.jpg';
    heroImage.onload = () => {
      console.log('Hero image preloaded successfully');
    };
    heroImage.onerror = () => {
      console.warn('Failed to preload hero image');
    };

    // Preload other critical above-the-fold images
    const criticalImages = [
      '/images/nutriota.png',
      '/images/Learn more image.jpg'
    ];

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        console.log(`Critical image preloaded: ${src}`);
      };
      img.onerror = () => {
        console.warn(`Failed to preload critical image: ${src}`);
      };
    });

    // Preload other images with lower priority
    const otherImages = [
      // Category headers
      '/images/Vitamin header.jpg',
      '/images/Supplements header.jpg',
      '/images/Herbal Supplements header.jpg',
      
      // Blog post images
      '/images/Blog post number 1.jpg',
      '/images/Blog post number 2.jpg',
      '/images/Blog post number 3.jpg',
      '/images/Blog post number 4.jpg',
      '/images/Blog post number 5.jpg',
      '/images/Blog post number 6.jpg'
    ];

    // Delay preloading of non-critical images
    setTimeout(() => {
      otherImages.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          console.log(`Background image preloaded: ${src}`);
        };
        img.onerror = () => {
          console.warn(`Failed to preload background image: ${src}`);
        };
      });
    }, 1000);

  }, []);

  return null;
};

export default ImagePreloader;