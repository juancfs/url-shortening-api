import React from 'react';
import Anchor from '../UI/Anchor';
import './HeaderCTA.css';

function HeaderCTA() {
  return (
    <section className="cta">
      <div
        className="cta__image"
        role="img"
        aria-label="Illustration of a person working in a desktop"
      />
      <div className="cta__text">
        <h1 className="cta__heading">More than just shorter links</h1>
        <p className="cta__message">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing
        </p>
        <Anchor rounded label="Get Started" linkTo="/" />
      </div>
    </section>
  );
}

export default HeaderCTA;
