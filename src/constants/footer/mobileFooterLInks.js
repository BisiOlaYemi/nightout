import {
    AiFillHome,
    BsSearch,
    MdExplore,
    BiVideo,
    BsChatText,
  } from '@/constants/icons/icons';

const links = [
    {
      name: 'Home',
      icon: <AiFillHome className='text-xl mx-auto max-mobile:text-lg' />,
    },
    {
      name: 'Explore',
      icon: <MdExplore className='text-xl mx-auto max-mobile:text-lg' />,
    },
    {
      name: 'Reels',
      icon: <BiVideo className='text-xl mx-auto max-mobile:text-lg' />,
    },
    {
      name: 'Search',
      icon: <BsSearch className='text-xl mx-auto max-mobile:text-lg' />,
    },
    {
      name: 'Chat',
      icon: <BsChatText className='text-xl mx-auto max-mobile:text-lg' />,
    },
  ];

  export default links