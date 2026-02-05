import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. Information We Collect</h2>
        <p>We collect the following information to provide and improve our services:</p>
        <ul>
          <li><strong>Phone Number:</strong> Used for account authentication, secure login, and communication regarding your harvest tracking activities.</li>
          <li><strong>Payment Information:</strong> We do not store your credit/debit card details. All payments are processed securely via our third-party payment processor, Razorpay.</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use & Protect Your Information</h2>
        <p>We use your data to:</p>
        <ul>
          <li>Manage your Harvest Track account and provide customer support.</li>
          <li>Process payments for premium features securely.</li>
        </ul>
        <p>We implement industry-standard security measures to protect your personal information from unauthorized access.</p>
      </section>

      <section>
        <h2>3. Third-Party Services (Razorpay)</h2>
        <p>We use <strong>Razorpay</strong> for payment processing. By using our services, you agree to Razorpay's privacy policy regarding your payment data. Razorpay adheres to strict security standards to ensure your payment information is safe.</p>
      </section>

      <section>
        <h2>4. Data Security Statement</h2>
        <p>We take data security seriously. Your data is encrypted and stored securely. We do not sell your personal data to third parties.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;