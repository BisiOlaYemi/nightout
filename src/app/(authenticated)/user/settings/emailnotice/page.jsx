import Toggle from '@/components/Forms/toggle';

export default function EmailNotifications() {
  const emailNotifications = [
    {
      label: 'Feedback Emails',
      status: false,
      description: 'Give feedback on Placio.',
    },
    {
      label: 'Reminder Emails',
      status: true,
      description: 'Get notifications you may have missed.',
    },
    {
      label: 'Product Emails',
      status: false,
      description: `Get tips and resources about Placio's tools.`,
    },
    {
      label: 'News Emails',
      status: true,
      description: 'Learn about new Placio features.',
    },
    {
      label: 'Support Emails',
      status: false,
      description:
        'Get updates on reports and violations of our Community Guidelines.',
    },
  ];
  return (
    <div className='grid gap-10'>
      {emailNotifications.map((item, index) => {
        return (
          <div key={index} className='pb-5 border-b'>
            <div className='flex items-center justify-between'>
              <p className='text-lg font-semibold '>{item.label}</p>
              <Toggle status={item.status} />
            </div>
            <p className='mt-3'>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
