import React from "react";

function Input({
  type = "text",
  id,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  ...props
}) {
  return (
    <>
      <div className="input-container">
        {label && (
          <label htmlFor={id} className="label">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="input"
          {...props}
        />
      </div>
    </>
  );
}

export default Input;
