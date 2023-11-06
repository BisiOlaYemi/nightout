import UsersPictures from './usersPictures';

import TestimonialCard from './testimonialCard';

import useImageCarousel from '@/hooks/imageSlider';
export default function Testimonials() {
  const images = [
    '/Images/homepage/user1.svg',
    '/Images/homepage/user2.svg',
    '/Images/homepage/user3.svg',
    '/Images/homepage/user4.svg',
    '/Images/homepage/user5.svg',
  ];

  const [activeIndex] = useImageCarousel(images, 8000);

  const imageSrc = (index) => {
    return images[(activeIndex + images.length - (2 - index)) % images.length];
  };

  return (
    <div
      id='homepageSection'
      className='h-screen w-full flex flex-col justify-center bg-primary'
    >
      {/* <div className='max-width '> */}
      <div className='text-center text-white  pt-10'>
        <h2
          className={`underlineHeader  mb-3 text-2xl xmobile:text-3xl mobile:text-4xl md:text-5xl  font-semibold after:bg-white`}
        >
          What users are saying
        </h2>
        <p className='mt-4 text-base mobile:text-xl  max-md:text-base max-md:mt-4'>
          See testimoinies from users on Placio
        </p>
      </div>
      <div className='h-fit relative py-20'>
        <div className='max-width mx-auto px-6 mobile:px-10 md:px-14 flex items-center gap-10'>
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
            className='flex-1 hidden mx-auto md:flex relative'
          >
            <UsersPictures activeIndex={activeIndex} imageSrc={imageSrc} />
          </div>

          <div
            data-aos='fade-down'
            data-aos-duration='1000'
            className='flex-1 h-full flex justify-center items-center'
          >
            <TestimonialCard num={activeIndex} />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
