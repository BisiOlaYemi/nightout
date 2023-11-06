import Link from 'next/link';
import Image from 'next/image';

import {
  GrStackOverflow,
  IoIosPeople,
  AiFillHome,
  CgGym,
  FaMapMarkerAlt,
} from '@/constants/icons/icons';

export default function DesktopCategories() {
  const categorieClasses = {
    middleLink:
      'hover:scale-125 duration-700 transition-transform ease-in-out hover:z-10 h-60 w-60 max-desktop:h-48 max-desktop:w-48 rounded-3xl col-start-3 col-span-2 bg-white text-primary flex flex-col',
    linkTag:
      'hover:scale-150 duration-700 transition-transform ease-in-out hover:z-10 h-44 w-44 max-desktop:h-32 max-desktop:w-full rounded-3xl bg-white text-primary flex flex-col',
    pTag: 'mt-1 font-bold text-sm max-desktop:text-xs flex-1 flex justify-center items-center',
    imageTag: 'w-full h-[70%] object-cover object-center rounded-t-3xl',
  };

  const categories = [
    {
      name: 'Social Networking',
      image: '/Images/homepage/socialNetworking.png',
      icon: <GrStackOverflow className='w-5 h-5 text-primary' />,
      class: 'col-start-1 col-end-3',
    },
    {
      name: 'Communication',
      image: '/Images/homepage/communication.png',
      icon: <IoIosPeople className='w-5 h-5 text-primary' />,
      class: 'col-end-7 col-span-2',
    },
    {
      name: 'Entertainment',
      image: '/Images/homepage/entertainment.png',
      icon: <AiFillHome className='w-5 h-5 text-primary' />,
      class: '',
    },
    {
      name: 'Lifestyle',
      image: '/Images/homepage/lifestyle.png',
      icon: <CgGym className='w-5 h-5 text-primary' />,
      class: 'col-start-1 col-end-3',
    },
    {
      name: 'Maps & Navigation',
      image: '/Images/homepage/map&navigation.png',
      icon: <FaMapMarkerAlt className='w-5 h-5 text-primary' />,
      class: 'col-end-7 col-span-2',
    },
  ];

  return (
    <div className='grid place-items-center grid-cols-6 gap-4 w-full desktop:w-[70%]'>
      {categories.map((item, index) => {
        return (
          <Link
            key={index}
            href={`/explore/?search=${item.name}`}
            className={`${
              index !== 2
                ? categorieClasses.linkTag
                : categorieClasses.middleLink
            } ${item.class} `}
          >
            <Image
              src={item.image}
              alt={item.name}
              priority={true}
              quality={75}
              width={100}
              height={100}
              className={categorieClasses.imageTag}
            />
            <div className='relative flex-1 flex justify-center items-center'>
              <div className='h-8 w-8 bg-grey rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
                <GrStackOverflow className='w-5 h-5 text-primary' />
              </div>

              <p className={categorieClasses.pTag}>{item.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
