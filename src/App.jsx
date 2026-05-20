import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import TechnicalAuthority from './components/TechnicalAuthority';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <Portfolio />
      <TechnicalAuthority />
      <ContactForm />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
