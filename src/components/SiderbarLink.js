import React from 'react';

const SiderbarLink = ({ text, Icon, action }) => {
  return (
    <div
      onClick={action}
      className='text-primary dark:text-white flex items-center justify-center  duration-300 hover:bg-secondary rounded-full
     text-xl space-x-4  cursor-pointer transition  px-10 max-desktop:px-6 py-2.5 w-fit '
    >
      <div className='text-2xl max-desktop:text-xl'>{Icon}</div>
      <span className='max-desktop:text-base'>{text}</span>
    </div>
  );
};

export default SiderbarLink;
