import Link from 'next/link';

import {
  AiFillTwitterCircle,
  BsFacebook,
  RiInstagramFill,
  BiCopyright,
} from '@/constants/icons/icons';

import footerLinks from '@/constants/footer/footer';

export default function Footer() {
  const socials = [
    {
      icon: <BsFacebook className='h-8 w-8 text-lightbrown' />,
    },
    {
      icon: <RiInstagramFill className='h-8 w-8 text-lightbrown' />,
    },
    {
      icon: <AiFillTwitterCircle className='h-8 w-8 text-lightbrown' />,
    },
  ];

  return (
    <div className='relative pt-16 max-xmd:pt-12 max-xmd:py-6 pb-8 bg-neutral-700 text-white'>
      <footer className='max-w-screen-xl extraLarge:max-w-[110rem] mx-auto pt-4 max-mobile:py-0 pb-8 xl:pt-8'>
        <div className=' px-4  w-full sm:px-6 md:px-8 '>
          <ul className='flex flex-wrap max-laptop:gap-10 max-xmd:gap-x-5 max-mobile:gap-y-8 justify-between max-laptop:justify-right max-xmd:justify-between  pb-8 text-lg font-light'>
            <li className='w-1/5 max-laptop:w-[20%] max-xmd:w-[40%] max-mobile:w-full'>
              <div className=''>
                <Link href='/'>
                  <img
                    className='w-[80%] h-full max-laptop:w-[55%] max-mobile:w-[45%]'
                    src='/Images/whiteLogo.svg'
                    alt='Placio Logo'
                  />
                </Link>
                <div className='flex gap-3 mt-6'>
                  {socials.map((item, index) => {
                    return (
                      <Link href={'#'} key={index}>
                        {item.icon}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>

            {footerLinks.map((item, index) => {
              return (
                <li
                  key={index}
                  className='w-1/5 max-laptop:w-[20%] max-xmd:w-[40%] max-mobile:w-full'
                >
                  <div className=''>
                    <h2 className='text-xl font-bold mb-4'>{item.title}</h2>
                    <ul>
                      {item.links.map((link, idx) => {
                        return (
                          <li
                            key={idx}
                            className='mb-3  text-base max-md:text-sm '
                          >
                            <Link href={link.url}>{link.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <hr className='border-t border-grey' />

          <div className='mt-10 text-sm text-center flex items-center justify-center font-bold'>
            <BiCopyright className='w-5 h-5 mr-2' />
            <p>{new Date().getFullYear()}. All Rights Reserved, Placio.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
