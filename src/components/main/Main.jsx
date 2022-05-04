import React from 'react';
import FeaturesContainer from './FeaturesContainer';
import ShortenLinkContainer from './ShortenLinkContainer';
import MainCTA from './MainCTA';

function Main() {
  return (
    <main>
      <ShortenLinkContainer />
      <FeaturesContainer
        heading="Advanced Statistics"
        description="Track how your links are performing across the web with our advanced statistics dashboard"
      />
      <MainCTA />
    </main>
  );
}

export default Main;
