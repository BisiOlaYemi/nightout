import Link from 'next/link';

import SectionHeading from '../sectionHeading';

import PlaceCard from './placeCard';

export default function PopularPlaces() {
  const trendingItems = [
    {
      name: 'Club Spartacus',
      decsription: '',
      image: '/Images/homepage/place1.svg',
      rating: 4,
      location: 'Kaduna',
    },
    {
      name: 'Breakfast 247',
      decsription: '',
      image: '/Images/homepage/place2.svg',
      rating: 3,
      location: 'Abuja',
    },
    {
      name: 'Eatery',
      decsription: '',
      image: '/Images/homepage/place3.svg',
      rating: 5,
      location: 'Dubai',
    },
  ];
  return (
    <div className='max-width px-16 max-md:px-10 max-mobile:px-6  py-10 max-mobile:py-6'>
      <div className='flex  items-center justify-between'>
        <div>
          <SectionHeading text={'Popular Places'} />
          <p className='mt-1 max-md:hidden'>
            See the most popular places around you.
          </p>
        </div>
        <Link
          href={'#'}
          className='text-primary font-light text-lg max-md:text-base max-mobile:text-sm'
        >
          View all
        </Link>
      </div>

      <div className='mt-10 max-mobile:mt-5 flex flex-nowrap hide-scrollbar max-md:scroll-smooth max-md:py-4 max-md:overflow-scroll  max-xmd:w-full gap-12 max-lgDesktop:gap-10 max-desktop:gap-8 max-[920px]:gap-x-6 max-md:gap-4 max-xmobile:gap-3 max-w-[85rem] mx-auto'>
        {trendingItems.map((item, index) => {
          return <PlaceCard key={index} place={item} />;
        })}
      </div>
    </div>
  );
}
