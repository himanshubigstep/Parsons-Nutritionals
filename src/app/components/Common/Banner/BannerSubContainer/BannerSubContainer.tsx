import React from 'react';
import './BannerSubContainer.css'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt();

interface BannerSubContainerProps {
  BannerContainerData: {
    title: string;
    content: string;
  };
  aboutUsBannerContent?: any;
}

const BannerSubContainer: React.FC<BannerSubContainerProps> = ({ BannerContainerData }) => {

  return (
    <div className='banner-sub-container md:absolute md:mt-0 mt-[-5rem] left-0 right-0 md:top-[80%] top-1/2 w-[680px] mx-auto dark:bg-black bg-white flex justify-center items-center flex-col p-[2px] rounded-2xl'>
      <div className='border-[1px] border-solid border-gray-300 dark:border-gray-700 rounded-2xl w-full h-full flex justify-center items-center flex-col px-4 py-4'>
        <h1 className='text-3xl font-extrabold dark:text-white mb-2 text-center'>{BannerContainerData?.title}</h1>
        <p
          className='mb-4 text-md text-center text-black font-medium dark:text-gray-400'
        >
          {BannerContainerData?.content}
        </p>
      </div>
    </div>
  );
}

export default BannerSubContainer;
