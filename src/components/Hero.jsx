import React, { useEffect, useState } from 'react';
import { restaurantInfo } from '../data/restaurantData';
import './Hero.css';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient-overlay"></div>
        <div className="hero-pattern-overlay"></div>
        
        {/* Floating decorative elements */}
        <div className="floating-element float-1"></div>
        <div className="floating-element float-2"></div>
        <div className="floating-element float-3"></div>
      </div>

      <div className={`hero-content ${loaded ? 'fade-in' : ''}`}>
        <h2 className="hero-tagline">{restaurantInfo?.tagline || 'Experience the taste of excellence'}</h2>
        <h1 className="hero-title">
          {restaurantInfo?.name || 'Gourmet Bistro'}
        </h1>
        <p className="hero-description">
          {restaurantInfo?.shortDescription || 'A culinary journey where tradition meets modern gastronomy. Discover flavors crafted with passion and the finest ingredients.'}
        </p>
        
        <div className="hero-cta-container">
          <a 
            href="#signature-dishes" 
            className="btn btn-primary"
            onClick={(e) => handleSmoothScroll(e, 'signature-dishes')}
          >
            Our Signature Dishes
          </a>
          <a 
            href="#order-online" 
            className="btn btn-secondary"
            onClick={(e) => handleSmoothScroll(e, 'order-online')}
          >
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
