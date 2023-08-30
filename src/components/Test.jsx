import React, { useState } from 'react';
import SignupForm from '../components/SignupForm';

const Test = () => {
  const [answers, setAnswers] = useState({
    unemployement: '',
    interest: '',
    language: '',
    diploma: '',
  });

  const [testPassed, setTestPassed] = useState(false);

  const handleAnswerChange = (name, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
  };

  const handleNextClick = () => {
    const allYesSelected = Object.values(answers).every((answer) => answer === 'Kyllä');
    setTestPassed(allYesSelected);
  };

  return (
    <div className='pink-bg rounded-md' id='pink-box'>
      {testPassed ? (
        // <p className='text-center text-green-500 text-2xl'>Welcome</p>
        <div>
          <SignupForm />
        </div>
      ) : (
        <div className='p-10'>
          <h3>Tee testi ja ilmoittaudu Uraohjain+ -palveluun!</h3>
          <ol className='list-decimal ml-5'>
            <li className='my-4'>Oletko ilmoittautunut työttömäksi työnhakijaksi?</li>
            <div className='mb-8'>
              <input
                type='radio'
                name='unemployement'
                className='radio'
                onChange={() => handleAnswerChange('unemployement', 'Kyllä')}
              />
              <span className='mx-4 font-bold'>Kyllä</span>
              <input
                type='radio'
                name='unemployement'
                className='radio'
                onChange={() => handleAnswerChange('unemployement', 'Ei')}
              />
              <span className='mx-4 font-bold'>Ei</span>
            </div>
            <li className='my-4'>
              Onko tavoitteesi työllistyä ICT-, ohjelmistokehitys-, tai media-alalle?
            </li>
            <input
              type='radio'
              name='interest'
              className='radio'
              onChange={() => handleAnswerChange('interest', 'Kyllä')}
            />
            <span className='mx-4 font-bold'>Kyllä</span>
            <input
              type='radio'
              name='interest'
              className='radio'
              onChange={() => handleAnswerChange('interest', 'Ei')}
            />
            <span className='mx-4 font-bold'>Ei</span>

            <li className='my-4'>Onko suomen/englannin kielen tasosi vähintään B2?</li>
            <input
              type='radio'
              name='language'
              className='radio'
              onChange={() => handleAnswerChange('language', 'Kyllä')}
            />
            <span className='mx-4 font-bold'>Kyllä</span>
            <input
              type='radio'
              name='language'
              className='radio'
              onChange={() => handleAnswerChange('language', 'Ei')}
            />
            <span className='mx-4 font-bold'>Ei</span>

            <li className='my-4'>Onko sinulla toisen tai korkea-asteen tutkinto?</li>
            <input
              type='radio'
              name='diploma'
              className='radio'
              onChange={() => handleAnswerChange('diploma', 'Kyllä')}
            />
            <span className='mx-4 font-bold'>Kyllä</span>
            <input
              type='radio'
              name='diploma'
              className='radio'
              onChange={() => handleAnswerChange('diploma', 'Ei')}
            />
            <span className='mx-4 font-bold'>Ei</span>
          </ol>
          <div className='flex justify-end mt-4'>
            <button className='btn btn-lg w-40' onClick={handleNextClick}>
              Seuraava
            </button>
          </div>
        </div>
      )}
      {testPassed === false && <p className='text-center text-red-500 text-2xl'>Failed</p>}
    </div>
  );
};

export default Test;
