import React from 'react'
import Counter from '../../components/counter1/counter1'
import { connect } from "react-redux";

function CounterDetails(props) {
  return <Counter {...props}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(CounterDetails);