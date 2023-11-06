'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import MostSearchKeywords from '@/components/ExplorePage/mostSearchKeywords';
import EventsNearby from '@/components/ExplorePage/eventsNearby';
import PopularPlaces from '@/components/ExplorePage/popularPlaces';
import ExploreCategories from '@/components/ExplorePage/categories';
import RecommendedPlaces from '@/components/ExplorePage/recommendedPlaces';

export default function ExplorePage() {
  const [hoveredElement, setHoveredElement] = useState(null);
  const categories = [
    {
      name: 'Events',
      image: '/Images/search/event.jpg',
    },

    {
      name: 'Places',
      image: '/Images/search/places.jpg',
    },

    {
      name: 'People',
      image: '/Images/search/people.jpg',
    },
  ];

  return (
    <div className='mt-24 py-10 '>
      <div className='max-width px-14 mx-auto'>
        <div className='mb-10 '>
          <h2 className='text-[2.5rem] text-primary flex justify-center items-center font-medium'>
            Experience Placio at its finest.
          </h2>
        </div>

        <div className='flex justify-center items-center gap-10 my-6 '>
          {categories.map((item, index) => {
            return (
              <Link
                href={`/explore?category=${item.name}`}
                key={index}
                className='h-[18rem] w-[25%] rounded-xl relative cursor-pointer'
                onMouseOver={() => setHoveredElement(index)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  priority={true}
                  quality={75}
                  width={100}
                  height={100}
                  className='w-full h-full object-cover rounded-xl object-center'
                />
                <div
                  className={`bg-primary/30 py-2 px-3  absolute bottom-0 rounded-b-xl  left-0 w-full flex gap-3 flex-col justify-center items-center
                ${
                  hoveredElement === index
                    ? 'h-full transition-transform duration-700 ease-in-out'
                    : 'h-fit'
                }
              `}
                >
                  <p className='font-bold text-white text-2xl'>{item.name}</p>
                  <button
                    className={` ${
                      hoveredElement === index
                        ? 'translate-y-0 block'
                        : '-transalate-y-full hidden'
                    } transition-transform  duration-700 ease-in-out h-8 px-3 w-fit rounded-lg z-30 bg-deepMaroon hover:bg-purpleBlood text-white`}
                  >
                    View more
                  </button>
                </div>
              </Link>
            );
          })}
        </div>

        <ExploreCategories />

        <PopularPlaces />

        <EventsNearby />

        <MostSearchKeywords />

        <RecommendedPlaces />
      </div>
    </div>
  );
}
