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
import {content} from './translations';
import Language from './lang';
import DataSafety from './DataSafety';
import DataDeletion from './DataDeletion';

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
            <Link to="/" className="nav-link" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>{content[lang].nav.home}</Link>
            <Link to="/pricing" className="nav-link" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>{content[lang].nav.pricing}</Link>
            <Link to="/privacy-policy" className="nav-link" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>{content[lang].nav.privacyPolicy}</Link>
            <Link to="/data-deletion" className="nav-link" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>{content[lang].nav.dataDeletion}</Link>
            <Link to="/about-us" className="nav-link" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>{content[lang].nav.about}</Link>
            <Link to="/contact-us" className="nav-link" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>{content[lang].nav.contact}</Link>
            <Link to="/faq" className="nav-link" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>{content[lang].nav.faq}</Link>
          </nav>
        </header>

        <main style={{ minHeight: '60vh' }}>
          <Routes>
            <Route path="/" element={<Home lang={lang} content={content}/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy lang={lang} content={content} />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions lang={lang} content={content} />} />
            <Route path="/contact-us" element={<ContactUs lang={lang} content={content} />} />
            <Route path="/refund-policy" element={<RefundPolicy lang={lang} content={content} />} />
            <Route path="/about-us" element={<AboutUs lang={lang} content={content} />} />
            <Route path="/pricing" element={<Pricing lang={lang} content={content} />} />
            <Route path="/faq" element={<FAQ lang={lang} content={content} />} />
            <Route path="/data-safety" element={<DataSafety lang={lang} content={content} />} />
            <Route path="/data-deletion" element={<DataDeletion lang={lang} content={content} />} />
          </Routes>
        </main>

        <footer style={{ padding: '28px 5%', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <Link to="/privacy-policy" className="nav-link" style={{ marginLeft: 0, textDecoration: 'none', color: '#333' }}>{content[lang].nav.privacyPolicy}</Link>
            
            <Link to="/data-safety" className="nav-link" style={{ marginLeft: 0, textDecoration: 'none', color: '#333' }}>{content[lang].nav.dataSafety}</Link>
            <Link to="/data-deletion" className="nav-link" style={{ marginLeft: 0, textDecoration: 'none', color: '#333' }}>{content[lang].nav.dataDeletion}</Link>
            <Link to="/terms-and-conditions" className="nav-link" style={{ marginLeft: 0, textDecoration: 'none', color: '#333' }}>{content[lang].nav.termsAndConditions}</Link>
              <Link to="/about-us" className="nav-link" style={{ marginLeft: 0, textDecoration: 'none', color: '#333' }}>{content[lang].nav.aboutUs}</Link>          
            <Link to="/refund-policy" className="nav-link" style={{ marginLeft: 0, textDecoration: 'none', color: '#333' }}>{content[lang].nav.refundPolicy}</Link>
            <Link to="/faq" className="nav-link" style={{ marginLeft: 0, textDecoration: 'none', color: '#333' }}>{content[lang].nav.faq}</Link>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>© {new Date().getFullYear()} Harvest Track. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
