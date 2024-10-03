'use client'

import React, { useState } from 'react'
import MarkdownIt from 'markdown-it'
import './HomePageOurValues.css'

const md = new MarkdownIt();

const HomePageOurValues = ({ homePageDataValue }: { homePageDataValue: any }) => {
    const ourValuesData = homePageDataValue?.Values
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <div className="w-full max-w-[1280px] mx-auto md:py-16 py-8 text-left text-[1rem] text-primary-700">
            <div className="text-center font-text-sm-regular mb-8">
                <div className="text-2xl font-semibold text-black capitalize">
                    {ourValuesData?.title}
                </div>
            </div>

            <div className='w-[95%] md:w-full mx-auto relative flex flex-wrap justify-between items-center'>
            {ourValuesData?.items.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="hoverd-on w-full sm:w-[48%] lg:w-[30%] md:h-[25rem] h-auto bg-white dark:bg-black dark:border-2 dark:border-gray-700 rounded-2xl hover:bg-[#0059DF] px-8 py-8 mb-8 sm:mb-0"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className={`hovered-on-img w-full flex mb-8 items-center text-xl uppercase font-semibold dark:text-white ${hoveredIndex === index ? 'text-white' : 'text-black'}`}>
                            <div className='overflow-hidden w-[62px] h-[62px] bg-[#0059D5] flex justify-center items-center rounded-full mr-4'>
                                <img
                                    className="w-full overflow-hidden h-full p-2 invert"
                                    alt=""
                                    src={`${item?.icon?.data?.attributes?.formats?.small?.url}`}
                                />
                            </div>
                            {item.title}
                        </div>
                        <div className="md:w-[86.8%] w-full h-auto text-md text-gray1-200">
                            <div
                                className="hovered-text h-full md:w-[95.37%] w-full leading-[1.875rem] marker-down"
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