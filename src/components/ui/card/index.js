// function Card({ children }) {
//     return (
//       <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
//         {children}
//       </div>
//     );
//   }
  
//   export default Card;
import clsx from "clsx";

function Card({ children, className }) {
  return (
    <div
      className={clsx(
        "rounded-lg border border-gray-200 bg-card p-4 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
