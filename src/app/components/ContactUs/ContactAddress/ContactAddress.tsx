import React from 'react';
import ContactCities from './ContactCities';

const locations = [
  { name: "New Delhi", latitude: 28.6139, longitude: 77.209 },
  { name: "Mumbai", latitude: 19.076, longitude: 72.8777 },
];

const ContactAddress = () => {

  return (
    <div className='w-[95%] mx-auto md:w-[40%] h-full py-8 px-8 relative mb-8 flex flex-col rounded-tl-[2rem] rounded-bl-[2rem] rounded-tr-[0] rounded-br-[0] bg-[#0059DF]'>
      <div className='relative w-full h-full py-16'>
        {/* <img
          src='https://raw.githubusercontent.com/gist/iashris/1b806cb925dcdb05c1b3ae756d6c76cc/raw/b9a1642fe66ac0fdb84118dfb34663da7d1ed81e/india.svg'
          className='w-full h-auto'
          alt='map'
        /> */}

        <ContactCities />

        <div className='relative w-full h-auto flex flex-col gap-4 py-8'>
          <div className='w-full h-auto flex items-start gap-4'>
            <span className='w-[10rem] flex gap-2 rounded-full text-white text-lg font-medium'>
              <img
                className='bg-white flex w-[2rem] h-[2rem] object-contain rounded-full'
                src=''
                alt=''
              />
              Address
            </span>
            <span className='flex gap-2 rounded-full text-white text-md font-medium'>
              Plot No. 5, Site IV, Sahibabad Industrial Area, Ghaziabad, Uttar Pradesh (India)
            </span>
          </div>
          <div className='w-full h-auto flex items-start gap-4'>
            <span className='w-[10rem] flex gap-2 rounded-full text-white text-lg font-medium'>
              <img
                className='bg-white flex w-[2rem] h-[2rem] object-contain rounded-full'
                src=''
                alt=''
              />
              Phone
            </span>
            <span className='flex gap-2 rounded-full text-white text-md font-medium'>
              +91-(120)-2775705 / 3211400
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
