import {
  AiOutlineHome,
  FiCompass,
  BsPhone,
  BiCategory,
  BsInfoCircle,
  IoMdHelp,
} from '../icons/icons';

const homepageSideBarLinks = [
  {
    text: 'Home',
    icon: <AiOutlineHome className='w-6 h-6' />,
  },
  {
    text: 'Explore',
    icon: <FiCompass className='w-6 h-6' />,
  },
  {
    text: 'Categories',
    icon: <BiCategory className='w-6 h-6' />,
  },
  {
    text: 'Get the App',
    icon: <BsPhone className='w-6 h-6' />,
  },
  {
    text: 'About Placio',
    icon: <BsInfoCircle className='w-6 h-6' />,
  },
  {
    text: 'Support',
    icon: <IoMdHelp className='w-6 h-6' />,
  },
];

export default homepageSideBarLinks;
