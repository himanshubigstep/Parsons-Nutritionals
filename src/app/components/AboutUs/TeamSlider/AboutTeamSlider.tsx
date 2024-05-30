'use client'

import React, { useState } from 'react';
import './AboutTeamSlider.css';

const AboutTeamSlider = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 5;

  const ClientImages = [
    {
        images: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg',
        clientName: 'S.S Mann',
        clientDesc: 'S.S. Mann is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg',
        clientName: 'Ratan Tata',
        clientDesc: 'Ratan Tata is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/14251840/pexels-photo-14251840.jpeg',
        clientName: 'Mukesh Ambani',
        clientDesc: 'Mukesh Ambani is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/3714423/pexels-photo-3714423.jpeg',
        clientName: 'Jai Mehta',
        clientDesc: 'Jai Mehta is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/15698156/pexels-photo-15698156/free-photo-of-sad-bride-in-faded-colors.jpeg',
        clientName: 'Adani',
        clientDesc: 'Adani is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/15698156/pexels-photo-15698156/free-photo-of-sad-bride-in-faded-colors.jpeg',
        clientName: 'Adani',
        clientDesc: 'Adani is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/15698156/pexels-photo-15698156/free-photo-of-sad-bride-in-faded-colors.jpeg',
        clientName: 'Adani',
        clientDesc: 'Adani is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/15698156/pexels-photo-15698156/free-photo-of-sad-bride-in-faded-colors.jpeg',
        clientName: 'Adani',
        clientDesc: 'Adani is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/15698156/pexels-photo-15698156/free-photo-of-sad-bride-in-faded-colors.jpeg',
        clientName: 'Adani',
        clientDesc: 'Adani is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/15698156/pexels-photo-15698156/free-photo-of-sad-bride-in-faded-colors.jpeg',
        clientName: 'Adani',
        clientDesc: 'Adani is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/15698156/pexels-photo-15698156/free-photo-of-sad-bride-in-faded-colors.jpeg',
        clientName: 'Adani',
        clientDesc: 'Adani is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/15698156/pexels-photo-15698156/free-photo-of-sad-bride-in-faded-colors.jpeg',
        clientName: 'Adani',
        clientDesc: 'Adani is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/15698156/pexels-photo-15698156/free-photo-of-sad-bride-in-faded-colors.jpeg',
        clientName: 'Adani',
        clientDesc: 'Adani is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/15698156/pexels-photo-15698156/free-photo-of-sad-bride-in-faded-colors.jpeg',
        clientName: 'Adani',
        clientDesc: 'Adani is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
    {
        images: 'https://images.pexels.com/photos/15698156/pexels-photo-15698156/free-photo-of-sad-bride-in-faded-colors.jpeg',
        clientName: 'Adani',
        clientDesc: 'Adani is a qualified Dairy Technologist from National Dairy Research Institute, Karnal. He has more than 17 years of experience with Nestle India Ltd.'
    },
  ]

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

  const pageCount = Math.ceil(ClientImages.length / imagesPerPage);
  const pages = Array.from({ length: pageCount }, (_, i) => i);

  return (
    <div className='relative w-full max-w-[1280px] flex flex-col items-center gap-8 py-16'>
    <h1 className="text-3xl font-extrabold dark:text-white">Our Team</h1>
      <div className="w-full flex justify-center items-center gap-2 rounded-xl overflow-hidden relative">
        {ClientImages.slice(startIndex, startIndex + imagesPerPage).map((data, index) => (
          <div key={index} className={`${selectedImageIndex === index + startIndex ? 'client-width-full' : ''} w-[20%] relative rounded-xl transition-all duration-500 ease-in-out`}>
            <img
              src={data.images}
              alt='image'
              className={`w-full h-[480px] object-cover rounded-xl cursor-pointer`}
              onClick={() => handleClick(index + startIndex)}
            />
            {selectedImageIndex === index + startIndex && (
              <div className="absolute top-[80%] left-[50%] transform translate-x-[-50%] translate-y-[-80%] px-4 py-4 rounded-xl w-[75%] flex justify-center items-center bg-gray-700 bg-opacity-50 text-white">
                <div>
                  <h3 className="text-2xl font-bold">{data.clientName}</h3>
                  <p className='font-medium'>{data.clientDesc}</p>
                </div>
              </div>
            )}
          </div>
        ))}
        {/* {pageCount > 1 && (
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
              {pages.map((pageIndex) => (
                  <button
                      key={pageIndex}
                      onClick={() => handlePageClick(pageIndex)}
                      className={`h-[6px] w-[90px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-none rounded-br-none ${startIndex / imagesPerPage === pageIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                  ></button>
              ))}
          </div>
        )} */}
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
