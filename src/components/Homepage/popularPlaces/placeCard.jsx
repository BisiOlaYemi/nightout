import RatingStars from '@/components/ratingStars';
import { MdLocationOn } from '@/constants/icons/icons';

export default function PlaceCard({ place }) {
  const { image, rating, name, location } = place;
  return (
    <div
      style={{ backgroundImage: `url('${image}')` }}
      className='relative bg-cover bg-center bg-no-repeat flex-1 max-md:flex-none max-md:w-[40%] max-xmd:w-[46%] max-lgMobile:w-[52%] max-mobile:w-[58%] max-xmobile:w-[65%]   py-4 h-[45vh] max-laptop:h-[40vh] max-lgMobile:h-[35vh] max-xmobile:h-[32vh] rounded-lg cursor-pointer transition ease-in-out duration-700 md:hover:scale-[1.04]'
    >
      <div className='absolute bottom-8 max-xmobile:bottom-4 w-[90%] left-1/2 -translate-x-1/2 h-fit p-4 max-desktop:py-2 rounded-lg bg-white text-primary shadow-xl  '>
        <h3 className='truncate text-2xl max-desktop:text-xl max-mobile:text-lg font-semibold '>
          {name}
        </h3>
        <RatingStars rating={rating} />

        <div className='flex items-center gap-2 mt-1'>
          <MdLocationOn className='text-primary  h-5 w-5 max-desktop:h-4 max-desktop:w-4' />
          <p className='text-lg max-desktop:text-base max-md:text-sm'>
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}
