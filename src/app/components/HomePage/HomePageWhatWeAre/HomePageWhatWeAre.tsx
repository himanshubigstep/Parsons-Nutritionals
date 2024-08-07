import React from 'react'
import MarkdownIt from 'markdown-it'
import './HomePageWhatWeAre.css'

const md = new MarkdownIt();

const HomePageWhatWeAre = ({ homePageDataValue }: { homePageDataValue: any }) => {
    const whatAreWeData = homePageDataValue?.WhatAreWe
    const imageUrl = whatAreWeData?.media?.data?.attributes?.formats?.large?.url;
    const content = typeof whatAreWeData?.content?.content === 'string' ? whatAreWeData?.content?.content : '';
    return (
        <div className="relative w-full max-w-[1280px] mx-auto py-24 flex flex-wrap justify-center items-center">
            <div className="mr-[0] md:mr-[-30px] w-[95%] md:w-1/2 h-auto md:h-[420px] rounded-3xl text-primary-700 font-text-sm-regular bg-white flex flex-col justify-start overflow-y-auto px-8 mb-8 md:mb-0">
                <div className="text-[2.25rem] tracking-[-0.02em] leading-[2.75rem] font-semibold text-black text-left mb-4">
                    {whatAreWeData?.content?.title}
                </div>
                <div
                    className="leading-[1.875rem] text-gray1-200 text-left markdown-content max-w-[95%]"
                    dangerouslySetInnerHTML={{ __html: md.render(content) }}
                >
                </div>
            </div>
            <div className="w-[95%] md:w-1/2 h-auto md:h-[480px]">
                {imageUrl && (
                    <img
                        className="rounded-[37px] w-full h-full object-cover"
                        alt="Worker"
                        src={`${imageUrl}`}
                    />
                )}
            </div>
        </div>
    )
}

export default HomePageWhatWeAre