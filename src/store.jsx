import { createStore, compose } from "redux";
import rootReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preloadedState = {
  bands: 3,
};

const store = createStore(rootReducer, preloadedState, composeEnhancers());

export default store;
