import MainContainer from "../components/MainBar/MainContainer";
import MiddleContainer from "../components/MiddleBar/MiddleContainer";
import NavContainer from "../components/SideNavigation/NavContainer";
import { useState } from "react";
const AppView = () => {
  
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <main className={`flex justify-between dark:bg-slate-900 transition-all ${toggleSideBar ? 'display-main-container':''}`}>
      <NavContainer setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />
      <MiddleContainer />
      <MainContainer />
    </main>
  );
};

export default AppView;
