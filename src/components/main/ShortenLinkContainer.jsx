import React, { useEffect, useState } from 'react';
import ShortenLinkCard from '../UI/ShortenLinkCard';
import ShortenedLinkCard from '../UI/ShortenedLinkCard';
import './ShortenLinkContainer.css';

function ShortenLinkContainer() {
  const [shortenedURLs, setShortenedURLs] = useState([]);

  useEffect(() => {
    const linksList = sessionStorage.getItem('linksList');
    if (linksList !== null && linksList !== '') {
      setShortenedURLs(JSON.parse(linksList));
    } else {
      setShortenedURLs([]);
    }
  }, []);

  useEffect(() => {
    if (shortenedURLs.length > 0) {
      sessionStorage.setItem('linksList', JSON.stringify(shortenedURLs));
    }
  });

  const [isValidInput, setIsValidInput] = useState(true);
  const [inputVal, setInputVal] = useState('');

  const onSubmit = async () => {
    if (inputVal !== '') {
      setIsValidInput(true);
      try {
        const reqURL = `https://api.shrtco.de/v2/shorten?url=${inputVal.toLowerCase()}`;
        const shortenRes = await fetch(reqURL);
        const data = await shortenRes.json();
        if (data.ok) {
          const linkExists = shortenedURLs.find(
            (linkObj) => linkObj.code === data.result.code
          );

          if (!linkExists) {
            const newList = shortenedURLs;
            const linkData = {
              code: data.result.code,
              unshortenedURL: inputVal,
              shortenedURL: data.result.full_short_link,
              original_link: data.result.original_link,
            };
            newList.push(linkData);
            setShortenedURLs([...newList]);
          }
        }

        return data.ok;
      } catch (e) {
        return e;
      }
    } else {
      setIsValidInput(false);
      return null;
    }
  };

  const onInputChange = (event) => {
    setInputVal(event.target.value.trim());
  };
  return (
    <div className="shorten-link-container">
      <ShortenLinkCard
        onSubmit={onSubmit}
        onInputChange={onInputChange}
        isValidInput={isValidInput}
      />
      {shortenedURLs.map((el) => (
        <ShortenedLinkCard
          key={el.code}
          unshortenedURL={el.unshortenedURL}
          shortenedURL={el.shortenedURL}
        />
      ))}
    </div>
  );
}

export default ShortenLinkContainer;
