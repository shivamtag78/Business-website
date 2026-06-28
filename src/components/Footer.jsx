import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="./assets/logo1.jpg" alt="Suasha Enterprise Logo" className="footer-logo-img" style={{ maxWidth: '250px', marginBottom: '20px' }} />
            <p className="footer-desc">
              Premier structural construction and RCC slab formwork contractor in Lucknow.
              Building the infrastructure of tomorrow with precision and reliability.
            </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Projects</a></li>
              <li><a href="#contact">Request Quote</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>📍 Kakori / Hardoi Road, Lucknow, UP</li>
              <li>📞 Suneel: <a href="tel:+919936259816" style={{color: 'inherit', textDecoration: 'none'}}>+91 9936259816</a></li>
              <li>✉️ <a href="mailto:suashaenterprise1@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>suashaenterprise1@gmail.com</a></li>
            </ul>
            <div className="social-links">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="LinkedIn">IN</a>
            </div>
          </div>
        </div>

        <div className="footer-map">
          <h3>Service Area: Lucknow & 20km Radius</h3>
          <p className="map-desc">Serving Kakori, Alam Bagh, Chowk, Gomti Nagar, and surrounding areas.</p>
          <div className="map-container">
            {/* Embedded Google Map (Placeholder for Lucknow/Kakori region) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.3932822187!2d80.84157833075677!3d26.848834458399564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716035124000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Suasha Enterprise. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
