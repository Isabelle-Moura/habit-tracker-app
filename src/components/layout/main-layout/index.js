import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen w-[95%] bg-background-light flex items-center justify-center mx-4">
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
