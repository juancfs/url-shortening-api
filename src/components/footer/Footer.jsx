import React from 'react';
import logo from '../assets/images/logo.svg';
import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer__logo">
        <img src={logo} alt="Logo of Shortly" />
      </div>
      <nav aria-label="Features menu" className="footer__nav">
        <div className="footer__nav-inner-container">
          <h3 className="footer__nav-heading">Features</h3>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="/">Link Shortening</a>
            </li>
            <li className="footer__nav-item">
              <a href="/">Branded Links</a>
            </li>
            <li className="footer__nav-item">
              <a href="/">Analytics</a>
            </li>
          </ul>
        </div>
        <div className="footer__nav-inner-container">
          <h3 className="footer__nav-heading">Resources</h3>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="/">Blog</a>
            </li>
            <li className="footer__nav-item">
              <a href="/">Developers</a>
            </li>
            <li className="footer__nav-item">
              <a href="/">Support</a>
            </li>
          </ul>
        </div>
        <div className="footer__nav-inner-container">
          <h3 className="footer__nav-heading">Company</h3>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="/">About</a>
            </li>
            <li className="footer__nav-item">
              <a href="/">Our Team</a>
            </li>
            <li className="footer__nav-item">
              <a href="/">Careers</a>
            </li>
            <li className="footer__nav-item">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav aria-label="Social media menu" className="social">
        <ul className="social__nav-list">
          <li className="social__item">
            <a href="https://www.facebook.com">
              <img src={facebookIcon} alt="Facebook logo" />
            </a>
          </li>
          <li className="social__item">
            <a href="https://twitter.com">
              <img src={twitterIcon} alt="Twitter logo" />
            </a>
          </li>
          <li className="social__item">
            <a href="https://www.pinterest.com/">
              <img src={pinterestIcon} alt="Pinterest logo" />
            </a>
          </li>
          <li className="social__item">
            <a href="https://www.instagram.com/">
              <img src={instagramIcon} alt="Instagram logo" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
