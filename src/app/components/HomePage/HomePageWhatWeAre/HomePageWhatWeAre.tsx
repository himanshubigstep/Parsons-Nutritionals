import React from 'react'
import MarkdownIt from 'markdown-it'
import './HomePageWhatWeAre.css'

const md = new MarkdownIt();

const HomePageWhatWeAre = ({ homePageDataValue }: { homePageDataValue: any }) => {
    const whatAreWeData = homePageDataValue?.WhatAreWe
    const imageUrl = whatAreWeData?.media?.data?.attributes?.formats?.large?.url;
    const content = typeof whatAreWeData?.content?.content === 'string' ? whatAreWeData?.content?.content : '';
    return (
        <div className="relative  flex-col-reverse sm:flex-row w-full max-w-[1280px] mx-auto md:py-24 py-8 flex flex-wrap justify-center items-center">
            <div className="what-we-are dark:border-2 dark:border-gray-700 mt-40 z-1 text-box sm:mt-0 sm:z-10 mr-[0] md:mr-[-30px] w-[95%] md:w-1/2 h-auto md:h-[420px] rounded-3xl text-primary-700 font-text-sm-regular bg-white dark:bg-black flex flex-col justify-start overflow-y-auto md:px-8 p-4 mb-8 md:mb-0">
                <div className="text-[2.25rem] tracking-[-0.02em] leading-[2.75rem] font-semibold text-black dark:text-white text-left mb-4">
                    {whatAreWeData?.content?.title}
                </div>
                <div
                    className="leading-[1.875rem] text-gray1-200 text-left markdown-content max-w-[95%] md:line-clamp-none line-clamp-6"
                    dangerouslySetInnerHTML={{ __html: md.render(content) }}
                >
                </div>
            </div>
            <div className=" absolute top-5 sm:relative sm:top-0 w-[100%] sm:w-[95%] md:w-1/2 h-auto md:h-[480px]">
                {imageUrl && (
                    <img
                        className="sm:rounded-[37px] rounded-[1px] w-full h-full object-cover"
                        alt="Worker"
                        src={`${imageUrl}`}
                    />
                )}
            </div>
        </div>
    )
}

export default HomePageWhatWeAre