import React from 'react';

const SignupForm = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <form className='p-14'>
        <h3 className='mt-0 mb-24'>Henkilötiedot</h3>

        <div className='flex flex-wrap mb-8'>
          <div className='md:w-1/2 pr-6 relative z-0 w-full mb-6 group'>
            <input
              className='block py-2.5 px-0 w-full text-xl text-gray-950 bg-transparent border-0 border-b-2 border-red-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer'
              id='first-name'
              type='text'
              required
            />
            <label
              className='font-bold peer-focus:font-bold absolute text-2xl text-red-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              for='first-name'
            >
              Etunimi
            </label>
          </div>
          <div className='md:w-1/2 relative z-0 w-full mb-6 group'>
            <input
              className='block py-2.5 px-0 w-full text-xl text-gray-950 bg-transparent border-0 border-b-2 border-red-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer'
              id='last-name'
              type='text'
              required
            />
            <label
              className='font-bold peer-focus:font-bold absolute text-2xl text-red-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              for='last-name'
            >
              Sukunimi
            </label>
          </div>
        </div>
        <div className='flex flex-wrap mb-8'>
          <div className='md:w-2/3 pr-6 relative z-0 w-full mb-6 group'>
            <input
              className='block py-2.5 px-0 w-full text-xl text-gray-950 bg-transparent border-0 border-b-2 border-red-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer'
              id='email'
              type='text'
              required
            />
            <label
              className='font-bold peer-focus:font-bold absolute text-2xl text-red-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              for='email'
            >
              Sähköposti
            </label>
          </div>
          <div className='md:w-1/3 relative z-0 w-full mb-6 group'>
            <input
              className='block py-2.5 px-0 w-full text-xl text-gray-950 bg-transparent border-0 border-b-2 border-red-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer'
              id='age'
              type='text'
              required
            />
            <label
              className='font-bold peer-focus:font-bold absolute text-2xl text-red-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              for='age'
            >
              Ikä
            </label>
          </div>
        </div>
        <div className='flex flex-wrap mb-8'>
          <div className='relative z-0 w-full mb-6 group'>
            <textarea
              className='block py-2.5 px-0 w-full text-xl text-gray-950 bg-transparent border-0 border-b-2 border-red-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer'
              id='description'
              rows='1'
              required
            />
            <label
              className='font-bold peer-focus:font-bold absolute text-2xl text-red-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              for='description'
            >
              Kerro lyhyesti työkokemuksestasi; Millaisia työnimikkeitä ja tehtäviä sinulla on
              ollut?
            </label>
          </div>
        </div>
        <div className='flex flex-wrap mb-8'>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              className='block py-2.5 px-0 w-full text-xl text-gray-950 bg-transparent border-0 border-b-2 border-red-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer'
              id='cv'
              type='text'
            />
            <label
              className='font-bold peer-focus:font-bold absolute text-2xl text-red-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              for='cv'
            >
              CV, Linkedin (vapaaehtoinen)
            </label>
          </div>
        </div>
        <button class='btn btn-outline float-right'>Lähetä</button>
      </form>
      <img
        src='https://images.unsplash.com/photo-1519070543065-ac1764985512?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6095&q=80'
        alt=''
        className='w-full h-full'
      />
    </div>
  );
};

export default SignupForm;
