'use client'

import React, { useState } from 'react';
import MapIndia from '@/app/assets/home-page/cities-map-india.png';
import Image from 'next/image';

const ContactCities = ({mapLocations}: {mapLocations: any}) => {
  const MapLocations = mapLocations
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  // const convertToPercentagePosition = (latitude: string, longitude: string) => {
  //   const indiaBounds = {
  //     minX: 68.2,
  //     maxX: 97.4,
  //     minY: 9.2,
  //     maxY: 35.5
  //   };
  
  //   const x = ((parseFloat(longitude) - indiaBounds.minX) / (indiaBounds.maxX - indiaBounds.minX)) * 100;
  //   const y = 100 - ((parseFloat(latitude) - indiaBounds.minY) / (indiaBounds.maxY - indiaBounds.minY)) * 100;
  
  //   return { x, y };
  // };

  const convertToPercentagePosition = (latitude: string, longitude: string) => {
    const indiaBounds = {
      minX: 68.2, // West
      maxX: 97.4, // East
      minY: 8.4,  // South (adjusted)
      maxY: 37.6  // North (adjusted)
    };
    
    // Convert longitude to x percentage
    const x = ((parseFloat(longitude) - indiaBounds.minX) / (indiaBounds.maxX - indiaBounds.minX)) * 100;
    
    // Convert latitude to y percentage (note the inversion)
    const y = 100 - ((parseFloat(latitude) - indiaBounds.minY) / (indiaBounds.maxY - indiaBounds.minY)) * 100;
  
    return { x, y };
  };

  const handleClick = (url: string) => {
    window.location.href = '/about-us#locations';
  };

  const handleMouseEnter = (cityName: string) => {
    setHoveredCity(cityName);
  };

  const handleMouseLeave = () => {
    setHoveredCity(null);
  };

  return (
    <div className='relative'>
    <Image
      className='w-[100%] h-full object-contain dark:invert-0 invert'
      src={MapIndia}
      alt='india-map'
    />
    <svg width="100%" height="100%" className='absolute left-0 top-0 right-0 bottom-0'>
      {MapLocations && MapLocations.map((city: { Latitude: string; Longitude: string; LocationName: string; }) => {
        const { x, y } = convertToPercentagePosition(city.Latitude, city.Longitude);
        return (
          <circle
            key={city.LocationName}
            cx={`${x}%`}
            cy={`${y}%`}
            r={5}
            fill="red"
            cursor="pointer"
            onClick={() => handleClick(`/about-us#${city.LocationName.toLowerCase()}`)}
            onMouseEnter={() => handleMouseEnter(city.LocationName)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </svg>
    {hoveredCity && (
      <div className="absolute top-0 right-0 bg-white dark:bg-black dark:border-[1px] dark:border-gray-700 p-2 rounded shadow">
        <p>{hoveredCity}</p>
      </div>
    )}
  </div>
  );
};

export default ContactCities;