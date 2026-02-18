import React from 'react';

const Pricing = ({ lang, content }) => {
  const t = content[lang] || content.en;

  return (
    <div className="page-container">
      <h1>{t.pricingTitle}</h1>
      <p>{t.pricingInfo}</p>
    </div>
  );
};

export default Pricing;