'use client'

import React, { useState } from 'react';
import './AboutInfrastructure.css';
import Button from '../../Common/Button/Button';

const AboutInfrastructure = () => {
    // Define an array of objects to store infrastructure details
    const infrastructureDetails = [
        {
            title: 'Legacy Foods Pvt. Ltd.',
            description: 'Dedicated manufacturing and packing facility for Glaxo Smithkline Consumer Healthcare Ltd.',
            keyFacts: [
                'Capacity of 110,000 MT per annum',
                'Area - 27,000 sq. mt.'
            ],
            salientFeatures: [
                'Zero waste disposal factory',
                'Complex Operation handling 24 different SKUs of varieties & sizes'
            ]
        },
        {
            title: 'Legacy Foods Pvt. Ltd.',
            description: 'Dedicated manufacturing and packing facility for Glaxo Smithkline Consumer Healthcare Ltd.',
            keyFacts: [
                'Capacity of 110,000 MT per annum',
                'Area - 27,000 sq. mt.'
            ],
            salientFeatures: [
                'Zero waste disposal factory',
                'Complex Operation handling 24 different SKUs of varieties & sizes'
            ]
        },
        {
            title: 'Legacy Foods Pvt. Ltd.',
            description: 'Dedicated manufacturing and packing facility for Glaxo Smithkline Consumer Healthcare Ltd.',
            keyFacts: [
                'Capacity of 110,000 MT per annum',
                'Area - 27,000 sq. mt.'
            ],
            salientFeatures: [
                'Zero waste disposal factory',
                'Complex Operation handling 24 different SKUs of varieties & sizes'
            ]
        },
        {
            title: 'Legacy Foods Pvt. Ltd.',
            description: 'Dedicated manufacturing and packing facility for Glaxo Smithkline Consumer Healthcare Ltd.',
            keyFacts: [
                'Capacity of 110,000 MT per annum',
                'Area - 27,000 sq. mt.'
            ],
            salientFeatures: [
                'Zero waste disposal factory',
                'Complex Operation handling 24 different SKUs of varieties & sizes'
            ]
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    const handlePrevTab = () => {
        setActiveTab((prev) => (prev === 0 ? infrastructureDetails.length - 1 : prev - 1));
    };

    const handleNextTab = () => {
        setActiveTab((prev) => (prev === infrastructureDetails.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='relative bg-white w-full max-w-[1280px] mx-auto mb-16'>
            <div className='w-full overflow-hidden flex flex-col justify-between items-center px-8 py-8'>
                <h1 className="text-3xl font-extrabold dark:text-white mb-2">Infrastructure</h1>
                {/* Tab content */}
                <div className='w-full relative flex justify-between items-center gap-8 infrastructure'>
                    {infrastructureDetails.map((detail, index) => (
                        <div key={index} className={`infrastructure-block w-full px-0 md:px-8 py-8 flex justify-center items-center ${activeTab === index ? '' : 'hidden'}`}>
                            <div className='infrastructure-block-img w-[40%] h-[420px] rounded-3xl bg-black mr-[-12%] z-10'>
                                <img
                                    src='https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg'
                                    alt='infrastructure'
                                    className='w-full h-full object-cover rounded-3xl'
                                />
                            </div>
                            <div className='infrastructure-block-content w-[60%] h-[540px] rounded-3xl bg-[#F0F0F9]'>
                                <div className='infrastructure-block-inner w-[95%] h-full pl-48 py-8'>
                                    <h2 className='text-2xl font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl dark:text-white'>
                                        {detail.title}
                                    </h2>
                                    <p className='text-lg font-normal text-gray1-200'>
                                        {detail.description}
                                    </p>
                                    <div className='flex flex-col justify-center mt-8'>
                                        <h3 className='text-xl font-bold leading-none tracking-tight text-black md:text-xl lg:text-xl dark:text-white'>
                                            Key Facts
                                        </h3>
                                        <ul>
                                            {detail.keyFacts.map((fact, index) => (
                                                <li key={index}>{fact}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='flex flex-col justify-center mt-8'>
                                        <h3 className='text-xl font-bold leading-none tracking-tight text-black md:text-xl lg:text-xl dark:text-white'>
                                            Salient Features
                                        </h3>
                                        <ul>
                                            {detail.salientFeatures.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='flex justify-start items-center mt-8'>
                                        <Button
                                            onClick={() => {
                                                window.open('/contact-us', '_blank');
                                            }}
                                            className='bg-[#0059DF] px-8 py-4 rounded-xl text-white text-lg font-bold'
                                        >
                                            Contact Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Tab navigation */}
                <div className="flex justify-center gap-4 mb-4 scroll-button relative">
                    <div className='flex max-w-[80%] mx-auto gap-2 scroll-button-tab'>
                        {infrastructureDetails.map((detail, index) => (
                            <Button
                                key={index}
                                className={`px-4 py-2 rounded-lg focus:outline-none relative ${activeTab === index ? 'bg-[#0059DF] text-white tab-active' : 'bg-gray-200 text-gray-800'}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {detail.title}
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
    );
};

export default AboutInfrastructure;
