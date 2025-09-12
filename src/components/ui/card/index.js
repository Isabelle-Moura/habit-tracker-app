import clsx from "clsx";
import Icon from "../icon/index.js";
import { FcOk } from "react-icons/fc";

const bgColorMap = {
  white: "bg-candyColors-white",
  yellowLight: "bg-candyColors-yellowLight",
  orangeLight: "bg-candyColors-orangeLight",
  brownGray: "bg-candyColors-brownGray",
  brownPink: "bg-candyColors-brownPink",
  redLight: "bg-candyColors-redLight",
  pinkLight: "bg-candyColors-pinkLight",
  pinkBright: "bg-candyColors-pinkBright",
  pinkSoft: "bg-candyColors-pinkSoft",
  purpleLight: "bg-candyColors-purpleLight",
  purpleSoft: "bg-candyColors-purpleSoft",
  blueSoft: "bg-candyColors-blueSoft",
  blueLight: "bg-candyColors-blueLight",
  tealSoft: "bg-candyColors-tealSoft",
  aquaLight: "bg-candyColors-aquaLight",
  greenSoft: "bg-candyColors-greenSoft",
};

function Card({
  icon,
  title,
  children,
  bgColor = "white",
  shadow = true,
  rounded = true,
  className,
  titleClassName,
  iconClassName,
  checked = false,
}) {
  return (
    <div
      className={clsx(
        "border border-gray-200 p-3 flex items-center gap-3 w-full relative",
        bgColorMap[bgColor],
        shadow && "shadow",
        rounded && "rounded-md",
        className
      )}
    >
      {icon && (
        <div
          className={clsx(
            "flex items-center justify-center text-xl",
            iconClassName
          )}
        >
          <Icon component={icon} size={28} />
        </div>
      )}

      <div className="flex flex-col flex-1">
        {title && (
          <h3
            className={clsx(
              "text-base font-semibold text-gray-900",
              titleClassName
            )}
          >
            {title}
          </h3>
        )}
        {children && <div className="text-sm text-gray-700">{children}</div>}
      </div>

      {checked && (
        <div className="absolute top-3 right-2 text-green-500 text-xl">
          <Icon component={FcOk} size={28} />
        </div>
      )}
    </div>
  );
}

export default Card;
