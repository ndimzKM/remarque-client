import { useState } from "react";
import Modal from "react-modal";
import {
  toggleModal,
  updateNotes,
  updateTempNotes,
} from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { modalStyles } from "../../utils";
const ModalView = () => {
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    subtitle: "",
    tags: "",
  });

  const { modal, notes } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleModal(!modal));
  };

  const handleChange = (e) => {
    setNoteDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const createNote = (e) => {
    e.preventDefault();

    let newNote = { ...noteDetails };
    newNote.tags = newNote.tags.split(",");

    let lastID = notes[notes.length - 1].id;
    newNote.id = Number(lastID) + 1;

    dispatch(updateNotes([...notes, newNote]));
    dispatch(updateTempNotes([...notes, newNote]));
    dispatch(toggleModal(false));
  };

  return (
    <div className="modal">
      <Modal
        className={" overflow-auto absolute h-full"}
        isOpen={modal}
        contentLabel="Example Modal"
        style={modalStyles}
        ariaHideApp={false}
      >
        <div className="bg-white space-y-6">
          <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 mx-auto max-w-sm">Note Details</h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
              <div>
                <label className="text-sm text-gray-400">Note title</label>
                <div className="w-full inline-flex border">
                  <div className="w-1/12 pt-2 bg-gray-100">
                    <svg
                      fill="none"
                      className="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    name="title"
                    id="title"
                    value={noteDetails.title}
                    type="text"
                    onChange={(e) => handleChange(e)}
                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder="Title of your note"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400">Note subtitle</label>
                <div className="w-full inline-flex border">
                  <div className="pt-2 w-1/12 bg-gray-100">
                    <svg
                      fill="none"
                      className="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    value={noteDetails.subtitle}
                    name="subtitle"
                    id="subtitle"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder="Subtitle of your note"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
            <h2 className="md:w-4/12 max-w-sm mx-auto">Tags</h2>

            <div className="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
              <div className="w-full inline-flex border-b">
                <div className="w-1/12 pt-2">
                  <svg
                    fill="none"
                    className="w-6 text-gray-400 mx-auto"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  value={noteDetails.tags}
                  onChange={(e) => handleChange(e)}
                  className="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                  placeholder="New"
                />
              </div>
            </div>

            <div className="md:w-3/12 text-center md:pl-6">
              <button
                onClick={(e) => createNote(e)}
                className="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
              >
                <svg
                  fill="none"
                  className="w-4 text-white mr-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Create
              </button>
            </div>
          </div>

          <hr />
          <div className="w-full p-4 text-right text-gray-500">
            <button
              onClick={closeModal}
              className="inline-flex items-center focus:outline-none mr-4"
            >
              <svg
                fill="none"
                className="w-4 mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Close Modal
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalView;
