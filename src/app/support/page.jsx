'use client';
import Button, { IconButton } from '@/components/Forms/button';
import InputField from '@/components/Forms/inputWithLabel';
import SpecializedLayout from '@/components/Layout/SpecializedLayout';
import ContactMediumItem from '@/components/Support/ContactMediumItem';
import FaqContainer from '@/components/Support/FaqContainer';
import {
  AiFillHome,
  AiFillTwitterCircle,
  BsFacebook,
  RiInstagramFill,
} from '@/constants/icons/icons';

export default function page() {
  return (
    <SpecializedLayout
      heroImg='/Images/support/bg.jpeg'
      title='Support'
      description="Here's how you can contact us and also some frequently asked questions."
    >
      <div className='flex flex-col my-10 space-y-16 md:space-y-0 md:space-x-20 md:flex-row'>
        <div className='flex-1 col'>
          <div className='grid grid-cols-1 gap-3 mb-3 md:grid-cols-2'>
            <ContactMediumItem
              title='Social media'
              description="Pick your favorite social media platform to reach our team.
                We're available to talk to you 24/7 all day everyday."
            >
              <div className='mt-2 space-x-3 row'>
                <IconButton>
                  <BsFacebook color='#777' />
                </IconButton>
                <IconButton>
                  <AiFillTwitterCircle color='#777' />
                </IconButton>
                <IconButton>
                  <RiInstagramFill color='#777' />
                </IconButton>
              </div>
            </ContactMediumItem>
            <ContactMediumItem
              title='Physical office'
              description=' If you have specific complaints concerning security, or criminal
              offenses, you can come visit us at our physical office. Our
              office is also open to those seeking to do tours, all you need
              to do is contact our team.'
            >
              <div className='items-center mt-2 space-x-3 row'>
                <IconButton>
                  <AiFillHome color='#777' />
                </IconButton>
                <div className='text-xs text-secondary'>
                  No 33, Gbadamosi road. Abakiliki.
                </div>
              </div>
            </ContactMediumItem>
          </div>
          <div className='relative my-10 text-center border'>
            <div className='absolute px-3 transform -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2'>
              Or Send us an Email
            </div>
          </div>
          <form className='space-y-3 col'>
            <div className='space-y-3 md:space-y-0 md:space-x-3 col-md-row'>
              <div className='flex-1 col'>
                <InputField label='Full name' className='flex-1' />
              </div>
              <div className='flex-1 col'>
                <InputField label='Email address' className='flex-1' />
              </div>
            </div>
            <div className='space-x-3 row'>
              <div className='flex-1 col'>
                <InputField label='Subject' className='flex-1' />
              </div>
            </div>
            <div className='space-x-3 row'>
              <div className='flex-1 col'>
                <InputField
                  row={5}
                  label='Message'
                  className='flex-1'
                  type='textarea'
                />
              </div>
            </div>
            <div className='space-x-3 row'>
              <Button name='Submit' />
            </div>
          </form>
        </div>
        <div className='flex-1 col'>
          <FaqContainer />
        </div>
      </div>
    </SpecializedLayout>
  );
}
