import * as actionTypes from "./actions/actions";

const initialState = {
  bands: 3,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BAND_CHANGED:
      return {
        ...state,
        bands: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
