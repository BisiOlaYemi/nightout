const classNames =
  'flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 border-2 rounded-lg shadow-sm appearance-none h-14 max-md:h-12 max-lgMobile:h-10 border-primary max-lgMobile:text-sm focus:outline-none';

export default function InputField(props) {
  const { name, label, type } = props;
  if (type === 'textarea') return <TextArea {...props} />;
  return (
    <>
      <label htmlFor={name} className='block my-1 capitalize'>
        {label}
      </label>
      <input {...props} className={classNames} />
    </>
  );
}

function TextArea(props) {
  const { name, label, row = 5 } = props;
  return (
    <>
      <label htmlFor={name} className='block my-1 capitalize'>
        {label}
      </label>
      <textarea rows={row} {...props} className={classNames} />
    </>
  );
}
