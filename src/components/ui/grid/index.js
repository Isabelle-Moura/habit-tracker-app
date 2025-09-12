import clsx from "clsx";

const colsMap = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

const gapMap = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
};

function Grid({ children, cols = 2, gap = 2, responsive = false, className }) {
  const base = clsx(
    "grid",
    gapMap[gap],
    !responsive && colsMap[cols],
    responsive &&
      "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",
    className
  );

  return <div className={base}>{children}</div>;
}

export default Grid;
