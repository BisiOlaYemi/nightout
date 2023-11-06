import Image from 'next/image';

export default function SpecializedLayout({
  children,
  heroImg = '',
  title = '',
  description = '',
}) {
  return (
    <div className='mt-20 md:mt-24'>
      {!!heroImg && (
        <div className='relative flex flex-row items-center justify-center h-44'>
          <div className='absolute z-10 text-3xl text-white md:text-4xl bottom-5 md:left-14 left-6'>
            {title}
            {!!description && (
              <div className='mt-3 text-sm font-normal md:text-base'>
                {description}
              </div>
            )}
          </div>
          <Image
            src={heroImg}
            fill
            className='object-cover mt-auto brightness-50'
            alt='Hero image for information pages'
          />
        </div>
      )}
      <div className='flex flex-row justify-center'>
        <div className='flex-1 px-6 max-width md:px-14'>{children}</div>
      </div>
    </div>
  );
}
