import React from "react";

function Heading({ level = 1, weight = "bold", children, className = "text-basic-black" }) {
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

  return (
    <Tag className={`${sizes[level]} ${weights[weight]} ${className}`}>
      {children}
    </Tag>
  );
}

export default Heading;
