'use client';
import { useState } from 'react';

import ParentModal from '@/components/modals/parentModal';
import Toggle from '@/components/Forms/toggle';
import RadioGroup from '@/components/Forms/radioGroup';

import pushNotifications from '@/constants/profile-settings/pushNotificationOptions';

export default function PushnotificationPage() {
  const handleOptionChange = () => {
    //... statements
  };

  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  const children = (
    <p>Options to for how long the notifications should be off</p>
  );

  return (
    <>
      <h2 className='mb-6 text-xl font-semibold'>Push Notifications</h2>
      <div className='my-4 flex justify-between'>
        <p>Pause all</p>
        <Toggle status={false} action={() => setIsOpen(true)} />
      </div>

      <ParentModal isOpen={isOpen} handleClose={handleClose}>
        {children}
      </ParentModal>

      <div className='grid gap-10'>
        {pushNotifications.map((item, index) => {
          return (
            <div key={index} className='pb-5 border-b'>
              <h2 className='font-semibold mb-2 text-lg'>{item.heading}</h2>
              <RadioGroup
                options={item.options}
                onChange={handleOptionChange}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
