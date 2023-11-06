import Image from 'next/image';
import { useRouter } from 'next/navigation';

// import SmallButton from '../Buttons/smallButtons';
const LiveReelsUpdate = () => {
  const router = useRouter;
  return (
    <div id='homepageSection' className='h-screen flex max-md:flex-col'>
      <div className='flex-1 max-md:h-1/2 bg-white'>
        <Image
          src={'/Images/homepage/reelsSection.svg'}
          alt={'Picture of a city view'}
          priority={true}
          quality={75}
          width={100}
          height={100}
          className='w-full h-full object-cover object-center'
        />
      </div>

      <div className=' flex-1 flex justify-center items-center max-md:h-1/2 text-dark bg-lightPurple text-purpleBlood  py-12'>
        <div className='px-16 max-laptop:px-10 flex flex-col text-center'>
          <h3 className='text-[1.8rem] xmobile:text-[2rem] laptop:text-[2.5rem] desktop:text-5xl font-semibold'>
            Live Reels update
          </h3>
          <p className='desktop:w-[80%] mx-auto mt-4 italic text-center text-sm xmobile:text-base laptop:text-lg'>
            Where would you like to go to next? A bar, the museum, an hotel, a
            restaurant.....how about you try “a breakfast spot”.....and see what
            you’ll find.
          </p>

          <div className='flex justify-center max-md:justify-center mt-14'>
            <button
              type='submit'
              className={`bg-purpleBlood text-white py-2 w-32 shadow-md px-6 h-12 max-lg:px-4 max-lg:h-10 max-lg:text-sm text-base text-center  font-semibold focus:outline-none rounded-lg`}
              onClick={() => router.push('/explore?search=a_breakfast_spot')}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveReelsUpdate;
