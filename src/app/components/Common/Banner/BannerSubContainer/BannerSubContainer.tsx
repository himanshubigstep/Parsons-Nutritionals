import React from 'react';
import './BannerSubContainer.css'

interface BannerSubContainerProps {
  BannerContainerData: {
    BannerHeading: string;
    BannerParagraph: string;
  };
}

const BannerSubContainer: React.FC<BannerSubContainerProps> = ({ BannerContainerData }) => {
  const { BannerHeading, BannerParagraph } = BannerContainerData; // Corrected destructuring here

  return (
    <div className='banner-sub-container absolute left-0 right-0 top-[80%] w-[640px] mx-auto bg-white flex justify-center items-center flex-col p-[2px] rounded-2xl'>
      <div className='border-[1px] border-solid border-gray-300 rounded-2xl w-full h-full flex justify-center items-center flex-col px-4 py-4'>
        <h1 className='text-3xl font-extrabold dark:text-white mb-2'>{BannerHeading}</h1>
        <p className='mb-4 text-md text-center text-black font-medium dark:text-gray-400'>{BannerParagraph}</p>
      </div>
    </div>
  );
}

export default BannerSubContainer;
