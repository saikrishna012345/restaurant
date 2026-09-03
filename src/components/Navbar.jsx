import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { restaurantInfo } from '../data/restaurantData';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust offset for navbar height
        behavior: 'smooth',
      });
      closeMobileMenu();
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a 
          href="#hero" 
          className="navbar-logo"
          onClick={(e) => handleSmoothScroll(e, 'hero')}
        >
          {restaurantInfo.name.split(' ')[0]} <span className="logo-accent">{restaurantInfo.name.split(' ').slice(1).join(' ')}</span>
        </a>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#hero" className="nav-links" onClick={(e) => handleSmoothScroll(e, 'hero')}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#our-story" className="nav-links" onClick={(e) => handleSmoothScroll(e, 'our-story')}>Our Story</a>
          </li>
          <li className="nav-item">
            <a href="#signature-dishes" className="nav-links" onClick={(e) => handleSmoothScroll(e, 'signature-dishes')}>Signature Dishes</a>
          </li>
          <li className="nav-item">
            <a href="#branches" className="nav-links" onClick={(e) => handleSmoothScroll(e, 'branches')}>Branches</a>
          </li>
          <li className="nav-item">
            <a href="#reviews" className="nav-links" onClick={(e) => handleSmoothScroll(e, 'reviews')}>Reviews</a>
          </li>
          <li className="nav-item nav-cta-item">
            <a href="#order-online" className="nav-links cta-button" onClick={(e) => handleSmoothScroll(e, 'order-online')}>Order Online</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
