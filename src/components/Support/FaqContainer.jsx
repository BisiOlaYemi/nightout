'use client';

import { useState } from 'react';

import AccordionItem from '../AccordionItem';

import faq from '@/constants/support/faq';

export default function FaqContainer() {
  const [active, setActive] = useState(faq[0].id);
  function toggleActive(title) {
    if (active === title) return setActive('');
    setActive(title);
  }
  return (
    <>
      <div className='font-bold'>FAQ</div>
      <p className='text-muted'>
        Here are some frequently asked questions accurately answered. If you
        can&apos;t get adequate clarification, you might need to contact us from
        the contact media.
      </p>
      <div className='mt-5 space-y-3 col'>
        {faq.map((item) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            setActive={toggleActive}
            active={active === item.title}
          >
            {item.description}
          </AccordionItem>
        ))}
      </div>
    </>
  );
}
