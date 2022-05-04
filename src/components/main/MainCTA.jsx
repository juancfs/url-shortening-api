import React from 'react';
import AnchorBtn from '../UI/Anchor';
import './MainCTA.css';

function MainCTA() {
  return (
    <section className="main-cta">
      <h2 className="main-cta__heading">Boost your links today</h2>
      <AnchorBtn rounded label="Get Started" linkTo="/" />
    </section>
  );
}

export default MainCTA;
