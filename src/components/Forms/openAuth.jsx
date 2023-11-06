import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsApple } from 'react-icons/bs';
export default function OpenAuth() {
  const links = [
    {
      name: 'Google',
      icon: <FcGoogle className='h-5 w-5' />,
    },
    {
      name: 'Facebook',
      icon: <BsFacebook className='h-5 w-5' />,
    },
    {
      name: 'Apple',
      icon: <BsApple className='h-5 w-5' />,
    },
  ];
  return (
    <div className='mt-8'>
      <div className='flex items-center space-x-4 text-black/70'>
        <hr className='border  flex-1' />
        <span className='text-sm'>Or continue with</span>
        <hr className='border  flex-1' />
      </div>

      <div className='my-5 flex justify-center flex-wrap w-full gap-x-10 max-mobile:gap-x-5 gap-y-5 text-center items-center'>
        {links.map((item, index) => {
          return (
            <div
              key={index}
              className='border-[1.5px] border-primary py-3 flex space-x-3 justify-center items-center w-[30%] max-xl:w-[40%] max-mobile:w-[45%] rounded-lg cursor-pointer hover:bg-primary/20'
            >
              {item.icon}
              <span className='font-medium'>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
