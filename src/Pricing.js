import React from 'react';

const Pricing = () => {
  return (
    <div className="page-container">
      <h1>Pricing Plans</h1>
      <p>Choose the plan that fits your needs.</p>
      
      <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px'}}>
        <div style={{background: 'var(--surface-color)', border: '1px solid var(--border-color)', padding: '40px', borderRadius: '20px', flex: 1, minWidth: '250px'}}>
            <h2>Free</h2>
            <p style={{marginBottom: '20px'}}>Basic harvest tracking for small farms.</p>
            <h3 style={{fontSize: '2rem', margin: '20px 0'}}>₹0 <span style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>/ month</span></h3>
        </div>
        <div style={{background: 'linear-gradient(180deg, rgba(76, 175, 80, 0.15) 0%, var(--surface-color) 100%)', border: '1px solid var(--primary-color)', padding: '40px', borderRadius: '20px', flex: 1, minWidth: '250px', position: 'relative', boxShadow: '0 10px 30px -10px rgba(76, 175, 80, 0.3)'}}>
            <h2 style={{color: 'var(--primary-color)'}}>Premium</h2>
            <p style={{marginBottom: '20px'}}>Advanced analytics, PDF reports & Cloud Backup.</p>
            <h3 style={{fontSize: '2rem', margin: '20px 0'}}>₹199 <span style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>/ month</span></h3>
            <p style={{color: 'var(--primary-color)', fontWeight: 'bold'}}>or ₹1999 / year (Save 15%)</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;