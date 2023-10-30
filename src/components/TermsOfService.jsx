import React, { useState } from 'react';
import Survey from './Survey';

const TermsOfService = () => {
  return (
    <div className='p-4 md:py-16'>
      <h3 className='md:mt-0 md:mb-4'>Tervetuloa ilmoittautumaan Uraohjain-palveluun!</h3>
      <p>
        Varaa ilmoittautumiseen aikaa noin 20 minuuttia. Aloita ilmoittautuminen täyttämällä
        taustoittava kysely ammatillisesta osaamisestasi. Tämän jälkeen pääset täyttämään
        henkilötietosi ja varaamaan ajan aloitustapaamiseen. Aloitustapaamisessa vahvistetaan
        osallistumisesi Uraohjain-palveluun. Ilmoittautuaksesi palveluun sinun tulee hyväksyä
        tietosuojaseloste ja suostumus tietojen vaihtoon Uraohjain-palvelun toteuttajien kesken.
      </p>
      <div className='form-control  burgundy-color mt-8 text-lg'>
        <label className='cursor-pointer label justify-start'>
          <input type='checkbox' name='privacy' id='privacy' className='checkbox mr-4 bg-neutral' />
          <div class='flex flex-col md:flex-row'>
            <span htmlFor='privacy'>Hyväksyn tietosuojaselosteen.</span>
            <span class='mx-4'>
              <a class='underline' href='/doc/uraohjain-tietosuojaseloste.pdf' target='_blank'>
                Lue lisää
              </a>
            </span>
          </div>
        </label>
        <label className='cursor-pointer label justify-start'>
          <input
            type='checkbox'
            name='information'
            id='information'
            className='checkbox mr-4 bg-neutral'
          />
          <div class='flex flex-col md:flex-row'>
            <span htmlFor='information'>
              Hyväksyn tietojen vaihdon Uraohjain-palvelu toteuttajien kesken.
            </span>
            <span class='mx-4'>
              <a class='underline' href='/doc/uraohjain-suostumuslomake.pdf' target='_blank'>
                Lue lisää
              </a>
            </span>
          </div>
        </label>
      </div>
      <p class='mt-4'>
        Uraohjain-palvelun aloituspaikkojen määrä on rajallinen. Jos seuraavan kahden viikon
        aloitustapaamisten ajat on täytetty, ilmoitamme tästä seuraavan sivun kyselyn alussa. Löydät
        tiedon kyselyn ylälaidasta. 
      </p>
    </div>
  );
};

export default TermsOfService;
