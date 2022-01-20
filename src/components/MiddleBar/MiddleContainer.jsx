import { AiOutlineSearch, AiOutlinePlus, AiOutlineBell } from "react-icons/ai";
import {useDispatch, useSelector} from 'react-redux'
import Notes from "./Notes";
import ModalView from './Modal'
import {toggleModal} from '../../redux/actions'
const MiddleContainer = () => {
  const dispatch = useDispatch()
  const {modal} = useSelector((state) => state.reducer)
  const openModal = () => {
    dispatch(toggleModal(true));
  }

  return (
    <section className="middle-container py-3">
      <div className="top-search flex items-center px-2 justify-between">
        <form>
          <div className="flex items-center">
            <div className="icon">
              <AiOutlineSearch size={20} color="#999" />
            </div>
            <input
              type="text"
              className="bg-transparent pl-1"
              value=""
              placeholder="Search"
            />
          </div>
        </form>
        <button onClick={openModal}>
          <AiOutlinePlus color="#fff" size={22} />
        </button>
        <ModalView />
      </div>
      <Notes />
    </section>
  );
};

export default MiddleContainer;
