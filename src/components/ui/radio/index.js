import clsx from "clsx";

function Radio({ className, ...props }) {
  return (
    <input
      type="radio"
      className={clsx(
        "h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    />
  );
}

export default Radio;
