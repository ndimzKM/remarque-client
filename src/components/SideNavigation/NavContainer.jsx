import {
  AiOutlineSync,
  AiOutlineLeft,
  AiOutlineBell,
  AiOutlineFileText,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineEdit,
  AiOutlineClockCircle,
  AiOutlineProject,
  AiOutlineFolder,
} from "react-icons/ai";

const NavContainer = () => {
  return (
    <section className="side-nav py-3 px-2">
      <div className="top-action flex justify-end">
        <button className="mr-3">
          <AiOutlineSync color="#333" size={20} />
        </button>
        <button>
          <AiOutlineLeft color="#333" size={20} />
        </button>
      </div>
      <div className="nav-container mt-7">
        <h3 className="font-medium text-gray-900 text-lg">Quick links</h3>
        <ul className="navbar">
          <li className="active">
            <i>
              <AiOutlineFileText color="#333" size={24} />
            </i>
            <span>All notes</span>
          </li>
          <li>
            <i>
              <AiOutlineBell color="#333" size={24} />
            </i>
            <span>Reminders</span>
          </li>
          <li>
            <i>
              <AiOutlineProject color="#333" size={24} />
            </i>
            <span>Tasks</span>
          </li>
          <li>
            <i>
              <AiOutlineHeart color="#333" size={24} />
            </i>
            <span>Favorites</span>
          </li>
          <li>
            <i>
              <AiOutlineEdit color="#333" size={24} />
            </i>
            <span>Highlights</span>
          </li>
          <li>
            <i>
              <AiOutlineClockCircle color="#333" size={24} />
            </i>
            <span>Activity</span>
          </li>
          <li>
            <i>
              <AiOutlineSearch color="#333" size={24} />
            </i>
            <span>Saved search</span>
          </li>
        </ul>
        <h3 className="font-medium text-gray-900 text-lg mt-5">Folders</h3>
        <ul className="tags">
          <li>
            <AiOutlineFolder size={20} />
            <span>advancedev (13)</span>
          </li>
          <li>
            <AiOutlineFolder size={20} />
            <span>assignment (2)</span>
          </li>
          <li>
            <AiOutlineFolder size={20} />
            <span>blog (9)</span>
          </li>
          <li>
            <AiOutlineFolder size={20} />
            <span>bussiness (1)</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavContainer;
