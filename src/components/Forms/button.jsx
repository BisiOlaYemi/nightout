export default function Button(props) {
  return (
    <button
      type='submit'
      className='w-full px-4 py-2 text-lg font-semibold text-center text-white rounded-lg shadow-md h-14 max-sm:h-12 bg-primary hover:bg-primary/90 focus:outline-none '
    >
      {props.name}
    </button>
  );
}

export function IconButton({ children, className, ...props }) {
  return (
    <button
      {...props}
      className='items-center justify-center w-8 h-8 transition-all duration-200 border rounded-full row bg-black/10 hover:bg-black/20 hover:brightness-100'
    >
      {children}
    </button>
  );
}
