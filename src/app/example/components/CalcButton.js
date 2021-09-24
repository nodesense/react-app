import React from 'react';
import Button from '@material-ui/core/Button';



export default class CalcButton extends React.Component {
  constructor(props) {
    super(props);

    this.elements = {};

    this.add = this._add.bind(this);

    this.state = {
      counter: 0,
    };
  }

  incr = () => {
    this.setState({
      counter : this.state.counter + 1
    })
  }

  decr = () => {
    this.setState({
      counter : this.state.counter - 1
    })
  }

  render() {
   
    return (
      <form>
        <p className="result">{ this.state.counter }</p>
       
        <Button  onClick={ this.incr } >Incr</Button>
        <Button  onClick={ this.decr } >Decr</Button>

        </form>
    );
  }

  /**
   * Handle add functionality, calculate and display the sum.
   */
  _add() {
    const sum = this._getSum(
      parseFloat(this.elements.value1.value),
      parseFloat(this.elements.value2.value)
    );

    this.setState({
      result: sum,
    });
  }

  /**
   * Return the sum of two numbers.
   *
   * @param {Number} value1 The first number to add.
   * @param {Number} value2 The second number to add.
   *
   * @return {Number} The sum.
   */
  _getSum(value1, value2) {
    return value1 + value2;
  }
}