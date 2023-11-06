import Image from 'next/image';

import Link from 'next/link';

import {
  GrStackOverflow,
  IoIosPeople,
  AiFillHome,
  CgGym,
  FaMapMarkerAlt,
} from '@/constants/icons/icons';
export default function MobileCategories() {
  const categories = [
    {
      label: 'Social Networking',
      image: '/Images/homepage/socialNetworking.png',
      icon: <GrStackOverflow className='w-5 h-5 text-primary' />,
    },
    {
      label: 'Communication',
      image: '/Images/homepage/communication.png',
      icon: <IoIosPeople className='w-5 h-5 text-primary' />,
    },
    {
      label: 'Entertainment',
      image: '/Images/homepage/entertainment.png',
      icon: <AiFillHome className='w-5 h-5 text-primary' />,
    },
    {
      label: 'Lifestyle',
      image: '/Images/homepage/lifestyle.png',
      icon: <CgGym className='w-5 h-5 text-primary' />,
    },
    {
      label: 'Maps & Navigation',
      image: '/Images/homepage/map&navigation.png',
      icon: <FaMapMarkerAlt className='w-5 h-5 text-primary' />,
    },
  ];
  return (
    <div className=' mx-auto w-full  flex flex-col items-center justify-center gap-6 '>
      {categories.map((item, index) => {
        return (
          <Link
            href={`/explore/${item.label}`}
            key={index}
            className={`bg-grey relative h-[12rem] xmd:h-[15rem]  w-[90%] flex flex-col md:w-[70%] rounded-lg  `}
          >
            <Image
              src={item.image}
              alt={item.label}
              priority={true}
              quality={75}
              width={100}
              height={100}
              className='w-full h-[75%] object-cover object-center rounded-t-lg'
            />
            <div className='relative px-3 flex-1 w-full bg-white text-primary rounded-lg flex items-center justify-center'>
              <p className='font-bold text-base leading-none max-xmd:text-sm text-center mx-auto  '>
                {item.label}
              </p>

              <div className='h-8 w-8 bg-grey rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
                {item.icon}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
