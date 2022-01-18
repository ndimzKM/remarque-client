import {
  AiOutlineEye,
  AiOutlineStar,
  AiOutlineDelete,
  AiOutlineDownload,
  AiOutlineFile,
} from "react-icons/ai";
import EditorContainer from "./EditorContainer";
import { useSelector, useDispatch } from "react-redux";
import { changeMarkdownStatus } from "../../redux/actions";
import PreviewEditor from "./PreviewEditor";

const MainContainer = () => {
  const { markdown } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const toggleMarkdown = () => {
    dispatch(changeMarkdownStatus(!markdown));
  };

  const bottomNavEventHandler = (e, action) => {
    switch (action) {
      case 1:
        toggleMarkdown();
        break;
      case 2:
        // toggle favorite
        break;
      case 3:
        // delete note
        break;
      case 4:
      // download note
      case 5:
      // copy note to clipboard
      default:
        break;
    }
  };

  return (
    <section className="main-container pb-3">
      <ul className="top-bar px-2">
        <li onClick={(e) => bottomNavEventHandler(e, 1)}>
          <AiOutlineEye size={24} color="#666" />
        </li>
        <li onClick={(e) => bottomNavEventHandler(e, 2)}>
          <AiOutlineStar size={24} color="#666" />
        </li>
        <li onClick={(e) => bottomNavEventHandler(e, 3)}>
          <AiOutlineDelete size={24} color="#666" />
        </li>
        <li onClick={(e) => bottomNavEventHandler(e)}>
          <AiOutlineDownload size={24} color="#666" />
        </li>
        <li onClick={(e) => bottomNavEventHandler(e)}>
          <AiOutlineFile size={24} color="#666" />
        </li>
      </ul>
      {markdown ? <EditorContainer /> : <PreviewEditor />}
    </section>
  );
};

export default MainContainer;
