import { fromJS } from 'immutable';

import {
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_ERROR
  } from './constants';

const initialState = fromJS({
    imageSource : ''
});

const imageCounterReducer = (state = initialState, action) => {
    switch(action.type){
        // case FETCH_IMAGE_SUCCESS: return Object.assign({}, newState, {imageSource: fromJS(action.imageSource)})
        // case FETCH_IMAGE_ERROR: return Object.assign({}, newState, {imageSource: fromJS('')})
        case FETCH_IMAGE_SUCCESS:
            return state.set('imageSource' , action.imageSource)
        case FETCH_IMAGE_ERROR:
            return state.set('imageSource', '')
        default : return state;
    }
}

export default imageCounterReducer;