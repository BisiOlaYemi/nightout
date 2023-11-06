'use client';

import SpecializedLayout from '@/components/Layout/SpecializedLayout';
import content from '@/constants/terms/content';

export default function Page() {
  return (
    <SpecializedLayout
      heroImg='/Images/terms/bg.jpeg'
      title='Terms of Service'
      description="The privacy of our users' information, what we collect and what the information is used for."
    >
      <div className='my-10 space-y-10 md:space-y-16'>
        <p>
          Welcome to the Placio App! This Agreement describes the terms and
          conditions that apply to your use of the Placio App, its services,
          features, and content. Please read this Agreement carefully before
          using the Placio App. By accessing or using the Placio App, you agree
          to be bound by the terms and conditions of this Agreement.
        </p>
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
