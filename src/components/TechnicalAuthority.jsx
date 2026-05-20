import React from 'react';
import './TechnicalAuthority.css';

const TechnicalAuthority = () => {
  return (
    <section className="section authority">
      <div className="container">
        <div className="authority-content">
          <div className="authority-text">
            <h2 className="section-title text-white">Uncompromising Quality & Safety</h2>
            <p className="text-light mb-4">
              At Suasha Enterprise, we believe that a strong foundation is built on rigorous standards.
              Our commitment to technical excellence ensures every project meets the highest benchmarks in Lucknow.
            </p>
            <ul className="authority-list">
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>LDA-Standard Adherence</strong>
                  <p>Strict compliance with Lucknow Development Authority norms for structural integrity.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>Modern Equipment</strong>
                  <p>Utilizing advanced concrete vibrators, precision leveling instruments, and high-load steel props.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>Safety First Protocol</strong>
                  <p>Comprehensive safety measures for on-site workers and structural stability.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="authority-image-container">
            <div className="authority-image">
              <img src="./assets/director.jpg" alt="Director" />

            </div>
            <div className="experience-badge">
              <span className="years">20+</span>
              <span className="text">Years of Trust</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalAuthority;
