'use client';
import React, { useEffect, useRef, useState } from 'react';

import indiaImage from '../../../assets/home-page/map-gray.png';

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
  const [mobileClickState, setMobileClickState] = useState<Location | null>(null);

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
      const handleMouseMove = debounce((event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        let isHovering = false;

        locations.forEach(({ Latitude, Longitude, LocationName }) => {
          const latitude = parseLatitude(Latitude);
          const longitude = parseLongitude(Longitude);

          if (!isNaN(latitude) && !isNaN(longitude)) {
            const x = ((longitude - longMin) / longRange) * imageWidth;
            const y = ((latMax - latitude) / latRange) * imageHeight;

            const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);

            if (distance < 10) {
              setHoveredLocation((prev) =>
                prev?.LocationName !== LocationName
                  ? { Latitude, Longitude, LocationName }
                  : prev
              );
              isHovering = true;
            }
          }
        });

        canvas.style.cursor = isHovering ? 'pointer' : 'default';
      }, 100);

      // Handle click event (for larger screens)
      const handleClick = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        locations.forEach(({ Latitude, Longitude, LocationName }) => {
          const latitude = parseLatitude(Latitude);
          const longitude = parseLongitude(Longitude);

          if (!isNaN(latitude) && !isNaN(longitude)) {
            const x = ((longitude - longMin) / longRange) * imageWidth;
            const y = ((latMax - latitude) / latRange) * imageHeight;

            const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);

            if (distance < 10) { // Radius for click detection
              localStorage.setItem('locationName', LocationName);
              window.location.href = 'about-us/#locations'; // Redirect to the locations section
            }
          }
        });
      };

      // Handle touch event (for mobile devices)
      const handleTouchStart = debounce((event: TouchEvent) => {
        const rect = canvas.getBoundingClientRect();
        const touch = event.touches[0];
        const mouseX = touch.clientX - rect.left;
        const mouseY = touch.clientY - rect.top;

        let closestLocation: Location | null = null;
        let closestDistance = Infinity;

        locations.forEach(({ Latitude, Longitude, LocationName }) => {
          const latitude = parseLatitude(Latitude);
          const longitude = parseLongitude(Longitude);

          if (!isNaN(latitude) && !isNaN(longitude)) {
            const x = ((longitude - longMin) / longRange) * imageWidth;
            const y = ((latMax - latitude) / latRange) * imageHeight;

            const scaleFactor = (525 - window.innerWidth) / 525;
            let expectedX = x - x * scaleFactor;
            let expectedY = y - y * scaleFactor;


            let distance =
              Math.abs(mouseX - expectedX) + Math.abs(mouseY - expectedY);
            if (y > 450) {
              expectedY = expectedY - 4

              distance =
                Math.abs(mouseX - expectedX) + Math.abs(mouseY - expectedY);

              if (Math.abs(mouseX - expectedX) < 18 && Math.abs(mouseY - expectedY) < 18 && distance < closestDistance) {
                closestLocation = { Latitude, Longitude, LocationName };

                closestDistance = distance;
              }
            }
            else {

              if (Math.abs(mouseX - expectedX) < 14 && Math.abs(mouseY - expectedY) < 14 && distance < closestDistance) {
                closestLocation = { Latitude, Longitude, LocationName };

                closestDistance = distance;
              }
            }
          }
        });

        if (closestLocation) {
          setHoveredLocation(closestLocation);
          setMobileClickState(closestLocation);
        }
      }, 100);

      // Add event listeners conditionally based on screen size
      if (window.innerWidth >= 525) {
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('click', handleClick);
      } else {
        canvas.addEventListener('touchstart', handleTouchStart);
      }

      return () => {
        if (window.innerWidth >= 525) {
          canvas.removeEventListener('mousemove', handleMouseMove);
          canvas.removeEventListener('click', handleClick);
        } else {
          canvas.removeEventListener('touchstart', handleTouchStart);
        }


      };
    };

    mapImage.onerror = () => {
      console.error("Failed to load the image.");
    };
  }, [locations, hoveredLocation, mobileClickState]);

  // Function to parse latitude
  const parseLatitude = (lat: string): number => {
    const match = lat.match(/(\d+(?:\.\d+)?)\s*°?\s*([NS])/);
    if (match) {
      const value = parseFloat(match[1]);
      return match[2] === 'S' ? -value : value; // Negate if South
    }
    return NaN;
  };

  function debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, wait);
    };
  }


  // Function to parse longitude
  const parseLongitude = (long: string): number => {
    const match = long.match(/(\d+(?:\.\d+)?)\s*°?\s*([EW])/);
    if (match) {
      const value = parseFloat(match[1]);
      return match[2] === 'W' ? -value : value; // Negate if West
    }
    return NaN;
  };

  // Handle click on Location Name to trigger redirection
  const handleLocationNameClick = () => {
    if (hoveredLocation) {
      localStorage.setItem('locationName', hoveredLocation.LocationName);
      window.location.href = 'about-us/#locations'; // Redirect to the locations section
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <canvas className="india-map" ref={canvasRef} width={500} height={600} />
      {hoveredLocation && (
        <div
          style={{
            position: 'absolute',
            top: '0',
            backgroundColor: 'white',
            border: '1px solid gray',
            padding: '5px',
            borderRadius: '5px',
            color: 'black',
            cursor: 'pointer',
          }}
          onClick={handleLocationNameClick}  // Trigger redirection on click
        >
          {hoveredLocation.LocationName}
        </div>
      )}
    </div>
  );
};

export default MapCanvas;
