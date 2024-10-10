'use client'
import React, { useEffect, useRef, useState } from 'react'
import './HomePageOurClients.css'
import Link from 'next/link';

interface ImageData {
  attributes: {
    name: string;
    website: string;
    image: any;
    formats: {
      large: {
        url: string;
      };
    };
  };
}

const HomePageOurClients = ({ homePageDataValue, homePageClientValue }: { homePageDataValue: any, homePageClientValue: any }) => {
  const OurClientsPartnerData = homePageDataValue?.CustomerSection;
  const OurClientDataValue = homePageClientValue;
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const scrollSpeed = 1; // Adjust this for faster/slower scrolling

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        if (containerRef.current) {
          const totalWidth = containerRef.current.scrollWidth / 2; // Two copies for seamless scroll
          return (prevOffset - scrollSpeed) % totalWidth;
        }
        return prevOffset - scrollSpeed;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#0059DF] w-full h-auto text-2xl sm:text-2xl font-montserrat md:py-8 py-4">
      <div className="max-w-[1280px] mx-auto font-extrabold flex items-center justify-center w-full text-white capitalize md:mb-8 mb-4">
        {OurClientsPartnerData?.title}
      </div>
      <div className="w-full max-w-[1280px] mx-auto h-auto relative overflow-hidden">
        <div className="flex whitespace-nowrap gap-4" ref={containerRef} style={{ transform: `translateX(${offset}px)` }}>
          {OurClientDataValue && OurClientDataValue.map((item: ImageData, index: number) => (
            <div key={index} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white dark:bg-black rounded-lg flex justify-center items-center">
              <Link href={item?.attributes?.website} target="_blank" rel="noopener noreferrer">
                <img
                  src={item?.attributes?.image?.data?.attributes?.url}
                  alt={item?.attributes?.name}
                  className="md:w-40 md:h-24 w-20 h-20 object-contain mx-2 dark:invert"
                />
              </Link>
            </div>
          ))}
          {OurClientDataValue && OurClientDataValue.map((item: ImageData, index: number) => (
            <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white dark:bg-black rounded-lg flex justify-center items-center">
              <Link href={item?.attributes?.website} target="_blank" rel="noopener noreferrer">
                <img
                  src={item?.attributes?.image?.data?.attributes?.url}
                  alt={item?.attributes?.name}
                  className="md:w-40 md:h-24 w-20 h-20 object-contain mx-2 dark:invert"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageOurClients;
