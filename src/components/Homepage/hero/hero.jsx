import HeroContent from './heroContent';

const Hero = () => {
  return (
    <>
      <section className='relative h-screen'>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
        <div className='absolute top-0 left-0 w-full h-full z-10'>
          <video
            className='object-cover w-full h-full'
            poster='/Videos/poster.png'
            preload='auto'
            // eslint-disable-next-line react/no-unknown-property
            playsInline
            // eslint-disable-next-line react/no-unknown-property
            webkit-playsinline='true'
            // eslint-disable-next-line react/no-unknown-property
            x5-playsinline='true'
            autoPlay={true}
            muted={true}
            loop={true}
          >
            <source src='/Videos/herro.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='bg-primary/30 flex flex-col items-center justify-center h-full absolute z-10  w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-mobile:-translate-y-[65%]'>
          <HeroContent />
        </div>
      </section>
      {/* <div className='h-fit  w-full'>
        <div className='h-screen relative'>
          <Image
            src={'/Images/homepage/hero1.svg'}
            alt={'Picture of a city view'}
            priority={true}
            quality={75}
            width={100}
            height={100}
            className='w-full h-full object-cover object-center'
          />

          <div className='absolute z-10 h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-mobile:-translate-y-[65%]'>
          </div>
        </div>
      </div> */}
      {/* <DesktopMockup /> */}
    </>
  );
};

export default Hero;
