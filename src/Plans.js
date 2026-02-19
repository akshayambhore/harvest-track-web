import React from 'react';

const Plans = ({ lang, content }) => {
  const t = content[lang] || content.en;

  return (
    <div className="page-container">
      <h1>{t.plansTitle}</h1>
      <p>{t.plansInfo}</p>
    </div>
  );
};

export default Plans;