import React from 'react';
import PropTypes from 'prop-types';
import './FeatureCard.css';

function FeatureCard({ image, imageAlt, heading, description }) {
  return (
    <article className="feature">
      <img src={image} alt={imageAlt} className="feature__image" />
      <h3 className="feature__heading">{heading}</h3>
      <p className="feature__description">{description}</p>
    </article>
  );
}

FeatureCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
