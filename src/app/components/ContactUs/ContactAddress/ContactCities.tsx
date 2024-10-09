'use client';

import React, { useState } from 'react';
import MapCanvas from './Mapcanvas';

const ContactCities = ({ mapLocations }: { mapLocations: any }) => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full">
      <MapCanvas locations={mapLocations} />
      {hoveredCity && (
        <div className="absolute top-0 right-0 bg-white dark:bg-black dark:border-[1px] dark:border-gray-700 p-2 rounded shadow">
          <p>{hoveredCity}</p>
        </div>
      )}
    </div>
  );
};

export default ContactCities;
