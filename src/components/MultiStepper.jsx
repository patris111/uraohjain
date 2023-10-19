import { useState } from 'react';
import useMultistepForm from '../hooks/useMultistepForm';
import TermsOfService from './TermsOfService';
import Survey from './Survey';
import Booking from './Booking';
import FinalStep from './FinalStep';

const MultiStepper = () => {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <TermsOfService />,
    <Survey />,
    <Booking />,
    <FinalStep />,
  ]);

  return (
    <div className='md:grid md:grid-cols-2'>
      <form className='p-8 md:p-18 pink-bg'>
        <p className='text-right p-0 font-semibold'>
          {currentStepIndex + 1} / {steps.length}
        </p>
        {step}
        <div className='flex md:space-x-96 space-x-40 mt-10 md:mt-4 justify-end'>
          {/* {!isFirstStep && (
            <button type='button' className={'btn btn-lg btn-outline w-40'} onClick={back}>
              Edellinen
            </button>
          )} */}

          {!isLastStep && (
            <button type='button' className={'btn btn-lg btn-outline w-40'} onClick={next}>
              {isLastStep ? 'Kiitos!' : 'Seuraava'}
            </button>
          )}
        </div>
      </form>
      <img
        src='/img/register/walking-man.jpg'
        alt=''
        className='hidden md:block bg-cover w-full h-full'
      />
    </div>
  );
};

export default MultiStepper;
