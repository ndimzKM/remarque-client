import MainContainer from "../components/MainBar/MainContainer";
import MiddleContainer from "../components/MiddleBar/MiddleContainer";
import NavContainer from "../components/SideNavigation/NavContainer";

const AppView = () => {
  return (
    <main className="flex justify-between dark:bg-slate-900 transition-all">
      <NavContainer />
      <MiddleContainer />
      <MainContainer />
    </main>
  );
};

export default AppView;
