import { Outlet } from "react-router-dom";
import SideMenu from "../../composite/side-bar/index.js";

function MainLayout() {
  return (
    <div className="min-h-screen w-[95%] bg-background-light flex items-center justify-center mx-4">
      <SideMenu />
      <div className="w-[90%]">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
