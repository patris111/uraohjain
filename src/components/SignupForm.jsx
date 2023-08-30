import React from 'react';

const SignupForm = () => {
  return (
    <div>
      <form class='w-full max-w-lg'>
        <h3 class='mb-4'>Henkilötiedot</h3>
        <div class='flex flex-wrap mb-8'>
          <div class='w-full md:w-1/2 pr-6 mb-8 md:mb-0'>
            <label
              class='block  tracking-wide burgundy-color text-lg font-semibold mb-2'
              for='first-name'
            >
              Etunimi
            </label>
            <input
              class='appearance-none block w-full bg-white burgundy-color border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500'
              id='first-name'
              type='text'
            />
          </div>
          <div class='w-full md:w-1/2'>
            <label
              class='block  tracking-wide burgundy-color text-lg font-semibold mb-2'
              for='last-name'
            >
              Sukunimi
            </label>
            <input
              class='appearance-none block w-full bg-white burgundy-color border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500'
              id='last-name'
              type='text'
            />
          </div>
        </div>
        <div class='flex flex-wrap mb-8'>
          <div class='w-full md:w-2/3 pr-6'>
            <label
              class='block  tracking-wide burgundy-color text-lg font-semibold mb-2'
              for='email'
            >
              Sähköposti
            </label>
            <input
              class='appearance-none block w-full bg-white burgundy-color border border-gray-200 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500'
              id='email'
              type='text'
            />
          </div>
          <div class='w-full md:w-1/3'>
            <label class='block tracking-wide burgundy-color text-lg font-semibold mb-2' for='age'>
              Ikä
            </label>
            <input
              class='appearance-none block w-full bg-white burgundy-color border border-gray-200 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500'
              id='age'
              type='text'
            />
          </div>
        </div>
        <div class='w-full mb-8'>
          <label
            class='block  tracking-wide burgundy-color text-lg font-semibold mb-2'
            for='description'
          >
            Kerro lyhyesti työkokemuksestasi; Millaisia työnimikkeitä ja tehtäviä sinulla on ollut?
          </label>
          <textarea
            class='appearance-none block w-full bg-white burgundy-color border border-gray-200 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500'
            id='description'
          />
        </div>
        <div class='w-full mb-8'>
          <label class='block  tracking-wide burgundy-color text-lg font-semibold mb-2' for='cv'>
            CV, Linkedin (vapaaehtoinen)
          </label>
          <input
            class='appearance-none block w-full bg-white burgundy-color border border-gray-200 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500'
            id='cv'
            type='text'
          />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
