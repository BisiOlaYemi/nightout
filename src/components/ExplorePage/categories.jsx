import Image from 'next/image';
import Link from 'next/link';

export default function ExploreCategories() {
  return (
    <div className='mt-24'>
      <div>
        <h2 className='text-4xl text-primary  font-medium'>
          Explore categories on placio
        </h2>
        <p className='text-lg mt-2 w-[50%] text-secondary'>
          Find everything you need to know about the best restaurants, bars,
          clubs, and events in your area by browsing our categories.
        </p>
      </div>

      <div className='flex flex-wrap justify-left gap-6 my-10'>
        {[...Array(11)].map((_, idx) => {
          return (
            <Link
              href={`/explore`}
              key={idx}
              className=' w-[12rem] h-[8rem] rounded-xl relative'
            >
              <Image
                src={'Images/search/gym.svg'}
                alt={'category'}
                priority={true}
                quality={75}
                width={100}
                height={100}
                className='w-full h-full object-cover rounded-xl object-center'
              />
              <div className='bg-primary/50 absolute top-0 left-0 w-full h-full rounded-lg flex justify-center items-center px-2'>
                <p className='font-semibold text-white text-xl text-center'>
                  Category
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
