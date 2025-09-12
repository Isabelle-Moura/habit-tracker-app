import clsx from "clsx";

function Badge({
  children,
  isRounded = false,
  variant = "blue",
  iconLeft,
  iconRight,
  iconSize = 18,
  iconColor = "#141414",
  className,
}) {
  const base = `w-[450px] inline-flex items-center justify-center ${
    isRounded ? "rounded-full" : "rounded-md"
  } px-4 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`;

  const variants = {
    blue: "bg-blue-primary text-basic-white hover:bg-blue-hover",
    green: "bg-green-primary text-basic-white hover:bg-green-hover",
    red: "bg-red-primary text-basic-white hover:bg-red-hover",
    aqua: "bg-aqua-primary text-basic-white hover:bg-aqua-hover",
    orange: "bg-orange-primary text-basic-white hover:bg-orange-hover",
    yellow: "bg-yellow-primary text-basic-white hover:bg-yellow-hover",
    neutral: "bg-transparent text-basic-black hover:bg-basic-grayLight",
    outline:
      "border border-basic-grayMedium bg-basic-white text-basic-grayStrong hover:bg-basic-grayLight",
  };

  return (
    <span className={clsx(base, variants[variant], className)}>{children}</span>
  );
}

export default Badge;
