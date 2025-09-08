import React from "react";

function SubHeading({ level = 1, children, className = "" }) {
  const Tag = `h${level}`;
  const baseStyle = "text-medium";

  const sizes = {
    1: "text-xl",
    2: "text-lg",
    3: "text-md",
    4: "text-sm",
  };

  return (
    <Tag className={`${baseStyle} ${sizes[level]} ${className}`}>
      {children}
    </Tag>
  );
}

export default SubHeading;
