import React from "react";

function Input({ type = "text", value, onChange, placeholder, required = false, ...props }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
      {...props}
    />
  );
}

export default Input;
