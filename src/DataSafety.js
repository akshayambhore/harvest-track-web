import React from 'react';

const DataSafety = ({ lang, content }) => {
  const t = content[lang] || content.en;

  return (
    <div className="page-container">
      <h1>{t.dataSafetyTitle}</h1>
      
      <section>
        <h2>{t.dataSafetyHeading}</h2>
        
        <h3>{t.dataSafetyContent.dataCollected}</h3>
        <ul>
          <li>{t.dataSafetyContent.personalInfo}</li>
          <li>{t.dataSafetyContent.authData}</li>
          <li>{t.dataSafetyContent.usageData}</li>
        </ul>

        <h3>{t.dataSafetyContent.dataUsage}</h3>
        <ul>
          {t.dataSafetyContent.usage.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>{t.dataSafetyContent.dataSharing}</h3>
        <p>{t.dataSafetyContent.sharing}</p>

        <h3>{t.dataSafetyContent.dataEncryption}</h3>
        <p>{t.dataSafetyContent.encryption}</p>

        <h3>{t.dataSafetyContent.userControl}</h3>
        <p>{t.dataSafetyContent.control}</p>
      </section>
    </div>
  );
};

export default DataSafety;
