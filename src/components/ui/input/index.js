import { useState } from "react";
import clsx from "clsx";
import { GoEye, GoEyeClosed } from "react-icons/go";
import Icon from "../icon/index.js";

function Input({
  type = "text",
  id,
  label,
  className,
  value,
  onChange,
  placeholder,
  required = false,
  icon, 
  iconSize = 18, 
  iconColor = "#141414", 
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const inputClassName = clsx(
    `w-full rounded-md px-6 py-2 text-sm`,
    "focus:outline-none focus:ring-1 focus:ring-blue-primary focus:border-blue-primary",
    "hover:ring-1 hover:ring-blue-primary hover:border-blue-primary",
  );

  const labelClassName = "block mb-1 text-md font-semibold text-basic-black";
  const iconClassName = "absolute right-2 top-4 absolute inset-y-0 flex items-center";

  return (
    <div className="relative">
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}

      {icon && (
        <div className="absolute left-2 top-4 absolute inset-y-0 flex items-center">
          <Icon component={icon} size={iconSize} color={iconColor} />
        </div>
      )}

      <input
        id={id}
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={clsx(inputClassName, className)}
        {...props}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={iconClassName}
        >
          <Icon component={showPassword ? GoEyeClosed : GoEye} />
        </button>
      )}
    </div>
  );
}

export default Input;
