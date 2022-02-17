import React, { useState, useEffect } from 'react';
import Grid from './grid.component';
import './App.css';

function App() {
  const [gridSize,setGridSize] = useState(2);
  const [started,setStarted] = useState(false);
  const checkValidNumber = (e) => {
    if ( typeof Number(e.currentTarget.value) === 'number' ) {
      if (Number(e.currentTarget.value) < 2 ) {
        setGridSize(2);
      } else {
        setGridSize(e.currentTarget.value);
      }
    }
  }

  useEffect(() => {
    if ( !started ) {
      setGridSize(2);
    }
  },[started]);
  
  return (
    <div className="App">
      <div className="App-body">
        <p>
          Enter the size of the grid:
        </p>
        <input
          type="number"
          step="1"
          min="2"
          value={gridSize}
          onChange={checkValidNumber}/>
          <button
            type="button"
            disabled={started}
            onClick={() => setStarted(!started)}>
              start
          </button>
          <button
            type="button" 
            disabled={!started}
            onClick={() => setStarted(!started)}>
              reset
          </button>
          <Grid
            startedGame={started}
            gridSize={gridSize}
          />
      </div>
    </div>
  );
}

export default App;
