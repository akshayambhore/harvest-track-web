
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
import translations from './translate';

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang] || translations.en;

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" className="logo">
            Harvest Track
          </Link>

          <nav className="nav">
            <Language lang={lang} setLang={setLang} />

            <Link to="/" className="nav-link">{t.nav.home}</Link>
            <Link to="/pricing" className="nav-link">{t.nav.pricing}</Link>
            <Link to="/about-us" className="nav-link">{t.nav.about}</Link>
            <Link to="/contact-us" className="nav-link">{t.nav.contact}</Link>
            <Link to="/faq" className="nav-link">{t.nav.faq}</Link>
          </nav>
        </header>

        <main>
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

        <footer>
          <div className="footer-links">
            <Link to="/privacy-policy" className="nav-link">{t.nav.privacy}</Link>
            <Link to="/terms-and-conditions" className="nav-link">{t.nav.terms}</Link>
            <Link to="/refund-policy" className="nav-link">{t.nav.refund}</Link>
            <Link to="/faq" className="nav-link">{t.nav.faq}</Link>
          </div>

          <p>© {new Date().getFullYear()} Harvest Track. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
