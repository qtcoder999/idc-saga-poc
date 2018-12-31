import { fromJS } from 'immutable';

import {
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_ERROR
  } from './Constants';

const initialState = fromJS({
    imageSource : '',
    counter: 0
});

const imageCounterReducer = (state = initialState, action) => {
    switch(action.type){
        // case FETCH_IMAGE_SUCCESS: return Object.assign({}, newState, {imageSource: fromJS(action.imageSource)})
        // case FETCH_IMAGE_ERROR: return Object.assign({}, newState, {imageSource: fromJS('')})
        case FETCH_IMAGE_SUCCESS:
            return state.set('imageSource' , action.imageSource)
        case FETCH_IMAGE_ERROR:
            return state.set('imageSource', '')
        case 'INCREMENT':
            return state.set('counter', state.get('counter') + 1);
        case 'DECREMENT':
            return state.set('counter', state.get('counter') - 1);
        default : return state;
    }
}

export default imageCounterReducer;