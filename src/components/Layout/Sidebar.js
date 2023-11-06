import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useTheme } from 'next-themes';

import SiderbarLink from '../SiderbarLink';

import ParentModal from '../modals/parentModal';
import ProblemPopup from '../Problempopup';

import moreButtonLinks from '@/constants/sidebar/moreButtonLink';
import SearchPage from '@/components/SearchPage';

const Sidebar = ({ sidebarLinks }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const [openSearch, setOpenSearch] = useState(false);

  const handleCloseSearchDialog = () => {
    setOpenSearch(false);
  };
  const [showMoreModal, setShowMoreModal] = useState(false);
  const toggleMoreModal = () => {
    setShowMoreModal(!showMoreModal);
  };
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleAppThemeMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    toggleMoreModal();
  }; // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <div className=' flex flex-col items-center p-2  h-screen  '>
      <Link className='flex justify-center' href='/'>
        <img
          className='w-[70%] max-desktop:w-[60%] mx-auto h-20'
          src='/Images/darkLogo.svg'
          alt='Workflow'
        />
      </Link>
      <div className='space-y-1 mt-4 mb-2.5 relative h-full w-full'>
        {sidebarLinks.map((item, index) => {
          return (
            <div key={index}>
              <SiderbarLink
                text={item.text}
                Icon={item.icon}
                action={item.text === 'Search'? ()=> setOpenSearch(true) 
                : () => router.push(item.url)}
              />
            </div>
          );
        })}
        <div className='absolute bottom-0 left-0 w-full'>
          {showMoreModal && (
            <div className=' relative bg-white shadow-lg rounded-lg w-full h-fit bottom-[140%] right-0'>
              <ul className=''>
                {moreButtonLinks.map((item, index) => {
                  return (
                    <div key={index}>
                      {item.url ? (
                        <Link
                          onClick={
                            item.text === 'Switch appearance'
                              ? toggleAppThemeMode
                              : item.text === 'Report a problem'
                              ? () => setIsOpen(true)
                              : () => null
                          }
                          href={item.url ? item.url : ''}
                          className={`flex items-center justify-between py-3 px-4 dark:bg-primary dark:text-white ${
                            index !== moreButtonLinks.length - 1
                              ? 'border-b border-[grey]/70'
                              : ''
                          } `}
                        >
                          <p className='text-base'>{item.text}</p>
                          {item.icon}
                        </Link>
                      ) : (
                        <div
                            onClick={
                            item.text === 'Switch appearance'
                            ? toggleAppThemeMode
                            : item.text === 'Report a problem'
                            ? () => setIsOpen(true)
                            : () => null
                        }
                          className={`cursor-pointer flex items-center justify-between py-3 px-4 dark:bg-primary dark:text-white ${
                            index !== moreButtonLinks.length - 1
                              ? 'border-b border-[grey]/70'
                              : ''
                          } `}
                        >
                          <p className='text-base'>{item.text}</p>
                          {item.icon}
                        </div>
                      )}
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
          <SiderbarLink
            action={toggleMoreModal}
            text='More'
            Icon={<GiHamburgerMenu />}
          />
        </div>
      </div>
      <ParentModal isOpen={isOpen} handleClose={handleClose}>
                <ProblemPopup />
      </ParentModal>
      <ParentModal isOpen={openSearch} handleClose={handleCloseSearchDialog}>
                <SearchPage />
      </ParentModal>
    </div>
  );
};
export default Sidebar;
