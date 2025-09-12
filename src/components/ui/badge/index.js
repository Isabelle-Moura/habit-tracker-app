import clsx from "clsx";

function Badge({ children, isRounded = false, variant = "blue", className }) {
  const base = `w-[450px] inline-flex items-center justify-center ${
    isRounded ? "rounded-full" : "rounded-md"
  } px-3 py-[6px] text-sm font-medium cursor-pointer`;

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
