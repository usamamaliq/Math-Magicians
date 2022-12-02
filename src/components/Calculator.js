import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div className="result">0</div>
          <div className="numbers">
            <div className="row1">
              <button type="button">AC</button>
              <button type="button">+/-</button>
              <button type="button">%</button>
              <button className="orangeBg" type="button">/</button>
            </div>
            <div className="row2">
              <button type="button">7</button>
              <button type="button">8</button>
              <button type="button">9</button>
              <button className="orangeBg" type="button">x</button>
            </div>
            <div className="row3">
              <button type="button">4</button>
              <button type="button">5</button>
              <button type="button">6</button>
              <button className="orangeBg" type="button">-</button>
            </div>
            <div className="row4">
              <button type="button">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <button className="orangeBg" type="button">+</button>
            </div>
            <div className="row5">
              <button className="zero" type="button">0</button>
              <button type="button">.</button>
              <button className="orangeBg" type="button">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
