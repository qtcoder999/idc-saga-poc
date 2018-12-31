import { combineReducers } from 'redux-immutable';
import imageCounterReducer from './containers/BannerDetails/reducer';
import counterReducer from './containers/CounterDetails/reducer'

export default combineReducers({
    imageCounterReducer,
    counterReducer
})