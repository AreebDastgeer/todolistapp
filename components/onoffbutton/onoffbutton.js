import React, { useState } from 'react';

const OnOffButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleButtonClick = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <button
      className="relative w-10 h-6 bg-desert rounded-full p-0.5 outline-none transition-all duration-300"
      onClick={handleButtonClick}
    >
      <div
        className={`absolute top-0 ${
          isOn ? 'left-0' : 'right-0'
        } bg-cream w-4 h-4 rounded-full p-2 m-1 transition-all duration-300`}
      />
    </button>
  );
};

export {OnOffButton};
