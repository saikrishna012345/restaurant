import React from 'react';
import { FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import { fakeBranchWarning, socialLinks } from '../data/restaurantData';
import './FakeBranchWarning.css';

const FakeBranchWarning = () => {
  return (
    <section className="warning-section">
      <div className="warning-container">
        <div className="warning-card">
          <div className="warning-header">
            <FaExclamationTriangle className="warning-icon" />
            <h2 className="warning-title">{fakeBranchWarning.title}</h2>
          </div>
          
          <div className="warning-content">
            <p className="warning-message">{fakeBranchWarning.message}</p>
            
            <div className="warning-tips">
              {fakeBranchWarning.tips.map((tip, index) => (
                <div key={index} className="warning-tip-item">
                  <FaCheckCircle className="tip-icon" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
            
            <div className="warning-footer">
              <p>For verification, always check our official social media:</p>
              <div className="warning-socials">
                {socialLinks.instagram && <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
                {socialLinks.facebook && <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
                {socialLinks.twitter && <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FakeBranchWarning;
