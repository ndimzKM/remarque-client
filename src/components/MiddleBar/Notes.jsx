import { useSelector } from "react-redux";

import Note from "./Note";

const Notes = ({toggleSideBar, setToggleSideBar}) => {
  const { tempNotes } = useSelector((state) => state.reducer);

  return (
    <div className="notes">
      {tempNotes.map((note) => (
        <Note key={note.id} note={note} toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar}/>
      ))}
    </div>
  );
};

export default Notes;
