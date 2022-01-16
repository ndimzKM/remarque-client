import * as Types from "./actions";
const initialState = {
  notes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_NOTES:
      return { ...state, notes: action.payload };
    case Types.UPDATE_NOTE:
      return { ...state, notes: action.payload };
    default:
      return state;
  }
};

export { reducer };
