import { AiFillStar, AiOutlineStar } from '@/constants/icons/icons';

export default function RatingStars({ rating, extraClasses }) {
  return (
    // ReadOnly star
    <div className='flex gap-1 items-center mt-1'>
      {[...Array(rating)].map((item, index) => {
        return (
          <AiFillStar key={index} className={`text-orange ${extraClasses} `} />
        );
      })}
      {[...Array(5 - rating)].map((item, index) => {
        return (
          <AiOutlineStar
            key={index}
            className={`text-orange ${extraClasses} `}
          />
        );
      })}
    </div>
  );
}
