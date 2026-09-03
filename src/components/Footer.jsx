import React from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaExternalLinkAlt, 
  FaHeart, 
  FaArrowUp 
} from 'react-icons/fa';
import { 
  restaurantInfo, 
  branches, 
  socialLinks, 
  deliveryLinks 
} from '../data/restaurantData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1: Restaurant Info */}
        <div className="footer-col footer-about">
          <h2 className="footer-brand">{restaurantInfo.name}</h2>
          <p className="footer-tagline">{restaurantInfo.tagline}</p>
          <p className="footer-description">{restaurantInfo.shortDescription}</p>
        </div>

        {/* Column 2: Branches */}
        <div className="footer-col footer-branches">
          <h3 className="footer-heading">Our Branches</h3>
          <ul className="footer-list">
            {branches.map((branch, index) => (
              <li key={index} className="footer-branch-item">
                <strong>{branch.name}</strong>
                <span><FaMapMarkerAlt className="footer-icon" /> {branch.address}</span>
                <span><FaPhone className="footer-icon" /> {branch.phone}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-col footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-list">
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#signature-dishes">Signature Dishes</a></li>
            <li><a href="#branches">Branches</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#order-online">Order Online</a></li>
          </ul>
        </div>

        {/* Column 4: Connect With Us */}
        <div className="footer-col footer-connect">
          <h3 className="footer-heading">Connect With Us</h3>
          <div className="social-links">
            <a 
              href={socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
          
          <h3 className="footer-heading delivery-heading">Order Delivery</h3>
          <div className="delivery-links">
            <a 
              href={deliveryLinks.zomato} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="delivery-link"
            >
              Zomato <FaExternalLinkAlt />
            </a>
            <a 
              href={deliveryLinks.swiggy} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="delivery-link"
            >
              Swiggy <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            &copy; {currentYear} {restaurantInfo.name}. All rights reserved.
          </p>
          <p className="verified-note">
            All branch information verified <FaHeart className="heart-icon"/>
          </p>
        </div>
        <button 
          className="back-to-top" 
          onClick={scrollToTop} 
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
