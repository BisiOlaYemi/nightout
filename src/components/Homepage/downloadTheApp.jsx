import Image from 'next/image';

import DownloadButton from '@/components/Buttons/downloadButton';

import { AiFillApple } from '@/constants/icons/icons';

export default function DownloadTheApp() {
  return (
    <div className='bg-lightbrown  justify-center items-center w-full h-screen  '>
      <div className='max-width px-6 mobile:px-10 md:px-14 w-full flex justify-center  relative h-full md:py-24  '>
        <div className=' flex max-md:flex-col  items-center'>
          <div className='flex-1 text-white flex flex-col justify-center w-full'>
            <div className=''>
              <div className='max-xmd:w-full max-md:w-[80%] max-md:text-center mx-auto'>
                <h3 className='text-[2.5rem] max-desktop:text-4xl max-laptop:text-3xl max-mobile:text-2xl max-mobile:font-bold leading-none font-medium mb-5 max-md:mb-3 '>
                  Search for the best places and connect with friends very
                  easily.
                </h3>
                <p className='text-xl max-desktop:text-lg max-mobile:text-base  mt-3  leading-normal'>
                  Download the Placio app to enjoy more in-app features like
                  lorem, lorem and lorem
                </p>
              </div>

              <div className='relative flex max-xxmobile:gap-3 max-xxmobile:flex-col max-md:justify-center gap-5 items-center mt-10 md:mt-36'>
                <DownloadButton
                  image={'/Images/homepage/playstore.svg'}
                  label={'Google Play'}
                />
                <DownloadButton
                  label={'App Store'}
                  icon={
                    <AiFillApple className='w-8 h-8 max-md:w-6 max-md:h-6 text-white' />
                  }
                />
                {/* <div className='absolute -top-[100%] -translate-y-[45%] right-0 translate-x-[30%] '>
                  <Image
                    src={'/Images/homepage/Vector41.svg'}
                    alt='dotted vector'
                    width={100}
                    height={100}
                    className='w-[75%]  h-full '
                  />
                </div> */}
              </div>
            </div>
          </div>

          <div
            data-aos='fade-up'
            data-aos-duration='1000'
            className='flex-1 max-md:flex max-md:justify-center relative '
          >
            <div className=' static md:absolute top-0 md:-translate-y-1/2 left-0 max-md:left-1/2 z-10  h-fit w-fit max-md:translate-x-0  max-laptop:translate-x-[15%] translate-x-[5%] lgDesktop:translate-x-[20%]   '>
              <Image
                src={'/Images/homepage/appMockup.svg'}
                alt='App mockup'
                width={100}
                height={100}
                className='w-[15rem] md:w-[20rem] laptop:w-[25rem] desktop:w-[30rem]  h-full '
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
