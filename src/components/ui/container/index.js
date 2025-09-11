import clsx from "clsx";

function Container({
  children,
  flex,
  flexCol,
  center,      
  margin,
  gap,
  padding,
  responsive,  
  className,
  spaceBetween,
}) {
  return (
    <div
      className={clsx(
        "m-auto w-full max-w-7xl",
        "px-4", 
        flex && "flex",
        flexCol && "flex-col",
        center && "items-center justify-center",
        spaceBetween && "justify-between",
        margin,
        gap,
        padding,
        responsive && Object.entries(responsive).map(
          ([bp, val]) => `${bp}:${val}`
        ),
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
