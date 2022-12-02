import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
    };
  }

  handleClick = (event) => {
    const buttonName = event.target.innerText;
    return this.setState((obj) => calculate(obj, buttonName));
  }

  render() {
    const { total, next } = this.state;
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
              <button type="button" onClick={this.handleClick}>AC</button>
              <button type="button" onClick={this.handleClick}>+/-</button>
              <button type="button" onClick={this.handleClick}>%</button>
              <button className="orangeBg" type="button" onClick={this.handleClick}>÷</button>
            </div>
            <div className="row2">
              <button type="button" onClick={this.handleClick}>7</button>
              <button type="button" onClick={this.handleClick}>8</button>
              <button type="button" onClick={this.handleClick}>9</button>
              <button className="orangeBg" type="button" onClick={this.handleClick}>x</button>
            </div>
            <div className="row3">
              <button type="button" onClick={this.handleClick}>4</button>
              <button type="button" onClick={this.handleClick}>5</button>
              <button type="button" onClick={this.handleClick}>6</button>
              <button className="orangeBg" type="button" onClick={this.handleClick}>-</button>
            </div>
            <div className="row4">
              <button type="button" onClick={this.handleClick}>1</button>
              <button type="button" onClick={this.handleClick}>2</button>
              <button type="button" onClick={this.handleClick}>3</button>
              <button className="orangeBg" type="button" onClick={this.handleClick}>+</button>
            </div>
            <div className="row5">
              <button className="zero" type="button" onClick={this.handleClick}>0</button>
              <button type="button" onClick={this.handleClick}>.</button>
              <button className="orangeBg" type="button" onClick={this.handleClick}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
