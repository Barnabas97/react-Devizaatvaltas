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
            <h2>Deviza vááltás</h2>
          </div>
        </div>
        <div className="row">
          <label name="forint">Forint (HUF)</label>
          <input type="number" name="forint" value={forint} onChange={write} />
        </div>
      </div>
     
        
        <div className="row">
          <h6>Árfolyam:</h6>
        </div>
        
        <div className="devEur row">
          <h8>1 EUR = 320 forint</h8>
        </div>
        
        <div className="devUsd row">
          <h8>1 USD = 250 forint</h8>
        </div>
      </div>
    </div>
  );
}
