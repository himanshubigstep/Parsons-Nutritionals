import React from 'react';
import './HomePageAwarded.css';

interface ImageData {
    attributes: {
        image: any;
        formats: {
            large: {
                url: string;
            };
        };
    };
}

const HomePageAwarded = ({ homePageDataValue, homePageAwardValue }: { homePageDataValue: any, homePageAwardValue: any }) => {
    const AwardedDataTitle = homePageDataValue?.AwardSection?.title
    const AwardedDataIcon = homePageDataValue?.AwardSection?.media?.data?.attributes?.formats?.medium?.url
    const AwardImages = homePageAwardValue

    if (!AwardImages) {
        return null;
    }
    
    const halfLength = Math.ceil(AwardImages.length / 2);
    const leftHalf = AwardImages.slice(0, halfLength);
    const rightHalf = AwardImages.slice(halfLength);

    console.log(leftHalf, rightHalf)

    return (
        <div className="relative flex bg-[#0059D5] h-[48rem] w-full text-[1.125rem] text-darkslate-500">
            <div className='max-w-[1280px] mx-auto flex flex-col md:flex-row'>
                <div className='w-[95%] md:w-1/3 mx-auto mb-2 h-full flex flex-col justify-center items-center'>
                    <div className='relative mb-4'>
                        <img
                            className="w-[12rem] h-[12rem] object-cover rounded-3xl"
                            alt="Our Vision"
                            src={`${AwardedDataIcon}`}
                        />
                    </div>
                    <div className='text-white text-4xl font-bold'>
                        {AwardedDataTitle}
                    </div>
                </div>
                <div className='w-[95%] md:w-2/3 mx-auto h-full overflow-auto flex justify-center items-center gap-4 relative'>
                    <div className='w-1/2 h-full overflow-hidden slide-container'>
                        <div className='slide-images flex flex-col justify-center items-center gap-4'>
                            {leftHalf.map((item: ImageData, index: number) => (
                                <img
                                    key={index}
                                    className="w-full h-[33.3%] rounded-2xl"
                                    alt={`Slider Image ${index + 1}`}
                                    src={`${item?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='w-1/2 h-full overflow-hidden slide-container'>
                        <div className='slide-images reverse flex flex-col justify-center items-center gap-4'>
                            {rightHalf.map((item: ImageData, index: number) => (
                                <img
                                    key={index}
                                    className="w-full h-[33.3%] rounded-2xl"
                                    alt={`Slider Image ${index + 1}`}
                                    src={`${item?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePageAwarded;
