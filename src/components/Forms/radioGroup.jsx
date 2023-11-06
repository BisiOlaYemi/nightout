import { useState } from 'react';

function RadioGroup({ options, onChange }) {
  const [selectedOption, setSelectedOption] = useState(options[1].value);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  return (
    <div className='grid gap-4'>
      {options.map((option) => (
        <label key={option.value} className='flex gap-3 capitalize'>
          <input
            type='radio'
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
            className='w-5 h-5 text-orange bg-gray-100 border-gray-300 '
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default RadioGroup;
