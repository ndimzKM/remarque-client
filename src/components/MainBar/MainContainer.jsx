import {
  AiOutlineEye,
  AiOutlineStar,
  AiOutlineDelete,
  AiOutlineDownload,
  AiOutlineFile,
} from "react-icons/ai";
import NoteEditor from "./NoteEditor";

const MainContainer = () => {
  return (
    <section className="main-container pb-3">
      <ul className="top-bar px-2">
        <li>
          <AiOutlineEye size={24} color="#666" />
        </li>
        <li>
          <AiOutlineStar size={24} color="#666" />
        </li>
        <li>
          <AiOutlineDelete size={24} color="#666" />
        </li>
        <li>
          <AiOutlineDownload size={24} color="#666" />
        </li>
        <li>
          <AiOutlineFile size={24} color="#666" />
        </li>
      </ul>
      <section className="editor-container h-full">
        <NoteEditor />
      </section>
    </section>
  );
};

export default MainContainer;
