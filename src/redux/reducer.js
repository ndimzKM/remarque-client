import * as Types from "./actions";
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_USER:
      return { ...state, expoToken: action.payload };
    case Types.UPDATE_TOKEN:
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};

export { reducer };
