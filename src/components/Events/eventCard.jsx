import Image from 'next/image';

import {
  MdLocationOn,
  AiOutlineHeart,
  BsChatRightText,
} from '@/constants/icons/icons';

export default function EventCard() {
  return (
    <div className='rounded-t-xl cursor-pointer flex flex-col  '>
      <div className='relative h-[18rem]'>
        <div className='absolute top-0 py-3 bg-primary/10 rounded-t-xl left-0 px-3 w-full text-sm flex justify-between items-center'>
          <div className='bg-white text-primary shadow-lg rounded-lg flex justify-center items-center py-2 px-3'>
            Free
          </div>

          <div className='border-2 cursor-pointer border-white shadow-lg h-12 w-12 rounded-full'>
            <Image
              src={'Images/homepage/user1.svg'}
              alt={'category'}
              priority={true}
              quality={75}
              width={100}
              height={100}
              className='w-full h-full object-cover rounded-full object-center'
            />
          </div>
        </div>
        <Image
          src={'Images/search/gym.svg'}
          alt={'category'}
          priority={true}
          quality={75}
          width={100}
          height={100}
          className='w-full h-full object-cover rounded-t-xl object-center'
        />
        <div className='bg-deepMaroon/30 py-2 px-3 absolute bottom-0  left-0 w-full flex justify-between '>
          <p className='font-bold text-white text-lg'>Title</p>
          <div className='bg-white text-primary hover:bg-grey shadow-lg rounded-lg flex justify-center items-center py-1 cursor-pointer text-sm px-3'>
            Follow
          </div>
        </div>
      </div>
      <div className='bg-white flex gap-5 text-primary h-fit rounded-b-xl py-3 px-3 relative'>
        <div className='flex flex-col  w-fit bg-white/80 px-2 gap-3 items-left justify-left  text-sm'>
          <div className='grid place-items-center items-center gap-2'>
            <p className='text-center uppercase text-lg text-deepMaroon font-semibold'>
              apr
            </p>

            <p className='text-center'>14</p>
          </div>
        </div>

        <div className='w-full'>
          <p className='truncate font-medium'>Lorem ipsium dolor dolor</p>

          <div className='flex justify-between w-full text-sm my-3'>
            <div className='flex items-center gap-2'>
              <AiOutlineHeart className='text-primary hover:scale-125 hover:text-[red] cursor-pointer transition-transform duration-500 ease-in-out  h-5 w-5 max-desktop:h-4 max-desktop:w-4' />
              <p className=''>400</p>
            </div>
            <div className='flex items-center gap-2'>
              <BsChatRightText className='text-primary  h-5 w-5 max-desktop:h-4 max-desktop:w-4' />
              <p className=''>30</p>
            </div>
          </div>
          <div className='flex justify-end items-center gap-3 mt-6'>
            <MdLocationOn className='text-primary  h-5 w-5' />
            <p className='text-sm font-semibold'>Abuja</p>
          </div>
        </div>
      </div>
    </div>
  );
}
