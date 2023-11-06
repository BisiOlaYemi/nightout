import Image from 'next/image';

export default function UsersPictures({ activeIndex, imageSrc }) {
  return (
    <>
      <div className='flex flex-col items-center w-[60%] desktop:w-[20rem] lgDesktop:w-[25rem] mx-auto'>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`h-16 w-16 desktop:h-20 desktop:w-20 lgDesktop:h-24 lgDesktop:w-24  border-4 transition-all duration-500 ease-in-out border-white rounded-full ${
              index === 0
                ? 'self-end mr-4'
                : index === 1
                ? 'self-start'
                : index === 2
                ? 'max-desktop:h-20 max-desktop:w-20 max-lgDesktop:h-24 max-lgDesktop:w-24 lgDesktop:h-32 lgDesktop:w-32 max-[1430px]:w-28 max-[1430px]:h-28  self-end mb-8'
                : index === 3
                ? 'self-start'
                : 'self-end mr-4'
            }`}
            style={{
              transform: `scale(${index === 2 ? 1.5 : 1})`,
            }}
          >
            <Image
              src={imageSrc(index)}
              alt='App mockup'
              width={100}
              height={100}
              className='w-full h-full object-center object-contain '
            />
          </div>
        ))}
      </div>

      <div className='absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 w-fit flex flex-col items-center justify-between h-[25rem] desktop:h-[30rem]'>
        <div className='absolute top-0 left-1/2 w-0.5 h-full bg-white transform -translate-x-1/2'></div>
        <div className='flex flex-col py-10 justify-between h-full'>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={` ${
                index === activeIndex ? 'bg-secondary' : 'bg-primary'
              } w-5 h-5 lgDesktop:w-6 lgDesktop:h-6 rounded-full transition-colors duration-500 ease-in-out border-2 border-white z-10`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
