import * as Types from "./actions";
import { welcome } from "../faker";
const initialState = {
  notes: [
    {
      id: 1,
      title: "Welcome to Remarque",
      subtitle: "Generating endless energy with",
      createdAt: "18/11/2019",
      content: welcome,
      folder: 1,
    },
    {
      id: 2,
      title: "Fusion Energy",
      subtitle: "Generating endless energy with",
      createdAt: "18/11/2019",
      content: "# Hi",
      folder: 2,
    },
    {
      id: 3,
      title: "But with some guidance and explanation",
      subtitle: "Generating endless energy with",
      createdAt: "18/11/2019",
      content: "# Bye bye",
      folder: 1,
    },
  ],
  tempNotes: [
    {
      id: 1,
      title: "Welcome to Remarque",
      subtitle: "Generating endless energy with",
      createdAt: "18/11/2019",
      content: welcome,
      folder: 1,
    },
    {
      id: 2,
      title: "Fusion Energy",
      subtitle: "Generating endless energy with",
      createdAt: "18/11/2019",
      content: "# Hi",
      folder: 2,
    },
    {
      id: 3,
      title: "But with some guidance and explanation",
      subtitle: "Generating endless energy with",
      createdAt: "18/11/2019",
      content: "# Bye bye",
      folder: 1,
    },
  ],
  activeNote: {
    id: 0,
    content: welcome,
  },
  folders: [
    {
      id: 1,
      name: "reminders",
    },
    {
      id: 2,
      name: "tasks",
    },
    {
      id: 3,
      name: "favorites",
    },
    {
      id: 4,
      name: "highlights",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_NOTES:
      return { ...state, notes: action.payload };
    case Types.UPDATE_ACTIVE_NOTE:
      return { ...state, activeNote: action.payload };
    case Types.UPDATE_TEMP_NOTES:
      return { ...state, tempNotes: action.payload };
    default:
      return state;
  }
};

export { reducer };
