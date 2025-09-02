import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail, User } from 'lucide-react';
import Link from 'next/link';

const Newsletter = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitMessage(t('newsletter.subscribeError'));
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://hook.eu2.make.com/cfqyi3ns3p7di7fasm4ku9hd7lrqh6ga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          source: 'newsletter',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitMessage(t('newsletter.subscribeSuccess'));
        setFormData({ name: '', email: '' });
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitMessage(t('newsletter.subscribeError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-[#0089CF] to-[#0074B7] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-12 w-10 h-10 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-12 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-white/5 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            {t('newsletter.title')}
          </h2>
          <p className="text-sm text-blue-100 max-w-lg mx-auto">
            {t('newsletter.subtitle')}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <form onSubmit={handleNewsletterSubmit} className="space-y-3">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-white/70" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder={t('newsletter.namePlaceholder')}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-3 py-2.5 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all duration-200 text-sm"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-white/70" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder={t('newsletter.emailPlaceholder')}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-3 py-2.5 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all duration-200 text-sm"
                />
              </div>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-white text-[#0089CF] px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm"
              >
                {isSubmitting ? t('newsletter.subscribing') : t('newsletter.subscribe')}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {submitMessage && (
              <div className={`text-center p-2.5 rounded-lg ${
                submitMessage.includes('Thank you') || submitMessage.includes('Vielen Dank') 
                  ? 'bg-green-500/20 text-green-100 border border-green-400/30' 
                  : 'bg-red-500/20 text-red-100 border border-red-400/30'
              }`}>
                <p className="text-xs font-medium">{submitMessage}</p>
              </div>
            )}
          </form>
        </div>
        
        {/* Terms and Privacy Links */}
        <div className="text-center mt-6">
          <p className="text-xs text-blue-100">
            {t('newsletter.agreementText')}{' '}
            <Link href="/terms" className="text-white hover:text-blue-200 underline transition-colors">
              {t('footer.termsConditions')}
            </Link>
            {' '}{t('newsletter.and')}{' '}
            <Link href="/privacy" className="text-white hover:text-blue-200 underline transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
