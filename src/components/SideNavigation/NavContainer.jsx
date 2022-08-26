import { set } from "lodash";
import { useState } from "react";
import {
  AiOutlineSync,
  AiOutlineLeft,
  // AiOutlineBell,
  // AiOutlineFileText,
  // AiOutlineHeart,
  // AiOutlineEdit,
  // AiOutlineClockCircle,
  // AiOutlineProject,
  AiOutlineFolder,
} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { updateTempNotes } from "../../redux/actions";

const NavContainer = ({setToggleSideBar, toggleSideBar}) => {

  const[active, setActive] = useState(1)

  const { notes, folders, tempNotes, tags } = useSelector(
    (state) => state.reducer
  );
  const dispatch = useDispatch();

  const navigateFolders = (e) => {


    let category = "all";

    if (
      e.target.tagName === "LI" ||
      e.target.tagName === "SPAN" ||
      e.target.tagName === "svg" ||
      e.target.tagName === "path"
       ) {


        if(e.target.tagName === "svg" || e.target.tagName === "path"){
            category = e.target.parentNode.parentNode.textContent.toLowerCase();
        }
        else{
          category = e.target.textContent.toLowerCase();
        }

      // toggle mainContainer display by clicking icons
      toggleSideBar && setToggleSideBar(!toggleSideBar)
    }
    
    let temp = tempNotes;

    // set active to current folder
folders.forEach(folder=>{
  if(folder.name.toLowerCase() === category){
    setActive(folder.id)
  }
})


  
    // console.log(tempNotes)
    // console.log(category);
    if (category === "favorites" || category === "favorite") {
      temp = notes.filter((nt) => nt.favorite === true);
      dispatch(updateTempNotes(temp));
    } else if (category !== "all" && category !== "all notes") {
      let folder = folders.find((fd) => fd.name === category); 

      // console.log(folder)
      temp = notes.filter((nt) => nt.folder === folder.id);
      dispatch(updateTempNotes(temp));
    } else {
      dispatch(updateTempNotes(notes));
    }
  };
  return (
    <section className="side-nav py-3 px-1 dark:bg-gray-900">
      <div className="top-action flex flex-col justify-center items-center md:block md:text-center ">
        <button className="pt-4" onClick={()=>{
          setToggleSideBar(!toggleSideBar)
        }}>
          <AiOutlineLeft color="#333" size={24} />
        </button>
        {/* <button className="md:ml-5">
          <AiOutlineSync color="#333" size={24} />
        </button> */}
      </div>

      <div className="nav-container mt-7  ">
        <h3 className="nav-container-heading font-medium text-gray-900 text-lg text-left">Quick links</h3>
        <ul className="navbar" onClick={(e) => {navigateFolders(e) }}>
          {folders.map((folder,i)=>(
            
            <li className={`${folder.id  === active && "active"}`} key={folder.id}>
                <i>
                  <folder.icon color="#333" size={24}/>
                </i>
                <span>{folder.name}</span>
            </li>
          ))}

          {/* <li className="active">
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
          </li> */}
        </ul>
        <h3 className="font-medium text-gray-900 text-lg mt-5 text-center md:text-left">Tags</h3>
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
