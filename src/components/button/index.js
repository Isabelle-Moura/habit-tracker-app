import React from "react";

function Button({ children, type = "button", onClick, variant = "primary", ...props }) {
  const baseStyle =
    "button";

  const variants = {
    primary: "button-primary",
    secondary: "button-secondary",
    danger: "button-danger",
    link: "button-link",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
