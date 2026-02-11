// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
// import Spline from '@splinetool/react-spline'; // Uncomment if using Spline
import step1 from './assets/temp.jpeg';

const Home = ({ lang }) => {
  const content = {
    en: {
      title: "A Digital Partner ",
      subtitle: "To Track, Manage And Grow Your Harvesting Business.",
      desc: "Track every field. Every pass. Every acre. Real-time harvest tracking with accurate area and amount calculation, plus smart insights to run your operations better",
      btnPlan: "View Plans",
      btnContact: "Contact Support",
      secure: "Secure payments powered by",
      downloadText: "Available now on",

      featTitle: "Why Choose Harvest Track?",
      feat1Title: "Smart Crop Monitoring",
      feat1Desc: "Track every stage of your crop's growth with digital logs and photo updates.",
      feat2Title: "Financial Management",
      feat2Desc: "Keep a precise record of expenses and income to calculate your exact profit.",
      feat3Title: "Instant Reports",
      feat3Desc: "Generate PDF reports for banks and invoices for buyers in one click.",

      guideTitle: "How to Buy Premium",
      step1: "Create an Account",
      step1Desc: "Sign up using your mobile number.",
      step2: "Select a Plan",
      step2Desc: "Choose the plan that fits your farm.",
      step3: "Payment",
      step3Desc: "Pay securely via UPI or Card.",

      useGuideTitle: "How to Use Premium Features",
      useStep1: "Access Dashboard",
      useStep1Desc: "Log in to view your main dashboard.",
      useStep2: "Analyze Data",
      useStep2Desc: "Click 'Analytics' to see advanced crop charts.",
      useStep3: "Export Reports",
      useStep3Desc: "Download detailed PDF reports for banks.",

      aboutTitle: "About Harvest Track",
      aboutDesc: "We are dedicated to modernizing agriculture through technology. Our app helps farmers manage operations efficiently.",
      readStory: "Read Our Story"
    },
    mr: {
      title: "तुमचा हार्वेस्टिंग व्यवसाय ",
      subtitle: "ट्रॅक,व्यवस्थापित आणि वाढवण्यासाठी एक डिजिटल पार्टनर.",
      desc: "प्रत्येक शेत. प्रत्येक फेरी. प्रत्येक एकर.रीअल-टाइम हार्वेस्ट ट्रॅकिंग, अचूक क्षेत्रफळ व रकमेची गणना, आणि तुमचा व्यवसाय अधिक स्मार्टपणे चालवण्यासाठी.",
      btnPlan: "प्लॅन्स पहा",
      btnContact: "संपर्क साधा",
      secure: "सुरक्षित पेमेंट",
      downloadText: "आता उपलब्ध आहे",

      featTitle: "हार्वेस्ट ट्रॅक का निवडावे?",
      feat1Title: "स्मार्ट पीक देखरेख",
      feat1Desc: "डिजिटल नोंदी आणि फोटो अपडेट्ससह तुमच्या पिकाच्या प्रत्येक टप्प्यावर लक्ष ठेवा.",
      feat2Title: "आर्थिक व्यवस्थापन",
      feat2Desc: "तुमचा नेमका नफा मोजण्यासाठी खर्च आणि उत्पन्नाची अचूक नोंद ठेवा.",
      feat3Title: "त्वरित अहवाल",
      feat3Desc: "एका क्लिकवर बँकेसाठी PDF अहवाल आणि खरेदीदारांसाठी बिले तयार करा.",

      guideTitle: "प्रीमियम कसे खरेदी करावे?",
      step1: "खाते उघडा",
      step1Desc: "तुमचा मोबाईल नंबर वापरून साइन अप करा.",
      step2: "प्लॅन निवडा",
      step2Desc: "तुमच्या शेतीसाठी योग्य प्लॅन निवडा.",
      step3: "पेमेंट करा",
      step3Desc: "UPI किंवा कार्डद्वारे सुरक्षित पेमेंट करा.",

      useGuideTitle: "प्रीमियम वैशिष्ट्ये कशी वापरावी?",
      useStep1: "डॅशबोर्डवर जा",
      useStep1Desc: "लॉगिन करून मुख्य डॅशबोर्ड पहा.",
      useStep2: "माहितीचे विश्लेषण",
      useStep2Desc: "'Analytics' वर क्लिक करून पिकांचे चार्ट्स पहा.",
      useStep3: "अहवाल डाउनलोड करा",
      useStep3Desc: "बँकेसाठी लागणारे PDF अहवाल डाउनलोड करा.",

      aboutTitle: "हार्वेस्ट ट्रॅक बद्दल",
      aboutDesc: "आम्ही तंत्रज्ञानाद्वारे शेती आधुनिक करण्यासाठी समर्पित आहोत. आमचे ॲप शेतकऱ्यांना त्यांचे काम कार्यक्षमतेने करण्यास मदत करते.",
      readStory: "आमची गोष्ट वाचा"
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="home-page fade-in">

      {/* --- HERO SECTION --- */}
      <div className="page-container home-wrapper">
        {/* Background decoration */}
        <div className="hero-bg-blob" />

        <div className="home-left">
          <div className="badge-pill">🚀 New: Instant Invoicing</div>
          <h1 className="hero-title">
            {t.title} <br />
            <span className="text-gradient">{t.subtitle}</span>
          </h1>
          <p className="hero-desc">{t.desc}</p>

          <div className="cta-group">
            <Link to="/pricing" className="btn btn-primary">{t.btnPlan}</Link>
            <Link to="/contact-us" className="btn btn-secondary">
              {t.btnContact}
            </Link>
          </div>
          <div className="app-download-container">
            <span className="download-label">{t.downloadText}:</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="store-badge">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
              />
            </a>
          </div>

          <div className="trust-badge">
            <div className="shield-icon">🛡️</div>
            <span>{t.secure} <strong>Razorpay</strong></span>
          </div>
        </div>

        {/* 3D Container */}
        <div className="home-right three-d-container">
          {/* Optionally insert Spline or an illustration here */}
        </div>
      </div>

      {/* --- FEATURES SECTION --- */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">{t.featTitle}</h2>
          <div className="title-underline" />
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-img-container">
              <img src={step1} alt="Crop Monitoring" />
              <div className="overlay" />
            </div>
            <div className="feature-content">
              <h3>{t.feat1Title}</h3>
              <p>{t.feat1Desc}</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-img-container">
              <img src={step1} alt="Financial Management" />
              <div className="overlay" />
            </div>
            <div className="feature-content">
              <h3>{t.feat2Title}</h3>
              <p>{t.feat2Desc}</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-img-container">
              <img src={step1} alt="Instant Reports" />
              <div className="overlay" />
            </div>
            <div className="feature-content">
              <h3>{t.feat3Title}</h3>
              <p>{t.feat3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- GUIDE SECTION 1 (Buying) --- */}
      <section className="guide-section bg-white">
        <h2 className="section-title">{t.guideTitle}</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="image-placeholder"><img src={step1} alt="Step 1" /></div>
            <h3>{t.step1}</h3>
            <p>{t.step1Desc}</p>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <div className="image-placeholder"><img src={step1} alt="Step 2" /></div>
            <h3>{t.step2}</h3>
            <p>{t.step2Desc}</p>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <div className="image-placeholder"><img src={step1} alt="Step 3" /></div>
            <h3>{t.step3}</h3>
            <p>{t.step3Desc}</p>
          </div>
        </div>
      </section>

      {/* --- GUIDE SECTION 2 (Using) --- */}
      <section className="guide-section bg-light">
        <h2 className="section-title">{t.useGuideTitle}</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="image-placeholder"><img src={step1} alt="Use Step 1" /></div>
            <h3>{t.useStep1}</h3>
            <p>{t.useStep1Desc}</p>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <div className="image-placeholder"><img src={step1} alt="Use Step 2" /></div>
            <h3>{t.useStep2}</h3>
            <p>{t.useStep2Desc}</p>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <div className="image-placeholder"><img src={step1} alt="Use Step 3" /></div>
            <h3>{t.useStep3}</h3>
            <p>{t.useStep3Desc}</p>
          </div>
        </div>
      </section>

      <section className="about-section-home">
        <div className="section-content">
          <h2 className="about-title">{t.aboutTitle}</h2>
          <p className="about-desc">{t.aboutDesc}</p>
          <Link to="/about-us" className="btn btn-outline">{t.readStory}</Link>
        </div>
      </section>

      {/* --- MODERN CSS STYLING (kept inside component for convenience) --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

        :root {
          --primary: #27ae60;
          --primary-dark: #219150;
          --secondary: #2c3e50;
          --accent: #f1c40f;
          --bg-light: #f8fcf9;
          --text-main: #333333;
          --text-light: #666666;
          --white: #ffffff;
          --shadow-sm: 0 4px 6px rgba(0,0,0,0.05);
          --shadow-md: 0 10px 15px rgba(0,0,0,0.1);
          --shadow-lg: 0 20px 25px rgba(0,0,0,0.15);
          --radius: 16px;
        }

        .home-page { font-family: 'Poppins', sans-serif; color: var(--text-main); overflow-x: hidden; }

        .fade-in { animation: fadeIn 0.8s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .home-wrapper {
          display: flex;
          align-items: center;
          min-height: 90vh;
          padding: 2rem 5%;
          position: relative;
          background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
        }

        .hero-bg-blob {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: rgba(39, 174, 96, 0.05);
          border-radius: 50%;
          filter: blur(80px);
          z-index: 1;
        }

        .home-left { flex: 1; z-index: 2; padding-right: 2rem; }
        .home-right { flex: 1; height: 500px; position: relative; display:flex; align-items:center; justify-content:center; }

        .three-d-container {
          background: radial-gradient(circle at center, #f0fdf4, #ffffff);
          border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
          width: 100%;
          max-width: 520px;
          height: 380px;
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-12px); } 100% { transform: translateY(0px); } }

        .badge-pill { display:inline-block; background: rgba(39,174,96,0.1); color: var(--primary); padding:6px 16px; border-radius:50px; font-size:0.9rem; font-weight:600; margin-bottom:1.5rem; }

        .hero-title { font-size: 3.5rem; line-height:1.05; margin-bottom:1.25rem; font-weight:700; color:var(--secondary); }
        .text-gradient { ,background: linear-gradient(to right, var(--primary), var(--primary-dark)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

        .hero-desc { font-size:1.15rem; color:var(--text-light); line-height:1.6; margin-bottom:1.75rem; max-width:550px; }

        .cta-group { display:flex; gap:1rem; margin-bottom:2rem; }
        .btn { text-decoration:none; padding: 12px 28px; border-radius: 50px; font-weight:600; transition: all 0.25s ease; display:inline-flex; align-items:center; gap:8px; }
        .btn-primary { background: linear-gradient(135deg, var(--primary), #2ecc71); color: white; border: none; box-shadow: 0 8px 20px rgba(39,174,96,0.18); }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(39,174,96,0.28); }
        .btn-secondary { background: #fff; color: var(--secondary); border: 2px solid #eaeaea; }
        .btn-secondary:hover { background: var(--secondary); color: #fff; }

        .app-download-container { display:flex; align-items:center; gap:12px; margin-bottom:1.5rem; }
        .store-badge img { height:45px; transition: transform 0.2s; }
        .store-badge img:hover { transform: scale(1.05); }

        .trust-badge { display:flex; align-items:center; gap:10px; font-size:0.9rem; color:#666; background: rgba(255,255,255,0.8); padding:8px 16px; border-radius:8px; width:fit-content; border:1px solid #eee; }

        .features-section { padding: 6rem 5%; background: var(--bg-light); }
        .section-header { text-align:center; margin-bottom:4rem; }
        .section-title { font-size:2.5rem; color:var(--secondary); font-weight:700; margin-bottom:0.5rem; }
        .title-underline { width:60px; height:4px; background:var(--primary); margin:0 auto; border-radius:2px; }

        .features-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:2.5rem; max-width:1200px; margin:0 auto; }

        .feature-card { background:white; border-radius: var(--radius); overflow:hidden; box-shadow: var(--shadow-sm); transition: all 0.35s ease; border:1px solid #f0f0f0; }
        .feature-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-lg); }
        .feature-img-container { height:220px; overflow:hidden; position:relative; }
        .feature-img-container img { width:100%; height:100%; object-fit:cover; transition: transform 0.6s ease; }
        .feature-card:hover .feature-img-container img { transform: scale(1.06); }
        .feature-content { padding:2rem; text-align:center; }
        .feature-content h3 { font-size:1.25rem; margin-bottom:0.75rem; color:var(--secondary); }

        .guide-section { padding:6rem 5%; }
        .bg-white { background: white; }
        .bg-light { background: #f8f9fa; }

        .steps-container { display:flex; justify-content:center; gap:2rem; flex-wrap:wrap; margin-top:3rem; }
        .step-card { flex:1; min-width:280px; max-width:350px; background:white; padding:2.5rem 2rem; border-radius:var(--radius); box-shadow:var(--shadow-sm); text-align:center; position:relative; transition: transform 0.3s ease; border:1px solid #eee; }
        .step-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
        .step-number { position:absolute; top:-20px; left:50%; transform:translateX(-50%); background:var(--secondary); color:white; width:40px; height:40px; line-height:40px; border-radius:50%; font-weight:bold; font-size:1rem; box-shadow:0 4px 10px rgba(0,0,0,0.2); }
        .image-placeholder img { width:100%; border-radius:12px; margin:1rem 0; border:1px solid #f0f0f0; }

        .about-section-home { background: var(--bg-light); color:white; padding:5rem 2rem; text-align:center; }
        .about-title { font-size:2.5rem; margin-bottom:1.5rem; }
        .about-desc { font-size:1.2rem; opacity:0.95; margin-bottom:2.5rem; max-width:700px; margin-left:auto; margin-right:auto; }
        .btn-outline { border:2px solid black; color:black; padding:12px 30px; border-radius:50px; text-decoration:none; font-weight:600; transition:0.3s; }
        .btn-outline:hover { background:var(--primary); color:var(--secondary); }

        /* small entrance animations */
        .feature-card, .step-card { animation: fadeUp 0.6s ease both; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }

        /* responsive */
        @media (max-width: 768px) {
          .home-wrapper { flex-direction: column; text-align: center; padding-top: 4rem; }
          .home-left { padding-right: 0; }
          .hero-title { font-size: 2.4rem; }
          .cta-group { justify-content: center; }
          .app-download-container { justify-content: center; }
          .trust-badge { margin: 0 auto; }
          .three-d-container { width: 100% !important; height: 300px !important; margin-top: 2rem; max-width: 100%; }
          .section-title { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;
