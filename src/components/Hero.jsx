import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: "url('./assets/site1.jpg')" }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Building the Foundations of Tomorrow</h1>
        <p className="hero-subtitle">Expert RCC & Slab Formwork Solutions in Lucknow.</p>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary hero-btn">Request a Quote</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
