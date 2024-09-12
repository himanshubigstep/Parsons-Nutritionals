'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const AboutContact = ({ contactSections }: { contactSections: any }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageLoaded(true); // Optional: You might want to handle the error case differently
    };
    const contactSectionData = contactSections?.ContactUs
    return (
        <>
            <div className="relative w-full max-w-full md:h-[38rem] h-96 mx-auto pt-8">                
            <div
                className={`absolute left-0 right-0 top-0 bottom-0 w-full h-full ${imageLoaded ? 'bg-transparent' : 'bg-gray-400'} opacity-50`}
            ></div>
                <img
                    className={`rounded-6xl w-full md:h-auto md:object-cover md:absolute left-0 right-0 top-0 bottom-0 h-full ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    alt="Our Vision"
                    src={contactSectionData?.media?.data?.attributes?.formats?.large?.url}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />
                <div className='md:absolute left-0 right-0 top-0 bottom-0 w-full max-w-[1280px] mx-auto'>
                    <div className="px-4 py-4 sm:px-8 sm:py-8 bg-[#0059DF] absolute top-[50%] translate-y-[-50%] z-20 right-0 rounded-3xl w-full sm:w-[28rem] flex justify-center items-center flex-col md:left-auto mx-auto left-0 max-w-[90%] md:max-w-fit">
                        <div className="mb-4 sm:mb-2 text-white text-[1.5rem] sm:text-[2.25rem] tracking-[-0.02em] leading-[2rem] sm:leading-[2.75rem] font-semibold text-left">
                            {contactSectionData?.btn_text}
                        </div>
                        <div className="leading-[1.5rem] sm:leading-[1.875rem] text-center text-white">
                            <p className="[margin-block-start:0] [margin-block-end:20px] font-medium">
                                {contactSectionData?.content}
                            </p>
                        </div>
                        
                        <Link href='/contact-us' className='bg-white rounded-lg text-black text-lg font-medium px-4 py-2'>
                            {contactSectionData?.btn_text}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContact