import clsx from "clsx";

function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    destructive: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
        variants[variant]
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
