'use client';

import { useState } from 'react';
import Link from 'next/link';

import Button from '@/components/Forms/button';
import OpenAuth from '@/components/Forms/openAuth';
import Input from '@/components/Forms/inputWithLabel';
import CheckBox from '@/components/Forms/checkbox';

import { updateFormState } from '@/utils/formUtils';

export default function SignInPage({ handleSignIn }) {
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (event) => {
    updateFormState(
      event.target.name,
      event.target.value,
      signInForm,
      setSignInForm,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignIn(); // Call handleSignIn function here
  };

  return (
    <div className='p-6 grid'>
      <p className='text-[1.4rem] font-medium text-primary my-3'>
        Log in to your account
      </p>

      <p className='text-primary/50 my-2'>
        Welcome to NightOut, please select your preferred method for accessing
        this application
      </p>

      <form onSubmit={handleSubmit} className='w-full grid gap-6'>
        <div>
          <Input
            type={'text'}
            name={'email'}
            placeholder={'example123@gmail.com'}
            value={signInForm.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Input
            type='password'
            name='password'
            placeholder='enter password'
            value={signInForm.password}
            onChange={handleInputChange}
          />
        </div>

        <div className='flex justify-between'>
          <CheckBox
            type='checkbox'
            onChange={() =>
              setSignInForm({
                ...signInForm,
                rememberMe: !signInForm.rememberMe,
              })
            }
            checked={signInForm.rememberMe}
            name='rememberMe'
            label={'Remember me'}
          />

          <Link href={'/auth/forgot-password'} className=' font-light'>
            Forgot Password?
          </Link>
        </div>

        <Button name={'Sign In'} />
      </form>

      <OpenAuth />

      <p className='self-end text-center mt-8 text-primary/70 text-sm'>
        Don’t have an account?{' '}
        <Link className='font-bold text-primary' href={'/auth/signup'}>
          Create account
        </Link>
      </p>
    </div>
  );
}
