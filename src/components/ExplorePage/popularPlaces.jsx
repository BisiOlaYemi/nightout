import Link from 'next/link';

import PlaceCard from '@/components/Places/placeCard';

export default function PopularPlaces() {
  return (
    <div className='mt-24'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-4xl text-primary  font-medium'>Popular Places</h2>
          <p className='text-lg mt-2 text-secondary'>
            Discover the most popular places on Placio.
          </p>
        </div>
        <Link
          href={`explore`}
          className='text-primary hover:bg-grey border border-primary rounded-lg py-2 px-3 bg-white'
        >
          View More
        </Link>
      </div>

      <div className='flex overflow-x-scroll w-full h-fit hide-scrollbar scroll-smooth justify-left gap-6 my-10'>
        {[...Array(10)].map((_, idx) => {
          return (
            <Link href={`/explore`} key={idx} className='min-w-[22rem] h-full'>
              <PlaceCard />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
