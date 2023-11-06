import React from 'react';
// import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import profileLinks from '@/constants/profile-settings/profileLinks';

const Usersettings = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className='w-full'>
      <ul className='max-md:flex w-full  '>
        {profileLinks.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                router.push(item.url);
                window.scrollTo({
                  left: 0,
                  behavior: 'smooth',
                });
              }}
              className={` flex cursor-pointer items-center justify-between py-3  px-5 desktop:pr-10  transition duration-500 ease-in-out md:hover:bg-gray-100 md:hover:dark:bg-secondary   ${
                pathname.includes(item.url)
                  ? 'md:border-l-[3px] md:border-orange max-md:bg-orange max-md:text-white dark:bg-white dark:text-primary'
                  : 'dark:text-white'
              }   `}
            >
              <p className='text-base whitespace-nowrap max-md:font-bold max-desktop:text-sm max-md:w-fit '>
                {item.text}
              </p>
            </div>
          );
        })}
      </ul>
      {/* <div className='flex justify-start md:justify-center mt-12 mb-4'>
        <Link
          className='text-orange text-xs font-bold text-center max-desktop:w-[90%] mx-auto'
          href={'#'}
        >
          Switch to Business Account
        </Link>
      </div> */}
    </div>
  );
};
export default Usersettings;
