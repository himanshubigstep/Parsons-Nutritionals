'use client'

import React, { useEffect, useRef, useState } from 'react';
import './AboutInfrastructure.css';
import Button from '../../Common/Button/Button';

interface InfrastructureDetail {
    attributes: {
        name: string;
        details: string;
        Features: { content: string }[];
        Facts: { content: string }[];
        media: {
            data: {
                attributes: {
                    url: string;
                    formats: {
                        large: {
                            url: string
                        }
                    }
                }
            }
        }
        order?: number;
    },
}

const AboutInfrastructure = ({aboutUsPageInfrastructureValue}: {aboutUsPageInfrastructureValue: any}) => {
    const InfrastructureData = Array.isArray(aboutUsPageInfrastructureValue) ? aboutUsPageInfrastructureValue : [];
        
    const [activeTab, setActiveTab] = useState(0);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const locationName = useRef('');
    const sortedInfrastructureData = [...InfrastructureData].sort((a, b) => {
        const orderA = a?.attributes?.order ?? 0;
        const orderB = b?.attributes?.order ?? 0;
        return orderB - orderA;
    });

    useEffect(()=>{
        
        if(window.location.hash == '#locations'){
            locationName.current = localStorage.getItem('locationName') || ''
        }
        let tabIndex = -1
        const initialTabIndex = sortedInfrastructureData && sortedInfrastructureData.forEach(
            (detail: any,index: number) => {
                const arr = locationName.current.split(',')
                const loc1 = arr[0];
                const loc2 = arr[0]+','+  arr[1]
                
                if(detail.attributes.name == loc1 || detail.attributes.name == loc2){
                    tabIndex = index                    
                    
                }
                
            }
        );
        if (tabIndex !== -1) {
            setActiveTab(tabIndex);
            scrollToTab(tabIndex);
        }
    },[sortedInfrastructureData])



    const handlePrevTab = () => {
        setActiveTab((prev) => (prev === 0 ? sortedInfrastructureData.length - 1 : prev - 1));
        scrollToTab(activeTab === 0 ? sortedInfrastructureData.length - 1 : activeTab - 1);
    };

    const handleNextTab = () => {
        setActiveTab((prev) => (prev === sortedInfrastructureData.length - 1 ? 0 : prev + 1));
        scrollToTab(activeTab === sortedInfrastructureData.length - 1 ? 0 : activeTab + 1);
    };

    const scrollToTab = (index: number) => {
        if (buttonRef.current) {
            const button = buttonRef.current.children[index] as HTMLElement;
            buttonRef.current.scrollTo({
                left: button.offsetLeft - buttonRef.current.offsetLeft,
                behavior: 'smooth',
            });
        }
    };

    const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL

    return (
        <div className='relative bg-white dark:bg-black w-full max-w-[1280px] mx-auto mb-16 rounded-3xl'>
            <div className='w-full overflow-hidden flex flex-col justify-between items-center px-8 py-8'>
                <h1 className="text-2xl font-extrabold dark:text-white mb-2">Locations</h1>
                {/* Tab content */}
                <div className='w-full relative flex justify-between items-center gap-8 infrastructure'>
                    {sortedInfrastructureData && sortedInfrastructureData.map((detail: InfrastructureDetail, index: number) => (
                        <div key={index} className={`infrastructure-block w-full px-0 md:px-8 py-8 flex justify-center items-center ${activeTab === index ? '' : 'hidden'}`}>
                            <div className='infrastructure-block-img w-[40%] md:h-[420px] rounded-3xl bg-black mr-[-12%] z-10'>
                                <img
                                    src={imageBaseUrl + detail.attributes?.media?.data?.attributes?.url}
                                    alt='infrastructure'
                                    className='w-full h-full object-cover rounded-3xl'
                                />
                            </div>
                            <div className='infrastructure-block-content w-[60%] h-[540px] rounded-3xl bg-[#F0F0F9] dark:bg-black dark:border-2 dark:border-gray-700'>
                                <div className='infrastructure-block-inner w-[95%] h-full pl-48 py-8'>
                                    <h2 className='text-xl font-bold leading-none tracking-tight text-black md:text-xl lg:text-xl dark:text-white'>
                                        {detail.attributes?.name}
                                    </h2>
                                    <p className='text-md font-normal text-gray1-200'>
                                        {detail.attributes?.details}
                                    </p>
                                    <div className='flex flex-col justify-center mt-8'>
                                        <h3 className='text-xl font-bold leading-none tracking-tight text-black md:text-xl lg:text-xl dark:text-white'>
                                            Key Facts
                                        </h3>
                                        <ul>
                                            {detail?.attributes?.Features && detail?.attributes?.Features.map((fact, index) => (
                                                <li key={index}>{fact?.content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='flex flex-col justify-center mt-8'>
                                        <h3 className='text-xl font-bold leading-none tracking-tight text-black md:text-xl lg:text-xl dark:text-white'>
                                            Salient Features
                                        </h3>
                                        <ul>
                                            {detail?.attributes?.Facts && detail?.attributes?.Facts.map((feature, index) => (
                                                <li key={index}>{feature?.content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* <div className='flex justify-center sm:justify-start items-center mt-8'>
                                        <Button
                                            onClick={() => {
                                                window.open('/contact-us', '_blank');
                                            }}
                                            className='bg-[#0059DF] px-8 py-4 rounded-xl text-white text-lg font-bold'
                                        >
                                            Contact Now
                                        </Button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Tab navigation */}
                <div className="flex justify-center gap-4 mb-4 scroll-button relative">
                    <div ref={buttonRef} className='flex max-w-[80%] mx-auto gap-2 md:overflow-hidden overflow-auto'>
                        {sortedInfrastructureData && sortedInfrastructureData.map((detail: InfrastructureDetail, index: number) => (
                            <Button
                                key={index}
                                className={`px-4 py-2 rounded-lg focus:outline-none relative ${activeTab === index ? 'bg-[#0059DF] text-white tab-active' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-400'}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {detail.attributes?.name}
                            </Button>
                        ))}
                    </div>
                    <div className='flex justify-center items-center absolute md:left-0 left-[-5%] top-[50%] transform -translate-y-1/2'>
                        <Button className='px-4 py-2 rounded-lg focus:outline-none bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-400' onClick={handlePrevTab}>
                            {'<'}
                        </Button>
                    </div>
                    <div className='flex justify-center items-center absolute md:right-0 right-[-5%] top-[50%] transform -translate-y-1/2'>
                        <Button className='px-4 py-2 rounded-lg focus:outline-none bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-400' onClick={handleNextTab}>
                            {'>'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutInfrastructure;