import React, { ReactNode } from 'react'
import './AboutStreangth.css'

const AboutUsStrength = ({ aboutUsPageDataValue }: { aboutUsPageDataValue: any }) => {
    const strengthsData = aboutUsPageDataValue?.Strengths
    return (
        <div className='max-w-[1280px] mx-auto w-full px-8 py-8 flex justify-center items-center md:mb-8 our-strength'>
            <div className='w-[40%] md:h-[720px] rounded-3xl bg-black dark:border-2 dark:border-gray-700 px-8 py-8 mr-[-8%] z-10 flex flex-col gap-8 items-start our-strength-img'>
                <h2 className='text-3xl font-extrabold text-white'>{strengthsData?.title}</h2>
                <img
                    src={strengthsData?.media?.data?.attributes?.formats?.small?.url}
                    alt='infrastructure'
                    className='w-full h-full max-h-[640px] object-cover rounded-3xl'
                />
            </div>
            <div className='w-[60%] rounded-3xl bg-white dark:bg-black dark:border-2 dark:border-gray-700 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] our-strength-content'>
                <div className='w-full h-full pl-36 py-8 our-strength-inner'>
                    <div className='flex flex-col justify-center mt-0'>
                        <ul className='relative leading-10 max-w-full md:max-w-[85%] list-styles'>
                            {strengthsData?.points?.map((item: { id: number; content: string }, index: number) => (
                                <li key={index}>{item?.content}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsStrength