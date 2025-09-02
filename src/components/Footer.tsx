import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('header.products'), href: '/products' },
    { name: t('header.news'), href: '/news' },
    { name: t('header.about'), href: '/about' },
    { name: t('header.contact'), href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
    { name: 'Facebook', icon: <Facebook size={20} />, href: '#' }
  ];

  return (
    <footer className="bg-[#093A5D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Nutriota</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#0089CF] hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Information */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">{t('footer.companyInfo')}</h4>
            <div className="text-gray-300 space-y-2">
              <p className="font-semibold text-white">{t('footer.companyName')}</p>
              <p>{t('footer.companyAddress1')}</p>
              <p>{t('footer.companyAddress2')}</p>
              <p>{t('footer.companyAddress3')}</p>
              <p>{t('footer.companyAddress4')}</p>
              <p className="mt-4">
                <span className="font-semibold">{t('footer.phone')}:</span> {t('footer.phoneNumber')}
              </p>
              <p className="mt-2 text-sm text-gray-400">
                {t('footer.companyDescription')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')} | 
            <Link href="/privacy" className="hover:text-[#0089CF] transition-colors ml-1">{t('footer.privacyPolicy')}</Link>
            <span className="mx-1">|</span>
            <Link href="/terms" className="hover:text-[#0089CF] transition-colors">{t('footer.termsConditions')}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;