import React, { useEffect, useRef } from 'react';
import './FounderStory.css';
import { founderInfo } from '../data/restaurantData';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import founderImage from '../assets/rajesh_kumar_sharma.png';

const FounderStory = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getInitials = (name) => {
    if (!name) return 'F';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const name = founderInfo?.name || 'Jane Doe';
  const title = founderInfo?.title || 'Founder & Executive Chef';
  const storyText = founderInfo?.story || '';
  const paragraphs = storyText ? storyText.split('\n\n').filter(p => p.trim()) : [
    'With over two decades of culinary experience, our founder has always believed in the magic of blending traditional recipes with modern techniques.',
    'Every dish that leaves our kitchen carries a piece of that philosophy, ensuring a memorable dining experience for every guest.'
  ];
  const quote = founderInfo?.quote || 'Food is the ingredient that binds us together.';

  return (
    <section id="founder-story" className="founder-section" ref={sectionRef}>
      <div className="founder-container">
        
        <div className="founder-image-wrapper">
          <div className="founder-image-placeholder">
            <img src={founderImage} alt={name} className="founder-photo" />
          </div>
          <div className="founder-decorative-ring"></div>
        </div>
        
        <div className="founder-content">
          <div className="founder-header">
            <h2 className="founder-name">{name}</h2>
            <h3 className="founder-title">{title}</h3>
          </div>
          
          <div className="founder-quote-box">
            <FaQuoteLeft className="quote-icon left" />
            <p className="founder-quote-text">{quote}</p>
            <FaQuoteRight className="quote-icon right" />
          </div>
          
          <div className="founder-story-text">
            {paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FounderStory;
