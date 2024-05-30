'use client'

import React, { useState } from 'react';
import './AboutTeamSlider.css';

interface TeamMember {
  image: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: string;
          };
        };
      };
    };
  };
  attributes: {
    [x: string]: any;
    name: string;
    role: string;
  };
}

const AboutTeamSlider = ({homePageMembersValue}: {homePageMembersValue: any}) => {
  if (!homePageMembersValue) {
    return null; // Or some other fallback UI if homePageMembersValue is null or undefined
  }
  const aboutUsClientData = homePageMembersValue;
  // const content = typeof aboutUsClientData?.attributes?.career_highlights === 'string' ? aboutUsClientData?.attributes?.career_highlights : '';
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 5;

  const handleClick = (index: any | React.SetStateAction<null>) => {
    setSelectedImageIndex(index === selectedImageIndex ? null : index);
  };

  const handlePageClick = (pageIndex: number) => {
    setStartIndex(pageIndex * imagesPerPage);
    setCurrentPage(pageIndex);
  };

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage < pageCount) {
      handlePageClick(nextPage);
    }
  };

  const handlePrevPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 0) {
      handlePageClick(prevPage);
    }
  };

  const pageCount = Math.ceil(aboutUsClientData.length / imagesPerPage);
  const pages = Array.from({ length: pageCount }, (_, i) => i);

  return (
    <div className='relative w-full max-w-[1280px] flex flex-col items-center gap-8 py-16'>
      <h1 className="text-3xl font-extrabold dark:text-white">Our Team</h1>
      <div className="w-full flex justify-center items-center gap-2 rounded-xl overflow-hidden relative">
        {aboutUsClientData.slice(startIndex, startIndex + imagesPerPage).map((item: TeamMember, index: number) => (
          <div key={index} className={`${selectedImageIndex === index + startIndex ? 'client-width-full' : ''} w-[20%] relative rounded-xl transition-all duration-500 ease-in-out`}>
            <img
              src={item?.attributes?.image?.data?.attributes?.formats?.medium?.url}
              alt='image'
              className={`w-full h-[480px] object-cover rounded-xl cursor-pointer`}
              onClick={() => handleClick(index + startIndex)}
            />
            {selectedImageIndex === index + startIndex && (
              <div className="absolute top-[80%] left-[50%] transform translate-x-[-50%] translate-y-[-80%] px-4 py-4 rounded-xl w-[75%] flex justify-center items-center bg-gray-700 bg-opacity-50 text-white">
                <div>
                  <h3 className="text-2xl font-bold">{item?.attributes?.name}</h3>
                  <p className='font-medium'>
                    {item?.attributes?.role}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
        {pageCount > 1 && (
          <div className="absolute top-[50%] transform translate-y-[-50%] right-0 space-x-2">
            {currentPage > 0 && ( // Show previous button if not on first page
              <button onClick={handlePrevPage} className="h-[5rem] w-[5rem] bg-[#0059DF] opacity-[0.7] rounded-l-[5px] text-white font-medium text-5xl">
                {'<'}
              </button>
            )}
            {currentPage < pageCount - 1 && ( // Show next button if not on last page
              <button onClick={handleNextPage} className="h-[5rem] w-[5rem] bg-[#0059DF] opacity-[0.7] rounded-r-[5px] text-white font-medium text-5xl">
                {'>'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutTeamSlider;
