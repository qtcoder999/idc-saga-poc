import React from 'react'
import Counter from '../../components/counter/counter'
import { connect } from "react-redux";

// const CounterDetails = (props) =>{
//   return <Counter {...this.props}/>
// }
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