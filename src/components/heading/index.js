import React from "react";

function Heading({ level = 1, children, className = "" }) {
  const Tag = `h${level}`;
  const baseStyle = "font-bold text-gray-800";

  const sizes = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
  };

  return (
    <Tag className={`${baseStyle} ${sizes[level]} ${className}`}>
      {children}
    </Tag>
  );
}

export default Heading;
