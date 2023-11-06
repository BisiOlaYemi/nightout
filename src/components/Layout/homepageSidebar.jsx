import Link from 'next/link';
import { useRouter } from 'next/navigation';

import SmallButton from '../Buttons/smallButtons';

import homepageSideBarLinks from '@/constants/sidebar/homepageSidebarLinks';

export default function SideBar() {
  const router = useRouter();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`  h-full bg-white dark:bg-primary pb-[7rem] overflow-auto scroll-auto dark:border-t-grey dark:border-t shadow-lg  w-full  `}
    >
      <nav className=' flex flex-col justify-between h-full'>
        <div>
          {homepageSideBarLinks.map((item, index) => {
            return (
              <Link
                key={index}
                className='flex items-center justify-start w-full py-3 px-5 my-2 font-thin text-primary dark:text-white capitalize '
                href='#'
              >
                {item.icon}
                <span className='mx-4 text-base font-normal'>{item.text}</span>
              </Link>
            );
          })}
        </div>

        <div className=' px-5 grid w-full gap-4'>
          <SmallButton
            name={'Sign In'}
            bgColor={'transparent'}
            textColor={'primary'}
            borderColor={'primary'}
            extraClasses={
              'w-full dark:text-primary dark:bg-transparent dark:border-white '
            }
            action={() => router.push('/auth/signin')}
          />

          <SmallButton
            name={'Sign Up'}
            bgColor={'primary'}
            textColor={'white'}
            extraClasses={
              'w-full dark:text-primary dark:bg-white dark:border-none'
            }
            action={() => router.push('/auth/signup')}
          />
        </div>
      </nav>
    </div>
  );
}
