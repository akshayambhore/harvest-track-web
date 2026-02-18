import React from 'react';

const TermsAndConditions = ({ lang, content }) => {
  const t = content[lang] || content.en;

  return (
    <div className="page-container">
      <h1>{t.termsTitle}</h1>
      <p>{t.termsLastUpdated} {new Date().toLocaleDateString()}</p>

      <section>
        <h2>{t.termsContent.usageRules.title}</h2>
        <p>{t.termsContent.usageRules.content}</p>
      </section>

      <section>
        <h2>{t.termsContent.plansAndPricing.title}</h2>
        <p>{t.termsContent.plansAndPricing.content}</p>
      </section>

      <section>
        <h2>{t.termsContent.refundPolicy.title}</h2>
        <p>{t.termsContent.refundPolicy.content}</p>
      </section>

      <section>
        <h2>{t.termsContent.userResponsibilities.title}</h2>
        <p>{t.termsContent.userResponsibilities.content}</p>
      </section>
    </div>
  );
};

export default TermsAndConditions;