import { NavLink } from "react-router-dom";
import Heading from "../../../components/ui/heading/index.js";
import Logo from "../../../assets/images/logo.png";
import { LuSquareChartGantt } from "react-icons/lu";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";

const colorVariants = {
  blue: {
    active: "bg-blue-primary text-basic-white hover:bg-blue-hover",
    inactive: "text-basic-black hover:bg-blue-primary hover:text-basic-white",
  },
  green: {
    active: "bg-green-primary text-basic-white hover:bg-green-hover",
    inactive: "text-basic-black hover:bg-green-primary hover:text-basic-white",
  },
  yellow: {
    active: "bg-yellow-primary text-basic-white hover:bg-yellow-hover",
    inactive: "text-basic-black hover:bg-yellow-primary hover:text-basic-white",
  },
  aqua: {
    active: "bg-aqua-primary text-basic-white hover:bg-aqua-hover",
    inactive: "text-basic-black hover:bg-aqua-primary hover:text-basic-white",
  },
  orange: {
    active: "bg-orange-primary text-basic-white hover:bg-orange-hover",
    inactive: "text-basic-black hover:bg-orange-primary hover:text-basic-white",
  },
};

function SideMenu() {
  const baseNavLinkClassName =
    "flex items-center gap-2 w-full px-5 py-[10px] rounded-md transition-colors";

  const normalAndHoverNavLinkClassName =
    (color) =>
    ({ isActive }) => {
      const variant = colorVariants[color];
      return `${baseNavLinkClassName} ${
        isActive ? variant.active : variant.inactive
      }`;
    };

  return (
    <aside className="h-screen w-66 bg-background-light border-r border-gray-200 flex flex-col p-2">
      <header className="flex items-center justify-center w-fit gap-2 mb-5 mt-2">
        <img src={Logo} width="40px" alt="Logo" />
        <Heading level={2}>G04LS 2 R34CH</Heading>
      </header>

      <nav className="flex-1 flex flex-col gap-1">
        <NavLink to="/home" className={normalAndHoverNavLinkClassName("blue")}>
          <IoHomeOutline size={20} />
          Home
        </NavLink>

        <NavLink
          to="/mood-stat"
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
        © 2025 - G04LS 2 R34CH
      </div>
    </aside>
  );
}

export default SideMenu;
