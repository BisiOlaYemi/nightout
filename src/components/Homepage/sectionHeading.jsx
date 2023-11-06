export default function SectionHeading({ heading, subtext, removeShadow }) {
  return (
    <div className='text-left'>
      <h3
        className={`text-4xl max-xmd:text-3xl font-medium ${
          removeShadow ? '' : 'text-shadow-black'
        } `}
      >
        {heading}
      </h3>
      <p className='mt-3 text-xl max-md:text-lg max-xmd:text-base'>{subtext}</p>
    </div>
  );
}
