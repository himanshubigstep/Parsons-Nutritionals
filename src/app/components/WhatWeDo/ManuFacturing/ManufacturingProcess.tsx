import React from 'react'

const manufacturingProcessesData = [
    {
        id: 1,
        imageUrl: 'https://images.pexels.com/photos/1120464/pexels-photo-1120464.jpeg',
        title: 'Our innovative breakthrough',
        description: "India's 1st vertical biscuit factory, now an industry norm",
        impact: 'Improved energy efficiency leveraging gravity; reduced the land footprint usage by a factor of 5'
    },
    {
        id: 2,
        imageUrl: 'https://images.pexels.com/photos/1120464/pexels-photo-1120464.jpeg',
        title: 'Our innovative breakthrough',
        description: "India's 1st vertical biscuit factory, now an industry norm",
        impact: 'Improved energy efficiency leveraging gravity; reduced the land footprint usage by a factor of 5'
    },
    {
        id: 3,
        imageUrl: 'https://images.pexels.com/photos/1120464/pexels-photo-1120464.jpeg',
        title: 'Our innovative breakthrough',
        description: "India's 1st vertical biscuit factory, now an industry norm",
        impact: 'Improved energy efficiency leveraging gravity; reduced the land footprint usage by a factor of 5'
    },
    {
        id: 4,
        imageUrl: 'https://images.pexels.com/photos/1120464/pexels-photo-1120464.jpeg',
        title: 'Our innovative breakthrough',
        description: "India's 1st vertical biscuit factory, now an industry norm",
        impact: 'Improved energy efficiency leveraging gravity; reduced the land footprint usage by a factor of 5'
    },
];

const ManufacturingProcess = () => {
    return (
        <div className='w-full max-w-[1280px] mx-auto relative py-24 flex flex-col justify-center items-center'>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='header w-[95%] mx-auto flex flex-col justify-center items-center'>
                    <h2 className='text-3xl font-bold text-black leading-[2.75rem]'>
                        Always the FIRST to innovate manufacturing processes
                    </h2>
                    <p className='text-md font-medium text-black leading-[1.875rem]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </p>
                </div>
                <div className='content-box w-full flex flex-wrap justify-between items-center pt-8 gap-8'>
                    {manufacturingProcessesData.map(process => (
                        <div key={process.id} className='rounded-2xl bg-white w-[95%] md:w-[48%] mx-auto'>
                            <div className='content-box-image relative rounded-2xl w-full h-[72%] rounded-tl-2xl rounded-tr-2xl rounded-bl-0 rounded-br-0'>
                                <img
                                    className='rounded-2xl w-full object-cover h-full'
                                    src={process.imageUrl}
                                    alt='content-box-image'
                                />
                                <div className='absolute left-0 right-0 bottom-0 bg-[#0059DF] w-full h-[8rem] flex items-center py-8 px-8 gap-4'>
                                    <div className='text-white font-bold text-5xl w-[5rem] h-[5rem] flex justify-center items-center'>
                                        {process.id}
                                    </div>
                                    <div className='text-white text-lg flex flex-col justify-center'>
                                        <div className='font-bold'>
                                            {process.title}
                                        </div>
                                        <div className='font-normal'>
                                            {process.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-auto px-8 py-8 flex gap-4'>
                                <div className='image-icon-container w-[5rem] h-[5rem] flex justify-center items-center bg-[#F0F0F9] rounded-lg'>
                                    {/* You can add an icon here if needed */}
                                </div>
                                <div className='w-[85%] image-icon-content flex flex-col'>
                                    <h3 className='text-xl font-bold'>Impact</h3>
                                    <p className='text-md font-normal'>
                                        {process.impact}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ManufacturingProcess