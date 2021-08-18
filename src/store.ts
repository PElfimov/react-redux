import { combineReducers, compose, createStore } from "redux";
import apiReducer from 'modules/api/reducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const reducers = combineReducers({
    api:apiReducer
})

const store = createStore(reducers, composeEnhancers())

export default store