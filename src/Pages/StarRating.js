// StarRating.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import './StarRating.css';

const StarRating = ({ popularity }) => {
  // Ensure the popularity is within a reasonable range
  const cappedPopularity = Math.min(Math.max(popularity, 0), 1000);

  // Calculate the number of full stars
  const fullStars = Math.floor(cappedPopularity / 100);

  // Calculate the remainder for a potential half star
  const remainder = cappedPopularity % 100;

  // Determine if a half star should be displayed at the end
  const hasHalfStar = remainder > 50;

  return (
    <div className="star-rating">
      {Array.from({ length: fullStars }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className="star" />
      ))}
      {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="star" />}
    </div>
  );
};

export default StarRating;
