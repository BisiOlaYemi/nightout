import { useRouter } from 'next/navigation';

import DesktopCategories from './desktopCategories';

import MobileCategories from '@/components/Homepage/categories/mobileCategories';

const CategoriesForYou = () => {
  const router = useRouter();
  return (
    <div
      id='homepageSection'
      className='h-screen max-[980px]:h-fit max-[980px]:py-6 flex flex-col justify-center  bg-faintOrange'
    >
      <div className='text-center w-full max-width px-6 mobile:px-10 md:px-14  flex gap-8 laptop:gap-4 desktop:gap-12 items-center max-[980px]:flex-col '>
        <div className='flex flex-col text-deepMaroon flex-1 '>
          <h3 className='text-[1.8rem] xmobile:text-[2rem] laptop:text-[2.5rem] desktop:text-5xl font-semibold'>
            Categories for you{' '}
          </h3>
          <p className='desktop:w-[80%] lgMobile:px-6 mt-4 mx-auto text-center italic text-sm xmobile:text-base laptop:text-lg'>
            Where would you like to go to next? A bar, the museum, an hotel, a
            restaurant.....how about you try “a breakfast spot”.....and see what
            you’ll find.
          </p>

          <div className='md:flex hidden justify-center mt-14'>
            <button
              type='submit'
              className={`bg-deepMaroon text-faintOrange py-2 w-32 shadow-md px-6 h-12 max-lg:px-4 max-lg:h-10 max-lg:text-sm text-base text-center  font-semibold focus:outline-none rounded-lg`}
              onClick={() => router.push('/explore?search=a_breakfast_spot')}
            >
              Explore
            </button>
          </div>
        </div>

        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          className='flex-1 max-[980px]:hidden  flex justify-center items-center'
        >
          <DesktopCategories />
        </div>

        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          className=' min-[980px]:hidden w-full'
        >
          <MobileCategories />
        </div>

        <div className='flex md:hidden justify-center my-8'>
          <button
            type='submit'
            className={`bg-deepMaroon text-faintOrange py-2 w-32 shadow-md px-6 h-12 max-lg:px-4 max-lg:h-10 max-lg:text-sm text-base text-center  font-semibold focus:outline-none rounded-lg`}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesForYou;
