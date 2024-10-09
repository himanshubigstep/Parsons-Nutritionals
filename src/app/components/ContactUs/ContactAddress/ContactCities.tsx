'use client'

import React, { useState } from 'react';
import MapIndia from '@/app/assets/home-page/cities-map-india.png';
import Image from 'next/image';

const ContactCities = ({ mapLocations }: { mapLocations: any }) => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const convertToPercentagePosition = (latitude: number, longitude: number) => {
    const indiaBounds = {
      minX: 68.2,
      maxX: 97.4,
      minY: 8.4,
      maxY: 37.6,
    };

    const x = ((longitude - indiaBounds.minX) / (indiaBounds.maxX - indiaBounds.minX)) * 100;
    const y = 100 - ((latitude - indiaBounds.minY) / (indiaBounds.maxY - indiaBounds.minY)) * 100;

    return { x, y };
  };

  const handleClick = (url: string) => {
    window.location.href = url;
  };

  const handleMouseEnter = (cityName: string) => {
    setHoveredCity(cityName);
  };

  const handleMouseLeave = () => {
    setHoveredCity(null);
  };

  return (
    <div className="relative">
      <Image
        className="w-[100%] h-full object-contain dark:invert-0 invert"
        src={MapIndia}
        alt="India Map"
      />
      <svg width="100%" height="100%" className="absolute left-0 top-0 right-0 bottom-0">
        {mapLocations &&
          mapLocations.map((city: { Latitude: string; Longitude: string; LocationName: string }) => {
            const latitude = parseFloat(city.Latitude);
            const longitude = parseFloat(city.Longitude);
            
            // Check if parsing was successful
            if (isNaN(latitude) || isNaN(longitude)) {
              console.error(`Invalid coordinates for city: ${city.LocationName}`, { latitude, longitude });
              return null; // Skip rendering this city
            }

            const { x, y } = convertToPercentagePosition(latitude, longitude);
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
