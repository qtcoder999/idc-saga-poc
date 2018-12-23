import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers/rootReducer';
import mySaga from '../components/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// then run the saga
sagaMiddleware.run(mySaga)

// render the application

export default store;

