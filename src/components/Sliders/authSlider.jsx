import useImageCarousel from '@/hooks/imageSlider';

export default function AuthLayoutSlider() {
  const images = [
    '/Images/auth2.svg',
    '/Images/auth1.svg',
    '/Images/auth3.svg',
  ];

  const [activeIndex, setActiveIndex] = useImageCarousel(images, 8000);
  return (
    <div className='relative h-full'>
      <div className='absolute inset-0 transition-opacity duration-1000'>
        {images.map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              className={`h-full w-full object-cover ${
                activeIndex === index ? 'block' : 'hidden'
              }`}
              alt='First image'
            />
          );
        })}
      </div>

      <div className='absolute bottom-5 right-0 left-0 flex justify-center space-x-2 pb-2'>
        {images.map((item, index) => {
          return (
            <button
              key={index}
              className={`h-[0.65rem] w-[0.65rem] rounded-full ${
                activeIndex === index ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
