import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import apiReducer from 'modules/api/reducer';
import createSagaMiddleware from "redux-saga"
import { apiRootSaga } from "modules/api/saga";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const reducers = combineReducers({
    api:apiReducer
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(apiRootSaga)

export default store