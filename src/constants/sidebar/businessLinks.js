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
    text: 'Analytics',
    icon: <MdExplore />,
    url: '/user/analytics',
  },
  {
    text: 'Events',
    icon: <BsFillCalendarEventFill />,
    url: '/user/events',
  },
  {
    text: 'Reels',
    icon: <ImFilm />,
    url: '/user/reels',
  },
  {
    text: 'Notifications',
    icon: <IoNotificationsSharp />,
    url: '/user/notifications',
  },
  {
    text: 'Messages',
    icon: <BsMessenger />,
    url: '/user/message',
  },
  {
    text: 'Reservations',
    icon: <ImAddressBook />,
    url: '/user/reservation',
  },
  {
    text: 'Profile',
    icon: <CgProfile />,
    url: '/user/profile',
  },
];

export default individualLinks;
