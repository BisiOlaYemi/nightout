import Logo from '@/components/logo';
import {
  IoPersonCircleOutline,
  IoNotificationsOutline,
} from '@/constants/icons/icons';
export default function UsersLayoutMobileNavbar() {
  return (
    <div className='h-16 bg-white shadow-md dark:text-primary  md:hidden fixed top-0 left-0 w-full flex mobile:px-8 px-4  justify-between items-center '>
      <Logo />

      <div className=' flex items-center gap-4'>
        <div className='relative'>
          <IoNotificationsOutline className='text-2xl' />
          <div className='flex absolute -top-1 -right-2 justify-center h-4 w-4 text-white text-xs font-bold items-center shadow-md bg-[red] rounded-full'>
            1
          </div>
        </div>
        <IoPersonCircleOutline className='text-2xl' />
      </div>
    </div>
  );
}
