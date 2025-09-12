import clsx from "clsx";

function Container({
  children,
  flex = false,
  direction = "row", // row | col
  align = "start", // start | center | end | stretch
  justify = "start", // start | center | end | between | around | evenly
  wrap = false,
  margin,
  padding,
  gap,
  responsive,
  className,
  semanticTag = "div", // default is <div>
}) {
  const semanticTags = {
    div: "div",
    section: "section",
    main: "main",
    header: "header",
    footer: "footer",
    article: "article",
    aside: "aside",
    nav: "nav",
  };

  const Tag = semanticTags[semanticTag] || "div";

  const base = clsx(
    "m-auto w-full max-w-7xl",

    flex && "flex",
    flex && `flex-${direction}`,
    flex && `items-${align}`,
    flex && {
      "justify-start": justify === "start",
      "justify-center": justify === "center",
      "justify-end": justify === "end",
      "justify-between": justify === "between",
      "justify-around": justify === "around",
      "justify-evenly": justify === "evenly",
    },
    wrap && "flex-wrap",
    margin,
    padding,
    gap,
    responsive && Object.entries(responsive).map(([bp, val]) => `${bp}:${val}`),
    className
  );

  return <Tag className={base}>{children}</Tag>;
}

export default Container;
