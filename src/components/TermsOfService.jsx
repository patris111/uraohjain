import React, { useState } from 'react';
import Survey from './Survey';

const TermsOfService = () => {
  return (
    <div className='p-2 md:p-18'>
      <h3 className='md:mt-0 md:mb-8'>Tervetuloa ilmoittautumaan Uraohjain-palveluun!</h3>
      <p>
        Varaa ilmoittautumiseen aikaa noin 20 minuuttia. Aloita ilmoittautuminen täyttämällä
        taustoittava kysely ammatillisesta osaamisestasi. Tämän jälkeen pääset täyttämään
        henkilötietosi ja varaamaan ajan aloitustapaamiseen. Ilmoittautuaksesi palveluun, sinun
        tulee hyväksyä tietosuojaseloste ja suostumus tietojen vaihtoon. Hyväksyn
        tietosuojaselosteen. Hyväksyn osallistumiseni Uraohjain+ -kehityshankkeeseen.
      </p>
      <div className='flex flex-col'>
        <input type='checkbox' name='privacy' id='privacy' />
        <label htmlFor='privacy'>Hyväksyn tietosuojaselosteen.</label>
        <input type='checkbox' name='information' id='information' />
        <label htmlFor='information'>
          Hyväksyn tietojen vaihdon Uraohjain-palvelu toteuttajien kesken.
        </label>
      </div>
    </div>
  );
};

export default TermsOfService;
