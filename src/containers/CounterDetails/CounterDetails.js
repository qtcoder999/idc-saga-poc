import React from 'react'
import Counter from '../../components/Counter/Counter'
import { connect } from "react-redux";
import {toJS} from 'immutable'

const CounterDetails = (props) =>{
  return (
      <Counter {...this.props}/>
  )
}

const mapStateToProps = (state) => {
  // console.log({...state});
  return {
      counter: state.get('counterReducer').toJS().counter
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
      onIncrement : dispatch({type: "INCREMENT"}),
      onDecrement : dispatch({type: "DECREMENT"}),
      dispatch
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);