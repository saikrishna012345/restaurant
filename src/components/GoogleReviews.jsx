import React from 'react';
import './GoogleReviews.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft, FaGoogle } from 'react-icons/fa';
import { googleReviews, socialLinks } from '../data/restaurantData';

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="star-icon" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="star-icon" />);
    } else {
      stars.push(<FaRegStar key={i} className="star-icon" />);
    }
  }
  return stars;
};

const GoogleReviews = () => {
  // Fallback data in case googleReviews is empty or undefined
  const reviewsData = googleReviews && googleReviews.length > 0 
    ? googleReviews.slice(0, 5) 
    : [
        { id: 1, name: 'Alice Smith', rating: 5, text: 'Absolutely wonderful experience! The food was divine.', date: '2 weeks ago' },
        { id: 2, name: 'Bob Johnson', rating: 4.5, text: 'Great ambiance and fantastic service.', date: '1 month ago' },
        { id: 3, name: 'Claire Davis', rating: 5, text: 'A must-visit for food lovers.', date: '2 months ago' }
      ];

  return (
    <section id="reviews" className="google-reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <div className="google-badge">
            <span className="badge-rating">4.8</span>
            <div className="badge-stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
            </div>
            <span className="badge-text">Based on Google Reviews</span>
          </div>
          <h2 className="reviews-title">What Our Guests Say</h2>
          <p className="reviews-subtitle">Real reviews from real food lovers.</p>
        </div>

        <div className="reviews-grid">
          {reviewsData.map((review, index) => (
            <div className="review-card" key={review.id || index}>
              <FaQuoteLeft className="quote-bg-icon" />
              <div className="card-top">
                <div className="avatar">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div className="customer-info">
                  <h4 className="customer-name">{review.name}</h4>
                  <div className="customer-rating">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="review-text">"{review.text}"</p>
              <span className="review-date">{review.date}</span>
            </div>
          ))}
        </div>

        <div className="reviews-footer">
          <a
            href={socialLinks?.googleReviewsUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn"
          >
            <FaGoogle className="btn-icon" /> View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
