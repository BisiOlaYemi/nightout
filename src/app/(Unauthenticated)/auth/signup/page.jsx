'use client';

import { useState } from 'react';
import Link from 'next/link';

import Button from '@/components/Forms/button';
import OpenAuth from '@/components/Forms/openAuth';
import Input from '@/components/Forms/inputWithLabel';

import { updateFormState } from '@/utils/formUtils';

export default function SignUpPage({ handleSignUp }) {
  const [signUpForm, setSignUpForm] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    updateFormState(
      event.target.name,
      event.target.value,
      signUpForm,
      setSignUpForm,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp(); // Call handleSignIn function here
  };

  const [userType, setUserType] = useState('Individual');

  return (
    <div className='py-3 px-6 grid'>
      <p className='text-[1.4rem]  font-medium text-primary my-3'>
        Welcome to Placio!
      </p>

      <div className='flex h-14 w-full rounded-xl my-4'>
        {[...Array('Individual', 'Business')].map((item, index) => {
          return (
            <button
              key={index}
              className={`flex-1 ${
                userType === item
                  ? 'bg-primary  shadow-xl text-white'
                  : 'text-primary border border-primary '
              } ${
                item === 'Individual'
                  ? 'rounded-bl-xl rounded-tl-xl'
                  : 'rounded-br-xl rounded-tr-xl'
              } `}
              onClick={() => setUserType(item)}
            >
              {item}
            </button>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className='w-full grid gap-5 mt-3'>
        <div>
          <Input
            label={userType === 'Individual' ? 'Full name' : 'Business name'}
            type='text'
            name='fullname'
            placeholder='enter your name'
            value={signUpForm.fullname}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Input
            label={
              userType === 'Individual'
                ? 'Email Address'
                : 'Business Email Address'
            }
            type='text'
            name='email'
            placeholder='example123@gmail.com'
            value={signUpForm.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Input
            label='Password'
            type='password'
            name='password'
            placeholder='enter password'
            value={signUpForm.password}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Input
            label='Confirm Password'
            type='password'
            name='confirmPassword'
            placeholder='re-enter password'
            value={signUpForm.confirmPassword}
            onChange={handleInputChange}
          />
        </div>

        <Button name={'Sign Up'} />
      </form>

      <OpenAuth />

      <p className='self-end text-center mt-8 text-primary/70 text-sm'>
        Already have an account?{' '}
        <Link className='font-bold text-primary' href={'/auth/signin'}>
          Log In
        </Link>
      </p>
    </div>
  );
}
