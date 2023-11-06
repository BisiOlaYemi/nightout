import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';

import SmallButton from '../Buttons/smallButtons';

import NavbarLogo from '../navLogo';

import SearchBar from '../searchBar';

import SideBar from './homepageSidebar';

import { AiOutlineClose, RxHamburgerMenu } from '@/constants/icons/icons';

import sectionColors from '@/constants/navbar/setionColors';

import homepageNavigationLinks from '@/constants/navbar/homepageNavigationLinks';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [scrollPastSection, setScrollPastSection] = useState(false);

  // const [isHomepage, setIsHomepage] = useState(false);

  const defaultColors = useMemo(
    () => ({
      name: 'Search for an event',
      background: 'primary',
      secondary: 'white',
      logo: 'white',
      text: 'white',
      signUpText: 'primary',
      hamburger: 'white',
    }),
    [],
  );

  const [activeColors, setActiveColors] = useState(defaultColors);
  // console.log(pathname);

  useEffect(() => {
    // console.log(isHomepage);
    const handleScroll = () => {
      // if (pathname === '/') () => setIsHomepage(true);
      if (pathname === '/') {
        const aboutSection = document.getElementById('exploreText');
        const isPastSection = aboutSection.offsetTop - 200 <= window.scrollY;
        setScrollPastSection(isPastSection);

        // Logic to help update the navbar colors
        const activeSections = Array.from(
          document.querySelectorAll('#homepageSection'),
        );
        const color = activeSections.reduce((acc, section) => {
          const sectionTop = section.offsetTop - 90;
          const sectionHeight = section.offsetHeight;
          const isPastActiveSection =
            sectionTop <= window.scrollY &&
            window.scrollY <= sectionTop + sectionHeight;
          if (isPastActiveSection) {
            const matchingColor = sectionColors.find((item) =>
              section.innerHTML.includes(item.name),
            );
            if (matchingColor) {
              return matchingColor;
            }
          }
          return acc;
        }, defaultColors);

        setActiveColors(color);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, defaultColors]);

  // Mobile view sidebar
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div>
        {/* Desktop View  */}
        <nav
          className={`${
            scrollPastSection
              ? `bg-${activeColors.background} opacity-80`
              : `${
                  pathname === '/'
                    ? 'bg-transparent'
                    : `bg-${activeColors.background}`
                }`
          } transition-all duration-500 ease-in-out hidden smLaptop:block fixed w-full top-0 left-0 z-40   py-4 `}
        >
          <div className='px-10 laptop:px-14 max-width'>
            <div className='flex items-center justify-between h-16'>
              <div className='flex items-center h-full gap-4 '>
                <Link className='flex-shrink-0' href='/'>
                  <NavbarLogo color={activeColors.logo} />
                </Link>
                <div>
                  <div className='flex items-center  gap-2 laptop:gap-3'>
                    {homepageNavigationLinks.map((item, index) => {
                      return (
                        <Link
                          key={index}
                          className={`transition duration-700 ease-in-out text-${activeColors.text} text-sm desktop:text-base  desktop:px-2 py-2 rounded-md font-medium `}
                          href={item.url}
                        >
                          {item.text}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className='flex-1 mx-3 desktop:mx-6'>
                <SearchBar />
              </div>

              <div className='flex  items-center gap-2 desktop:gap-4'>
                <SmallButton
                  name={'Login'}
                  bgColor={'transparent'}
                  borderColor={`${activeColors.secondary}`}
                  textColor={`${activeColors.secondary}`}
                  extraClasses={
                    'transition duration-700 ease-in-out max-desktop:h-10 max-desktop:text-sm '
                  }
                  action={() => router.push('/auth/signin')}
                />

                <SmallButton
                  name={'Sign up'}
                  bgColor={`${activeColors.secondary}`}
                  borderColor={`${activeColors.secondary}`}
                  textColor={activeColors.signUpText}
                  extraClasses={
                    'transition duration-700 ease-in-out max-desktop:h-10 '
                  }
                  action={() => router.push('/auth/signup')}
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile View  */}
        <nav
          className={`${
            scrollPastSection
              ? `bg-${activeColors.background} opacity-80`
              : showSidebar
              ? 'bg-primary '
              : `${
                  pathname === '/'
                    ? 'bg-transparent'
                    : `bg-${activeColors.background}`
                }`
          } block smLaptop:hidden transition-colors duration-700 ease-in-out fixed w-full top-0 left-0 z-40  py-2 `}
        >
          <div className='px-10 max-mobile:px-6 '>
            <div className='flex items-center justify-between h-16'>
              <div className='flex items-center '>
                <Link className='flex-shrink-0' href='/'>
                  <NavbarLogo color={activeColors.logo} />
                </Link>
              </div>

              <div className='flex-1 mx-4 xmd:mx-6'>
                <SearchBar />
              </div>

              {showSidebar ? (
                <AiOutlineClose
                  role='Menu'
                  onClick={handleSidebarToggle}
                  className={`h-7 w-7 xmd:h-8 xmd:w-8 text-${activeColors.hamburger} `}
                />
              ) : (
                <RxHamburgerMenu
                  role='Menu'
                  onClick={handleSidebarToggle}
                  className={`h-7 w-7 xmd:h-8 xmd:w-8 text-${activeColors.hamburger} `}
                />
              )}
            </div>
          </div>
        </nav>

        {/* {showSidebar && ( */}
        <div
          role='dialog'
          onClick={handleSidebarToggle}
          className={`${
            showSidebar ? 'translate-x-0 ' : 'translate-x-full'
          } duration-1000 transition-all ease-in-out h-full z-30 block smLaptop:hidden fixed top-20 right-0 w-full  `}
        >
          <SideBar handleClose={handleSidebarToggle} />
        </div>
      </div>
    </>
  );
}
