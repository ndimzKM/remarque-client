import * as Types from "./actions";
import { welcome, notes, tags, folders, tempNotes } from "../faker";
const initialState = {
  notes: notes,
  tempNotes: tempNotes,
  activeNote: {
    id: 0,
    content: welcome,
  },
  folders: folders,
  tags: tags,
  markdown: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_NOTES:
      return { ...state, notes: action.payload };
    case Types.UPDATE_ACTIVE_NOTE:
      return { ...state, activeNote: action.payload };
    case Types.UPDATE_TEMP_NOTES:
      return { ...state, tempNotes: action.payload };
    case Types.UPDATE_MARKDOWN:
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
};

export { reducer };
