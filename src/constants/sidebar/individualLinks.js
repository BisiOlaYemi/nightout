import { AiFillHome, BsFillCalendarEventFill,BsSearch,BsMessenger,IoNotificationsSharp,MdExplore,ImAddressBook,ImFilm, CgProfile } from '../icons/icons'

const individualLinks = [
  {
    text: 'Home',
    icon: <AiFillHome />,
    url: '/user/home',
  },
  {
    text: 'Search',
    icon: <BsSearch />,
  },
  {
    text: 'Explore',
    icon: <MdExplore />,
    url: '/user/explore',
  },
  {
    text: 'Events',
    icon: <BsFillCalendarEventFill />,
    url: '/user/events',
  },
  {
    text: 'Reels',
    icon: <ImFilm />,
    url: '/user/individual/reels',
  },
  {
    text: 'Notifications',
    icon: <IoNotificationsSharp />,
    url: '/user/notification',
  },
  {
    text: 'Messages',
    icon: <BsMessenger />,
    url: '/user/message',
  },
  {
    text: 'Bookings',
    icon: <ImAddressBook />,
    url: '/user/bookings',
  },
  {
    text: 'Profile',
    icon: <CgProfile />,
    url: '/user/profile',
  },
];

export default individualLinks;
