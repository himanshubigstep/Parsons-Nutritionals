import React from 'react';
import ContactCities from './ContactCities';

const locations = [
  { name: "New Delhi", latitude: 28.6139, longitude: 77.209 },
  { name: "Mumbai", latitude: 19.076, longitude: 72.8777 },
];

const ContactAddress = ({contactPageData}: {contactPageData: any}) => {
  const contactPageDetails = contactPageData
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL
  return (
    <div className='w-[95%] mx-auto md:w-[50%] h-full md:py-8 md:px-8 py-2 px-2 relative mb-8 flex flex-col rounded-tl-[2rem] rounded-bl-[2rem] rounded-tr-[0] rounded-br-[0] bg-[#0059DF]'>
      <div className='w-full h-full py-16'>

        <ContactCities mapLocations = {contactPageDetails?.MapLocation} />

        <div className='relative w-full h-auto flex flex-col gap-4 py-8'>
          <div className='w-full h-auto flex items-start gap-4'>
            <span className='md:w-[15rem] w-[30rem] flex gap-2 rounded-full text-white text-md font-medium'>
              <img
                className='bg-white flex w-[2rem] h-[2rem] object-contain rounded-full filter invert p-[5px]'
                src={ imageBaseUrl + contactPageDetails?.Address?.icon?.data?.attributes?.formats?.small?.url}
                alt={contactPageDetails?.Address?.icon?.data?.attributes?.formats?.small?.name}
              />
              {contactPageDetails?.Address?.title}
            </span>
            <span className='flex gap-2 rounded-full text-white text-md font-medium'>
              {contactPageDetails?.Address?.content}
            </span>
          </div>
            {/* <div className='w-full h-auto flex items-center gap-4'>
              <span className='w-[7rem] flex gap-2 rounded-full text-white text-md font-medium'>
                <img
                  className='bg-white flex w-[2rem] h-[2rem] object-contain rounded-full filter invert p-[5px]'
                  src={contactPageDetails?.Phone?.icon?.data?.attributes?.formats?.small?.url}
                  alt={contactPageDetails?.Phone?.icon?.data?.attributes?.formats?.small?.name}
                />
                {contactPageDetails?.Phone?.title}
              </span>
              <span className='flex gap-2 rounded-full text-white text-md font-medium'>
                {contactPageDetails?.Phone?.content}
              </span>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
