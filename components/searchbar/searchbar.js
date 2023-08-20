import React, { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
function SearchBar() {
  const [borderColor, setBorderColor] = useState('border-peach');

  const handleFocus = () => {
    setBorderColor('border-desert');
  };

  const handleBlur = () => {
    setBorderColor('border-peach');
  };
  return (
    <div className="relative ">
      <input
        type="text"
        className="w-48 px-4 py-2 rounded-md border border-peach  text-desert placeholder-desert"
        placeholder="Search..."
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-desert">
        <AiOutlineSearch size={20} />
      </div>
    </div>

  );
};

export { SearchBar };