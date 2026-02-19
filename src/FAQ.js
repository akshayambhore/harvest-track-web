import React from 'react';
import { content } from './translations';

const FAQ = ({ lang }) => {
  return (
    <div className="page-container">
      <h1>{content[lang].faq.title}</h1>
      
      <div style={{marginTop: '20px'}}>
        <details style={{marginBottom: '15px', padding: '10px', border: '1px solid #eee'}}>
            <summary><strong>{content[lang].faq.q1}</strong></summary>
            <p>{content[lang].faq.a1}</p>
        </details>

        <details style={{marginBottom: '15px', padding: '10px', border: '1px solid #eee'}}>
            <summary><strong>{content[lang].faq.q2}</strong></summary>
            <p>{content[lang].faq.a2}</p>
        </details>

        <details style={{marginBottom: '15px', padding: '10px', border: '1px solid #eee'}}>
            <summary><strong>{content[lang].faq.q3}</strong></summary>
            <p>{content[lang].faq.a3}</p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;