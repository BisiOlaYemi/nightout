'use client';

import { useState } from 'react';

import Button from '@/components/Forms/button';
import Input from '@/components/Forms/inputWithoutLabel';

import { updateFormState } from '@/utils/formUtils';

export default function ResetPasswordPage({ handleResetPassword }) {
  const [passwordForm, setPasswordForm] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    updateFormState(
      event.target.name,
      event.target.value,
      passwordForm,
      setPasswordForm,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleResetPassword(); // Call handleSignIn function here
  };

  return (
    <div className='p-6 grid items-center my-auto'>
      <h1 className='text-5xl font-bold w-[40%] my-6 text-primary'>
        Reset Password
      </h1>

      <p className='text-primary/50 my-4'>Enter new NightOut password!</p>

      <form onSubmit={handleSubmit} className='w-full grid gap-6'>
        <div>
          <Input
            type='password'
            name='password'
            placeholder='New password'
            value={passwordForm.password}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Input
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            value={passwordForm.confirmPassword}
            onChange={handleInputChange}
          />
        </div>

        <Button name={'Set password'} />
      </form>
    </div>
  );
}
