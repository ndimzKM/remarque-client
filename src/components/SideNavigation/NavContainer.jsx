import {
  AiOutlineSync,
  AiOutlineLeft,
  AiOutlineBell,
  AiOutlineFileText,
  AiOutlineHeart,
  AiOutlineEdit,
  AiOutlineClockCircle,
  AiOutlineProject,
  AiOutlineFolder,
} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { updateTempNotes } from "../../redux/actions";

const NavContainer = () => {
  const { notes, folders, tempNotes, tags } = useSelector(
    (state) => state.reducer
  );
  const dispatch = useDispatch();


  const navigateFolders = (e) => {
    let category = "all";
    if (
      e.target.tagName == "LI" ||
      e.target.tagName == "SPAN" ||
      e.target.tagName == "svg" ||
      e.target.tagName == "path"
    ) {
      category = e.target.textContent.toLowerCase();
    }
    let temp = tempNotes;
    console.log(category);
    if(category === 'favorites' || category === 'favorite'){
      temp = notes.filter(nt => nt.favorite === true);
      dispatch(updateTempNotes(temp));
    }

    else if (category != "all" && category != "all notes") {
      let folder = folders.find((fd) => fd.name == category);
      temp = notes.filter((nt) => nt.folder == folder.id);
      dispatch(updateTempNotes(temp));
    }
    else {
      dispatch(updateTempNotes(notes));
    }
  };
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
        <ul className="navbar" onClick={(e) => navigateFolders(e)}>
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
        </ul>
        <h3 className="font-medium text-gray-900 text-lg mt-5">Tags</h3>
        <ul className="tags">
          {tags.map((tag) => (
            <li key={tag.id}>
              <AiOutlineFolder size={20} />
              <span>
                {tag.name} ({tag.number})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NavContainer;
