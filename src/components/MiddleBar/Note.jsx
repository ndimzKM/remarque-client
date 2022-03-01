import { AiOutlineBell } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { updateActiveNote } from "../../redux/actions";

const Note = ({ note }) => {
  const { activeNote, notes } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const setActiveNote = () => {
    dispatch(updateActiveNote(note, notes));
  };

  return (
    <div
      className={note.id == activeNote.id ? "note active" : "note"}
      onClick={() => setActiveNote()}
    >
      <h3>{note.title}</h3>
      <p>
        <span>{note.createdAt}</span> {note.subtitle}
      </p>
      <div className="flex items-center w-max bg-blue-100 p-1 mt-2 text-blue-400 font-medium rounded-3xl">
        <AiOutlineBell size={20} />
        <span className="text-sm">13 Sept 15:00</span>
      </div>
    </div>
  );
};

export default Note;
