import React from 'react'
import Logo from '@/app/assets/home-page/logo.png'
import LinkedIn from '@/app/assets/home-page/linkedin.png'
import InstaGram from '@/app/assets/home-page/insta.png'
import YouTube from '@/app/assets/home-page/youtube.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="w-full h-full lg:h-[27rem] text-left text-[1rem] bg-black flex flex-col justify-center items-center py-8 px-8">
            <div className='w-full max-w-[1280px] h-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4'>

                <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
                    <div className="flex flex-col items-start justify-start gap-5">
                        <Image
                            className="w-[110px] relative h-[90px] object-cover"
                            alt=""
                            src={Logo}
                        />
                        <div className="w-[95%] lg:w-[15rem] relative leading-[1.5rem] text-white">
                        Parsons Nutritionals - your ideal business partner
                        </div>
                    </div>

                    {/* <div className="flex flex-col items-start justify-start text-[1.25rem]">
                        <div className="w-[95%] lg:w-[31.188rem] relative h-[9.75rem]">
                            <div className="leading-[1.875rem] font-semibold w-full lg:w-[28.813rem] text-white mb-5">
                                Stay In Touch
                            </div>
                            <div className="text-[1rem] leading-[1.5rem] bg-black text-gray-200 w-full mdw-[31.188rem] mb-5">
                                For the latest and greatest, subscribe to our monthly Mann
                                Ventures newsletter.
                            </div>
                            <div className="w-full lg:w-[25rem] flex flex-row items-start justify-start gap-[1rem] text-[0.875rem] text-gray-900 font-text-sm-regular">
                                <div className="w-full lg:w-[20.313rem] flex flex-col items-start justify-start gap-[0.375rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.375rem]">
                                        <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-base-white overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.875rem] gap-[0.5rem] text-[1rem] text-gray-500 bg-white border-[1px] border-solid border-gray-300">
                                            <div className="flex-1 flex flex-row items-center justify-start">
                                                <input type='email' className="flex-1 relative leading-[1.5rem] bg-white focus:border-0 focus:outline-0" placeholder='Enter your email'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="bg-[#0059DF] text-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-light-blue overflow-hidden flex flex-row items-center justify-center py-[0.625rem] px-[1.125rem] gap-[0.5rem] text-[1rem] text-base-white">
                                    Go
                                </button>
                            </div>
                        </div>
                    </div> */}
                    <div className='w-full mx-auto h-full'>
                        <div className='md:px-8 flex justify-center max-w-[85%] items-start flex-col'>
                            <h1 className='text-3xl text-white font-bold mb-2'>
                                Join Our Team
                            </h1>
                            <p className='text-white text-lg font-normal text-left'>
                                For the latest and greatest, Send your query to us from here.
                            </p>
                            <Link href='/contact-us' className='text-center text-black text-lg font-bold bg-white px-2 py-2 rounded-lg w-[10rem] mt-4'>Contact Us</Link>
                        </div>
                    </div>
                </div>

                <div className="w-full md-w-auto flex flex-col items-start justify-start text-gray-600 font-text-sm-regular">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[0.75rem]">
                        <div className="w-full md:w-auto flex flex-row items-center justify-start text-gray-200 bg-black">
                            <div className="overflow-hidden flex flex-row items-center justify-center gap-[0.5rem]">
                                <div className="relative leading-[1.5rem] font-semibold flex flex-col">
                                    <Link
                                        className="relative leading-[1.5rem] font-medium text-lg mb-2"
                                        href="/"
                                        target="_blank"
                                    >
                                        <span className="[text-decoration:underline]">Home</span>
                                    </Link>
                                    <Link
                                        className="relative leading-[1.5rem] font-medium text-lg mb-2"
                                        href='/about-us'
                                        target="_blank"
                                    >
                                        <span className="[text-decoration:underline]">
                                            About Us
                                        </span>
                                    </Link>
                                    <Link
                                        className="relative leading-[1.5rem] font-medium text-lg mb-2"
                                        href='/clients'
                                        target="_blank"
                                    >
                                        <span className="[text-decoration:underline]">
                                            Clients
                                        </span>
                                    </Link>
                                    <Link
                                        className="relative leading-[1.5rem] font-medium text-lg mb-2"
                                        href='/what-we-do'
                                        target="_blank"
                                    >
                                        <span className="[text-decoration:underline]">
                                            What We Do
                                        </span>
                                    </Link>
                                    <Link
                                        className="relative leading-[1.5rem] font-medium text-lg mb-2"
                                        href='/product-range'
                                        target="_blank"
                                    >
                                        <span className="[text-decoration:underline]">
                                            Product Range
                                        </span>
                                    </Link>
                                    <Link
                                        className="relative leading-[1.5rem] font-medium text-lg mb-2"
                                        href="/esg"
                                        target="_blank"
                                    >
                                        <span className="[text-decoration:underline]">
                                            ESG
                                        </span>
                                    </Link>
                                    {/* <Link
                                        className="relative leading-[1.5rem] font-medium text-lg mb-2"
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
                    <div className="flex-1 relative leading-[1.5rem]">
                        © 2015 mannventures.com. All rights reserved
                    </div>
                    <div className="w-[14.188rem] relative flex items-center justify-end gap-5">
                        <Link href='terms-conditions' className="leading-[1.5rem]">
                            Terms
                        </Link>
                        <Link href='privacy-policy' className="leading-[1.5rem]">
                            Privacy
                        </Link>
                    </div>
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