import Image from 'next/image';

export default function PeopleCard() {
  return (
    <div className='rounded-t-xl cursor-pointer flex flex-col h-[20rem] relative'>
      <div className='z-20 absolute top-0 left-0 w-full h-full rounded-xl hover:bg-deepMaroon/20 transition-colors duration-500 ease-in-out '></div>
      <div className='relative h-[50%]'>
        <Image
          src={'Images/search/gym.svg'}
          alt={'category'}
          priority={true}
          quality={75}
          width={100}
          height={100}
          className='w-full h-full object-cover rounded-t-xl object-center'
        />
        <div className='absolute top-full -translate-y-1/2 left-1/2 -translate-x-1/2 z-10'>
          <div className='border-2 cursor-pointer border-white shadow-lg h-16 w-16 rounded-full'>
            <Image
              src={'Images/homepage/user1.svg'}
              alt={'category'}
              priority={true}
              quality={75}
              width={100}
              height={100}
              className='w-full h-full object-cover rounded-full object-center'
            />
          </div>
        </div>
      </div>
      <div className='bg-secondary flex flex-col gap-1 justify-center items-center text-primary flex-1 rounded-b-xl py-3 px-3 '>
        <p className='text-white text-2xl font-semibold'>Username</p>
        <button className='h-8 px-3 rounded-lg z-30 bg-deepMaroon hover:bg-purpleBlood text-white'>
          Follow
        </button>
      </div>
    </div>
  );
}
