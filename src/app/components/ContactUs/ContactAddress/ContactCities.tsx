'use client'

import React, { useState } from 'react';
import MapIndia from '@/app/assets/home-page/cities-map-india.png';
import Image from 'next/image';
import Link from 'next/link';

interface City {
  name: string;
  lat: number;
  long: number;
}

const cities: City[] = [
  { name: 'Mumbai', lat: 19.0760, long: 72.8777 },
  { name: 'Delhi', lat: 28.6448, long: 77.2167 },
  { name: 'Lucknow', lat: 26.850000, long: 80.949997 },
  { name: 'Bhopal', lat: 23.259933, long: 77.412613 },
  { name: 'Jaipur', lat: 26.922070, long: 75.778885 }
];

const ContactCities: React.FC = () => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const convertToPercentagePosition = (latitude: number, longitude: number) => {
    const x = (longitude - 68.1) / (97.4 - 68.1) * 100;
    const y = 100 - ((latitude - 8.7) / (35.5 - 6.7) * 100);
    return { x, y };
  };

  const handleClick = (url: string) => {
    window.location.href = '/about-us#infrastructure';
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
        className='w-[100%] h-full object-contain'
        src={MapIndia}
        alt='india-map'
      />
      <svg width="100%" height="100%" className='absolute left-0 top-0 right-0 bottom-0'>
        {cities.map(city => {
          const { x, y } = convertToPercentagePosition(city.lat, city.long);
          return (
            <circle
              key={city.name}
              cx={`${x}%`}
              cy={`${y}%`}
              r={5}
              fill="red"
              cursor="pointer"
              onClick={() => handleClick(`/about-us#${city.name.toLowerCase()}`)}
              onMouseEnter={() => handleMouseEnter(city.name)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </svg>
        {hoveredCity && (
          <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-full bg-white p-2 rounded shadow">
            <p>{hoveredCity}</p>
          </div>
        )}
    </div>
  );
};

export default ContactCities;