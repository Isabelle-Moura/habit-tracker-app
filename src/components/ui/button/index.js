import React from "react";
import clsx from "clsx";
import Icon from "../icon/index.js";
import Loader from "../loader/index.js";

function Button({
  label,
  loadingLabel = "Loading...",
  isLoading = false,
  isRounded = true,
  type = "button",
  variant = "blue",
  size = "default",
  iconLeft,
  iconRight,
  iconSize = 18,
  iconColor = "#141414",
  disabled,
  iconOnly = false,
  className,
  ...props
}) {
  const sizeClasses = {
    default: iconOnly ? "w-10 h-10 min-w-0 p-0" : "px-4 py-2 min-w-[450px]",
    small: iconOnly ? "w-8 h-8 min-w-0 p-0" : "px-3 py-1 text-sm min-w-[100px]",
    medium: iconOnly
      ? "w-10 h-10 min-w-0 p-0"
      : "px-4 py-2 text-base min-w-[150px]",
    large: iconOnly
      ? "w-12 h-12 min-w-0 p-0"
      : "px-6 py-3 text-lg min-w-[200px]",
  };

  const base = clsx(
    "inline-flex items-center justify-center font-medium",
    isRounded ? "rounded-full" : "rounded-md",
    sizeClasses[size]
  );

  const disabledClassName = "bg-disabled-bg text-disabled-text";

  const variants = {
    blue: "bg-blue-primary text-basic-white hover:bg-blue-hover",
    green: "bg-green-primary text-basic-white hover:bg-green-hover",
    red: "bg-red-primary text-basic-white hover:bg-red-hover",
    aqua: "bg-aqua-primary text-basic-white hover:bg-aqua-hover",
    orange: "bg-orange-primary text-basic-white hover:bg-orange-hover",
    yellow: "bg-yellow-primary text-basic-white hover:bg-yellow-hover",
    outline:
      "border border-basic-grayMedium bg-basic-white text-basic-grayStrong hover:bg-basic-grayLight",
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
      {isLoading ? (
        <Loader small />
      ) : iconOnly ? (
        <Icon
          component={iconLeft || iconRight}
          size={iconSize}
          color={iconColor}
        />
      ) : (
        <>
          {iconLeft && (
            <span className="mr-2 flex items-center">
              <Icon component={iconLeft} size={iconSize} color={iconColor} />
            </span>
          )}
          <span>{label}</span>
          {iconRight && (
            <span className="ml-2 flex items-center">
              <Icon component={iconRight} size={iconSize} color={iconColor} />
            </span>
          )}
        </>
      )}
    </button>
  );
}

export default Button;
