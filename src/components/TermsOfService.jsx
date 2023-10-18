import React from 'react';

const TermsOfService = () => {
  return (
    <div>
      <form className='p-8 md:p-18'>
        <h3 className='mt-0 mb-20'>Tervetuloa ilmoittautumaan Uraohjain-palveluun!</h3>
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

        <div className='flex justify-end'>
          <a href='/' className='btn btn-outline'>
            Seuraava
          </a>
        </div>
      </form>
    </div>
  );
};

export default TermsOfService;
