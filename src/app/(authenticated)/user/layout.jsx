'use client';

import '../../../styles/globals.css';

import { usePathname } from 'next/navigation';

import { useState } from 'react';

import Sidebar from '@/components/Layout/Sidebar';

import individualLinks from '@/constants/sidebar/individualLinks';
import businessLinks from '@/constants/sidebar/businessLinks';

import { AiOutlineClose } from '@/constants/icons/icons';
import UsersLayoutMobileFooter from '@/components/Layout/usersLayoutMobileFooter';
import UsersLayoutMobileNavbar from '@/components/Layout/usersLayoutMobileNavbar';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [showMobileSideBar, setShowMobileSidebar] = useState(false);

  const toggleMobileSideBar = () => {
    setShowMobileSidebar(!showMobileSideBar);
  };

  return (
    <div className=' w-full flex relative  h-full'>
      <UsersLayoutMobileNavbar />

      <div
        className={`h-full desktop:w-[290px] w-[200px] relative  hidden md:block border-r border-primary/30 dark:border-white `}
      >
        <Sidebar
          sidebarLinks={
            pathname.includes('individual') ? individualLinks : businessLinks
          }
        />
      </div>

      {/* Mobile sidebar  */}
      <div
        onClick={toggleMobileSideBar}
        className={`h-screen w-full bg-black/30 z-40 fixed top-0 left-0 md:hidden transition duration-300  transform ${
          showMobileSideBar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div
          className='bg-white dark:bg-primary dark:text-white w-[50%] max-mobile:w-[70%]'
          onClick={(e) => e.stopPropagation()}
        >
          <Sidebar
            sidebarLinks={
              pathname.includes('individual') ? individualLinks : businessLinks
            }
          />
        </div>
        <div className='absolute top-3 right-7 max-mobile:right-4 max-mobile:top-4 bg-white dark:text-primary font-bold rounded-full p-2'>
          <AiOutlineClose className='text-xl' onClick={toggleMobileSideBar} />
        </div>
      </div>

      <UsersLayoutMobileFooter />

      <div
        className={`flex-1 dark:bg-primary p-8 max-md:pt-0 max-laptop:px-2 max-md:mt-20 max-mobile:pb-16 max-md:pb-20 h-full  overflow-y-scroll hide-scrollbar`}
      >
        {children}
      </div>
    </div>
  );
}
