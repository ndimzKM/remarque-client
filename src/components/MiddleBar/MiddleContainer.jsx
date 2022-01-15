import { AiOutlineSearch, AiOutlinePlus, AiOutlineBell } from "react-icons/ai";

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
      <div className="notes">
        <div className="note active">
          <h3>Welcome to Remarque</h3>
          <p>
            <span>18/11/2019</span> Generating endless energy with
          </p>
          <div className="flex items-center w-max bg-blue-100 p-1 mt-2 text-blue-400 font-medium rounded-3xl">
            <AiOutlineBell size={20} />
            <span className="text-sm">13 Sept 15:00</span>
          </div>
        </div>
        <div className="note">
          <h3>Fusion Energy</h3>
          <p>
            <span>18/11/2019</span> Generating endless energy with
          </p>
          <div className="flex items-center w-max bg-blue-100 p-1 mt-2 text-blue-400 font-medium rounded-3xl">
            <AiOutlineBell size={20} />
            <span className="text-sm">13 Sept 15:00</span>
          </div>
        </div>
        <div className="note">
          <h3>But with some guidance and explanation</h3>
          <p>
            <span>18/11/2019</span> Generating endless energy with
          </p>
          <div className="flex items-center w-max bg-blue-100 p-1 mt-2 text-blue-400 font-medium rounded-3xl">
            <AiOutlineBell size={20} />
            <span className="text-sm">13 Sept 15:00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleContainer;
