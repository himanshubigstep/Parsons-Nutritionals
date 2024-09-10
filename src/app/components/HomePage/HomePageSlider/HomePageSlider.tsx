'use client'

import React, { useEffect, useState } from 'react';
import './HomePageSlider.css';

interface ImageData {
    attributes: {
        formats: {
            large: {
                url: string;
            };
        };
    };
}

const HomePageSlider = ({ homePageDataValue }: { homePageDataValue: any }) => {
    const HomePageSliderData = homePageDataValue?.Header;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(0);

    const goToPrevious = () => {
        setPreviousIndex(currentIndex);
        const newIndex = currentIndex === 0 ? HomePageSliderData?.media?.data?.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        setPreviousIndex(currentIndex);
        const newIndex = currentIndex === HomePageSliderData?.media?.data?.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index: number) => {
        setPreviousIndex(currentIndex);
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (HomePageSliderData?.media?.data?.length) {
            const interval = setInterval(goToNext, 5000);
    
            return () => {
                clearInterval(interval);
            };
        }
    }, [currentIndex, HomePageSliderData?.media?.data?.length]);

    return (
        <div className='relative w-full max-w-[1280px] h-[560px] mx-auto'>
            <div className="relative w-full max-w-[1280px] mx-auto">
                <div className="relative h-[480px] overflow-hidden flex justify-evenly items-center">
                    {HomePageSliderData && HomePageSliderData?.media?.data?.map((item: ImageData, index: number) => (
                        <div
                            key={index}
                            className={`w-full max-w-full mx-auto rounded-3xl absolute inset-0 transform transition-transform duration-500 ${index === currentIndex ? 'translate-x-0 image-centered' : index === previousIndex && currentIndex > previousIndex ? '-translate-x-full left-image' : 'translate-x-full right-image'}`}
                        >
                            <img src={`${item.attributes.formats.large.url}`} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-3xl" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
                {HomePageSliderData && HomePageSliderData?.media?.data?.map((_: any, index: number) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-[6px] w-[90px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-none rounded-br-none ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                    ></button>
                ))}
            </div>
            
            {HomePageSliderData && HomePageSliderData.stats && (
                <div className="bg-white absolute md:bottom-8 left-0 right-0 top-1/2 md:top-auto translate-y-1/2 mx-auto w-[20rem] sm:w-[100%] md:w-[41rem] h-[8rem] sm:h-[7.125rem] text-left text-red font-sf-pro-display">
                    <div className="flex  sm:px-0 px-4 justify-center items-center shadow-[0px_0px_0px_0.5px_#e4e5e9,_0px_0px_0px_1px_rgba(228,_229,_233,_0.6),_0px_0px_0px_3.5px_#f9f9fb,_0px_0px_0px_4px_#f3f4f7,_0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] rounded-xl bg-base-white w-[20rem]  md:w-[41rem] h-[8rem] sm:h-[7.125rem]">
                        <div className="w-full flex-wrap sm:flex-nowrap w-[20rem] md:w-[37.875rem]  md:overflow-hidden flex flex-row items-start justify-center gap-[1.375rem]">
                            {HomePageSliderData.stats.map((stat: any, index: number) => (
                                <React.Fragment key={index}>
                                    <div className="w-[6.188rem] relative h-[3.125rem]">
                                        <b className="leading-[2rem] text-red-500 flex items-center w-[6.013rem] h-[2rem]">
                                            {stat.value}
                                        </b>
                                        <div className="text-[0.875rem] capitalize text-slate-500">
                                            {stat.title}
                                        </div>
                                    </div>
                                    {index !== HomePageSliderData.stats.length - 1 && (
                                        <div className="w-[0.063rem] relative bg-slate-500 h-[3.125rem] opacity-[0.2]" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePageSlider;