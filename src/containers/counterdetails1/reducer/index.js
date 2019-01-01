import { fromJS } from 'immutable';

// import {
//     FETCH_IMAGE_SUCCESS,
//     FETCH_IMAGE_ERROR
//   } from './Constants';

const initialState = fromJS({
    counter : 0
});

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.set('counter', state.get('counter') + 1);
    case 'DECREMENT':
      return state.set('counter', state.get('counter') - 1);
    default:
      return state;
  }
}

export default counterReducer;