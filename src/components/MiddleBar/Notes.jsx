import { useState } from "react";
import { welcome } from "../../faker";
import Note from "./Note";

const Notes = () => {
  const [notes, setNotes] = useState([
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
      folder: 1,
    },
    {
      id: 3,
      title: "But with some guidance and explanation",
      subtitle: "Generating endless energy with",
      createdAt: "18/11/2019",
      content: "# Bye bye",
      folder: 1,
    },
  ]);
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Notes;
