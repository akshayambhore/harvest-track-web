import React from 'react';

const FAQ = () => {
  return (
    <div className="page-container">
      <h1>Frequently Asked Questions</h1>
      
      <div style={{marginTop: '20px'}}>
        <details style={{marginBottom: '15px', padding: '10px', border: '1px solid #eee'}}>
            <summary><strong>How does Premium work?</strong></summary>
            <p>Premium unlocks unlimited entries, secure cloud backup, and detailed PDF reports for your harvests.</p>
        </details>

        <details style={{marginBottom: '15px', padding: '10px', border: '1px solid #eee'}}>
            <summary><strong>How do I extend my premium?</strong></summary>
            <p>You can renew your subscription through the app settings under "Manage Subscription". Payments are processed securely via Razorpay.</p>
        </details>

        <details style={{marginBottom: '15px', padding: '10px', border: '1px solid #eee'}}>
            <summary><strong>I have a payment issue. What should I do?</strong></summary>
            <p>Please contact our support team via the Contact Us page with your transaction ID, and we will resolve it within 24 hours.</p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;