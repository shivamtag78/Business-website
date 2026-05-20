import React from 'react';
import './FloatingContact.css';

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      <a 
        href="tel:+919936259816" 
        className="floating-btn call-btn"
        aria-label="Call Suneel"
      >
        <span className="icon">📞</span>
        <span className="text">Call Suneel</span>
      </a>
      <a 
        href="https://wa.me/917800062919" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn whatsapp-btn"
        aria-label="WhatsApp"
      >
        <span className="icon">💬</span>
      </a>
    </div>
  );
};

export default FloatingContact;
