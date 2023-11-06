'use client';
import { useState } from 'react';

export default function Toggle(props) {
  const { status, action } = props;
  const [isChecked, setIsChecked] = useState(status);
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div>
      <div className='relative inline-block w-10 mr-2 align-middle select-none'>
        <input
          //   value={status}
          checked={isChecked}
          onChange={handleChange}
          onClick={action ? action : () => null}
          type='checkbox'
          name='toggle'
          id='Blue'
          className='checked:bg-white outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer'
        />
        <label
          htmlFor='Blue'
          className={`block h-6 overflow-hidden  ${
            isChecked ? 'bg-orange' : 'bg-gray-200'
          } rounded-full cursor-pointer`}
        ></label>
      </div>
      <span className={`font-medium text-gray-400 `}>
        {isChecked ? 'On' : 'Off'}
      </span>
    </div>
  );
}
