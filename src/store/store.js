import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../rootReducer';

import mySaga from '../containers/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

// then run the saga
sagaMiddleware.run(mySaga)

// render the application

export default store;

