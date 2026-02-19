// src/ContactUs.js
import React from 'react';

const ContactUs = ({ lang, content }) => {
  const t = content[lang] || content.en;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="page-container contact-us-page">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{t.contactContent.title}</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>{t.contactContent.subtitle}</p>
      </div>

      <div className="contact-info-container">
          <h3>{t.contactContent.contactInfo}</h3>
          <div className="info-item">
            <strong>Email:</strong>
            <p><a href={`mailto:${t.contactContent.email}`}>{t.contactContent.email}</a></p>
          </div>
          <div className="info-item">
            <strong>Phone:</strong>
            <p>{t.contactContent.phone}</p>
          </div>
          <div className="info-item">
            <strong>Address:</strong>
            <p>{t.contactContent.address}</p>
          </div>
        </div>

      <style>{`
        .contact-us-page {
          max-width: 1100px;
          margin: 0 auto;
        }
        .contact-info-container {
          background: var(--surface-color);
          padding: 2.5rem;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          margin: 0 auto; /* Center the container */
          max-width: 500px; /* Optional: constrain width */
        }
        .contact-info-container h3 {
          margin-top: 0;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          color: var(--text-color);
          text-align: center; /* Center the heading */
        }
        .info-item {
          margin-bottom: 1.5rem;
          text-align: center; /* Center the items */
        }
        .info-item strong {
          color: var(--text-secondary);
        }
        .info-item p {
          margin: 0.25rem 0 0 0;
          font-size: 1rem;
          color: var(--text-color);
        }
        .info-item a {
          color: var(--primary-color);
          text-decoration: none;
        }
        .info-item a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;

