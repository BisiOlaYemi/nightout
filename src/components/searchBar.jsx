import { useState } from 'react';

import Image from 'next/image';

import { usePathname } from 'next/navigation';

import InputField from './Forms/inputWithoutLabel';

import RatingStars from './ratingStars';

import {
  BsSearch,
  AiOutlineClose,
  MdLocationOn,
} from '@/constants/icons/icons';

import { updateFormState } from '@/utils/formUtils';

export default function SearchBar() {
  const pathname = usePathname();
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showSearchResultModal, setShowSearchResultModal] = useState(false);

  const [searchForm, setSearchForm] = useState({
    search: '',
  });

  const handleInputChange = (event) => {
    updateFormState(
      event.target.name,
      event.target.value,
      searchForm,
      setSearchForm,
    );
    searchForm.search.length
      ? setShowSearchResultModal(true)
      : setShowSearchResultModal(false);
  };

  const handleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
    if (showSearchResultModal) setShowSearchResultModal(false);
  };

  return (
    pathname !== '/' && (
      <div>
        <div className='relative'>
          <InputField
            name={'search'}
            value={searchForm.search}
            placeholder={'Search for events, places and people'}
            onFocus={handleSearchModal}
            onChange={handleInputChange}
          />

          <div className='absolute top-1/2 bg-white rounded-r-lg -translate-y-1/2 border-l text-primary hover:text-orange hover:border-orange/80 cursor-pointer right-0 flex justify-center items-center h-full px-3 desktop:px-4'>
            <BsSearch className='w-5 h-5 desktop:w-6 desktop:h-6' />
          </div>

          {showSearchResultModal && (
            <div
              className='bg-white shadow-md absolute top-full mt-1 max-xmd:mt-4  left-0 mx-auto xmd:min-h-[70vh] min-h-[80vh] overflow-auto scroll-auto w-[90vw] max-xmd:left-1/2 max-xmd:-translate-x-[50vw] xmd:w-full h-full rounded-lg p-4 z-50'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='py-3 px-2'>
                {/* Recent searches  */}
                <div className='mt-4'>
                  <div className='flex items-center justify-between'>
                    <h4 className='text-xl xmd:text-2xl font-bold'>
                      Recent searches
                    </h4>
                    <div className='border rounded-lg cursor-pointer hover:bg-grey border-grey px-2 py-1 flex gap-4 justify-center items-center text-primary'>
                      <p className='max-xmd:text-sm'>Clear all</p>
                    </div>
                  </div>
                  <div className='flex flex-wrap items-center gap-x-4 gap-y-3 mt-2 '>
                    {[...Array(10)].map((_, idx) => {
                      return (
                        <div
                          className='border rounded-lg border-grey px-2 py-1 flex gap-4 justify-center items-center text-primary'
                          key={idx}
                        >
                          <p className='max-xmd:text-sm'>Search</p>
                          <div className='hover:bg-grey rounded-full p-1 flex justify-center items-center cursor-pointer'>
                            <AiOutlineClose className='w-3 h-3 xmd:w-4 xmd:h-4 text-black' />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Categories  */}
                <div className='mt-5'>
                  <h4 className='text-xl xmd:text-2xl font-bold'>
                    Categories for you
                  </h4>
                  <div className='flex flex-wrap justify-left items-center gap-x-2 xmd:gap-x-4 gap-y-3 mt-2 '>
                    {[...Array(6)].map((_, idx) => {
                      return (
                        <div
                          className='h-16 xmd:h-20 w-32 xmd:w-36 rounded-lg relative'
                          key={idx}
                        >
                          <Image
                            src={'Images/search/gym.svg'}
                            alt={'category'}
                            priority={true}
                            quality={75}
                            width={100}
                            height={100}
                            className='w-full h-full object-cover rounded-lg  transition-opacity duration-1000 opacity-100 object-center'
                          />
                          <div className='absolute px-2 flex justify-center items-center bottom-0 w-full left-0 h-full  rounded-lg bg-primary/50 text-white  '>
                            <h3 className='truncate max-xmd:text-sm  font-semibold '>
                              Club Spatacus
                            </h3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Trending Places  */}
                <div className='mt-5 w-full'>
                  <h4 className='text-xl xmd:text-2xl font-bold'>
                    Trending Places
                  </h4>
                  <div className='flex overflow-x-scroll hide-scrollbar scroll-smooth  w-full justify-left gap-x-4 gap-y-3 mt-2 '>
                    {[...Array(4)].map((_, idx) => {
                      return (
                        <div
                          className='h-36 min-w-[12rem] rounded-lg relative'
                          key={idx}
                        >
                          <Image
                            src={'Images/search/gym.svg'}
                            alt={'category'}
                            priority={true}
                            quality={75}
                            width={100}
                            height={100}
                            className='w-full h-full object-cover rounded-lg transition-opacity duration-1000 opacity-100 object-center'
                          />
                          <div className='absolute bottom-1 w-[90%] left-1/2 -translate-x-1/2 h-fit p-2 max-desktop:py-2 rounded-lg bg-white text-primary shadow-xl  '>
                            <h3 className='truncate  font-semibold '>
                              Club Spatacus
                            </h3>
                            <RatingStars rating={5} extraClasses={'h-3 w-3'} />

                            <div className='flex items-center gap-1'>
                              <MdLocationOn className='text-primary  h-3 w-3 max-desktop:h-4 max-desktop:w-4' />
                              <p className='text-sm'>Abuja</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className='flex justify-center mt-3'>
                    <button
                      className={`border border-primary py-2 w-fit shadow-md px-6 h-10 max-lg:px-4 max-lg:h-10 max-lg:text-sm text-base  hover:bg-grey text-primary text-center  font-semibold  rounded-lg `}
                    >
                      See more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {showSearchModal && (
          <div
            className={`fixed mt-20 smLaptop:mt-24 inset-0 z-30 bg-black/40 bg-opacity-75`}
            onClick={handleSearchModal}
          ></div>
        )}
      </div>
    )
  );
}
