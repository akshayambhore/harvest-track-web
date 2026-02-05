import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo">Harvest Track</div>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Link to="/about-us" className="nav-link">About</Link>
            <Link to="/contact-us" className="nav-link">Contact</Link>
          </nav>
        </header>
        
        <main style={{minHeight: '60vh'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <footer>
            <div style={{display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '20px'}}>
                <Link to="/privacy-policy" className="nav-link" style={{marginLeft: 0}}>Privacy Policy</Link>
                <Link to="/terms-and-conditions" className="nav-link" style={{marginLeft: 0}}>Terms & Conditions</Link>
                <Link to="/refund-policy" className="nav-link" style={{marginLeft: 0}}>Refund Policy</Link>
                <Link to="/faq" className="nav-link" style={{marginLeft: 0}}>FAQ</Link>
            </div>
            <p style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>© {new Date().getFullYear()} Harvest Track. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
