import clsx from "clsx";

function Textarea({ className, ...props }) {
  return (
    <textarea
      className={clsx(
        "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    />
  );
}

export default Textarea;
