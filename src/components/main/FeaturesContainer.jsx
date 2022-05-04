import React from 'react';
import PropTypes from 'prop-types';
import FeatureCard from '../UI/FeatureCard';
import brandImg from '../assets/images/icon-brand-recognition.svg';
import records from '../assets/images/icon-detailed-records.svg';
import customizable from '../assets/images/icon-fully-customizable.svg';
import './FeaturesContainer.css';

function FeaturesContainer({ heading, description }) {
  return (
    <article className="features">
      <h2 className="features__heading">{heading}</h2>
      <p className="features__description">{description}</p>
      <div className="features__inner-container">
        <div className="features__line" />
        <FeatureCard
          image={brandImg}
          imageAlt="Statistics graphics"
          heading="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        />
        <FeatureCard
          image={records}
          imageAlt="Clock"
          heading="Detailed Records"
          description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <FeatureCard
          image={customizable}
          imageAlt="Office materials"
          heading="Fully Customizable"
          description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </article>
  );
}

FeaturesContainer.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeaturesContainer;
