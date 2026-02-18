import React from 'react';

const AboutUs = ({ lang, content }) => {
  const aboutUsContent = content[lang]?.aboutUs;

  if (!aboutUsContent) {
    return null; 
  }

  return (
    <div className="page-container">
      <h1>{aboutUsContent.title}</h1>
      
      <section>
        <h2>{aboutUsContent.appSection.title}</h2>
        <p>{aboutUsContent.appSection.content}</p>
      </section>

      <section>
        <h2>{aboutUsContent.teamSection.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: aboutUsContent.teamSection.content }}></p>
      </section>
    </div>
  );
};

export default AboutUs;