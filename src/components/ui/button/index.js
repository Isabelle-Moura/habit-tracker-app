import React from "react";
import clsx from "clsx";
import Icon from "../icon/index.js";
import Loader from "../loader/index.js"; 

function Button({
  label,
  loadingLabel = "Loading...",
  isLoading = false,
  type = "button",
  variant = "blue",
  iconLeft,
  iconRight,
  iconSize = 18,
  iconColor = "#141414",
  disabled,
  className,
  ...props
}) {
  const base =
    "min-w-[450px] inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const disabledClassName = "bg-disabled-bg text-disabled-text";

  const variants = {
    blue: "bg-blue-primary text-basic-white hover:bg-blue-hover",
    green: "bg-green-primary text-basic-white hover:bg-green-hover",
    red: "bg-red-primary text-basic-white hover:bg-red-hover",
    aqua: "bg-aqua-primary text-basic-white hover:bg-aqua-hover",
    orange: "bg-orange-primary text-basic-white hover:bg-orange-hover",
    yellow: "bg-yellow-primary text-basic-white hover:bg-yellow-hover",
    outline: "border border-basic-grayMedium bg-basic-white text-basic-grayStrong hover:bg-basic-grayLight",
  };

  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={clsx(
        base,
        isDisabled ? disabledClassName : variants[variant],
        className
      )}
      {...props}
    >
      {iconLeft && !isLoading && (
        <span className="mr-2 flex items-center">
          <Icon component={iconLeft} size={iconSize} color={iconColor} />
        </span>
      )}

      <span>{isLoading ? loadingLabel : label}</span>

      {isLoading && (
        <span className="ml-2 flex items-center">
          <Loader small />
        </span>
      )}

      {!isLoading && iconRight && (
        <span className="ml-2 flex items-center">
          <Icon component={iconRight} size={iconSize} color={iconColor} />
        </span>
      )}
    </button>
  );
}

export default Button;
