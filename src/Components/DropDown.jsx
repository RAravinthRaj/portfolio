import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='text-black'>
      <label htmlFor="dropdown" ></label>
      <select id="dropdown" value={selectedOption} onChange={handleChange} className='p-2 font-serif hover:shadow-[0_0_5px_white] hover:transition-shadow hover:duration-200 rounded-lg'>
        <option value="" className='text-black'>
          Country
        </option>
        <option value="option1" className='text-black'>India</option>
        <option value="option2" className='text-black'>United States</option>
        <option value="option3" className='text-black' >Russia</option>
      </select>
    </div>
  );
};

export default Dropdown;
