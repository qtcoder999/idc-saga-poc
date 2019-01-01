import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../rootReducer";
import imageSaga from "../containers/bannerdetails1/sagas";
import { createLogger } from "redux-logger";

const logger = createLogger({
    logErrors: true,
    stateTransformer: state => state.toJS(),
    diff: true,
    collapsed: false
});

let middleware;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// middleware = [sagaMiddleware, logger];
middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

// then run the saga
sagaMiddleware.run(imageSaga);

export default store;
