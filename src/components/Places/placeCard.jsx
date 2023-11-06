import Image from 'next/image';

import RatingStars from '../ratingStars';

import { MdLocationOn } from '@/constants/icons/icons';

export default function PlaceCard() {
  return (
    <div className='relative flex-1 max-md:flex-none  py-4 h-[25rem] rounded-xl cursor-pointer transition ease-in-out duration-700 md:hover:scale-[1.04]'>
      <Image
        src={'Images/search/gym.svg'}
        alt={'category'}
        priority={true}
        quality={75}
        width={100}
        height={100}
        className='w-full h-full object-cover rounded-lg  transition-opacity duration-1000 opacity-100 object-center'
      />
      <div className='absolute flex justify-between bottom-8  w-[90%] left-1/2 -translate-x-1/2 h-fit p-4 max-desktop:py-2 rounded-lg bg-white text-primary shadow-xl  '>
        <div>
          <h3 className='truncate text-xl max-mobile:text-lg font-semibold '>
            Place Title
          </h3>
          <RatingStars rating={4} />

          <div className='flex items-center gap-2 mt-1'>
            <MdLocationOn className='text-primary  h-5 w-5 max-desktop:h-4 max-desktop:w-4' />
            <p className='text-base'>Kaduna</p>
          </div>
        </div>
        <div>
          <div className='bg-primary text-white hover:bg-secondary shadow-lg rounded-lg flex justify-center items-center py-1 cursor-pointer text-sm px-3'>
            Follow
          </div>

          <div className='text-xs mt-2 text-primary'>3.1k followers</div>
        </div>
      </div>
    </div>
  );
}
