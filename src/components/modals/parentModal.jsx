export default function ParentModal({
  isOpen,
  handleClose,
  children,
  extraClasses,
}) {
  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 bg-black/40 bg-opacity-75 ${
            extraClasses ? extraClasses : 'flex items-center justify-center'
          } `}
          onClick={handleClose}
        >
          <div
            className='bg-white md:w-1/2 w-[80%] rounded-lg p-4'
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
