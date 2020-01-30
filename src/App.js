import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import Calculator from "./Calculator"
import { noAuto } from '@fortawesome/fontawesome-svg-core';

function App() {
  return (
    <div>
      <div className="App">
        <FontAwesomeIcon icon={faCalculator} className="icon-class"/>
          <div>
            React Calc
          </div>
      </div>
      <div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
