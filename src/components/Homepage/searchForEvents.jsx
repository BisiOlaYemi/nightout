import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

import SmallButton from '../Buttons/smallButtons';

export default function SearchForEvents() {
  const router = useRouter();
  return (
    <div
      id='homepageSection'
      className='h-screen flex flex-col  justify-center  bg-primary'
    >
      <div className='text-center  w-full max-width px-6 mobile:px-10 md:px-14 flex gap-16 md:gap-6 desktop:gap-12 items-center max-md:flex-col-reverse'>
        <div className='flex md:hidden justify-center '>
          <SmallButton
            name={'Explore'}
            bgColor={'orange'}
            textColor={'primary'}
            borderColor={'orange'}
          />
        </div>

        <Link
          href={'/explore?search=a_breakfast_spot'}
          data-aos='fade-down-right'
          data-aos-duration='1000'
          className='flex-1 flex flex-col justify-center items-center'
        >
          <Image
            src={'/Images/homepage/events.svg'}
            alt='Sample'
            width={100}
            height={100}
            className='w-[95%] xmobile:w-[90%] mobile:w-[75%] lgMobile:w-[60%] xmd:w-[45%] md:w-[85%] desktop:w-[70%] h-{70%} object-contain cursor-pointer'
            // onClick={() => router.push('/explore?search=a_breakfast_spot')}
          />
        </Link>

        <div className='flex flex-col flex-1 '>
          <h3 className='text-[1.8rem] xmobile:text-[2rem] laptop:text-[2.5rem] desktop:text-5xl font-semibold text-orange'>
            Search for an event
          </h3>
          <p className='w-full italic text-white/50 desktop:w-[80%] lgMobile:px-6 mt-4 mx-auto text-center text-sm xmobile:text-base laptop:text-lg'>
            Where would you like to go to next? A bar, the museum, an hotel, a
            restaurant.....how about you try “a breakfast spot”.....and see what
            you’ll find.
          </p>

          <div className='hidden md:flex justify-center mt-14'>
            <SmallButton
              name={'Explore'}
              bgColor={'orange'}
              textColor={'primary'}
              borderColor={'orange'}
              action={() => router.push('/explore')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
