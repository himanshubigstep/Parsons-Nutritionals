'use client'

import React, { useRef, useState } from 'react'
import './ClientsData.css'
import Button from '../Common/Button/Button';
import Link from 'next/link';

interface ClientDetail {
    attributes: {
        website: string;
        image: {
            data: {
                attributes: {
                    url: any;
                    formats: {
                        url: string;
                        thumbnail: {
                            url: string;
                        };
                    };
                }
            };
        };
        name: string;
        description: string;
    };
}

const ClientsData = ({clientPageDataValue, homePageClientValue}: {clientPageDataValue: any, homePageClientValue: any}) => {
    const clientDestails = homePageClientValue
    const clientData = clientPageDataValue
    const [activeTab, setActiveTab] = useState(0);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const handleTabChange = (index: React.SetStateAction<number>) => {
        setActiveTab(index);
    };
    const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL
    const handlePrevTab = () => {
        const newIndex = (activeTab === 0 ? clientDestails.length - 1 : activeTab - 1);
        setActiveTab(newIndex);
        scrollToTab(newIndex);
    };

    const handleNextTab = () => {
        const newIndex = (activeTab === clientDestails.length - 1 ? 0 : activeTab + 1);
        setActiveTab(newIndex);
        scrollToTab(newIndex);
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
    return (
        <div className='relative w-full h-full bg-white dark:bg-black px-8 md:py-24 py-8'>

            <div className='w-full max-w-[1280px] mx-auto'>
                <h1 className='md:text-center text-3xl md:font-bold mb-4 uppercase'>{clientData?.About?.title}</h1>
                <p className='md:text-center md:max-w-[80%] mx-auto md:font-medium text-lg'>{clientData?.About?.content}</p>
            </div>

            <div className='relative w-full h-full mx-auto'>

                <div className='clients-container w-full max-w[1280px] mx-auto h-full flex justify-center items-center gap-4'>

                    {clientDestails && clientDestails.map((client: ClientDetail, index: number) => (
                        <div key={index} className={`client-block h-full max-w-[60%] mx-auto flex justify-center items-center py-8 ${activeTab === index ? '' : 'hidden'}`}>
                            <div className='client-block-img mr-[-10%] w-1/3 h-[320px] bg-white rounded-3xl z-10 flex justify-center items-center'>
                                <Link href={client?.attributes?.website} target="_blank" rel="noopener noreferrer">
                                    <img
                                        className='md:w-[100%] w-1/2 mx-auto'
                                        alt={`client-logo-${index}`}
                                        src={`${imageBaseUrl}${client?.attributes?.image?.data?.attributes?.url}`}
                                    />
                                </Link>
                            </div>
                            <div className='client-block-content relative w-2/3 h-[420px] bg-[#F0F0F9] dark:bg-[#242424] rounded-[3rem] flex items-center big-container'>
                                <div className='client-block-content-text z-20 pl-36 max-w-[90%]'>
                                    <h1 className='relative text-xl md:font-bold mb-2'>
                                        {client?.attributes?.name}
                                    </h1>
                                    <p className='text-md md:font-medium text-justify md:line-clamp-none line-clamp-[10]'>
                                        {client?.attributes?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {/* Tab navigation */}
                <div className="flex justify-center gap-4 mb-4 scroll-button relative max-w-[1280px] mx-auto">
                    <div ref={buttonRef} className='flex md:max-w-[80%] max-w-[70%] mx-auto gap-2 scroll-button-tab overflow-auto'>
                        {clientDestails && clientDestails.map((detail: ClientDetail, index: number) => (
                            <Button
                                key={index}
                                className={`text-md flex items-center px-4 py-2 rounded-lg focus:outline-none relative ${activeTab === index ? 'bg-[#0059DF] text-white tab-active' : 'bg-gray-200 text-gray-800'}`}
                                onClick={() => handleTabChange(index)}
                            >
                                {detail?.attributes?.name}
                            </Button>
                        ))}
                    </div>
                    <div className='flex justify-center items-center absolute left-0 top-[50%] transform -translate-y-1/2'>
                        <Button className='px-4 py-2 rounded-lg focus:outline-none bg-gray-200 text-gray-800' onClick={handlePrevTab}>
                            {'<'}
                        </Button>
                    </div>
                    <div className='flex justify-center items-center absolute right-0 top-[50%] transform -translate-y-1/2'>
                        <Button className='px-4 py-2 rounded-lg focus:outline-none bg-gray-200 text-gray-800' onClick={handleNextTab}>
                            {'>'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsData