'use client'

import React, { useState } from 'react'
import './ClientsData.css'
import Button from '../Common/Button/Button';

const clients = [
    {
        name: 'General Mills',
        description: "General Mills is one of South Korea's largest confectioners. It sells more overseas than it does in its home market. Best known for its Choco Pie cakes and Pokachip potato chips, the company has diversified its product line in recent years.",
        logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/00/General_Mills_logo.svg',
        bgColor: '#FFEAEC',
    },
    {
        name: 'Orion',
        description: "Orion is one of South Korea's largest confectioners. It sells more overseas than it does in its home market. Best known for its Choco Pie cakes and Pokachip potato chips, the company has diversified its product line in recent years.",
        logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Orion_Corporation_logo_%28english%29.svg',
        bgColor: '#FFEAEC',
    },
    {
        name: 'Danone',
        description: "Danone is one of South Korea's largest confectioners. It sells more overseas than it does in its home market. Best known for its Choco Pie cakes and Pokachip potato chips, the company has diversified its product line in recent years.",
        logoSrc: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Danone_dairy_logo.svg',
        bgColor: '#FFEAEC',
    },
];

const ClientsData = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (index: React.SetStateAction<number>) => {
        setActiveTab(index);
    };

    const handlePrevTab = () => {
        setActiveTab((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
    };

    const handleNextTab = () => {
        setActiveTab((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
    };
    return (
        <div className='relative w-full h-full bg-white px-8 py-24'>

            <div className='w-full max-w-[1280px] mx-auto'>
                <h1 className='text-center text-5xl font-bold mb-4 uppercase'>Clients</h1>
                <p className='text-center max-w-[80%] mx-auto font-medium text-lg'>Mann Ventures works with the premier Multinational corporations who are all market leaders in their space. Our operation forms a key part of their supply chain and helps in supplying the best in class products for the consumers. This is all a result of rigorous implementation of our clients Quality Management Systems.</p>
            </div>

            <div className='relative w-full h-full mx-auto'>

                <div className='clients-container w-full max-w[1280px] mx-auto h-full flex justify-center items-center gap-4'>

                    {clients.map((client, index) => (
                        <div key={index} className={`client-block h-full max-w-[60%] mx-auto flex justify-center items-center py-8 ${activeTab === index ? '' : 'hidden'}`}>
                            <div className='client-block-img mr-[-10%] w-1/3 h-[320px] bg-[#FFEAEC] rounded-3xl z-10 flex justify-center items-center'>
                                <img
                                    className='w-[80%] mx-auto'
                                    alt={`client-logo-${index}`}
                                    src={client.logoSrc}
                                />
                            </div>
                            <div className='client-block-content relative w-2/3 h-[420px] bg-[#F0F0F9] rounded-[3rem] flex items-center big-container'>
                                <div className='client-block-content-text z-20 pl-36 max-w-[90%]'>
                                    <h1 className='relative text-3xl font-bold mb-2'>
                                        {client.name}
                                    </h1>
                                    <p className='text-lg font-medium text-justify'>
                                        {client.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {/* Tab navigation */}
                <div className="flex justify-center gap-4 mb-4 scroll-button relative max-w-[1280px] mx-auto">
                    <div className='flex max-w-[80%] mx-auto gap-2 scroll-button-tab'>
                        {clients.map((detail, index) => (
                            <Button
                                key={index}
                                className={`px-4 py-2 rounded-lg focus:outline-none relative ${activeTab === index ? 'bg-[#0059DF] text-white tab-active' : 'bg-gray-200 text-gray-800'}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {detail.name}
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