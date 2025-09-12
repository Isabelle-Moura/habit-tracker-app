import { NavLink } from "react-router-dom";
import Heading from "../../../components/ui/heading/index.js";
import Logo from "../../../assets/images/logo.png";
import { LuSquareChartGantt } from "react-icons/lu";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";

function SideMenu() {
  const baseNavLinkClassName =
    "flex items-center gap-2 w-full px-5 py-[10px] rounded-md transition-colors";

  const normalAndHoverNavLinkClassName =
    (color) =>
    ({ isActive }) => {
      return `${baseNavLinkClassName} ${
        isActive
          ? `bg-${color}-primary text-basic-white hover:bg-${color}-hover`
          : `text-basic-black hover:bg-${color}-primary hover:text-basic-white`
      }`;
    };

  return (
    <aside className="h-screen w-66 bg-background-light border-r border-gray-200 flex flex-col p-2">
      <header className="flex items-center justify-center w-fit gap-2 mb-5 mt-2">
        <img src={Logo} width="40px" alt="Logo" />
        <Heading level={2}>Goals 2 Reach</Heading>
      </header>

      <nav className="flex-1 flex flex-col gap-1">
        <NavLink to="/home" className={normalAndHoverNavLinkClassName("blue")}>
          <IoHomeOutline size={20} />
          Home
        </NavLink>

        <NavLink
          to="/report"
          className={normalAndHoverNavLinkClassName("green")}
        >
          <HiOutlineFaceSmile size={20} />
          Mood Stat
        </NavLink>

        <NavLink
          to="/habits"
          className={normalAndHoverNavLinkClassName("yellow")}
        >
          <HiOutlineSquares2X2 size={20} />
          My Habits
        </NavLink>

        <NavLink
          to="/report"
          className={normalAndHoverNavLinkClassName("aqua")}
        >
          <LuSquareChartGantt size={20} />
          Report
        </NavLink>

        <NavLink
          to="/profile"
          className={normalAndHoverNavLinkClassName("orange")}
        >
          <HiOutlineUser size={20} />
          Profile
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 text-sm text-gray-500">
        © 2025 - Goals 2 Reach
      </div>
    </aside>
  );
}

export default SideMenu;
