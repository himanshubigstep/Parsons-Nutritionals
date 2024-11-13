import React from 'react'
import Logo from '@/app/assets/home-page/logo.png'
import LinkedIn from '@/app/assets/home-page/linkedin.png'
import InstaGram from '@/app/assets/home-page/insta.png'
import YouTube from '@/app/assets/home-page/youtube.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="landscape:gap-4 w-full h-full lg:h-[27rem] text-left text-[1rem] bg-black dark:border-t-2 dark:border-gray-700 flex flex-col justify-center items-center py-8 px-8">
            <div className='w-full max-w-[1280px] h-full flex flex-col lg:flex-row landscape:flex-row justify-between items-start lg:items-center gap-4'>

                <div className='flex flex-col lg:flex-row justify-between items-center landscape:items-start gap-10'>
                    <div className="flex flex-col items-start justify-start gap-5">
                        <Image
                            className="w-[80px] relative h-[50px] object-cover"
                            alt=""
                            src={Logo}
                        />
                        <div className="w-[95%] lg:w-[15rem] relative text-md text-white">
                            Parsons Nutritionals - your ideal business partner
                        </div>
                    </div>
                    <div className='w-full mx-auto h-full'>
                        <div className='md:px-8 landscape:px-0 flex justify-center max-w-[85%] items-start flex-col'>
                            <h1 className='text-2xl text-white font-bold mb-2'>
                                Join Our Team
                            </h1>
                            <p className='text-white text-md font-normal text-left'>
                                For the latest and greatest, Send your query to us from here.
                            </p>
                            <Link href='/contact-us' className='text-center text-black text-md font-bold bg-white px-2 py-2 rounded-lg w-[10rem] mt-4'>Contact Us</Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start text-gray-600 font-text-sm-regular w-full md:w-auto">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[0.75rem]">
                        <div className="w-full md:w-auto flex flex-row items-center justify-start text-gray-200 bg-black">
                            <div className="overflow-hidden flex flex-row items-center justify-center gap-[0.5rem]">
                                <div className="relative font-semibold flex flex-col">
                                    <Link
                                        className="relative font-medium text-md mb-2"
                                        href="/"
                                        target="_blank"
                                    >
                                        <span className="[text-decoration:underline]">Home</span>
                                    </Link>
                                    <Link
                                        className="relative font-medium text-md mb-2"
                                        href='/about-us'
                                        target="_blank"
                                    >
                                        <span className="[text-decoration:underline]">
                                            About Us
                                        </span>
                                    </Link>
                                    <Link
                                        className="relative font-medium text-md mb-2"
                                        href='/clients'
                                        target="_blank"
                                    >
                                        <span className="[text-decoration:underline]">
                                            Clients
                                        </span>
                                    </Link>
                                    <Link
                                        className="relative font-medium text-md mb-2"
                                        href='/what-we-do'
                                        target="_blank"
                                    >
                                        <span className="[text-decoration:underline]">
                                            What We Do
                                        </span>
                                    </Link>
                                    <Link
                                        className="relative font-medium text-md mb-2"
                                        href='/product-range'
                                        target="_blank"
                                    >
                                        <span className="[text-decoration:underline]">
                                            Product Range
                                        </span>
                                    </Link>
                                    <Link
                                        className="relative font-medium text-md mb-2"
                                        href="/esg"
                                        target="_blank"
                                    >
                                        <span className="[text-decoration:underline]">
                                            ESG
                                        </span>
                                    </Link>
                                    {/* <Link
                                        className="relative font-medium text-md mb-2"
                                        href="/contact-us"
                                        target="_blank"
                                    >
                                        <span className="[text-decoration:underline]">
                                            Contact Us
                                        </span>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-[1280px] mx-auto flex flex-col items-start justify-start box-border text-gray-300">
                <div className="self-stretch flex flex-col lg:flex-row items-center justify-start pt-[2rem] px-[0rem] gap-[2rem] border-t-[1px] border-solid border-gray-600">
                    <div className="flex-1 relative text-md">
                        © 2024 Parsons Nutritionals. All rights reserved
                    </div>
                    {/* <div className="w-[14.188rem] relative flex items-center justify-end gap-5">
                        <Link href='terms-conditions' className="text-md">
                            Terms
                        </Link>
                        <Link href='privacy-policy' className="text-md">
                            Privacy
                        </Link>
                    </div> */}
                    {/* <div className="flex flex-row items-center justify-start">
                        <div className="flex flex-row items-center justify-start gap-[1.5rem]">
                            <Image
                                className="w-[28px] relative h-[28px] object-cover invert"
                                alt=""
                                src={LinkedIn}
                            />
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Footer