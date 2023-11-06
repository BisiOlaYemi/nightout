import Image from 'next/image';

// import { useRouter } from 'next/navigation';

// import DarkLogo from '@/components/logoDark';

// import SmallButton from '@/components/Buttons/smallButtons';

import useImageCarousel from '@/hooks/imageSlider';

import { GoPrimitiveDot } from '@/constants/icons/icons';

const DesktopMockup = () => {
  // const router = useRouter();
  const images = [
    { src: '/Images/hero/desktop-mockup1.svg', text: 'Connect' },
    { src: '/Images/hero/desktop-mockup2.svg', text: 'Explore' },
  ];

  const [activeIndex] = useImageCarousel(images, 8000);

  return (
    <div
      id='desktopMockUp'
      className=' lgDesktop:px-14 w-full max-width z-20 mx-auto px-6 mobile:px-10 md:px-14 relative max-mobile:-mt-[75%] -mt-[40%]  xmd:-mt-[25%] md:-mt-[10%] mb-2  '
    >
      <div className='h-full  w-full '>
        <div className='bg-grey h-8 rounded-tl-lg rounded-tr-lg flex gap-1 items-center px-2'>
          {[...Array(3)].map((item, index) => {
            return (
              <div key={index}>
                <GoPrimitiveDot
                  className={`${
                    index === 0
                      ? 'text-[#F3605C]'
                      : index === 1
                      ? 'text-[#F8BE39]'
                      : 'text-[#50C845]'
                  }`}
                />
              </div>
            );
          })}
        </div>

        <div className='h-[50rem] max-laptop:h-[34rem] max-xmd:h-[25rem] max-xxmobile:h-[20rem] relative bg-white rounded-bl-lg rounded-br-lg overflow-hidden'>
          <div className='px-6 xmd:px-10 laptop:px-16'>
            <img
              className='w-40 h-20 max-laptop:w-32 max-laptop:h-20 max-md:w-28 max-xmd:h-12 max-xmd:w-16'
              src='/Images/darkLogo.svg'
              alt='Workflow'
            />
          </div>

          <div className='text-center  text-primary mx-auto mb-8'>
            <h1 className=' tracking-normal w-[90%] laptop:w-[50%] mx-auto text-6xl max-laptop:text-[3.3rem] max-md:text-[2.5rem] max-xmd:text-[2rem]  max-lgMobile:leading-tight  max-mobile:text-3xl max-xmobile:text-2xl font-medium my-6 max-laptop:my-2'>
              One platform to{' '}
              <span
                className={`font-semibold transition duration-1000 ease-in-out`}
              >
                {images[activeIndex].text}
              </span>
            </h1>

            <p className='text-lg w-[90%] laptop:w-[60%] mx-auto my-5 max-xmobile:my-2 max-md:text-base max-mobile:text-sm max-xmobile:text-xs'>
              Lorem ipsum dolor sit amet consectetur. Neque enim aliquam
              tincidunt duis phasellus. Elit amet vulputate ut libero id tempor
              convallis turpis.
            </p>
          </div>

          {/* <div className='flex justify-center gap-4'>
            <SmallButton
              name={'Login'}
              bgColor={'primary'}
              borderColor={'primary'}
              textColor={'white'}
              action={() => router.push('/auth/signin')}
            />

            <SmallButton
              name={'Sign up'}
              bgColor={'white'}
              borderColor={'white'}
              textColor={'primary'}
              action={() => router.push('/auth/signup')}
            />
          </div> */}

          <div className='h-[32rem] max-laptop:h-[25rem] max-xmd:h-[12rem] max-xmobile:h-[8rem] max-xxmobile:h-[6.5rem] extraLarge:h-[45rem] relative mt-12 max-laptop:mt-0 extraLarge:mt-10'>
            <Image
              src={images[activeIndex].src}
              alt={'Desktop mockup'}
              priority={true}
              quality={75}
              width={100}
              height={100}
              className='w-full h-full object-contain transition-opacity duration-1000 opacity-100 object-center rounded-bl-lg rounded-br-lg '
            />
            {images.map((image, index) => (
              <div
                key={index}
                className={`h-full w-full absolute bottom-0 left-0 bg-center bg-cover bg-no-repeat  transition-opacity duration-1000 rounded-bl-lg rounded-br-lg  ${
                  activeIndex !== index ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <Image
                  src={image.src}
                  alt={'Desktop mockup'}
                  priority={true}
                  quality={75}
                  width={100}
                  height={100}
                  className='w-full h-full object-contain object-center rounded-bl-lg rounded-br-lg '
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopMockup;
