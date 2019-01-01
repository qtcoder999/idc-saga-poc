import { combineReducers } from 'redux-immutable';
import imageCounterReducer from './containers/bannerdetails1/reducer';
import counterReducer from './containers/counterdetails/reducer'

export default combineReducers({
    imageCounterReducer,
    counterReducer
})