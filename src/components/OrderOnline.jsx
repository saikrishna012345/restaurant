import React from 'react';
import './OrderOnline.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiZomato, SiSwiggy } from 'react-icons/si';
import { deliveryLinks } from '../data/restaurantData';

const OrderOnline = () => {
  return (
    <section id="order-online" className="order-online-section">
      {/* Decorative Background Elements */}
      <div className="floating-decor decor-1"></div>
      <div className="floating-decor decor-2"></div>
      <div className="floating-decor decor-3"></div>

      <div className="order-container">
        <div className="order-header">
          <h2 className="order-title">Order Online</h2>
          <p className="order-subtitle">Craving our signature dishes? Get them delivered right to your doorstep!</p>
        </div>

        <div className="delivery-cards-grid">
          {/* Zomato Card */}
          <a
            href={deliveryLinks?.zomato || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="delivery-card zomato-card"
          >
            <div className="card-bg-overlay"></div>
            <div className="card-content">
              <div className="platform-logo">
                <SiZomato />
              </div>
              <div className="platform-text">
                <h3>Order on Zomato</h3>
              </div>
              <FaExternalLinkAlt className="external-icon" />
            </div>
          </a>

          {/* Swiggy Card */}
          <a
            href={deliveryLinks?.swiggy || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="delivery-card swiggy-card"
          >
            <div className="card-bg-overlay"></div>
            <div className="card-content">
              <div className="platform-logo">
                <SiSwiggy />
              </div>
              <div className="platform-text">
                <h3>Order on Swiggy</h3>
              </div>
              <FaExternalLinkAlt className="external-icon" />
            </div>
          </a>
        </div>

        <p className="redirect-note">
          *You will be redirected to the external delivery platform.
        </p>
      </div>
    </section>
  );
};

export default OrderOnline;
