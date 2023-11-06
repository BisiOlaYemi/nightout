'use client';
// import PageScroll from 'react-page-scroll';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '@/components/Homepage/hero/hero';
import SearchForEvents from '@/components/Homepage/searchForEvents';
import DesktopMockup from '@/components/Homepage/hero/desktopMockup';
import BusinessesSupport from '@/components/Homepage/businessesSupport';
import CategoriesForYou from '@/components/Homepage/categories/categoriesForYou';
import LiveReelsUpdate from '@/components/Homepage/liveReelsUpdate';
import Testimonials from '@/components/Homepage/testimonials/testimonials';
import DownloadTheApp from '@/components/Homepage/downloadTheApp';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className='h-full relative  '>
      <Hero />
      <DesktopMockup />
      <SearchForEvents />
      <CategoriesForYou />
      <LiveReelsUpdate />
      <BusinessesSupport />
      <Testimonials />
      <DownloadTheApp />
      {/* <div className='relative top-0 left-0 w-full'>
        <Hero />
        <DesktopMockup />
      </div>

      <PageScroll width='100vw' height='100vh' animationDuration={1000}>
        <div id='page1' className='page'>
          <FeaturesOverview />
        </div>
        <div id='page2' className='page'>
          <DiscoverPlaces />
        </div>
        <div id='page3' className='page'>
          <RecommendationSystem />
        </div>
        <div id='page4' className='page'>
          <BusinessesSupport />
        </div>
        <div id='page5' className='page'>
          <Testimonials />
        </div>
        <div id='page7' className='page'>
          <DownloadTheApp />
        </div>
      </PageScroll> */}
    </main>
  );
}
