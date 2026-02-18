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

      <div className="contact-layout">
        <div className="contact-form-container">
          <p style={{ marginBottom: '2rem', textAlign: 'center', fontStyle: 'italic', color: 'var(--primary-color)' }}>
            {t.contactContent.assurance}
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t.contactContent.nameLabel}</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contactContent.emailLabel}</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t.contactContent.subjectLabel}</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contactContent.messageLabel}</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              {t.contactContent.submitButton}
            </button>
          </form>
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
      </div>

      <style>{`
        .contact-us-page {
          max-width: 1100px;
          margin: 0 auto;
        }
        .contact-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: flex-start;
        }
        .contact-form-container {
          background: #fff;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.07);
          border: 1px solid var(--border-color);
        }
        .contact-form .form-group {
          margin-bottom: 1.5rem;
        }
        .contact-form label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--text-color);
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
        }
        .contact-info-container {
          background: var(--surface-color);
          padding: 2.5rem;
          border-radius: 16px;
          border: 1px solid var(--border-color);
        }
        .contact-info-container h3 {
          margin-top: 0;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          color: var(--text-color);
        }
        .info-item {
          margin-bottom: 1.5rem;
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

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }
          .contact-info-container {
            margin-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;

