import React, { useEffect, useRef, useState } from 'react';
import { GiWheat, GiMortar } from 'react-icons/gi';
import { FaFire, FaShieldAlt, FaCheckCircle, FaClock } from 'react-icons/fa';
import { foodQualityPoints } from '../data/restaurantData';
import './FoodQuality.css';

const getIcon = (iconName) => {
  switch (iconName) {
    case 'leaf': return <GiWheat />;
    case 'mortar': return <GiMortar />;
    case 'fire': return <FaFire />;
    case 'shield': return <FaShieldAlt />;
    case 'check': return <FaCheckCircle />;
    case 'clock': return <FaClock />;
    default: return <FaCheckCircle />;
  }
};

const FoodQuality = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="food-quality" className="food-quality" ref={sectionRef}>
      <div className="food-quality__glow"></div>
      
      <div className="food-quality__container">
        <div className={`food-quality__header ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="food-quality__title">Our Commitment to Quality</h2>
          <p className="food-quality__subtitle">
            Every ingredient, every technique, every dish — excellence is our standard.
          </p>
        </div>

        <div className="food-quality__grid">
          {foodQualityPoints.map((point, index) => (
            <div 
              key={index} 
              className={`food-quality__card ${isVisible ? 'slide-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="food-quality__card-icon">
                {getIcon(point.icon)}
              </div>
              <h3 className="food-quality__card-title">{point.title}</h3>
              <p className="food-quality__card-description">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodQuality;
