import React from 'react';
import PropTypes from 'prop-types';
import ShortenBtn from './ShortenBtn';
import './ShortenLinkCard.css';

function ShortenLinkCard({ isValidInput, onSubmit, onInputChange }) {
  const isEnterKey = (event) => {
    if (event.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <article className="shorten-card">
      <div className="shorten-card__input-container">
        <input
          type="text"
          name="link"
          id="link"
          placeholder="Shorten a link here..."
          onKeyDown={isEnterKey}
          onChange={onInputChange}
          className={`shorten-card__input ${
            !isValidInput ? 'shorten-card__input--invalid' : ''
          }`}
        />
        {!isValidInput && (
          <em className="shorten-card__invalid-input-message">
            Please add a link
          </em>
        )}
      </div>
      <ShortenBtn
        rounded={false}
        label="Shorten it!"
        onClickHandler={onSubmit}
      />
    </article>
  );
}

ShortenLinkCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isValidInput: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default ShortenLinkCard;
