import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const useInsiderClubModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Only show modal on the landing page (index page)
    if (router.pathname !== '/') {
      return;
    }

    // Check if user has already joined
    const hasJoined = localStorage.getItem('nutriota-insider-club-joined');
    
    if (hasJoined) {
      return; // User already joined, don't show modal
    }

    // Always show modal on landing page visits (no dismissal tracking)
    // Show modal after a short delay for better UX
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, [router.pathname]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    closeModal
  };
};
