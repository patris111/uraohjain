import React from 'react';

const Test = () => {
  return (
    <div class='pink-bg p-10 rounded-md' id='pink-box'>
      <h3>Tee testi ja ilmoittaudu Uraohjain+ -palveluun!</h3>
      <ol class='list-decimal ml-5'>
        <li class='my-4'>Oletko ilmoittautunut työttömäksi työnhakijaksi?</li>
        <div class='mb-8'>
          <input type='radio' name='unemployement' class='radio' />
          <span class='mx-4 font-bold'>Kyllä</span>
          <input type='radio' name='unemployement' class='radio' />
          <span class='mx-4 font-bold'>Ei</span>
        </div>
        <li class='my-4'>
          Onko tavoitteesi työllistyä ICT-, ohjelmistokehitys-, tai media-alalle?
        </li>
        <input type='radio' name='interest' class='radio' />
        <span class='mx-4 font-bold'>Kyllä</span>
        <input type='radio' name='interest' class='radio' />
        <span class='mx-4 font-bold'>Ei</span>

        <li class='my-4'>Onko suomen/englannin kielen tasosi vähintään B2?</li>
        <input type='radio' name='language' class='radio' />
        <span class='mx-4 font-bold'>Kyllä</span>
        <input type='radio' name='language' class='radio' />
        <span class='mx-4 font-bold'>Ei</span>

        <li class='my-4'>Onko sinulla toisen tai korkea-asteen tutkinto?</li>
        <input type='radio' name='diploma' class='radio' />
        <span class='mx-4 font-bold'>Kyllä</span>
        <input type='radio' name='diploma' class='radio' />
        <span class='mx-4 font-bold'>Ei</span>
      </ol>
      <div class='flex justify-end mt-4'>
        <button class='btn btn-lg w-40'>Seuraava</button>
      </div>
    </div>
  );
};

export default Test;
