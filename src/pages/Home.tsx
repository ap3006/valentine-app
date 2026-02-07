
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NO_BUTTON_TEXTS = [
  'No 🙈',
  'Are you sure? 🤔',
  'Really? 😢',
  'Think again! 💭',
  'Please? 🥺',
  'One more chance? 💫',
  'Final answer? 😔',
  'Pretty please? 🌟',
];

export default function Home() {
  const navigate = useNavigate();
  const [noTextIndex, setNoTextIndex] = useState(0);

  const handleNoClick = () => {
    setNoTextIndex((prev) => (prev + 1) % NO_BUTTON_TEXTS.length);
  };

  return (
    <div
      className="page-container"
      role="main"
    >
      <div className="card">
        <h1 aria-label="Do you want to be my Valentines?">
          Hi Angel, Do you want to be my Valentine? 
        </h1>

        <div className="buttons">
          <button
            className="btn yes"
            onClick={() => navigate('/yes')}
            autoFocus
          >
            Yes 💖
          </button>

          <button
            className="btn no"
            onClick={handleNoClick}
            aria-label="No (this button cycles through messages)"
          >
            {NO_BUTTON_TEXTS[noTextIndex]}
          </button>
        </div>
      </div>
    </div>
  );
}
