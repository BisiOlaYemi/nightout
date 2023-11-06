import Image from 'next/image';
import { useRouter } from 'next/navigation';

import SmallButton from '../Buttons/smallButtons';

import SectionHeading from './sectionHeading';

import useImageCarousel from '@/hooks/imageSlider';
export default function BusinessesSupport() {
  const images = [
    { src: '/Images/homepage/businesses.svg' },
    { src: '/Images/homepage/businesses2.svg' },
  ];

  const router = useRouter();

  const [activeIndex] = useImageCarousel(images, 8000);
  return (
    <div id='homepageSection' className='h-screen  relative '>
      <div className='relative h-full'>
        <Image
          src={images[activeIndex].src}
          alt={'Desktop mockup'}
          priority={true}
          quality={75}
          width={100}
          height={100}
          className='w-full h-full object-cover transition-opacity duration-1000 opacity-100 object-center'
        />
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-full w-full absolute bottom-0 left-0  transition-opacity duration-1000 ${
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
              className='w-full h-full object-cover object-center'
            />
          </div>
        ))}
        <div
          className={`absolute w-[30%] max-desktop:w-[40%] max-laptop:w-[50%] max-md:w-[70%] max-xmd:w-[85%] h-fit top-[70%] transition-transform duration-1000 ease-in-out ${
            activeIndex === 0
              ? 'left-32 max-desktop:left-16 max-xmd:left-10  max-mobile:left-6 text-left'
              : 'right-32 max-desktop:right-16 text-right max-md:left-16 max-xmd:left-10 max-mobile:left-6'
          } -translate-y-1/2 z-10`}
        >
          <div className=' text-white'>
            <SectionHeading
              heading={'Businesses Support'}
              subtext={
                'Businesses can create events, and also list their business in their prefered location'
              }
            />
          </div>
          <div
            className={`flex gap-6 mt-24 max-desktop:mt-12 ${
              activeIndex === 0 ? '' : 'justify-end max-md:justify-start'
            }`}
          >
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
          </div>
        </div>
      </div>
    </div>
  );
}
