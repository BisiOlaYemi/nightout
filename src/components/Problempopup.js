
const ProblemPopup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    
      <div className='bg-primary rounded-none p-6 mx-auto'>
        <h2 className='text-lg text-white font-medium mb-4'>Report a Problem</h2>
        <form onSubmit={handleSubmit}>
          <textarea className='w-full h-32 p-2 border-gray-600 rounded-lg mb-4' placeholder="Please describe the problem you're facing"></textarea>
          <input type='file' className='mb-4' />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>
        </form>
      </div>
   
  );
};

export default ProblemPopup;
