import React, { useState } from 'react';
import './App.css';

function App() {
  const [gridSize,setGridSize] = useState(2);
  const checkValidNumber = (e) => {
    if ( typeof Number(e.currentTarget.value) === 'number' ) {
      if (Number(e.currentTarget.value) < 2 ) {
        setGridSize(2);
      } else {
        setGridSize(e.currentTarget.value);
      }
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter the size of the grid:
        </p>
        <input
          type="number"
          step="1"
          min="2"
          value={gridSize}
          onChange={checkValidNumber}/>
          <button type="button">Start</button>
      </header>
    </div>
  );
}

export default App;
