import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CopyBtn.css';

function ShortenBtn({ rounded, shortenedURL }) {
  const [copiedBtn, setCopiedBtn] = useState(false);
  const onClickHandler = () => {
    setCopiedBtn(true);

    navigator.clipboard.writeText(shortenedURL);

    setTimeout(() => {
      setCopiedBtn(false);
    }, 1500);
  };
  return (
    <button
      type="button"
      className={`btn btn-main copy-btn ${
        copiedBtn ? 'copy-btn--copied' : ''
      } ${rounded ? 'btn--rounded' : ''}`}
      onClick={onClickHandler}
    >
      {copiedBtn ? 'Copied!' : 'Copy'}
    </button>
  );
}

ShortenBtn.propTypes = {
  rounded: PropTypes.bool.isRequired,
  shortenedURL: PropTypes.string.isRequired,
};

export default ShortenBtn;
