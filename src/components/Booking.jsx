import React from 'react';

const Booking = () => {
  return (
    <div className='mb-8'>
      <iframe
        src='https://outlook.office365.com/owa/calendar/Uraohjainaloitustapaaminen@opetus.hel.fi/bookings/'
        id='booking-iframe'
      ></iframe>
    </div>
  );
};

export default Booking;
