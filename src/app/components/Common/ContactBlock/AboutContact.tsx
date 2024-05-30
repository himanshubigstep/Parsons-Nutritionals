import Link from 'next/link'
import React from 'react'

const AboutContact = ({ contactSections }: { contactSections: any }) => {
    const contactSectionData = contactSections?.ContactUs
    return (
        <>
            {/* Mapping through contact sections and rendering each */}
            {/* {contactSections.map((section: { backgroundImage: string | undefined; message: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; buttonText: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined }, index: React.Key | null | undefined) => ( */}
            <div className="relative w-full max-w-full h-[38rem] mx-auto pt-8">
                <div className='absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-black opacity-50 z-10'></div>
                <img
                    className="rounded-6xl w-full object-cover absolute left-0 right-0 top-0 bottom-0 h-full"
                    alt="Our Vision"
                    src={contactSectionData?.media?.data?.attributes?.formats?.large?.url}
                />
                <div className='absolute left-0 right-0 top-0 bottom-0 w-full max-w-[1280px] mx-auto'>
                    <div className="px-4 py-4 sm:px-8 sm:py-8 bg-[#0059DF] absolute top-[50%] translate-y-[-50%] z-20 right-0 rounded-3xl w-full sm:w-[28rem] flex justify-center items-center flex-col">
                        <div className="mb-4 sm:mb-2 text-white text-[1.5rem] sm:text-[2.25rem] tracking-[-0.02em] leading-[2rem] sm:leading-[2.75rem] font-semibold text-left">
                            {contactSectionData?.btn_text}
                        </div>
                        <div className="leading-[1.5rem] sm:leading-[1.875rem] text-center text-white">
                            <p className="[margin-block-start:0] [margin-block-end:20px] font-medium">
                                {contactSectionData?.content}
                            </p>
                        </div>
                        {/* Linking to the contact page */}
                        <Link href='/contact-us' className='bg-white rounded-lg text-black text-lg font-medium px-4 py-2'>
                            {contactSectionData?.btn_text}
                        </Link>
                    </div>
                </div>
            </div>
            {/* ))} */}
        </>
    )
}

export default AboutContact