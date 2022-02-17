import React, { useEffect, useState } from 'react';
import './grid.styles.css';
import { v4 as uuid } from 'uuid';

export default function Grid({ startedGame = false, gridSize = 2 }) {

  const [showGrid,setShowGrid] = useState("grid__component hide__element");

  function getGridData() {
    const gridObject = [];
    for ( let i = 1; i <= gridSize; i++ ) {
      gridObject.push([]);
      for ( let j = 1; j <= gridSize; j++ ) {
        gridObject[i-1].push({
          index: j,
          id: uuid(),
          color: 'rgb(0,0,0)',
          active: false,
        });
      };
    }
    return gridObject;
  }

  function setColor({ currentTarget }) {
    const currentElementColor = currentTarget.style.backgroundColor;
    console.log(currentElementColor);
  }

  function gridBuilder() {
    const gridData = getGridData();
    return (
      <tbody>
        {gridData.map((gridElementTr, idx) => {
          return (<tr key={idx}>
            {gridElementTr.map((gridElementTd) => {
              return (<td
                key={gridElementTd.id}
                style={{backgroundColor: gridElementTd.color}}
                onClick={(e) => setColor(e)}></td>)
            })}
          </tr>)
          })
        }
      </tbody>
    );
  }

  useEffect(() => {
    console.log({startedGame, gridSize});
    if ( startedGame ) {
      setShowGrid("grid__component");
    } else {
      setShowGrid("grid__component hide__element");
    }
  },[gridSize, startedGame, showGrid]);

  return (
    <>
    <table className={showGrid}>
      {gridBuilder()}
    </table>
    <table>
      <tbody>
        <tr className='selectors'>
          <td className='black'></td>
          <td className='green active'></td>
          <td className='blue'></td>
        </tr>
      </tbody>
    </table>
    </>
  )
}
