import clsx from "clsx";

function Heading({
  level = 1,
  weight = "bold",
  children,
  className = "text-basic-black",
  withLine = false,
  linePosition = "right", // left | right | full
  lineClassName = "border-gray-300",
}) {
  const Tag = `h${level}`;

  const sizes = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base",
  };

  const weights = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  if (!withLine) {
    return (
      <Tag className={clsx(sizes[level], weights[weight], className)}>
        {children}
      </Tag>
    );
  }

  return (
    <div className="flex items-center w-full">
      {(linePosition === "left" || linePosition === "full") && (
        <div className={clsx("flex-grow border-t", lineClassName)} />
      )}

      <Tag
        className={clsx(
          sizes[level],
          weights[weight],
          className,
          "mx-2 whitespace-nowrap"
        )}
      >
        {children}
      </Tag>

      {(linePosition === "right" || linePosition === "full") && (
        <div className={clsx("flex-grow border-t", lineClassName)} />
      )}
    </div>
  );
}

export default Heading;
