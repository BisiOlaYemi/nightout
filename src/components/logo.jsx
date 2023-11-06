import Link from 'next/link';

export default function Logo() {
  return (
    <Link className='flex-shrink-0' href='/'>
      <img
        className='w-44 h-40  max-lg:w-32 max-lg:h-32 max-lgMobile:h-20 max-mobile:w-28 max-mobile:h-16'
        src='/Images/whiteLogo.svg'
        alt='Workflow'
      />
    </Link>
  );
}
