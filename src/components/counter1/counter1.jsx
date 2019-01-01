import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import './counter.css'

export default class Counter extends Component {
  increment = () => {
    this.props.dispatch({type: "INCREMENT"})
  }
  decrement = () => {
    this.props.dispatch({type: "DECREMENT"})
  }

//   incrementIfOdd() {
//     if (this.props.counter % 2 !== 0) {
//       this.props.onIncrement()
//     }
//   }

  render() {
    console.log("Inside Counter component's render()");
    console.log("Counter props",this.props);
    return (
      <div className="color-white add-margin-top">
          Clicked: {this.props.counter} times
          <div>
              <button className="btn btn-default" onClick={this.increment}>
                +
              </button>
              
              <button className="btn btn-default" onClick={this.decrement}>
                -
              </button>
          </div>
      </div>
    )
  }
}

// Counter.propTypes = {
//   counter: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// }