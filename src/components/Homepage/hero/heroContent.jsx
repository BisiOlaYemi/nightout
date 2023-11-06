export default function HeroContent() {
  return (
    <div className='max-width mx-auto flex flex-col justify-center items-center text-white h-full z-50'>
      <div className='text-center  max-lgMobile:w-[95%] mx-auto flex flex-col w-full justify-center items-center'>
        <h1
          id='exploreText'
          className='font-mogra tracking-wider text-7xl max-[900px]:text-[3.5rem] max-md:text-5xl max-xmd:text-[2.6rem]  max-lgMobile:leading-tight  max-mobile:text-4xl font-bold my-6 max-md:my-4'
        >
          Explore Placio
        </h1>
        <h4 className='my-3 max-md:my-2 max-md:text-2xl max-lgMobile:text-xl max-mobile:text-base text-3xl font-semibold'>
          Searching for the best places or people?
        </h4>
        <p className='text-lg my-2 mobile:my-5 max-lgMobile:text-base max-mobile:text-sm'>
          Then, here’s everything you need to stay connected
        </p>
      </div>
    </div>
  );
}
