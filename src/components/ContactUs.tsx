import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptPrivacy: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? target.checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.acceptPrivacy) {
      setSubmitMessage(t('contact.privacyRequired'));
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://hook.eu2.make.com/h7r3qreirngthdopc5tj6lnfem1v2lfb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          acceptPrivacy: formData.acceptPrivacy,
          source: 'contact_form',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitMessage(t('contact.successMessage'));
        setFormData({
          name: '',
          email: '',
          message: '',
          acceptPrivacy: false
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitMessage(t('contact.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0089CF]">
            {t('contact.subtitle')}
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.getInTouch')}
              </h3>
              
              {/* Email Section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#0089CF] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {t('contact.emailTitle')}
                    </h4>
                    <p className="text-gray-600">
                      {t('contact.emailSubtitle')}
                    </p>
                  </div>
                </div>
                <a 
                  href="mailto:enschede@dzhbv.nl"
                  className="text-[#0089CF] hover:text-[#0074B7] font-medium text-lg transition-colors duration-200"
                >
                  enschede@dzhbv.nl
                </a>
              </div>

              {/* Address Section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#0089CF] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {t('contact.addressTitle')}
                    </h4>
                    <p className="text-gray-600">
                      {t('contact.addressSubtitle')}
                    </p>
                  </div>
                </div>
                <address className="text-gray-700 text-lg not-italic leading-relaxed">
                  Kingsfordweg 151<br />
                  1043 GR Amsterdam<br />
                  The Netherlands
                </address>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('contact.responseTime')}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {t('contact.responseTimeText')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.sendMessage')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-[#0089CF] transition-colors duration-200 outline-none"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-[#0089CF] transition-colors duration-200 outline-none"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-[#0089CF] transition-colors duration-200 outline-none resize-vertical"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="acceptPrivacy"
                    name="acceptPrivacy"
                    checked={formData.acceptPrivacy}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4 text-[#0089CF] border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="acceptPrivacy" className="text-sm text-gray-700">
                    {t('contact.privacyAccept')}{' '}
                    <button
                      type="button"
                      className="text-[#0089CF] hover:text-[#0074B7] font-semibold underline transition-colors duration-200"
                      onClick={() => router.push('/terms')}
                    >
                      {t('footer.termsConditions')}
                    </button>
                    {' '}{t('contact.and')}{' '}
                    <button
                      type="button"
                      className="text-[#0089CF] hover:text-[#0074B7] font-semibold underline transition-colors duration-200"
                      onClick={() => router.push('/privacy')}
                    >
                      {t('footer.privacyPolicy')}
                    </button>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0089CF] hover:bg-[#0074B7] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? t('contact.sending') : t('contact.sendMessage')}
                  </button>
                </div>
                
                {/* Submit Message */}
                {submitMessage && (
                  <div className="pt-4">
                    <p className={`text-center ${submitMessage.includes(t('contact.successMessage')) ? 'text-[#0089CF]' : 'text-red-600'}`}>
                      {submitMessage}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;