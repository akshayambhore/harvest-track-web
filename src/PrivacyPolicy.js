import React from 'react';

const PrivacyPolicy = ({ lang, content }) => {
  const t = content[lang] || content.en;

  return (
    <div className="page-container">
      <h1>{t.privacyTitle}</h1>
      
      <section>
        <h2>{t.privacyHeading}</h2>
        <p>{t.privacyContent.introduction}</p>
      </section>

      <section>
        <h3>{t.privacyContent.informationWeCollect}</h3>
        <ul>
          {t.privacyContent.collectedData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>{t.privacyContent.howWeUseYourInformation}</h3>
        <ul>
          {t.privacyContent.usageOfData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>{t.privacyContent.dataSharing}</h3>
        <p>{t.privacyContent.sharingPolicy}</p>
      </section>

      <section>
        <h3>{t.privacyContent.dataSecurity}</h3>
        <p>{t.privacyContent.securityPolicy}</p>
      </section>

      <section>
        <h3>{t.privacyContent.yourRights}</h3>
        <p>{t.privacyContent.rightsPolicy}</p>
      </section>

      <section>
        <h3>{t.privacyContent.contact}</h3>
        <p>{t.privacyContent.contactPolicy}</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;