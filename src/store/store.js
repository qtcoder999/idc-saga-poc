import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../rootReducer";
import mySaga from "../containers/sagas";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
  stateTransformer: state => state.toJS()
});

let middleware;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

middleware = [sagaMiddleware, logger];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

// then run the saga
sagaMiddleware.run(mySaga);

// render the application

export default store;
