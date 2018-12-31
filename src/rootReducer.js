import { combineReducers } from 'redux-immutable';
import imageReducer from './containers/BannerDetails/reducer';
import counterReducer from './containers/CounterDetails/reducer'

export default combineReducers({
    imageReducer,
    counterReducer
})