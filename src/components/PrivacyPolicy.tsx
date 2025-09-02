import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t('privacy.title')}
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none font-sans">
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. {t('privacy.introduction')}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.introText')}
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. {t('privacy.informationWeCollect')}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.informationWeCollectText')}
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>{t('privacy.personalInfo')}</li>
              <li>{t('privacy.usageData')}</li>
              <li>{t('privacy.cookies')}</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. {t('privacy.howWeUse')}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.howWeUseText')}
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>{t('privacy.provideServices')}</li>
              <li>{t('privacy.processTransactions')}</li>
              <li>{t('privacy.communicate')}</li>
              <li>{t('privacy.personalize')}</li>
              <li>{t('privacy.monitor')}</li>
              <li>{t('privacy.comply')}</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">4. {t('privacy.legalBasisTitle', {defaultValue: "Legal Basis for Processing (GDPR)"})}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.legalBasisText', {defaultValue: "For users in the European Economic Area (EEA), we process personal data based on the following legal grounds:"})}
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li><strong>{t('privacy.consentTitle', {defaultValue: "Consent"})}:</strong> {t('privacy.consentText', {defaultValue: "Where you have given explicit consent for specific purposes, such as marketing."})}</li>
              <li><strong>{t('privacy.contractTitle', {defaultValue: "Contractual Necessity"})}:</strong> {t('privacy.contractText', {defaultValue: "To fulfill our obligations under a contract, such as processing payments."})}</li>
              <li><strong>{t('privacy.legalTitle', {defaultValue: "Legal Obligation"})}:</strong> {t('privacy.legalText', {defaultValue: "To comply with applicable laws and regulations."})}</li>
              <li><strong>{t('privacy.legitimateTitle', {defaultValue: "Legitimate Interests"})}:</strong> {t('privacy.legitimateText', {defaultValue: "For purposes such as improving our services or preventing fraud, where our interests do not override your rights."})}</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">5. {t('privacy.infoSharingTitle', {defaultValue: "Information Sharing"})}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.infoSharingText', {defaultValue: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following cases:"})}
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li><strong>{t('privacy.serviceProvidersTitle', {defaultValue: "Service Providers"})}:</strong> {t('privacy.serviceProvidersText', {defaultValue: "We share data with trusted third-party providers who assist with services such as payment processing, hosting, or analytics, under strict confidentiality agreements."})}</li>
              <li><strong>{t('privacy.legalReqTitle', {defaultValue: "Legal Requirements"})}:</strong> {t('privacy.legalReqText', {defaultValue: "We may disclose information to comply with legal obligations, such as responding to court orders or government requests."})}</li>
              <li><strong>{t('privacy.businessTransferTitle', {defaultValue: "Business Transfers"})}:</strong> {t('privacy.businessTransferText', {defaultValue: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, with appropriate safeguards."})}</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">6. {t('privacy.dataSecurityTitle', {defaultValue: "Data Security"})}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.dataSecurityText', {defaultValue: "We implement robust security measures to protect your personal information, including:"})}
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>{t('privacy.encryption', {defaultValue: "Encryption of sensitive data during transmission and storage."})}</li>
              <li>{t('privacy.securityAssessments', {defaultValue: "Regular security assessments and updates to our systems."})}</li>
              <li>{t('privacy.accessControls', {defaultValue: "Access controls to limit who can view or process your data."})}</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.securityNote', {defaultValue: "Despite our efforts, no system is completely secure. In the event of a data breach, we will notify affected users as required by law."})}
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">7. {t('privacy.rightsTitle', {defaultValue: "Your Data Protection Rights"})}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.rightsText', {defaultValue: "Depending on your location, you may have the following rights regarding your personal data:"})}
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li><strong>{t('privacy.accessTitle', {defaultValue: "Access"})}:</strong> {t('privacy.accessText', {defaultValue: "Request a copy of the personal data we hold about you."})}</li>
              <li><strong>{t('privacy.rectificationTitle', {defaultValue: "Rectification"})}:</strong> {t('privacy.rectificationText', {defaultValue: "Correct inaccurate or incomplete data."})}</li>
              <li><strong>{t('privacy.deletionTitle', {defaultValue: "Deletion"})}:</strong> {t('privacy.deletionText', {defaultValue: "Request the deletion of your data, subject to legal obligations."})}</li>
              <li><strong>{t('privacy.restrictionTitle', {defaultValue: "Restriction"})}:</strong> {t('privacy.restrictionText', {defaultValue: "Request that we limit the processing of your data."})}</li>
              <li><strong>{t('privacy.portabilityTitle', {defaultValue: "Portability"})}:</strong> {t('privacy.portabilityText', {defaultValue: "Receive your data in a structured, machine-readable format."})}</li>
              <li><strong>{t('privacy.objectionTitle', {defaultValue: "Objection"})}:</strong> {t('privacy.objectionText', {defaultValue: "Object to processing based on legitimate interests or for direct marketing."})}</li>
              <li><strong>{t('privacy.withdrawTitle', {defaultValue: "Withdraw Consent"})}:</strong> {t('privacy.withdrawText', {defaultValue: "Withdraw consent at any time, where processing is based on consent."})}</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.contactRights', {defaultValue: "To exercise these rights, please contact us using the details below."})}
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">8. {t('privacy.internationalTitle', {defaultValue: "International Data Transfers"})}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.internationalText', {defaultValue: "Your data may be transferred to and processed in countries outside your jurisdiction, including the United States. We ensure that such transfers comply with applicable laws, using mechanisms like Standard Contractual Clauses (SCCs) for EEA data."})}
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">9. {t('privacy.retentionTitle', {defaultValue: "Data Retention"})}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.retentionText', {defaultValue: "We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. For example, we retain account information while your account is active and for a reasonable period thereafter to comply with legal obligations."})}
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">10. {t('privacy.cookiesTitle', {defaultValue: "Cookies and Tracking Technologies"})}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.cookiesText', {defaultValue: "We use cookies to enhance your experience. You can manage cookie preferences through your browser settings. Essential cookies are necessary for website functionality, while optional cookies support analytics and personalized content."})}
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">11. {t('privacy.thirdPartyTitle', {defaultValue: "Third-Party Links"})}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.thirdPartyText', {defaultValue: "Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites. We encourage you to review their privacy policies."})}
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">12. {t('privacy.updatesTitle', {defaultValue: "Updates to This Policy"})}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.updatesText', {defaultValue: "We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or a prominent notice on our website."})}
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">13. {t('privacy.contact')}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.contactText')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('privacy.contactEmail')}<br />
              {t('privacy.contactAddress')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;