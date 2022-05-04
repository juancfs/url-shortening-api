import React, { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import Anchor from '../UI/Anchor';
import './HeaderMenu.css';

function HeaderMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const onHamburgerHandler = () => setOpenMenu(!openMenu);
  return (
    <nav aria-label="Header menu" className="menu">
      <a href="/" className="menu__logo">
        <img src={Logo} alt="Logo of Shortly" />
      </a>
      <div className={`menu__submenu ${openMenu ? 'menu__submenu--show' : ''}`}>
        <ul className="menu__sublist">
          <li className="menu__item">
            <a href="/">Features</a>
          </li>
          <li className="menu__item">
            <a href="/">Pricing</a>
          </li>
          <li className="menu__item">
            <a href="/">Resources</a>
          </li>
        </ul>
        <ul className="menu__sublist">
          <li className="menu__item login">
            <a href="/">Login</a>
          </li>
          <li className="menu__item sign-up">
            <Anchor rounded label="Sign Up" linkTo="/" />
          </li>
        </ul>
      </div>
      <button
        className="hamburger-btn"
        type="button"
        onClick={onHamburgerHandler}
      >
        <span className="hamburger-btn__bar" />
        <span className="hamburger-btn__bar" />
        <span className="hamburger-btn__bar" />
      </button>
    </nav>
  );
}

export default HeaderMenu;
