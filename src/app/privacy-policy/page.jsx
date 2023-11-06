'use client';

import SpecializedLayout from '@/components/Layout/SpecializedLayout';
import content from '@/constants/privacy-policy/content';

export default function Page() {
  return (
    <SpecializedLayout
      heroImg='/Images/privacy-policy/bg.jpeg'
      title='Privacy Policy'
      description="The privacy of our users' information, what we collect and what the information is used for."
    >
      <div className='my-10 space-y-10 md:space-y-16'>
        {content.map((item) => (
          <div key={item.id} className='space-y-2 col-md-row md:space-y-0'>
            <div className='flex-[0.4] font-bold'>{item.title}</div>
            <div
              className='flex-1 space-y-5 col'
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        ))}
      </div>
    </SpecializedLayout>
  );
}
