import React from 'react';
import { motion } from 'framer-motion';

const FinalStep = () => {
  return (
    <motion.div
      className='flex flex-col items-center px-6 py-24'
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: 'spring', stiffness: 80, duration: 0.5 }}
    >
      <h3>Kiitos ilmoittautumisestasi Uraohjain-palveluun!</h3>
      <p>
        Tarkemmat ohjeet jatkosta löydät bookings-varauksen vastausviestistä ja saat myös
        muistutuksen sähköpostiin ennen aloitustapaamista.
      </p>
    </motion.div>
  );
};

export default FinalStep;
