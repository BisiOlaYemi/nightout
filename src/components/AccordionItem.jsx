import { BsDash, BsPlus } from 'react-icons/bs';

export default function AccordionItem({ children, title, active, setActive }) {
  return (
    <div>
      <div
        className={`items-center justify-between p-3 border-b smoothen border-gray-500 cursor-pointer row hover:bg-black/10 ${
          active && 'bg-black/10 hover:bg-black/20'
        }`}
        onClick={() => setActive(title)}
      >
        {title}
        {active ? <BsDash /> : <BsPlus />}
      </div>
      <div
        className={`px-3 border overflow-hidden smoothen ${
          active ? 'h-44 py-3' : 'h-0 py-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
