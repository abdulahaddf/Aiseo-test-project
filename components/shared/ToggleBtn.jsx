'use client'
import { useState } from "react";


const ToggleBtn = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      onClick={handleToggle}
      className={`w-[54px] h-[29px] flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
        isOn ? 'bg-primary' : 'bg-gray-300'
      }`}
    >
      <div
        className={`bg-white-600 w-6 h-6 rounded-full shadow-md transform transition-transform ${
          isOn ? 'translate-x-6' : 'translate-x-0'
        }`}
      ></div>
    </button>
  );
};

export default ToggleBtn;
