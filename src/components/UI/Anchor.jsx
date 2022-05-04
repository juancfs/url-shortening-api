import React from 'react';
import PropTypes from 'prop-types';
import './Anchor.css';

function Anchor({ rounded, label, linkTo }) {
  return (
    <a
      href={linkTo}
      className={`btn-link ${rounded ? 'btn-link--rounded' : ''}`}
    >
      {label}
    </a>
  );
}

Anchor.propTypes = {
  rounded: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default Anchor;
