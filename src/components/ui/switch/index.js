import { useState } from "react";
import clsx from "clsx";

function Switch({ checked = false, onChange }) {
  const [isOn, setIsOn] = useState(checked);

  function toggle() {
    setIsOn(!isOn);
    onChange?.(!isOn);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={clsx(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
        isOn ? "bg-blue-600" : "bg-gray-300"
      )}
    >
      <span
        className={clsx(
          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
          isOn ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
}

export default Switch;
