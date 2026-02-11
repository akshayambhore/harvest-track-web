import React from "react";
import { Link } from "react-router-dom";
import translations from "./translate";
import LangImage from "./LangImage";
import "./App.css";

const Home = ({ lang }) => {
  const t = translations[lang]?.home || translations.en.home;

  return (
    <div className="home-page fade-in">

      {/* HERO */}
      <div className="page-container home-wrapper">
        <div className="home-left">
          <h1>
            {t.title} <br />
            <span className="text-gradient">{t.subtitle}</span>
          </h1>

          <p>{t.desc}</p>

          <div className="cta-group">
            <Link to="/pricing" className="btn btn-primary">{t.btnPlan}</Link>
            <Link to="/contact-us" className="btn btn-secondary">{t.btnContact}</Link>
          </div>

          <div className="trust-badge">
            🛡️ {t.secure} <strong>Razorpay</strong>
          </div>
        </div>

        <div className="home-right">
          <LangImage lang={lang} name="homel.jpeg" />
        </div>
      </div>

      {/* FEATURES */}
      <section className="features-section">
        <h2>{t.featTitle}</h2>

        <div className="features-grid">
          <div className="feature-card">
            <LangImage lang={lang} name="feature1.jpg" />
            <h3>{t.feat1Title}</h3>
            <p>{t.feat1Desc}</p>
          </div>

          <div className="feature-card">
            <LangImage lang={lang} name="feature2.jpg" />
            <h3>{t.feat2Title}</h3>
            <p>{t.feat2Desc}</p>
          </div>

          <div className="feature-card">
            <LangImage lang={lang} name="feature3.jpg" />
            <h3>{t.feat3Title}</h3>
            <p>{t.feat3Desc}</p>
          </div>
        </div>
      </section>

      {/* HOW TO BUY */}
      <section className="guide-section">
        <h2>{t.guideTitle}</h2>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">01</div>
            <LangImage lang={lang} name="login.jpeg" />
            <h3>{t.step1}</h3>
            <p>{t.step1Desc}</p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <LangImage lang={lang} name="step2.jpg" />
            <h3>{t.step2}</h3>
            <p>{t.step2Desc}</p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <LangImage lang={lang} name="step3.jpg" />
            <h3>{t.step3}</h3>
            <p>{t.step3Desc}</p>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="guide-section">
        <h2>{t.useGuideTitle}</h2>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">01</div>
            <LangImage lang={lang} name="temp.jpeg" />
            <h3>{t.useStep1}</h3>
            <p>{t.useStep1Desc}</p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <LangImage lang={lang} name="use2.jpg" />
            <h3>{t.useStep2}</h3>
            <p>{t.useStep2Desc}</p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <LangImage lang={lang} name="use3.jpg" />
            <h3>{t.useStep3}</h3>
            <p>{t.useStep3Desc}</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
