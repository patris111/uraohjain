import { useState } from 'react';
import useMultistepForm from '../hooks/useMultistepForm';
import TermsOfService from './TermsOfService';
import Survey from './Survey';
import Booking from './Booking';

const MultiStepper = () => {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <TermsOfService />,
    <Booking />,
    <Survey />,
  ]);

  return (
    <div>
      <form>
        <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '.5rem',
            justifyContent: 'flex-end',
          }}
        >
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
    </div>
  );
};

export default MultiStepper;
