import * as actionTypes from "./actions/actions";

const initialState = {
  bands: 3,
  selectedBand: 1,

  selectedColors: {
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
  },
  selectedValues: {
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BAND_CHANGED:
      return {
        ...state,
        bands: action.payload,
        selectedValues: {},
        selectedColors: {},
      };

    case actionTypes.MODEL_CHANGED:
      return {
        ...state,
        selectedBand: action.payload,
      };

    case actionTypes.COLOR_CHANGED:
      return {
        ...state,
        selectedColors: {
          ...state.selectedColors,
          [action.payload.bandNumber]: action.payload.color,
        },
      };
    case actionTypes.VALUE_CHANGED:
      return {
        ...state,
        selectedValues: {
          ...state.selectedValues,
          [action.payload.bandNumber]: action.payload.value,
        },
      };

    default:
      return state;
  }
};

export default reducer;
