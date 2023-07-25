import React, { useState } from 'react';

const Priority = () => {
  const [priority, setPriority] = useState('low');

  const handleButtonClick = (selectedPriority) => {
    setPriority(selectedPriority);
  };

  return (
    <>
    <div className='flex flex-row flex-wrap gap-2'>
      <button
        className={`rounded-full text-sm font-bold text-center px-1 py-0.5 h-6 w-12 border-2 ${
          priority === 'low' ? 'bg-desert text-white' : 'border-cream text-cream'
        }`}
        onClick={() => handleButtonClick('low')}
      >
        Low
      </button>
      <button
        className={`rounded-full text-sm font-bold text-center px-1 py-0.5 h-6 w-18 border-2 ${
          priority === 'medium' ? 'bg-desert text-white' : 'border-coral text-coral'
        }`}
        onClick={() => handleButtonClick('medium')}
      >
        Medium
      </button>
      <button
        className={`rounded-full text-sm font-bold text-center px-1 py-0.5 h-6 w-12 border-2 ${
          priority === 'high' ? 'bg-desert text-white' : 'border-desert text-desert'
        }`}
        onClick={() => handleButtonClick('high')}
      >
        High
      </button>
      </div>
    </>
  );
};

export {Priority};
