'use client';
import '../../../styles/globals.css';
import Link from 'next/link';

import AuthLayoutSlider from '@/components/Sliders/authSlider';

export default function AuthLayout({ children }) {
  return (
    <div className='flex h-screen'>
      <div className='w-1/2 max-md:hidden'>
        <AuthLayoutSlider />
      </div>
      <div className='w-1/2 max-md:w-full h-full  pb-4 overflow-auto'>
        <div className='px-12 max-lg:px-6 relative max-w-3xl mx-auto '>
          <div className='flex items-center h-[55px] my-4 sticky top-0 bg-white justify-between   '>
            <Link href='/' className='mb-3'>
              <img
                className='w-36'
                src='/Images/darkLogo.svg'
                alt='Placio Logo'
              />
            </Link>
            <div className='flex items-center gap-8 max-md:hidden'>
              <Link href={'#'}>Help</Link>
              <Link href={'#'}>Privacy</Link>
              <Link href={'#'}>Terms</Link>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
