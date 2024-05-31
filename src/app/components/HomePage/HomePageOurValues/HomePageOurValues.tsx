'use client'

import React, { useState } from 'react'
import MarkdownIt from 'markdown-it'
import './HomePageOurValues.css'

const md = new MarkdownIt();

const HomePageOurValues = ({ homePageDataValue }: { homePageDataValue: any }) => {
    const ourValuesData = homePageDataValue?.Values
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <div className="w-full max-w-[1280px] mx-auto py-24 text-left text-[1rem] text-primary-700">
            <div className="text-center font-text-sm-regular mb-8">
                <div className="text-[2.25rem] tracking-[-0.02em] leading-[2.75rem] font-semibold text-black capitalize">
                    {ourValuesData?.title}
                </div>
            </div>

            <div className='w-[95%] md:w-full mx-auto relative flex flex-wrap justify-between items-center'>
            {ourValuesData?.items.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="w-full sm:w-[48%] lg:w-[30%] h-[25rem] bg-white rounded-2xl hover:bg-[#0059DF] px-8 py-8 mb-8 sm:mb-0"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className={`w-full flex mb-8 items-center text-[1.5rem] tracking-[-0.02em] leading-[2.75rem] uppercase font-semibold ${hoveredIndex === index ? 'text-white' : 'text-black'}`}>
                            <div className='overflow-hidden w-[62px] h-[62px] bg-[#0059D5] flex justify-center items-center rounded-full mr-4'>
                                <img
                                    className="w-full overflow-hidden h-full"
                                    alt=""
                                    src={`${item?.icon?.data?.attributes?.formats?.small?.url}`}
                                />
                            </div>
                            {item.title}
                        </div>
                        <div className="h-[48.59%] w-[86.8%] text-[1.25rem] text-gray1-200">
                            <div
                                className="h-full w-[95.37%] leading-[1.875rem] marker-down"
                                dangerouslySetInnerHTML={{ __html: md.render(item.content) }}
                            >
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default HomePageOurValues