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

  render() {
    console.log("Inside Counter component's render()");
    console.log("Counter props",this.props);
    return (
      <div className="color-white m-2">
          Clicked: {this.props.counter} times
          <div>
              <button className="btn-1 draw-border m-2" onClick={this.increment}>
                +
              </button>
              
              <button className="btn-1 draw-border m-2" onClick={this.decrement}>
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