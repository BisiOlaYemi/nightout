export default function DownloadButton(props) {
  const { image, icon, label } = props;
  return (
    <button className='px-3 max-xxmobile:w-[60%] max-xxmobile:justify-center py-2 max-lgDesktop:py-1 bg-black flex gap-4 max-md:gap-2 items-center rounded-lg'>
      {image ? (
        <img
          src={image}
          alt={label}
          className='h-8 w-8 max-lgMobile:w-7 max-lgDesktop:h-7 max-md:w-5 max-md:h-5'
        />
      ) : (
        icon
      )}

      <div className='text-base max-desktop:text-sm max-md:text-xs text-left'>
        <p className='font-light'>Download On</p>
        <p className='text-lg max-desktop:text-base font-semibold'>{label}</p>
      </div>
    </button>
  );
}
