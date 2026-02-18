// import React from 'react';

// const RefundPolicy = () => {
//   return (
//     <div className="page-container">
//       <h1>Refund & Cancellation Policy</h1>

//       <section>
//         <h2>Refunds</h2>
//         <p>We strive to ensure satisfaction with Harvest Track Premium.</p>
//         <ul>
//             <li><strong>No refund after premium activation:</strong> Once a premium plan is activated and used, we generally do not offer refunds for the current billing cycle.</li>
//             <li>If you believe you were charged in error, please contact support within 7 days of the transaction.</li>
//         </ul>
//       </section>

//       <section>
//         <h2>Cancellations</h2>
//         <p><strong>Subscription can be cancelled anytime:</strong> You can cancel your subscription at any time through the app settings. Your premium access will continue until the end of the current billing period, and you will not be charged for the next cycle.</p>
//       </section>
//     </div>
//   );
// };

// export default RefundPolicy;
import React from 'react';

const Pricing = ({ lang, content }) => {
  const t = content[lang] || content.en;

  return (
    <div className="page-container">
      <h1>{t.pricingTitle}</h1>
      <p>{t.pricingInfo}</p>
    </div>
  );
};

export default Pricing;