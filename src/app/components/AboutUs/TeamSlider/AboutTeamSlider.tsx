import React, { useState, useEffect } from 'react';
import './AboutTeamSlider.css';

interface TeamMember {
  id: number;
  image: {
    data: {
      attributes: {
        url: string;
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
    position: string;
    career_highlights?: string;
    order?: number;
  };
}

const AboutTeamSlider = ({ homePageMembersValue }: { homePageMembersValue: any }) => {
  const aboutUsClientData = homePageMembersValue || []; // Ensure aboutUsClientData is not undefined

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(5);

  // Function to determine the number of images per page based on screen size
  const updateImagesPerPage = () => {
    if (window.innerWidth < 768) {
      setImagesPerPage(2); // Mobile devices
    } else {
      setImagesPerPage(5); // Desktop and larger screens
    }
  };

  // Update imagesPerPage on window resize
  useEffect(() => {
    updateImagesPerPage();
    window.addEventListener('resize', updateImagesPerPage);
    return () => {
      window.removeEventListener('resize', updateImagesPerPage);
    };
  }, []);

  const handleClick = (index: number) => {
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

  if (!homePageMembersValue) {
    return null;
  }

  const sortedTeamMembers = [...aboutUsClientData].sort((a, b) => {
    const orderA = a?.attributes?.order ?? 0;
    const orderB = b?.attributes?.order ?? 0;
    return orderB - orderA;
  });

  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <div className='relative w-full max-w-[1280px] flex flex-col items-center gap-8 md:py-16 py-8'>
      <h1 className="text-2xl font-extrabold dark:text-white">Management Team</h1>
      <div className="w-full flex justify-center items-center gap-2 rounded-xl overflow-hidden relative">
        {sortedTeamMembers.slice(startIndex, startIndex + imagesPerPage).map((item: TeamMember, index: number) => (
          <div key={index} className={`${selectedImageIndex === index + startIndex ? 'client-width-full' : ''} md:w-[20%] w-[50%] relative rounded-xl transition-all duration-500 ease-in-out`}>
            <img
              src={imageBaseUrl + item?.attributes?.image?.data?.attributes?.url}
              alt='image'
              className={`w-full md:h-[480px] h-[360px] object-cover rounded-xl cursor-pointer`}
              onClick={() => handleClick(index + startIndex)}
            />
            {selectedImageIndex === index + startIndex && (
              <div className="absolute top-[80%] left-[50%] transform translate-x-[-50%] translate-y-[-80%] px-4 py-4 rounded-xl md:w-[75%] w-full flex justify-center items-center bg-gray-700 bg-opacity-50 text-white">
                <div>
                  <h3 className="text-2xl font-bold">{item?.attributes?.name}</h3>
                  <p className='font-medium'>
                    {item?.attributes?.position}
                  </p>
                  <div className="career-highlights font-medium text-sm mt-2">
                    {item?.attributes?.career_highlights?.split('-').map((highlight, idx) => {
                      if (highlight.trim() === '') return null;

                      return (
                        <p key={idx} className="mt-2">
                          <span className="font-bold">-</span>{highlight.trim()}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {pageCount > 1 && (
          <div className="absolute top-[50%] transform translate-y-[-50%] right-4 left-4 flex justify-between space-x-2">
            {currentPage > 0 && (
              <button onClick={handlePrevPage} className="h-[3rem] w-[3rem] sm:w-[40px] md:w-[5rem] md:h-[5rem] bg-[#0059DF] opacity-[0.7] rounded-r-[5px] text-white font-medium text-5xl">
                {'<'}
              </button>
            )}
            {currentPage < pageCount - 1 && (
              <button onClick={handleNextPage} className="h-[3rem] w-[3rem] sm:w-[40px] md:w-[5rem] md:h-[5rem] bg-[#0059DF] opacity-[0.7] rounded-r-[5px] text-white font-medium text-5xl">
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
