export const UPDATE_NOTES = "UPDATE_NOTES";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const UPDATE_ACTIVE_NOTE = "UPDATE_ACTIVE_NOTE";
export const UPDATE_TEMP_NOTES = "UPDATE_TEMP_NOTES";
export const UPDATE_MARKDOWN = "UPDATE_MARKDOWN";
export const UPDATE_MODAL = "UPDATE_MODAL";

export const updateActiveNote = (note, notes) => (dispatch) => {
  let updatedNotes = JSON.stringify(
    notes.filter((n) => n.title != "Welcome to Remarque")
  );

  window.localStorage.setItem("notes", updatedNotes);
  dispatch({
    type: UPDATE_NOTES,
    payload: notes,
  });
  dispatch({
    type: UPDATE_ACTIVE_NOTE,
    payload: note,
  });
};

export const updateNotes = (notes) => (dispatch) => {
  let updatedNotes = JSON.stringify(
    notes.filter((note) => note.title != "Welcome to Remarque")
  );

  window.localStorage.setItem("notes", updatedNotes);
  dispatch({
    type: UPDATE_NOTES,
    payload: notes,
  });
};

export const updateTempNotes = (notes) => (dispatch) => {
  dispatch({
    type: UPDATE_TEMP_NOTES,
    payload: notes,
  });
};

export const changeMarkdownStatus = (status) => (dispatch) => {
  dispatch({
    type: UPDATE_MARKDOWN,
    payload: status,
  });
};

export const toggleModal = (status) => (dispatch) => {
  dispatch({
    type: UPDATE_MODAL,
    payload: status,
  });
};
