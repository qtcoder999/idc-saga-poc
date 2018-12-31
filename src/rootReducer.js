import { combineReducers } from 'redux-immutable';
import imageCounterReducer from './containers/bannerDetails/reducer';
import counterReducer from './containers/counterDetails/reducer'

export default combineReducers({
    imageCounterReducer,
    counterReducer
})