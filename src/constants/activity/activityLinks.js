import { AiFillInteraction, RiWirelessChargingLine, GiHistogram } from '../icons/icons';

const activityLinks = [
    {
      text: 'Interactions',
      icon: <AiFillInteraction />,
      url: '/user/activity/interaction',
    },
    {
      text: 'Events & clubs',
      icon: <RiWirelessChargingLine />,
      url: '/user/activity/eventsclub',
    },
    {
      text: 'Account history',
      icon: <GiHistogram />,
      url: '/user/activity/acchistory',
    },
    {
      text: 'Last visited events',
      icon: <GiHistogram />,
      url: '/user/activity/lastevent',
    },
]
    export default activityLinks