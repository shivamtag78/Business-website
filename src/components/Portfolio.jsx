import React, { useState } from 'react';
import './Portfolio.css';

const projects = [
  { id: 1, title: 'Commercial Complex', location: 'Mallihabad', status: 'Completed', type: 'High-rise', image: '/assets/site2.jpg' },
  { id: 2, title: 'Residential Apartment', location: 'Dubagga', status: 'Completed', type: 'G+4', image: '/assets/site3.jpg' },
  { id: 6, title: 'Office Building', location: 'Rahman Khera', status: 'Completed', type: 'Commercial', image: '/assets/site4.jpg' },
];

const Portfolio = () => {
  const [filter, setFilter] = null || useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.status === filter);

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Project Gallery</h2>
          <p className="section-subtitle">A showcase of our precision formwork and robust RCC structures across Lucknow.</p>
        </div>

        <div className="portfolio-filters text-center">
          <button
            className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
            onClick={() => setFilter('All')}
          >All</button>
          {/* <button
            className={`filter-btn ${filter === 'Ongoing' ? 'active' : ''}`}
            onClick={() => setFilter('Ongoing')}
          >Ongoing</button> */}
          <button
            className={`filter-btn ${filter === 'Completed' ? 'active' : ''}`}
            onClick={() => setFilter('Completed')}
          >Completed</button>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-img-container">
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="portfolio-overlay">
                <span className={`status-badge ${project.status.toLowerCase()}`}>{project.status}</span>
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p className="location">📍 {project.location}</p>
                  <p className="scale">Scale: {project.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
