import React from 'react';
import HeaderCTA from './HeaderCTA';
import HeaderMenu from './HeaderMenu';
import './Header.css';

function Header() {
  return (
    <header>
      <HeaderMenu />
      <HeaderCTA />
    </header>
  );
}

export default Header;
