import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaDirections } from 'react-icons/fa';
import { branches } from '../data/restaurantData';
import './Branches.css';

const Branches = () => {
  return (
    <section id="branches" className="branches-section">
      <div className="branches-container">
        <div className="branches-header">
          <h2 className="branches-title">Our Locations</h2>
          <p className="branches-subtitle">
            Visit us at any of our branches for an unforgettable dining experience.
          </p>
        </div>
        
        <div className="branches-grid">
          {branches.map((branch) => (
            <div key={branch.id} className="branch-card">
              <div className="branch-map-container">
                <iframe
                  src={branch.mapEmbedUrl}
                  title={`${branch.name} Map`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="branch-info">
                <h3 className="branch-name">{branch.name}</h3>
                
                <div className="branch-detail">
                  <FaMapMarkerAlt className="branch-icon" />
                  <p>{branch.address}</p>
                </div>
                
                <div className="branch-detail">
                  <FaPhone className="branch-icon" />
                  <a href={`tel:${branch.phone}`} className="branch-link">{branch.phone}</a>
                </div>
                
                <div className="branch-detail">
                  <FaClock className="branch-icon" />
                  <p>{branch.timings}</p>
                </div>
                
                <a 
                  href={branch.directionsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="branch-directions-btn"
                >
                  <FaDirections className="btn-icon" />
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
