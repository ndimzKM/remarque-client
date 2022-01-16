export const UPDATE_NOTES = "UPDATE_NOTES";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const UPDATE_ACTIVE_NOTE = "UPDATE_ACTIVE_NOTE";

export const updateActiveNote = (note) => (dispatch) => {
  dispatch({
    type: UPDATE_ACTIVE_NOTE,
    payload: note,
  });
};
