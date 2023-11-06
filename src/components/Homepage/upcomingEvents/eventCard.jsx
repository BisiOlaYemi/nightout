export default function EventCard({ event }) {
  return (
    <div className='bg-white flex-1 max-md:flex-none max-md:w-[40%] max-xmd:w-[46%] max-lgMobile:w-[52%] max-mobile:w-[58%] max-xmobile:w-[65%] border-2 border-primary  px-3 py-4 h-fit rounded-lg cursor-pointer transition ease-in-out duration-700 md:hover:scale-[1.04]'>
      <div className='h-40 max-md:h-32 max-xxmobile:h-24'>
        <img
          src={event.image}
          alt={event.name}
          className='w-full h-full object-cover rounded-lg'
        />
      </div>
      <div className='text-primary my-4 max-laptop:my-2'>
        <h3 className='truncate text-[1.8rem] max-desktop:text-2xl max-laptop:text-xl max-mobile:text-lg max-xmobile:text-base font-medium'>
          {event.name}
        </h3>
        <div className='flex gap-y-1 flex-wrap justify-between my-1 max-laptop:text-sm max-mobile:text-xs max-md:text-[0.84rem]'>
          <p className='text-gray-500'>
            <span className='text-primary font-semibold'>Date:</span> March 1
          </p>
          <p className='text-gray-500'>
            <span className='text-primary font-semibold'>Time:</span> 12pm
          </p>
        </div>
        <p className='mt-1 max-desktop:text-sm max-md:text-xs max-desktop:leading-snug line-clamp-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          voluptates omnis illo laudantium quaerat provident, esse recusandae
          fugit vero distinctio illum hic culpa,
        </p>
      </div>
    </div>
  );
}
