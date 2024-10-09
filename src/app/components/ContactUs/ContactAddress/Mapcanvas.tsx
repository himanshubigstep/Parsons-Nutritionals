'use client';
import React, { useEffect, useRef, useState } from 'react';
import indiaImage from '../../../assets/home-page/cities-map-india.png';

interface Location {
  Latitude: string;
  Longitude: string;
  LocationName: string;
}

interface MapCanvasProps {
  locations: Location[];
  applyFilter?: boolean;
}

const MapCanvas: React.FC<MapCanvasProps> = ({ locations = [], applyFilter }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mapImage = new Image();
    mapImage.src = indiaImage.src;

    mapImage.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);

      if (applyFilter) {
        ctx.filter = 'invert(1)';
        ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
        ctx.filter = 'none'; // Reset the filter
      }

      const imageWidth = canvas.width;
      const imageHeight = canvas.height;

      // Define the geographical boundaries of the map
      const latMin = 8;
      const latMax = 37;
      const longMin = 68;
      const longMax = 97;

      const latRange = latMax - latMin;
      const longRange = longMax - longMin;

      // Draw the location markers
      locations.forEach(({ Latitude, Longitude, LocationName }) => {
        const latitude = parseLatitude(Latitude);
        const longitude = parseLongitude(Longitude);

        if (!isNaN(latitude) && !isNaN(longitude)) {
          const x = ((longitude - longMin) / longRange) * imageWidth;
          const y = ((latMax - latitude) / latRange) * imageHeight;

          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fillStyle = 'red';
          ctx.fill();
        }
      });

      // Handle mouse move event
      const handleMouseMove = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        locations.forEach(({ Latitude, Longitude, LocationName }) => {
          const latitude = parseLatitude(Latitude);
          const longitude = parseLongitude(Longitude);

          if (!isNaN(latitude) && !isNaN(longitude)) {
            const x = ((longitude - longMin) / longRange) * imageWidth;
            const y = ((latMax - latitude) / latRange) * imageHeight;

            // Check if mouse is within the circle (hover detection)
            const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
            if (distance < 10) { // Increase radius for hover detection
              setHoveredLocation({ Latitude, Longitude, LocationName });
            } else if (hoveredLocation?.LocationName === LocationName) {
              setHoveredLocation(null); // Clear hover if not over
            }
          }
        });
      };

      // Add mouse move event listener
      canvas.addEventListener('mousemove', handleMouseMove);
      return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
      };
    };

    mapImage.onerror = () => {
      console.error("Failed to load the image.");
    };
  }, [locations, hoveredLocation]);

  // Function to parse latitude
  const parseLatitude = (lat: string): number => {
    const match = lat.match(/(\d+(?:\.\d+)?)\s*°?\s*([NS])/);
    if (match) {
      const value = parseFloat(match[1]);
      return match[2] === 'S' ? -value : value; // Negate if South
    }
    return NaN;
  };

  // Function to parse longitude
  const parseLongitude = (long: string): number => {
    const match = long.match(/(\d+(?:\.\d+)?)\s*°?\s*([EW])/);
    if (match) {
      const value = parseFloat(match[1]);
      return match[2] === 'W' ? -value : value; // Negate if West
    }
    return NaN;
  };

  return (
    <div style={{ position: 'relative' }}>
      <canvas ref={canvasRef} width={500} height={600} />
      {hoveredLocation && (
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '20%',
          backgroundColor: 'white',
          border: '1px solid gray',
          padding: '5px',
          borderRadius: '5px',
          transform: 'translate(-50%, -100%)'
        }}>
          {hoveredLocation.LocationName}
        </div>
      )}
    </div>
  );
};

export default MapCanvas;
