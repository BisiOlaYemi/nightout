import { useState } from 'react';

const categories = [
  { title: 'People', description: 'Find people near you', imageSrc: 'https://i.pinimg.com/236x/af/b1/01/afb101d8770778517451d72d559e4d5f.jpg' },
  { title: 'Events', description: 'Discover upcoming events', imageSrc: 'https://i.pinimg.com/236x/48/57/9e/48579ebafada9ce19021f5b64f2a9a2d.jpg' },
  { title: 'Restaurants', description: 'Explore local restaurants', imageSrc: 'https://i.pinimg.com/236x/f9/36/0d/f9360d4c700e84b9d81479bc7e1ab1db.jpg' },
  { title: 'Eateries', description: 'Discover new places to eat', imageSrc: 'https://i.pinimg.com/236x/0f/65/af/0f65af5929ae980bcb428417a8a0476d.jpg' },
  { title: 'Clubs', description: 'Party time ', imageSrc: 'https://i.pinimg.com/236x/db/15/83/db158336da5529db7763e980d2648c66.jpg' },
  { title: 'Leisure', description: 'Recreational centers', imageSrc: 'https://i.pinimg.com/236x/66/03/0f/66030f958d80a245193033114df179ed.jpg' },
  { title: 'Cinema', description: 'Movies shop ', imageSrc: 'https://i.pinimg.com/236x/88/80/b3/8880b3b81ac7a3c0dece4f318670f0ba.jpg' },
  { title: 'Museum', description: ' Vintage centers', imageSrc: 'https://i.pinimg.com/236x/11/59/26/115926459d372565106397e525e33978.jpg' },
];

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className='flex flex-col items-center pt-8'>
      <input
        className='px-4 py-2 w-full rounded-full border-gray-400 border-2 mb-8'
        type='text'
        placeholder='Search '
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <div className='flex flex-nowrap justify-center'>
        {filteredCategories.map((category) => (
          <div key={category.title} className='max-w-sm w-full sm:w-1/2 lg:w-1/4 rounded-none overflow-hidden'>
            <div className='py-2 px-2'>
              <img className='rounded-lg' src={category.imageSrc} alt={category.title} />
              <h2 className='text-lg font-bold mb-2'>{category.title}</h2>
              <p className='text-gray-600 text-base'>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
