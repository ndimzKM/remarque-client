import * as Types from "./actions";
//import { welcome, notes, tags, folders, tempNotes } from "../faker";
import { welcome, folders } from "../faker";
console.log(folders)
let original = {
  id: 1,
  title: "Welcome to Remarque",
  subtitle: "Generating endless energy with",
  createdAt: "18/11/2019",
  content: welcome,
  folder: 1,
  favorite: false,
  tags: "welcome",
};
let notes = window.localStorage.getItem("notes");
notes = JSON.parse(notes);

if (notes == null) notes = [];

notes = [original, ...notes];

const initialState = {
  notes: notes,
  tempNotes: notes,
  activeNote: {
    id: 0,
    content: welcome,
  },
  folders: folders,
  tags: [],
  markdown: true,
  modal: false,
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
    case Types.UPDATE_MODAL:
      return { ...state, modal: action.payload };
    default:
      return state;
  }
};

export { reducer };
