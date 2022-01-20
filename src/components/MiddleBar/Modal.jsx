import { useState } from 'react'
import Modal from 'react-modal';
import {toggleModal, updateNotes, updateTempNotes} from '../../redux/actions.js'
import {useDispatch, useSelector} from 'react-redux'
import {modalStyles} from '../../utils'
const ModalView = () => {
  const [noteDetails, setNoteDetails] = useState({
    title:'',
    subtitle:'',
    tags:''
  })

  const { modal, notes } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleModal(!modal));
  }

  const handleChange = e => {
    setNoteDetails(prevState => (
      {...prevState, [e.target.name]:e.target.value}
    ))
  }

  const createNote = (e) => {
    e.preventDefault();

    let newNote = {...noteDetails};
    newNote.tags = newNote.tags.split(',');

    let lastID = notes[notes.length - 1].id
    newNote.id = Number(lastID) + 1

    dispatch(updateNotes([...notes, newNote]))
    dispatch(updateTempNotes([...notes, newNote]))
  }

  return (
    <div className="modal">
      <Modal
        isOpen={modal}
        contentLabel="Example Modal"
        style={modalStyles}
      >
        <h2 className="font-bold mb-2">Add new note</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title" className="">Note title</label>
            <input value={noteDetails.title} onChange={(e) => handleChange(e)} name="title"/>
          </div>
          <div className="form-group">
            <label htmlFor="subtitle">Note subtitle</label>
            <input name="subtitle" onChange={(e) => handleChange(e)} id="subtitle" value={noteDetails.subtitle} />
          </div>
          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input name="tags" id="tags" onChange={(e) => handleChange(e)} value={noteDetails.tags} />
          </div>
          <div className="flex justify-between items-center">
            <button onClick={(e) => createNote(e)}>
              Create Note
            </button>
            <button onClick={closeModal} className="close-btn">
              Close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default ModalView;
