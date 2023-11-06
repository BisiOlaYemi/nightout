export default function ContactMediumItem({ title, description, children }) {
  return (
    <div className='p-2 border rounded-md'>
      <div className='font-bold text-primary'>{title}</div>
      <p className='text-xs text-secondary'>{description}</p>
      {children}
    </div>
  );
}
