import Image from 'next/image';

// const Tree = () => {
//   const data = Array.from({ length: 20 }, (_, index) => index + 1);
//   //   const data = Array.from({ length: 20 }, (_, index) => index + 1);

//   return (
//     <div className='flex flex-col items-center justify-center max-width mx-auto h-fit'>
//       {[4, 1, 4, 1, 4, 1, 4, 1].map((count, i) => (
//         <div
//           className={`flex justify-center w-full mt-5`}
//           style={{ gap: `${18 - i * 1.5}rem` }}
//           key={`row-${i}`}
//         >
//           {data.slice(0, count).map((item, j) => (
//             <div
//               className={`w-16 h-16 rounded-full relative bg-blue-500 ${
//                 j === 1 || j === 2 ? 'mt-8' : ''
//               }`}
//               key={`item-${item}`}
//             >
//               <Image
//                 src='/Images/homepage/profilePic.svg'
//                 alt='Username'
//                 width={100}
//                 height={100}
//                 className='w-full  h-full object-cover object-center '
//               />
//               <div
//                 className={`${
//                   item ? 'opacity-100' : 'opacity-0'
//                 } transition-all ease-in-out duration-500 w-32 text-white bg-orange p-1 absolute -right-2 translate-x-full -top-[40%] h-fit rounded-lg rounded-bl-none`}
//               >
//                 <p className='font-bold text-lg'>
//                   Username{' '}
//                   {count !== 1
//                     ? count * i + (count * (j + 1)) / count
//                     : count * i + (count * (j + 1)) / count + 3}
//                 </p>
//                 <p className='text-sm'>Location</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Tree;

const Tree = ({ activeIndex }) => {
  const data = Array.from({ length: 20 }, (_, index) => index + 1);
  //   const data = Array.from({ length: 20 }, (_, index) => index + 1);
  const getElementPosition = (i, j) => {
    if (i === 0 || i === 1) return i * 4 + j + 1;
    else if (i === 2 || i === 3) return i * 4 + j + 1 - 3;
    else if (i === 4 || i === 5) return i * 4 + j + 1 - 6;
    else if (i === 6 || i === 7) return i * 4 + j + 1 - 9;
  };

  return (
    <div className='flex flex-col items-center justify-center max-width mx-auto h-fit'>
      {[4, 1, 4, 1, 4, 1, 4, 1].map((count, i) => (
        <div
          className={`flex justify-center w-full mt-5`}
          style={{ gap: `${18 - i * 1.5}rem` }}
          key={`row-${i}`}
        >
          {data.slice(0, count).map((item, j) => (
            <div
              className={`w-16 h-16 rounded-full relative bg-blue-500 ${
                j === 1 || j === 2 ? 'mt-8' : ''
              }`}
              key={`item-${item}`}
            >
              <Image
                src='/Images/homepage/profilePic.svg'
                alt='Username'
                width={100}
                height={100}
                className='w-full  h-full object-cover object-center '
              />
              <div
                className={`${
                  activeIndex === getElementPosition(i, j)
                    ? 'opacity-100'
                    : 'opacity-0'
                } transition-all ease-in-out duration-500 w-32 text-white bg-orange p-1 absolute -right-2 translate-x-full -top-[40%] h-fit rounded-lg rounded-bl-none`}
              >
                <p className='font-bold text-lg'>Username</p>
                <p className='text-sm'>Location</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Tree;
