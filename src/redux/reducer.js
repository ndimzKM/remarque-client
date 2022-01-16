import * as Types from "./actions";
import { welcome } from "../faker";
const initialState = {
  notes: [],
  activeNote: {
    id: 0,
    content: welcome,
  },
  folders: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_NOTES:
      return { ...state, notes: action.payload };
    case Types.UPDATE_ACTIVE_NOTE:
      return { ...state, activeNote: action.payload };
    default:
      return state;
  }
};

export { reducer };
