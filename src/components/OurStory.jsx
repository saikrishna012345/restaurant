import React, { useEffect, useRef } from 'react';
import './OurStory.css';
import { ourStory, restaurantInfo } from '../data/restaurantData';

const OurStory = () => {
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

  return (
    <section id="our-story" className="our-story-section" ref={sectionRef}>
      <div className="our-story-container">
        <div className="our-story-image-side">
          <div className="decorative-frame">
            <div className="inner-frame">
              <img src="/favicon.png" alt="Spice Heritage" className="story-logo" />
              <span className="frame-text">{restaurantInfo?.name || 'Restaurant'}</span>
              <div className="frame-ornament"></div>
            </div>
          </div>
        </div>
        
        <div className="our-story-text-side">
          <div className="section-header">
            <h2 className="section-title">Our Story</h2>
            <div className="gold-divider"></div>
            <h3 className="section-subtitle">{ourStory?.subtitle || 'A Journey of Flavors'}</h3>
          </div>
          
          <div className="story-content">
            {ourStory?.paragraphs?.map((paragraph, index) => (
              <p key={index} className="story-paragraph">
                {paragraph}
              </p>
            )) || (
              <p className="story-paragraph">
                Since our inception, we have been dedicated to providing the finest culinary experience...
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
