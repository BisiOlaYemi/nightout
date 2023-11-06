import Link from 'next/link';

import PlaceCard from '@/components/Places/placeCard';
export default function RecommendedPlaces() {
  return (
    <div className='mt-24'>
      <div className='flex justify-center items-center my-4'>
        <h2 className='text-2xl text-primary text-center font-medium'>
          Recommended Places
        </h2>
      </div>

      <div className='grid grid-cols-4 gap-8 w-full max-width px-14 mx-auto'>
        {[...Array(25)].map((_, idx) => {
          return (
            <Link href={`/explore`} key={idx} className='h-full'>
              <PlaceCard />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
