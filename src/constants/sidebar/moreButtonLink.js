import { IoSettingsOutline } from 'react-icons/io5';
import { CiTimer } from 'react-icons/ci';
import { BsMoon } from 'react-icons/bs';
import { CgDanger } from 'react-icons/cg';

const moreButtonLinks = [
  {
    text: 'Settings',
    icon: <IoSettingsOutline className='w-5 h-5' />,
    url: '/user/settings/editprofile',
  },
  {
    text: 'Activities',
    icon: <CiTimer className='w-5 h-5' />,
    url: '/user/activity',
  },
  {
    text: 'Switch appearance',
    icon: <BsMoon className='w-5 h-5' />,
  },
  {
    text: 'Report a problem',
    icon: <CgDanger className='w-5 h-5' />,   
  },
  {
    text: 'Logout',
  },
];

export default moreButtonLinks;
