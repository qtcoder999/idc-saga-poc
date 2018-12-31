import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

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
    const { counter, onIncrement, onDecrement } = this.props
    console.log("Counter props",this.props);
    return (
      <div className="color-white add-margin-top">
          Clicked: {this.props.counter} times
          
          <button onClick={this.increment}>
            +
          </button>
          
          <button onClick={this.decrement}>
            -
          </button>
      </div>
    )
  }
}

// Counter.propTypes = {
//   counter: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// }