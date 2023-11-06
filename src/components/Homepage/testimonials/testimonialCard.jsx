import Image from 'next/image';

import { FaQuoteLeft } from '@/constants/icons/icons';
import RatingStars from '@/components/ratingStars';
export default function TestimonialCard({ num }) {
  return (
    <div className='max-xmd:w-full max-md:w-[80%] max-desktop:w-full desktop:w-[40rem] max-[1430px]:w-[35rem] flex gap-4 pt-4 text-white/50'>
      <FaQuoteLeft className=' h-12 w-12' />
      <div className='mobile:px-4 text-base laptop:text-lg lgDesktop:text-xl  '>
        <p className=' mb-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptates iure ea ab repudiandae, quo aspernatur qui iusto odit
          temporibus nisi minima minus temporibus nisi minima minus temporibus
          nisi minima minus
        </p>
        <RatingStars rating={5} />

        <div className='flex gap-3 max-md:my-3'>
          <div className='h-12 w-12 border-4 transition-all duration-500 ease-in-out border-white rounded-full md:hidden'>
            <Image
              src={'/Images/homepage/user1.svg'}
              alt='App mockup'
              width={100}
              height={100}
              className='w-full h-full object-center object-contain '
            />
          </div>
          <p className=' font-semibold text-white my-3'>Ayobami {num}</p>
        </div>
        <p className=''>~ Canada</p>
      </div>
    </div>
  );
}
