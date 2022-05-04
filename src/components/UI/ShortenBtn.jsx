import React from 'react';
import PropTypes from 'prop-types';
import './ShortenBtn.css';

function ShortenBtn({ rounded, onClickHandler }) {
  return (
    <button
      type="button"
      className={`btn btn-main shorten-btn ${rounded ? 'btn--rounded' : ''}`}
      onClick={onClickHandler}
    >
      Shorten It!
    </button>
  );
}

ShortenBtn.propTypes = {
  rounded: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default ShortenBtn;
