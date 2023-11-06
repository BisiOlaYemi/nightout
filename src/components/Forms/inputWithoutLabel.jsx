export default function InputField(props) {
  const { borderColor, type } = props;
  if (type === 'textarea') return <TextArea {...props} />;
  return (
    <input
      {...props}
      className={`  rounded-lg  flex-1  h-12 max-md:h-10 max-lgMobile:h-10 border-${
        borderColor !== '' ? borderColor : 'primary'
      } border w-full py-2 px-4   placeholder-primary bg-white text-primary shadow-sm text-base max-laptop:text-sm focus:outline-none `}
    />
  );
}

function TextArea(props) {
  const { borderColor } = props;
  return (
    <textarea
      rows={5}
      {...props}
      className={`  rounded-lg  flex-1  h-14 max-md:h-12 max-lgMobile:h-10 border-${
        borderColor !== '' ? borderColor : 'primary'
      } border w-full py-2 px-4   placeholder-primary bg-white text-primary shadow-sm text-base max-lgMobile:text-sm focus:outline-none `}
    ></textarea>
  );
}
