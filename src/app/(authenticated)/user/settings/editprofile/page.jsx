import Image from 'next/image';
import Link from 'next/link';

import CheckBox from '@/components/Forms/checkbox';
import InputField from '@/components/Forms/inputWithoutLabel';
import SmallButton from '@/components/Buttons/smallButtons';

const Editprofile = () => {
  const inputFields = [
    {
      label: 'Name',
      placeholder: 'John Doe',
    },
    {
      label: 'Username',
      placeholder: 'JohnDoe123',
    },
    {
      label: 'Website',
      placeholder: 'www.example.com',
    },
    {
      label: 'Bio',
      placeholder: 'Description about your account',
    },
    {
      label: 'Email',
      placeholder: 'johndoe@example.com',
    },
    {
      label: 'Phone number',
      placeholder: '07012345678',
    },
    {
      label: 'Gender',
      placeholder: 'Male',
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
          <Link
            className='text-orange text-sm font-bold text-center'
            href={'#'}
          >
            Change Profile picture
          </Link>
        </div>
      </div>
      {inputFields.map((item, index) => {
        return (
          <div key={index} className=' mt-5'>
            <div className='flex max-md:flex-col max-md:justify-start gap-3 md:gap-6 md:items-center placeholder:text-grey'>
              <p className='text-base  font-semibold w-[15%] max-md:w-fit'>
                {item.label}
              </p>
              {item.label !== 'Bio' ? (
                <InputField name={'name'} placeholder={item.placeholder} />
              ) : (
                <textarea
                  name={item.label}
                  placeholder={item.placeholder}
                  className='h-32 flex-1 py-2 px-4  rounded-lg border placeholder-primary bg-white text-primary shadow-sm text-base max-lgMobile:text-sm focus:outline-none'
                />
              )}
            </div>
          </div>
        );
      })}
      <div className=' mt-5'>
        <div className='flex max-md:flex-col max-md:justify-start gap-3 md:gap-6 md:items-center'>
          <p className='text-base font-semibold w-[15%] max-md:w-fit break-words '>
            Account Suggestions
          </p>
          <div className='flex-1'>
            <CheckBox
              label={
                'Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles.'
              }
            />
          </div>
        </div>
      </div>
      <div className=' mt-6'>
        <div className='flex gap-6 items-center'>
          <p className='text-lg font-semibold w-[15%] max-md:hidden'></p>
          <div className='flex flex-1 items-center justify-between'>
            <SmallButton
              bgColor={'primary'}
              name={'Submit'}
              textColor={'white'}
            />
            <Link
              className='text-orange text-sm md:text-base font-bold text-center'
              href={'#'}
            >
              Temporarily deactivate my account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;
