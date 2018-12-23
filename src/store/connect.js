import App from '../App'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
         ...state
    };
  }
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
        // dispatching plain actions
        // increment: () => dispatch({ type: "INCREMENT" }),
        // decrement: () => dispatch({ type: "DECREMENT" }),
        // reset: () => dispatch({ type: "RESET" })
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(App);


