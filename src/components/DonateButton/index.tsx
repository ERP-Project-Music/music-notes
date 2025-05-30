import React from 'react';

import { PAYPAL_ME_LINK } from '@site/src/shared/constants';

import './style.css';

const DonateButton = () => {
  return (
    <div className="donate-container">
      <p className="donate-tex">
        ¿Te gusta lo que hago?
        <br />
        <strong>Invítame una cerveza 🍺</strong>
      </p>

      <a href={PAYPAL_ME_LINK} target="_blank" rel="noopener noreferrer" className="button">
        👉 Donar ahora
      </a>
    </div>
  );
};

export default DonateButton;
