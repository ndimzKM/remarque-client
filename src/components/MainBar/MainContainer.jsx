import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineStar,
  AiOutlineDelete,
  AiOutlineDownload,
  AiOutlineFile,
  AiFillStar
} from "react-icons/ai";
import EditorContainer from "./EditorContainer";
import { useSelector, useDispatch } from "react-redux";
import { changeMarkdownStatus,updateTempNotes, updateNotes } from "../../redux/actions";
import {sortArrayById} from '../../utils'
import PreviewEditor from "./PreviewEditor";
import axios from 'axios'

const MainContainer = () => {
  const { markdown, activeNote, notes } = useSelector((state) => state.reducer);
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
        toggleFavorite()
        break;
      case 3:
        // delete note
        deleteNote()
        break;
      case 4:
        // download note
        dowloadNote()
      case 5:
      // copy note to clipboard
      default:
        break;
    }
  };

  const dowloadNote = () => {
    console.log('I am here')
    let payload = {
      title: activeNote.title,
      content: activeNote.content,
      date: (new Date()).toString(),
    }

    axios.post(`http://localhost:5000/export`, payload, {
      headers:{
        'content-type':'application/json'
      }
    })
    .then(res => {
      let {data} = res;
      downloadFile(data.message)
    }).catch(err => {
      console.log(err)
    })
  }

  const downloadFile = file => {
    axios.get(`http://localhost:5000/exports/${file}`).then(res => console.log(res)).catch(err => console.log(err))
  }
  
  const deleteNote = () => {
    let newNotes = notes.filter(note => note.id !== activeNote.id)
    dispatch(updateNotes(newNotes));
    dispatch(updateTempNotes(newNotes));
  }

  const toggleFavorite = () => {
    let currentNote = activeNote;
    currentNote.favorite = !currentNote.favorite;

    let newNotes = notes.filter(nt => nt.id !== currentNote.id);
    newNotes = sortArrayById([...newNotes, currentNote])
    dispatch(updateNotes(newNotes))
    dispatch(updateTempNotes(newNotes))
    console.log(notes)
  }

  return (
    <section className="main-container pb-3">
      <ul className="top-bar px-2">
        <li onClick={(e) => bottomNavEventHandler(e, 1)}>
          {!markdown ? <AiOutlineEye size={24} color="#666" />: <AiOutlineEyeInvisible size={24} color="#666"/>}
        </li>
        <li onClick={(e) => bottomNavEventHandler(e, 2)}>
          {activeNote.favorite ? <AiFillStar color="#FFA500" size={24}/> : <AiOutlineStar size={24} color="#666" />}
        </li>
        <li onClick={(e) => bottomNavEventHandler(e, 3)}>
          <AiOutlineDelete size={24} color="#666" />
        </li>
        <li onClick={(e) => bottomNavEventHandler(e,4)}>
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
