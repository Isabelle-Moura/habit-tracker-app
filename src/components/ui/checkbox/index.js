import clsx from "clsx";

function Checkbox({ label, className, ...props }) {
  return (
    <input
      type="checkbox"
      className={clsx(
        "h-2 w-2 rounded-md border border-aqua-primary",
        "hover:outline-none hover:ring-1 hover:ring-aqua-primary hover:border-aqua-primary",
        className
      )}
      {...props}
    />
  );
}

export default Checkbox;
