import Image from 'next/image';
import Link from 'next/link';

import SmallButton from '@/components/Buttons/smallButtons';
import InputField from '@/components/Forms/inputWithoutLabel';

const ChangePassword = () => {
  const inputFields = [
    {
      label: 'Old Password',
    },
    {
      label: 'New password',
    },
    {
      label: 'Confirm new password',
    },
  ];
  return (
    <div className=''>
      <div className='flex gap-6 items-center'>
        <Image
          src='/Images/homepage/profilePic.svg'
          alt='user profile'
          width={55}
          height={55}
          className='h-[55px] w-[55px] max-md:w-[45px] max-md:h-[45px] rounded-full'
        />

        <div>
          <p className='font-light'>John Doe</p>
        </div>
      </div>

      {inputFields.map((item, index) => {
        return (
          <div key={index} className=' mt-5'>
            <div className='flex gap-6 items-center placeholder:text-grey'>
              <p className='text-base font-semibold w-[15%]'>{item.label}</p>
              <InputField name={'name'} />
            </div>
          </div>
        );
      })}

      <div className=' mt-6'>
        <div className='flex gap-6 items-center'>
          <p className='text-lg font-bold w-[15%]'></p>
          <div className='grid'>
            <SmallButton
              bgColor={'primary'}
              name={'Change password'}
              textColor={'white'}
            />
            <Link
              className='text-orange text-base font-bold text-center mt-6'
              href={'#'}
            >
              Change Profile picture
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
