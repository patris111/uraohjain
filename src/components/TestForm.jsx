import React, { useState, useEffect } from 'react';
import SignupForm from './SignupForm';
import { motion } from 'framer-motion';

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
  const [allRadioChecked, setAllRadioChecked] = useState(false);

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

  useEffect(() => {
    // Check if all radio buttons have been selected (with any value)
    const anyRadioUnselected = Object.values(answers).some((value) => value === '');
    setAllRadioChecked(!anyRadioUnselected);
  }, [answers]);

  return (
    <div className='pink-bg rounded-md mt-8' id='pink-box'>
      {showRadioForm && (
        <motion.div
          className='p-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1 }}
        >
          <h3 className='mb-14'>Tee testi ja ilmoittaudu Uraohjain+ -palveluun!</h3>
          <ol className='list-decimal ml-5'>
            <li className='my-4'>Oletko ilmoittautunut työttömäksi työnhakijaksi?</li>
            <div className='mb-8'>
              <input
                type='radio'
                name='unemployement'
                className='radio bg-slate-100'
                onChange={() => {
                  handleAnswerChange('unemployement', 'Yes');
                }}
              />
              <span className='mx-4 font-bold'>Kyllä</span>
              <input
                type='radio'
                name='unemployement'
                className='radio bg-slate-100'
                onChange={() => {
                  handleAnswerChange('unemployement', 'No');
                }}
              />
              <span className='mx-4 font-bold'>Ei</span>
            </div>
            <li className='my-4'>
              Onko tavoitteesi työllistyä ICT-, ohjelmistokehitys-, tai media-alalle?
            </li>
            <input
              type='radio'
              name='interest'
              className='radio bg-slate-100'
              onChange={() => {
                handleAnswerChange('interest', 'Yes');
              }}
            />
            <span className='mx-4 font-bold'>Kyllä</span>
            <input
              type='radio'
              name='interest'
              className='radio bg-slate-100'
              onChange={() => {
                handleAnswerChange('interest', 'No');
              }}
            />
            <span className='mx-4 font-bold'>Ei</span>

            <li className='my-4'>Onko suomen/englannin kielen tasosi vähintään B2?</li>
            <input
              type='radio'
              name='language'
              className='radio bg-slate-100'
              onChange={() => {
                handleAnswerChange('language', 'Yes');
              }}
            />
            <span className='mx-4 font-bold'>Kyllä</span>
            <input
              type='radio'
              name='language'
              className='radio bg-slate-100'
              onChange={() => {
                handleAnswerChange('language', 'No');
              }}
            />
            <span className='mx-4 font-bold'>Ei</span>

            <li className='my-4'>Onko sinulla toisen tai korkea-asteen tutkinto?</li>
            <input
              type='radio'
              name='diploma'
              className='radio bg-slate-100'
              onChange={() => {
                handleAnswerChange('diploma', 'Yes');
              }}
            />
            <span className='mx-4 font-bold'>Kyllä</span>
            <input
              type='radio'
              name='diploma'
              className='radio bg-slate-100'
              onChange={() => {
                handleAnswerChange('diploma', 'No');
              }}
            />
            <span className='mx-4 font-bold'>Ei</span>
          </ol>
          <div className='flex justify-end mt-10 md:mt-4'>
            <button
              className={`btn btn-lg btn-outline w-40 ${
                allRadioChecked ? '' : 'cursor-not-allowed opacity-80'
              }`}
              onClick={handleNextClick}
              disabled={!allRadioChecked}
            >
              Seuraava
            </button>
          </div>
        </motion.div>
      )}

      {showMessage && (
        <motion.div
          className='flex flex-col items-center px-8 py-48'
          initial={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: 'spring', stiffness: 80, duration: 0.5 }}
        >
          <h3 className='text-center'>Kiitos mielenkiinnostasi!</h3>
          <p className='text-center'>
            Valitettavasti et täytä <br />
            Uraohjain+ -palvelun <br />
            osallistumisvaatimuksia.
            <br /> Suosittelemme olemaan yhteydessä xxx <br />
            sinulle sopivan palvelun löytämiseksi.
          </p>
        </motion.div>
      )}

      {showSignupForm && (
        <motion.div
          initial={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: 'spring', stiffness: 50, duration: 2 }}
        >
          <SignupForm />
        </motion.div>
      )}
    </div>
  );
};

export default TestForm;
