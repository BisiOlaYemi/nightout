'use client';

import React, { useState, useEffect } from 'react';

import '../../../../styles/globals.css';
import { useRouter } from 'next/navigation';

import Usersettings from '@/components/Layout/Usersettings';

import { FiSettings, FiChevronRight } from '@/constants/icons/icons';
import ParentModal from '@/components/modals/parentModal';

import profileLinks from '@/constants/profile-settings/profileLinks';

export default function RootLayout({ children }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className='md:max-w-[1200px] w-full mx-auto'>
      <div className='flex max-md:flex-wrap max-md:flex-col md:border w-full '>
        <div className='border max-md:w-full hide-scrollbar max-md:mb-5 md:border-r hidden md:flex max-md:overflow-scroll max-md:flex-nowrap border-primary/30 dark:border-white'>
          <Usersettings />
        </div>

        <div className='md:hidden mobile:px-8 px-4 pb-3 mb-3 border-b-2  bg-white  w-full h-fit flex justify-between'>
          <p className='font-medium text-base'>Edit profile</p>
          <FiSettings className='text-2xl' onClick={() => setIsOpen(true)} />
        </div>

        <ParentModal isOpen={isOpen} handleClose={handleClose}>
          <ul className='m-0 grid gap-2'>
            {profileLinks.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    router.push(item.url);
                    handleClose();
                  }}
                  className={`text-primary flex items-center justify-between ${
                    index !== profileLinks.length - 1 ? 'border-b-2 pb-2' : ''
                  }`}
                >
                  {item.text}
                  <FiChevronRight />
                </li>
              );
            })}
          </ul>
        </ParentModal>

        <div className='  flex-1 max-md:flex-none max-md:w-full mobile:pt-4 pb-10 px-16 max-lgDesktop:px-5 mobile:px-8 max-mobile:px-4 '>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
