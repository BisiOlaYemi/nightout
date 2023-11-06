'use client';

import { useState } from 'react';

import Button from '@/components/Forms/button';
import Input from '@/components/Forms/inputWithoutLabel';

import { updateFormState } from '@/utils/formUtils';

export default function ForgotPasswordPage({ handleRequestResetLink }) {
  const [resetForm, setResetForm] = useState({
    email: '',
  });

  const handleInputChange = (event) => {
    updateFormState(
      event.target.name,
      event.target.value,
      resetForm,
      setResetForm,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRequestResetLink(); // Call handleSignIn function here
  };

  return (
    <div className='p-6 grid items-center my-auto'>
      <h1 className='text-5xl font-bold w-[40%] my-6 text-primary'>
        Forgot Password?
      </h1>

      <p className='text-primary/50 my-4'>
        Forgot your NightOut password? Not to worry, kindly enter email address
        associated with your account.
      </p>

      <form onSubmit={handleSubmit} className='w-full grid gap-6'>
        <div>
          <Input
            type='text'
            name='email'
            placeholder='example123@gmail.com'
            value={resetForm.email}
            onChange={handleInputChange}
          />
        </div>

        <Button name={'Request reset link'} />
      </form>
    </div>
  );
}
