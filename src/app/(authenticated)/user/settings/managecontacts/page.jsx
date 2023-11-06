import Link from 'next/link';

export default function ManageContactsPage() {
  return (
    <div className='font-light'>
      <p className='text-xl font-semibold mb-5'>Manage Contact</p>
      <p>
        The people listed here are contacts you&apos;ve uploaded to Instagram.
        To remove your synced contacts, tap Delete all. Your contacts will be
        re-uploaded the next time Instagram syncs your contacts unless you go to
        your device settings and turn off access to contacts.
      </p>
      <p className='mt-2'>
        Only you can see your contacts, but Instagram uses the info you&apos;ve
        uploaded about your contacts to make friend suggestions for you and
        others and to provide a better experience for everyone.
      </p>

      <div className='mt-6'>
        <div className='flex justify-between pb-5 border-b'>
          <p className='font-medium text-lg'>Synced contacts</p>
          <Link
            className='text-orange text-base font-bold text-center'
            href={'#'}
          >
            Delete All
          </Link>
        </div>

        <div className='mt-7 grid gap-3'>
          {[...Array(10)].map((item, index) => {
            return (
              <div key={index}>
                <p className='font-medium'>Tobi Ikupolati</p>
                <p>09032165478</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
