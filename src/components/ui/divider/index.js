import React from "react";
import clsx from "clsx";

function Divider({ text, className, lineColor = "border-basic-grayMedium", textColor = "text-basic-grayStrong" }) {
  return (
    <div className={clsx("flex items-center", className)}>
      <div className={clsx("flex-grow border-t", lineColor)} />
      {text && <span className={clsx("mx-2 text-sm font-medium", textColor)}>{text}</span>}
      <div className={clsx("flex-grow border-t", lineColor)} />
    </div>
  );
}

export default Divider;
