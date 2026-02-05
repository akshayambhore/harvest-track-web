import React from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <div className="home-page">
      <div className="page-container home-wrapper" style={{position: 'relative'}}>
        <div className="home-left" style={{position: 'relative', zIndex: 2}}>
          <h1 style={{fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem'}}>
            Master Your Harvest <br />
            <span className="text-gradient">Maximize Your Yield</span>
          </h1>
          <p style={{fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem'}}>
            Your digital partner for efficient harvest management. Track crops, manage finances, and grow your business with data-driven insights.
          </p>
          
          <div className="cta-group">
            <Link to="/pricing" className="btn btn-primary">View Plans</Link>
            <Link to="/contact-us" className="btn btn-secondary">Contact Support</Link>
          </div>

          <div className="trust-badge">
            <span className="status-dot"></span> Secure payments powered by <strong>Razorpay</strong>
          </div>
        </div>
        
        <div className="home-right" style={{position: 'absolute', top: "-20%", right: "-20%", width: '100%', height: '120%', zIndex: 1, pointerEvents: 'none'}}>
          {/* This is a placeholder 3D abstract shape. You can replace the URL with your own from Spline.design */}
           <Spline
        scene="https://prod.spline.design/EafXbACTD3aATD-r/scene.splinecode" 
      />
        </div>
      </div>

      <section className="features-section">
        <div className="section-content">
          <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Why Choose Harvest Track?</h2>
          <p style={{margin: '0 auto'}}>Everything you need to manage your farm efficiently.</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">📊</span>
              <h3>Real-time Analytics</h3>
              <p>Track your harvest yields and expenses in real-time with intuitive charts and dashboards.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">☁️</span>
              <h3>Cloud Sync</h3>
              <p>Access your data from anywhere. Your records are safely stored and synced across all your devices.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📄</span>
              <h3>PDF Reports</h3>
              <p>Generate professional PDF reports for your stakeholders, banks, or personal records with one click.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section-home">
        <div className="section-content">
          <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>About Harvest Track</h2>
          <p style={{margin: '0 auto 2rem auto', maxWidth: '800px'}}>
            We are dedicated to modernizing agriculture through technology. Our app helps farmers and agricultural businesses manage their operations efficiently, saving time and increasing profitability through data-driven decisions.
          </p>
          <Link to="/about-us" className="btn btn-secondary">Read Our Story</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;