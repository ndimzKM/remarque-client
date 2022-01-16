import { AiOutlineSearch, AiOutlinePlus, AiOutlineBell } from "react-icons/ai";
import Notes from "./Notes";

const MiddleContainer = () => {
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
        <button>
          <AiOutlinePlus color="#fff" size={22} />
        </button>
      </div>
      <Notes />
    </section>
  );
};

export default MiddleContainer;
