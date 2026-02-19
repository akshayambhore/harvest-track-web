import React from 'react';

const DataDeletion = ({ lang, content }) => {
  const t = content[lang] || content.en;

  return (
    <div className="page-container">
      <h1>{t.dataDeletionTitle}</h1>
      
      <section>
        <h2>{t.dataDeletionHeading}</h2>
        <p>{t.dataDeletionContent.intro}</p>
        {/* <ul>
          {t.dataDeletionContent.steps.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
        <p>{t.dataDeletionContent.outro}</p>
      </section>
    </div>
  );
};

export default DataDeletion;
