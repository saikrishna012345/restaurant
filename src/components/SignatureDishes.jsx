import React from 'react';
import './SignatureDishes.css';
import { signatureDishes } from '../data/restaurantData';
import { FaStar, FaAward } from 'react-icons/fa';
import { GiNoodles, GiBowlOfRice, GiMeat, GiCupcake } from 'react-icons/gi';

const getIconForCategory = (category) => {
  const normalized = category?.toLowerCase() || '';
  if (normalized.includes('noodle')) return <GiNoodles className="placeholder-icon" />;
  if (normalized.includes('rice')) return <GiBowlOfRice className="placeholder-icon" />;
  if (normalized.includes('dessert') || normalized.includes('sweet')) return <GiCupcake className="placeholder-icon" />;
  return <GiMeat className="placeholder-icon" />;
};

const getGradientForIndex = (index) => {
  const gradients = [
    'linear-gradient(135deg, #8B1A1A, #D4A853)',
    'linear-gradient(135deg, #2D2D2D, #8B1A1A)',
    'linear-gradient(135deg, #D4A853, #C69C3F)',
    'linear-gradient(135deg, #6B0F0F, #1A1A1A)',
    'linear-gradient(135deg, #C69C3F, #2D2D2D)',
    'linear-gradient(135deg, #8B1A1A, #6B0F0F)',
  ];
  return gradients[index % gradients.length];
};

const SignatureDishes = () => {
  // If data doesn't exist or is empty, provide a fallback or render nothing
  const dishesToDisplay = (signatureDishes || []).slice(0, 6);

  return (
    <section id="signature-dishes" className="signature-section">
      <div className="signature-container">
        <div className="signature-header">
          <h2 className="signature-title">Our Signature Dishes</h2>
          <div className="title-underline"></div>
          <p className="signature-subtitle">
            Crafted with passion, served with pride — these dishes define our legacy.
          </p>
        </div>

        <div className="signature-grid">
          {dishesToDisplay.map((dish, index) => (
            <div 
              key={dish.id || index} 
              className="dish-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="dish-image-placeholder"
                style={dish.image ? {} : { background: getGradientForIndex(index) }}
              >
                {dish.image ? (
                  <img src={dish.image} alt={dish.name} className="dish-image" />
                ) : (
                  getIconForCategory(dish.category)
                )}
                <div className="signature-badge">
                  <FaStar className="badge-icon" />
                  <span>Signature</span>
                </div>
                <div className="image-overlay"></div>
              </div>

              <div className="dish-content">
                <h3 className="dish-name">{dish.name}</h3>
                <p className="dish-description">{dish.description}</p>
                <div className="dish-footer">
                  <span className="dish-price">{dish.price}</span>
                  <span className="dish-category tag">{dish.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
