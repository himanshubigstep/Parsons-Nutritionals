'use client'

import React, { useState } from 'react'
import './ClientsData.css'
import Button from '../Common/Button/Button';

interface ClientDetail {
    attributes: {
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
    const handleTabChange = (index: React.SetStateAction<number>) => {
        setActiveTab(index);
    };

    const handlePrevTab = () => {
        setActiveTab((prev) => (prev === 0 ? clientDestails.length - 1 : prev - 1));
    };

    const handleNextTab = () => {
        setActiveTab((prev) => (prev === clientDestails.length - 1 ? 0 : prev + 1));
    };
    return (
        <div className='relative w-full h-full bg-white px-8 py-24'>

            <div className='w-full max-w-[1280px] mx-auto'>
                <h1 className='text-center text-5xl font-bold mb-4 uppercase'>{clientData?.About?.title}</h1>
                <p className='text-center max-w-[80%] mx-auto font-medium text-lg'>{clientData?.About?.content}</p>
            </div>

            <div className='relative w-full h-full mx-auto'>

                <div className='clients-container w-full max-w[1280px] mx-auto h-full flex justify-center items-center gap-4'>

                    {clientDestails && clientDestails.map((client: ClientDetail, index: number) => (
                        <div key={index} className={`client-block h-full max-w-[60%] mx-auto flex justify-center items-center py-8 ${activeTab === index ? '' : 'hidden'}`}>
                            <div className='client-block-img mr-[-10%] w-1/3 h-[320px] bg-[#FFEAEC] rounded-3xl z-10 flex justify-center items-center'>
                                <img
                                    className='w-[100%] mx-auto'
                                    alt={`client-logo-${index}`}
                                    src={`${client?.attributes?.image?.data?.attributes?.url}`}
                                />
                            </div>
                            <div className='client-block-content relative w-2/3 h-[420px] bg-[#F0F0F9] rounded-[3rem] flex items-center big-container'>
                                <div className='client-block-content-text z-20 pl-36 max-w-[90%]'>
                                    <h1 className='relative text-3xl font-bold mb-2'>
                                        {client?.attributes?.name}
                                    </h1>
                                    <p className='text-lg font-medium text-justify'>
                                        {client?.attributes?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {/* Tab navigation */}
                <div className="flex justify-center gap-4 mb-4 scroll-button relative max-w-[1280px] mx-auto">
                    <div className='flex max-w-[80%] mx-auto gap-2 scroll-button-tab'>
                        {clientDestails && clientDestails.map((detail: ClientDetail, index: number) => (
                            <Button
                                key={index}
                                className={`px-4 py-2 rounded-lg focus:outline-none relative ${activeTab === index ? 'bg-[#0059DF] text-white tab-active' : 'bg-gray-200 text-gray-800'}`}
                                onClick={() => setActiveTab(index)}
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