import Link from 'next/link';

import { useState } from 'react';

import EventCard from '../Events/eventCard';

import { GoChevronDown } from '@/constants/icons/icons';

export default function EventsNearby() {
  const filters = ['All', 'Last 24hr', 'Last 48hr', 'Last 72hr'];
  const [activeFilter, setActiveFilter] = useState('All');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const selectFilter = (filter) => {
    setActiveFilter(filter);
    toggleFilterMenu();
  };
  return (
    <div className='mt-24'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-4xl text-primary  font-medium'>Events Nearby</h2>
          <p className='text-lg mt-2 text-secondary'>
            Discover Events happening around you.
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <div className='relative inline-block  text-left  '>
            <button
              type='button'
              className=' h-10 max-mobile:h-7 max-mobile:text-sm border border-gray-300 bg-white   flex gap-3 max-mobile:gap-2 items-center justify-between  rounded-md  px-4 py-2 text-base font-medium text-primary '
              id='options-menu'
              onClick={toggleFilterMenu}
            >
              {activeFilter}
              <GoChevronDown />
            </button>
            {showFilterMenu && (
              <div className='absolute z-[1000] right-0 w-[130%] max-mobile:w-[150%] h-fit mt-2 origin-top-right bg-white rounded-md shadow-lg  ring-1 ring-black ring-opacity-5'>
                <div className='py-1 ' role='menu'>
                  {filters.map((item, index) => {
                    return (
                      <div
                        key={index}
                        href='#'
                        className='block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900  '
                        role='menuitem'
                        onClick={() => selectFilter(item)}
                      >
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href={`explore`}
            className='text-primary hover:bg-grey border border-primary rounded-lg py-2 px-3 bg-white'
          >
            View More
          </Link>
        </div>
      </div>

      <div className='flex overflow-x-scroll w-full h-fit hide-scrollbar scroll-smooth justify-left gap-6 my-10'>
        {[...Array(10)].map((_, idx) => {
          return (
            <Link href={`/explore`} key={idx} className='min-w-[25rem] h-full'>
              <EventCard />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
