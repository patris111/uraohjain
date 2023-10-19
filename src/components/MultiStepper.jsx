import { useState } from 'react';
import useMultistepForm from '../hooks/useMultistepForm';
import TermsOfService from './TermsOfService';
import Survey from './Survey';
import Booking from './Booking';

const MultiStepper = () => {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <TermsOfService />,
    <Survey />,
    <Booking />,
  ]);

  return (
    <div className='md:grid md:grid-cols-2'>
      <form className='p-8 md:p-18 pink-bg'>
        <div>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div>
          {!isFirstStep && (
            <button type='button' onClick={back}>
              Edellinen
            </button>
          )}
          <button onClick={next} type='button'>
            {isLastStep ? 'Finish' : 'Seuraava'}
          </button>
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
