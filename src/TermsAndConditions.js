import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="page-container">
      <h1>Terms & Conditions</h1>
      <p>Last Updated: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. App Usage Rules</h2>
        <p>Harvest Track is designed to help farmers and businesses track harvest data. You agree to use the app responsibly and not for any illegal activities. Misuse of the platform may result in account termination.</p>
      </section>

      <section>
        <h2>2. Premium Plans & Pricing</h2>
        <p>We offer premium plans that unlock advanced features such as detailed reports and cloud backup. Pricing is detailed on our Pricing page. We reserve the right to modify prices with prior notice.</p>
      </section>

      <section>
        <h2>3. Refund & Cancellation Policy</h2>
        <p>Please refer to our separate Refund Policy page for specific details on cancellations and refunds. Generally, subscriptions can be cancelled at any time, but refunds are subject to specific conditions.</p>
      </section>

      <section>
        <h2>4. User Responsibilities</h2>
        <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
      </section>
    </div>
  );
};

export default TermsAndConditions;