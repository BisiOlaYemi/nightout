import { useState, useEffect } from 'react';

function useImageCarousel(images, intervalDuration) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [images.length, intervalDuration]);

  return [activeIndex, setActiveIndex];
}

export default useImageCarousel;
