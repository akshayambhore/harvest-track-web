// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import ContactUs from './ContactUs';
import RefundPolicy from './RefundPolicy';
import AboutUs from './AboutUs';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Language from './lang';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <Router>
      <div className="App">
        <header className="App-header" style={{ padding: '12px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 999, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)', borderBottom: '1px solid #eee' }}>
          <Link to="/" className="logo" style={{ textDecoration: 'none', color: '#27ae60', fontWeight: 700, fontSize: '1.25rem' }}>
            Harvest Track
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Language lang={lang} setLang={setLang} />
            <Link to="/" className="nav-link" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>Home</Link>
            <Link to="/pricing" className="nav-link" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>Pricing</Link>
            <Link to="/about-us" className="nav-link" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>About</Link>
            <Link to="/contact-us" className="nav-link" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>Contact</Link>
            <Link to="/faq" className="nav-link" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>FAQ</Link>
          </nav>
        </header>

        <main style={{ minHeight: '60vh' }}>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy lang={lang} />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions lang={lang} />} />
            <Route path="/contact-us" element={<ContactUs lang={lang} />} />
            <Route path="/refund-policy" element={<RefundPolicy lang={lang} />} />
            <Route path="/about-us" element={<AboutUs lang={lang} />} />
            <Route path="/pricing" element={<Pricing lang={lang} />} />
            <Route path="/faq" element={<FAQ lang={lang} />} />
          </Routes>
        </main>

        <footer style={{ padding: '28px 5%', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <Link to="/privacy-policy" className="nav-link" style={{ marginLeft: 0, textDecoration: 'none', color: '#333' }}>Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="nav-link" style={{ marginLeft: 0, textDecoration: 'none', color: '#333' }}>Terms & Conditions</Link>
            <Link to="/refund-policy" className="nav-link" style={{ marginLeft: 0, textDecoration: 'none', color: '#333' }}>Refund Policy</Link>
            <Link to="/faq" className="nav-link" style={{ marginLeft: 0, textDecoration: 'none', color: '#333' }}>FAQ</Link>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>© {new Date().getFullYear()} Harvest Track. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
