import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [forint, setforint] = useState('');

  const write = event => {
    setforint(event.target.value);
  };

  return (
    <div className="doboz">
      <div className="inputdoboz">
        <div className="row">
          <div className="column-sm">
            <h2>Deviza váltás</h2>
          </div>
        </div>
        <div className="row">
          <label name="forint">Forint (HUF)</label>
          <input type="number" name="forint" value={forint} onChange={write} />
        </div>
      </div>
      <div className="outputdoboz">
        <h3 className="euro">
          {`${forint} HUF = `}
          {forint !== ''
            ? `${(parseInt(forint) / 320).toFixed(2)} EUR`
            : '0.00 EUR'}{' '}
        </h3>
        <h3 className="dollar">
          {`${forint} HUF = `}
          {forint !== '' ? `${parseInt(forint) / 250} USD` : '0.00 USD'}
        </h3>
      </div>
      <div className="infodoboz">
        <div className="row">
          <h5>Árfolyam:</h5>
        </div>

        <div className="row">
          <h8>1 EUR = 320 HUF</h8>
        </div>

        <div className="row">
          <h8>1 USD = 250 HUF</h8>
        </div>
      </div>
    </div>
  );
}
