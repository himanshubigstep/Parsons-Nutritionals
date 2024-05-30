import React from 'react';
import BannerSubContainer from './BannerSubContainer/BannerSubContainer';

interface TopBannerProps {
    bannerImage?: string;
    BannerContainerData?: any;
    BannerContainerDataContent?: any;
    aboutUsPageDataValue?: any
}

const TopBanner: React.FC<TopBannerProps> = ({ bannerImage, BannerContainerData, BannerContainerDataContent }) => {
    return (
        <div className='relative w-full h-[480px] max-w-full flex flex-col justify-center items-center'>
            <div className='absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-black opacity-50'></div>
            <img
                src={`${bannerImage}`}
                className='w-full h-full object-cover'
                alt='banner-image'
            />
            {BannerContainerData && <BannerSubContainer BannerContainerData={BannerContainerData} />}
            {BannerContainerDataContent &&
                <div className='z-10 absolute left-0 right-0 top-[50%] transform -translate-y-[50%] px-8 py-8 rounded-xl bg-white w-[95%] md:w-[55%] h-auto mx-auto flex justify-center items-center'>
                    <img
                        className='w-[8rem] h-[8rem] object-contain'
                        src={BannerContainerDataContent.BannerContainerIcon}
                        alt='banner-icon'
                    />
                    <h1 className='text-6xl font-extrabold text-black'>{BannerContainerDataContent.BannerHeading}</h1>
                </div>
            }
        </div>
    );
}

export default TopBanner;
