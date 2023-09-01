import React, { useState } from 'react';
import SignupForm from './SignupForm';

const TestForm = () => {
  const [answers, setAnswers] = useState({
    unemployement: '',
    interest: '',
    language: '',
    diploma: '',
  });

  const [showRadioForm, setShowRadioForm] = useState(true);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  // const [testPassed, setTestPassed] = useState(false);

  const handleAnswerChange = (name, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
  };

  const handleNextClick = () => {
    const allYesSelected = Object.values(answers).every((answer) => answer === 'Yes');

    if (allYesSelected) {
      setShowRadioForm(false);
      setShowSignupForm(true);
      setShowMessage(false);
    } else {
      setShowRadioForm(false);
      setShowSignupForm(false);
      setShowMessage(true);
    }
  };

  return (
    <div className='pink-bg rounded-md' id='pink-box'>
      {showRadioForm && (
        <div className='p-10'>
          <h3 className='mb-14'>Tee testi ja ilmoittaudu Uraohjain+ -palveluun!</h3>
          <ol className='list-decimal ml-5'>
            <li className='my-4'>Oletko ilmoittautunut työttömäksi työnhakijaksi?</li>
            <div className='mb-8'>
              <input
                type='radio'
                name='unemployement'
                className='radio'
                onChange={() => handleAnswerChange('unemployement', 'Yes')}
              />
              <span className='mx-4 font-bold'>Kyllä</span>
              <input
                type='radio'
                name='unemployement'
                className='radio'
                onChange={() => handleAnswerChange('unemployement', 'No')}
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
              onChange={() => handleAnswerChange('interest', 'Yes')}
            />
            <span className='mx-4 font-bold'>Kyllä</span>
            <input
              type='radio'
              name='interest'
              className='radio'
              onChange={() => handleAnswerChange('interest', 'No')}
            />
            <span className='mx-4 font-bold'>Ei</span>

            <li className='my-4'>Onko suomen/englannin kielen tasosi vähintään B2?</li>
            <input
              type='radio'
              name='language'
              className='radio'
              onChange={() => handleAnswerChange('language', 'Yes')}
            />
            <span className='mx-4 font-bold'>Kyllä</span>
            <input
              type='radio'
              name='language'
              className='radio'
              onChange={() => handleAnswerChange('language', 'No')}
            />
            <span className='mx-4 font-bold'>Ei</span>

            <li className='my-4'>Onko sinulla toisen tai korkea-asteen tutkinto?</li>
            <input
              type='radio'
              name='diploma'
              className='radio'
              onChange={() => handleAnswerChange('diploma', 'Yes')}
            />
            <span className='mx-4 font-bold'>Kyllä</span>
            <input
              type='radio'
              name='diploma'
              className='radio'
              onChange={() => handleAnswerChange('diploma', 'No')}
            />
            <span className='mx-4 font-bold'>Ei</span>
          </ol>
          <div className='flex justify-end mt-4'>
            <button className='btn btn-lg btn-outline float-right w-40' onClick={handleNextClick}>
              Seuraava
            </button>
          </div>
        </div>
      )}

      {showMessage && (
        <div className='text-center text-red-500 text-2xl mt-4'>Kiitos mielenkiinnostasi!</div>
      )}

      {showSignupForm && <SignupForm />}
    </div>
  );
};

export default TestForm;
