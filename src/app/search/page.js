'use client';

import { useState } from 'react';

import EventCard from '@/components/Events/eventCard';
import PlaceCard from '@/components/Places/placeCard';
import PeopleCard from '@/components/People/peopleCard';

export default function SearchPage() {
  const searchTabs = ['events', 'places', 'people'];
  const [activeSearchTab, setActiveSearchTab] = useState(searchTabs[0]);
  return (
    <div className=' h-full py-5 mobile:py-10'>
      <div className='flex gap-4 text-primary mobile:justify-center max-mobile:px-6 items-center '>
        {searchTabs.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setActiveSearchTab(item)}
              className={`capitalize font-medium px-2 duration-300 transition-all ease-in-out cursor-pointer ${
                item === activeSearchTab ? 'border-b-[3px] border-orange' : ''
              }   pb-1 flex max-mobile:flex-col gap-1 justify-center items-center `}
            >
              {item}{' '}
              <span className='text-xs text-primary font-light'>( 300k )</span>
            </div>
          );
        })}
      </div>

      <div className=' mt-7 lgMobile:mt-10'>
        {/* <div> */}
        {activeSearchTab === 'events' && (
          <div className='grid mobile:place-items-center xxmd:grid-cols-2 xlaptop:grid-cols-3 xDesktop:grid-cols-4 gap-7 w-full max-width general-padding '>
            {[...Array(25)].map((item, index) => {
              return (
                <div key={index} className='w-full mobile:w-[90%] xxmd:w-full'>
                  <EventCard />
                </div>
              );
            })}
          </div>
        )}

        {activeSearchTab === 'places' && (
          <div className='grid mobile:place-items-center xxmd:grid-cols-2 xlaptop:grid-cols-3 xDesktop:grid-cols-4 gap-7 w-full max-width general-padding '>
            {[...Array(25)].map((item, index) => {
              return (
                <div key={index} className='w-full mobile:w-[90%] xxmd:w-full'>
                  <PlaceCard />
                </div>
              );
            })}
          </div>
        )}

        {activeSearchTab === 'people' && (
          <div className='grid xmd:grid-cols-2 md:grid-cols-3 laptop:grid-cols-4 lgDesktop:grid-cols-5 gap-7 w-full max-width general-padding'>
            {[...Array(25)].map((item, index) => {
              return (
                <div key={index}>
                  <PeopleCard />
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
}
