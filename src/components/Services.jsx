import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Slab Centering & Shuttering',
    description: 'Precision leveling and MS Plate/Plywood framework for flawless concrete structures.',
    icon: '🏗️',
    image: '/assets/service-shuttering.jpg'
  },
  {
    id: 2,
    title: 'RCC Structural Construction',
    description: 'End-to-end framework for G+1 to high-rise commercial buildings ensuring robust stability.',
    icon: '🏢',
    image: '/assets/service-rcc.jpg'
  },
  {
    id: 3,
    title: 'Concrete Casting',
    description: 'Expert pouring and vibration services for durable, long-lasting roofs and slabs.',
    icon: '👷',
    image: '/assets/service-casting.jpg'
  }
];

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Core Services</h2>
          <p className="section-subtitle">Delivering high-quality structural construction and formwork with unmatched precision in Lucknow.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image-placeholder" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <div className="service-icon">{service.icon}</div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
