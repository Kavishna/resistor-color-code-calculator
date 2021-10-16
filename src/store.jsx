import { createStore, compose } from "redux";
import rootReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preloadedState = {
  bands: 3,
  selectedBand: 1,
  selectedColors: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  },
  selectedValues: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  },
};

const store = createStore(rootReducer, preloadedState, composeEnhancers());

export default store;
