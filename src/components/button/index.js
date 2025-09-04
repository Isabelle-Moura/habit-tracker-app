import React from "react";

function Button({ children, type = "button", onClick, variant = "primary", ...props }) {
  const baseStyle =
    "w-full px-4 py-2 rounded-md font-semibold transition duration-200";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
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
