'use client';

import React, { useState, useEffect } from 'react';

import '../../../../styles/globals.css';
import Activities from '@/components/Layout/Activities';

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex flex-wrap border w-full '>
        <div className='border-r border-primary/30 dark:border-white'>
          <Activities />
        </div>
        <div className=' scroll-auto flex-1 pt-4 pb-10 px-16'>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
