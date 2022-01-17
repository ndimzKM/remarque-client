import { useSelector } from "react-redux";

import Note from "./Note";

const Notes = () => {
  const { tempNotes } = useSelector((state) => state.reducer);

  return (
    <div className="notes">
      {tempNotes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Notes;
