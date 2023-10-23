import React, { useState } from 'react';
import Survey from './Survey';

const TermsOfService = () => {
  return (
    <div className='p-4 md:py-16'>
      <h3 className='md:mt-0 md:mb-4'>Tervetuloa ilmoittautumaan Uraohjain-palveluun!</h3>
      <p>
        Varaa ilmoittautumiseen aikaa noin 20 minuuttia. Aloita ilmoittautuminen täyttämällä
        taustoittava kysely ammatillisesta osaamisestasi. Tämän jälkeen pääset täyttämään
        henkilötietosi ja varaamaan ajan aloitustapaamiseen. Ilmoittautuaksesi palveluun, sinun
        tulee hyväksyä tietosuojaseloste ja suostumus tietojen vaihtoon. Hyväksyn
        tietosuojaselosteen. Hyväksyn osallistumiseni Uraohjain+ -kehityshankkeeseen.
      </p>
      <div className='form-control w-3/4 burgundy-color mt-8 text-lg'>
        <label className='cursor-pointer label justify-start'>
          <input type='checkbox' name='privacy' id='privacy' className='checkbox mr-4 bg-neutral' />
          <span htmlFor='privacy'>Hyväksyn tietosuojaselosteen.</span>
        </label>
        <label className='cursor-pointer label justify-start'>
          <input
            type='checkbox'
            name='information'
            id='information'
            className='checkbox mr-4 bg-neutral'
          />
          <span htmlFor='information'>
            Hyväksyn tietojen vaihdon Uraohjain-palvelu toteuttajien kesken.
          </span>
        </label>
      </div>
    </div>
  );
};

export default TermsOfService;
