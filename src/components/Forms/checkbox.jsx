export default function CheckBox(props) {
  const { label } = props;
  return (
    <label className='flex items-center mb-3 space-x-3'>
      <input
        className='form-tick  bg-white bg-check h-5 w-5 border-primary border-2 rounded-m checked:bg-primary checked:text-white checked:border-transparent'
        type='checkbox'
        {...props}
      />
      <span className='font-normal max-md:text-sm text-gray-700 dark:text-white'>
        {label}
      </span>
    </label>
  );
}
