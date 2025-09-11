// import React from "react";

// function Select({ options = [], value, onChange, required = false, ...props }) {
//   return (
//     <select
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       required={required}
//       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
//       {...props}
//     >
//       {options.map((opt, index) => (
//         <option key={index} value={opt.value}>
//           {opt.label}
//         </option>
//       ))}
//     </select>
//   );
// }

// export default Select;
import clsx from "clsx";

function Select({ className, children, ...props }) {
  return (
    <select
      className={clsx(
        "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export default Select;
