import React, { useState, useEffect } from 'react';
import { X, Mail, CheckCircle } from 'lucide-react';

interface InsiderClubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InsiderClubModal: React.FC<InsiderClubModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.email.includes('@')) {
      setError('Bitte geben Sie Ihren Namen und eine gültige E-Mail-Adresse ein.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://hook.eu2.make.com/cfqyi3ns3p7di7fasm4ku9hd7lrqh6ga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          source: 'insider_club_modal',
          timestamp: new Date().toISOString(),
          language: 'de'
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Store in localStorage to prevent showing again
        localStorage.setItem('nutriota-insider-club-joined', 'true');
      } else {
        throw new Error('Failed to submit email');
      }
    } catch (error) {
      console.error('Email submission error:', error);
      setError('Etwas ist schief gelaufen. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Don't store dismissal - always show on landing page visits
    onClose();
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {/* Nutriota Logo */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto mb-4">
              <img 
                src="/images/nutriota.png" 
                alt="Nutriota Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {!isSuccess ? (
            <>
              {/* Headline */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4 leading-tight">
                20 % Rabatt auf Ihre erste Bestellung sichern!
              </h2>

              {/* Subheadline */}
              <p className="text-gray-600 text-center mb-8 leading-relaxed">
                Tragen Sie einfach Ihren Namen und Ihre E-Mail ein und wir schicken Ihnen den Gutscheincode sofort zu.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ihr Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0089CF] focus:border-[#0089CF] transition-colors duration-200 outline-none text-center"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0089CF] focus:border-[#0089CF] transition-colors duration-200 outline-none text-center"
                    required
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0089CF] hover:bg-[#0074B7] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Jetzt beitreten'}
                </button>
              </form>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Mit der Anmeldung stimmen Sie unseren Datenschutzbestimmungen zu.
              </p>
            </>
          ) : (
            /* Success State */
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Vielen Dank!
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vielen Dank, dass Sie dem Nutriota Insider Club beigetreten sind!
              </p>
              
              <button
                onClick={handleClose}
                className="w-full bg-[#0089CF] hover:bg-[#0074B7] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schließen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsiderClubModal;
