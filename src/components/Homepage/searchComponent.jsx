import { useState } from 'react';

import SmallButton from '../Buttons/smallButtons';
import InputField from '../Forms/inputWithoutLabel';

import { updateFormState } from '@/utils/formUtils';

export default function Search({ section, handleSearch }) {
  const [searchForm, setSearchForm] = useState({
    search: '',
  });
  const handleInputChange = (event) => {
    updateFormState(
      event.target.name,
      event.target.value,
      searchForm,
      setSearchForm,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(); // Call handleSignIn function here
  };

  return (
    <div
      className={`max-xmd:flex hidden  w-full gap-2 max-md:justify-center h-fit items-center px-5 ${
        section === 'navbar'
          ? ' max-md:flex flex-wrap hidden  bg-white     '
          : '  bg-[#8C8FA7]/50  py-6'
      }`}
    >
      <div
        className={`${
          section === 'navbar'
            ? ' min-w-[220px] w-full border border-primary rounded-lg'
            : ''
        }`}
      >
        <InputField
          placeholder={'Search for places or events'}
          name={'search'}
          type={'text'}
          value={searchForm.search}
          onChange={handleInputChange}
        />
      </div>

      <div className={`${section === 'navbar' ? 'grid w-[80%] mx-auto' : ''}`}>
        <SmallButton
          name={'Search'}
          bgColor={'primary'}
          textColor={'white'}
          borderColor={'gray-400'}
          action={handleSubmit}
        />
      </div>
    </div>
  );
}
