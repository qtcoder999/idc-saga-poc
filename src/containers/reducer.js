import { fromJS } from 'immutable';

import {
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_ERROR
  } from '../containers/constants';

const initialState = fromJS({
    imageSource : ''
});

const imageReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        //state.set(imageSource, action.imageSource);
        case FETCH_IMAGE_SUCCESS: return Object.assign({}, newState, {imageSource: fromJS(action.imageSource)})
        case FETCH_IMAGE_ERROR: return Object.assign({}, newState, {imageSource: fromJS('')})
        
        // case FETCH_IMAGE_SUCCESS: return state.set({imageSource: fromJS(action.imageSource)})
        // case FETCH_IMAGE_ERROR: return state.set({imageSource: fromJS('')})

        default : return newState;
    }
}

export default imageReducer;