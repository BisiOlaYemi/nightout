import React from 'react';
// import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import activityLinks from '@/constants/activity/activityLinks';

const Activities = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className=''>
      <ul className=''>
        {activityLinks.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => router.push(item.url)}
              className={`flex cursor-pointer items-center justify-between py-3 pl-5 pr-10  transition duration-500 ease-in-out hover:bg-gray-100 hover:dark:bg-secondary   ${
                pathname.includes(item.url)
                  ? 'border-l-[3px] border-orange dark:bg-white dark:text-primary'
                  : 'dark:text-white'
              }   `}
            >
              <p className='text-base'>{item.text}</p>
            </div>
          );
        })}
      </ul>
      
    </div>
  );
};
export default Activities;
 