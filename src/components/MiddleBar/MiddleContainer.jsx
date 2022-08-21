import { useState } from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Notes from "./Notes";
import ModalView from "./Modal";
import { toggleModal, updateTempNotes } from "../../redux/actions";
const MiddleContainer = ({toggleSideBar, setToggleSideBar}) => {
  const dispatch = useDispatch();
  const { tempNotes, notes } = useSelector((state) => state.reducer);
  const [searchField, setSearchField] = useState("");
  const openModal = () => {
    dispatch(toggleModal(true));
  };

  const filterNotes = (value) => {
    setSearchField(value);
    let filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(value.toLowerCase())
    );
    //console.log("Changes is happening");
    if (value == "") dispatch(updateTempNotes(notes));
    else dispatch(updateTempNotes(filteredNotes));
  };

  return (
    <section className="middle-container py-3">
      <div className="top-search flex items-center px-2 justify-between">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center">
            <div className="icon">
              <AiOutlineSearch size={20} color="#999" />
            </div>
            <input
              type="text"
              className="bg-transparent pl-1"
              value={searchField}
              placeholder="Search"
              onChange={(e) => filterNotes(e.target.value)}
            />
          </div>
        </form>
        <button onClick={openModal} className="w-24 h-24 rounded-full">
          <AiOutlinePlus color="#fff" />
        </button>
        <ModalView />
      </div>
      <Notes toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar} />
    </section>
  );
};

export default MiddleContainer;
