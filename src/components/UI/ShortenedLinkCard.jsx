import React from 'react';
import PropTypes from 'prop-types';
import CopyBtn from './CopyBtn';
import './ShortenedLinkCard.css';

function ShortenedLinkCard({ unshortenedURL, shortenedURL }) {
  return (
    <article className="shortened-card">
      <div className="unshortened-link">
        <p className="unshortened-link__url">{unshortenedURL}</p>
      </div>
      <div className="shortened-link">
        <a
          href={shortenedURL}
          target="_blank"
          className="shortened-link__url"
          rel="noreferrer"
        >
          {shortenedURL}
        </a>
        <CopyBtn rounded={false} shortenedURL={shortenedURL} />
      </div>
    </article>
  );
}

ShortenedLinkCard.propTypes = {
  unshortenedURL: PropTypes.string.isRequired,
  shortenedURL: PropTypes.string.isRequired,
};

export default ShortenedLinkCard;
