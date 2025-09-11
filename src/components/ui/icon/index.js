import React from "react";

const Icon = ({ component: Component, size = 18, color = "#212121", className }) => {
  return <Component size={size} color={color} className={className} />;
};

export default Icon;