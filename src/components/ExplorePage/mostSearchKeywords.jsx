import Link from 'next/link';

import { BsSearch } from '@/constants/icons/icons';

export default function MostSearchKeywords() {
  return (
    <div className='mt-24'>
      <div>
        <h2 className='text-4xl text-primary  font-medium'>
          Most Searched Keywords
        </h2>
        <p className='text-lg mt-2 text-secondary'>Popular search keywords</p>
      </div>

      <div className='flex flex-wrap justify-left items-center gap-6 my-6 '>
        {[...Array(10)].map((_, idx) => {
          return (
            <Link href={`/explore`} key={idx} className='min-w-[15rem] h-full'>
              <div className='border rounded-lg hover:bg-primary/20 border-primary px-2 py-1 flex gap-5 justify-center items-center text-primary'>
                <p>Search</p>
                <div className=' rounded-full p-1 flex justify-center items-center cursor-pointer'>
                  <BsSearch className='w-4 h-4 text-black' />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
