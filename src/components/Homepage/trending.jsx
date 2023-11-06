import { useState } from 'react';

import SmallButton from '../Buttons/smallButtons';

import SectionHeading from './sectionHeading';

import { GoChevronDown } from '@/constants/icons/icons';

export default function TrendingEvents() {
  const filters = ['All', 'Last 24hr', 'Last 48hr', 'Last 72hr'];
  const [activeFilter, setActiveFilter] = useState('All');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const selecteFilter = (filter) => {
    setActiveFilter(filter);
    toggleFilterMenu();
  };
  const trendingItems = [
    {
      name: 'Club Spartacus',
      decsription: '',
      image: '/Images/homepage/club.svg',
    },
    {
      name: 'Sport Center',
      decsription: '',
      image: '/Images/homepage/sportCenter.svg',
    },
    {
      name: 'Eatery',
      decsription: '',
      image: '/Images/homepage/eatery.svg',
    },
    {
      name: 'Club Spartacus',
      decsription: '',
      image: '/Images/homepage/club.svg',
    },
    {
      name: 'Sport Center',
      decsription: '',
      image: '/Images/homepage/sportCenter.svg',
    },
    {
      name: 'Eatery',
      decsription: '',
      image: '/Images/homepage/eatery.svg',
    },
  ];
  return (
    <div className='max-width px-16 max-md:px-10 max-mobile:px-6  py-10'>
      <div className='flex  items-center justify-between'>
        <div>
          <SectionHeading text={'Trending this week'} />
          <p className='mt-1 max-md:hidden'>
            See the most trending events happening
          </p>
        </div>
        <div className='text-white md:flex hidden items-center gap-3 max-laptop:gap-2'>
          {filters.map((item, index) => {
            return (
              <span
                key={index}
                onClick={() => setActiveFilter(item)}
                className={` ${
                  item === activeFilter ? 'bg-primary' : 'bg-gray-400'
                } p-2 rounded-lg max-desktop:text-sm font-medium cursor-pointer`}
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className='relative inline-block md:hidden text-left  '>
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
                      onClick={() => selecteFilter(item)}
                    >
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='mt-10 grid place-content-stretch grid-cols-3 max-[750px]:grid-cols-2 max-xxmobile:grid-cols-1 max-[750px]:w-[95%] max-xmd:w-full gap-12 max-desktop:gap-8 max-[920px]:gap-x-6 max-md:gap-4 max-xmobile:gap-3 max-w-[85rem] mx-auto'>
        {trendingItems.map((item, index) => {
          return (
            <div
              key={index}
              className='bg-primary px-3 py-4 h-fit rounded-lg cursor-pointer transition ease-in-out duration-700 md:hover:scale-[1.04]'
            >
              <div className='h-40 max-md:h-32 max-xxmobile:h-24'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
              <div className='text-white my-4 max-laptop:my-2'>
                <h3 className='truncate text-[1.8rem] max-desktop:text-2xl max-laptop:text-xl max-mobile:text-lg max-xmobile:text-base font-medium'>
                  {item.name}
                </h3>
                <p className='mt-1 max-desktop:text-sm max-md:text-xs max-desktop:leading-snug line-clamp-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  voluptates omnis illo laudantium quaerat provident, esse
                  recusandae fugit vero distinctio illum hic culpa,
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex justify-center md:mt-10 mt-6'>
        <SmallButton
          name={'See More'}
          bgColor={'primary'}
          textColor={'white'}
        />
      </div>
    </div>
  );
}
