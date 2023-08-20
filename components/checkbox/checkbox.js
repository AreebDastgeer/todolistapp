import React from 'react';

const Checkbox = ({ label, isChecked, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className='form-checkbox h-4 w-4 text-desert rounded-full border-desert accent-desert'
        checked={isChecked}
        onChange={onChange}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

export {Checkbox};
