'use client'
import React, { useState } from 'react';
import BannerSubContainer from './BannerSubContainer/BannerSubContainer';

interface TopBannerProps {
    bannerImage?: string;
    BannerContainerData?: any;
    BannerContainerDataContent?: any;
    aboutUsPageDataValue?: any;
}

const TopBanner: React.FC<TopBannerProps> = ({ bannerImage, BannerContainerData, BannerContainerDataContent }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(true); // To ensure the gray background remains if image fails to load
    };

    return (
        <div className='relative w-full md:h-[480px] max-w-full flex flex-col justify-center items-center'>
            <div
                className={`absolute left-0 right-0 top-0 bottom-0 w-full h-full ${imageLoaded ? 'bg-transparent' : 'bg-gray-400'} opacity-50`}
            ></div>
            <img
                src={bannerImage}
                className={`w-full h-full max-h-40 object-cover ${imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'}`}
                alt='banner-image'
                onLoad={handleImageLoad}
                onError={handleImageError}
            />
            {BannerContainerData && <BannerSubContainer BannerContainerData={BannerContainerData} />}
            {BannerContainerDataContent &&
                <div className='z-10 md:absolute left-0 right-0 top-[50%] transform -translate-y-[50%] px-8 py-8 rounded-xl bg-white dark:bg-black w-[95%] md:w-[35%] h-auto mx-auto flex justify-center items-center'>
                    <img
                        className='md:w-[4rem] w-8 md:h-[4rem] h-8 object-contain'
                        src="https://img.icons8.com/?size=256&id=20523&format=png"
                        alt='banner-icon'
                    />
                    <h1 className='md:text-3xl text-3xl font-extrabold text-black dark:text-white'>{BannerContainerDataContent?.Header?.content?.title}</h1>
                </div>
            }
        </div>
    );
}

export default TopBanner;

