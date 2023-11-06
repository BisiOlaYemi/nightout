import { useState } from 'react';

import links from '@/constants/footer/mobileFooterLInks';
export default function UsersLayoutMobileFooter() {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className='h-16 mobile:h-20 py-3 bg-primary dark:bg-white border-t-[12px] border-white dark:border-primary dark:text-primary text-white w-full fixed bottom-0 left-0  flex md:hidden items-center justify-around'>
      {links.map((item, index) => {
        return (
          <div
            onClick={() => setActiveLink(index)}
            key={index}
            className={`flex flex-col gap-1 justify-center w-[90px] max-mobile:w-[80px] max-mobile:h-[80px] h-[90px] transition duration-500 ease-out transform ${
              index === activeLink ? ` relative  ` : ''
            }`}
          >
            {activeLink === index && (
              <div
                className={` absolute w-[90px] max-mobile:w-[80px] max-mobile:h-[80px] h-[90px] -top-[25px] mobile:-top-[35px]  bg-primary dark:bg-white p-0 mobile:p-3 rounded-full border-[10px] border-[#fff] dark:border-primary  active-footerNav left-0   transform ease-in-out transition duration-500 ${
                  activeLink === index ? `opacity-100` : 'opacity-0'
                }`}
              ></div>
            )}

            <div
              className={`z-20 transition translate-x-[2px] max-[340px]:translate-x-[5px] xmobile:translate-x-0 duration-500 ease-in-out transform ${
                activeLink === index
                  ? 'relative top-1/2 left-0 -translate-y-[65px] mobile:-translate-y-[80px] '
                  : ''
              }`}
            >
              {item.icon}
              <p className='text-center max-xmd:text-sm max-mobile:text-xs mt-1 font-medium'>
                {item.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
