import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [input, setInput] = useState({
    total: 0,
    next: 0,
  });

  const handleClick = (event) => {
    const buttonName = event.target.innerText;
    setInput((input) => calculate(input, buttonName));
  };

  const { total, next } = input;
  let result = 0;
  if (total === null && next !== null) {
    result = next;
  } else if (total === null && next === null) {
    result = 0;
  } else if (total !== null && next === null) {
    result = total;
  } else {
    result = next;
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="result">{result}</div>
        <div className="numbers">
          <div className="row1">
            <button type="button" onClick={handleClick}>AC</button>
            <button type="button" onClick={handleClick}>+/-</button>
            <button type="button" onClick={handleClick}>%</button>
            <button className="orangeBg" type="button" onClick={handleClick}>÷</button>
          </div>
          <div className="row2">
            <button type="button" onClick={handleClick}>7</button>
            <button type="button" onClick={handleClick}>8</button>
            <button type="button" onClick={handleClick}>9</button>
            <button className="orangeBg" type="button" onClick={handleClick}>x</button>
          </div>
          <div className="row3">
            <button type="button" onClick={handleClick}>4</button>
            <button type="button" onClick={handleClick}>5</button>
            <button type="button" onClick={handleClick}>6</button>
            <button className="orangeBg" type="button" onClick={handleClick}>-</button>
          </div>
          <div className="row4">
            <button type="button" onClick={handleClick}>1</button>
            <button type="button" onClick={handleClick}>2</button>
            <button type="button" onClick={handleClick}>3</button>
            <button className="orangeBg" type="button" onClick={handleClick}>+</button>
          </div>
          <div className="row5">
            <button className="zero" type="button" onClick={handleClick}>0</button>
            <button type="button" onClick={handleClick}>.</button>
            <button className="orangeBg" type="button" onClick={handleClick}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
