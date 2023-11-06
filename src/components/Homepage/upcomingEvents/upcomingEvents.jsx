import Link from 'next/link';

import SectionHeading from '../sectionHeading';

import EventCard from './eventCard';

export default function UpcomingEvents() {
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
  ];
  return (
    <div className='max-width px-16 max-md:px-10 max-mobile:px-6  py-10 max-mobile:py-6'>
      <div className='flex  items-center justify-between'>
        <div>
          <SectionHeading text={'Upcoming Events'} />
          <p className='mt-1 max-md:hidden'>
            See the latest event that would be happening soon
          </p>
        </div>
        <Link
          href={'#'}
          className='text-primary font-light text-lg max-md:text-base max-mobile:text-sm'
        >
          View all
        </Link>
      </div>

      <div className='mt-10 max-mobile:mt-5 flex flex-nowrap hide-scrollbar max-md:scroll-smooth max-md:py-4 max-md:overflow-scroll  max-[750px]:w-[95%] max-xmd:w-full gap-12 max-lgDesktop:gap-10 max-desktop:gap-8 max-[920px]:gap-x-6 max-md:gap-4 max-xmobile:gap-3 max-w-[85rem] mx-auto'>
        {trendingItems.map((item, index) => {
          return <EventCard key={index} event={item} />;
        })}
      </div>
    </div>
  );
}
