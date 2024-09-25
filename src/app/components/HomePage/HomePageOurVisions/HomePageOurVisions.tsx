import React from 'react'
import MarkdownIt from 'markdown-it'
import '../HomePageWhatWeAre/HomePageWhatWeAre.css'

const md = new MarkdownIt();

const HomePageOurVisions = ({homePageDataValue}: {homePageDataValue:any}) => {
    const OurVisionData = homePageDataValue?.Vision?.content
    const OurVisionDataImage = homePageDataValue?.Vision?.media?.data?.attributes?.formats?.large?.url
    const content = typeof OurVisionData?.content === 'string' ? OurVisionData?.content : '';
    return (
        <div className="relative w-full md:w-full max-w-full mx-auto pt-8 dark:pt-0">
            <img
                className="rounded-6xl absolute sm:relative  w-full h-auto sm:h-[35.688rem] object-cover"
                alt="Our Vision"
                src={`${OurVisionDataImage}`}
            />
            <div className='md:absolute md:mt-[0rem] mt-[13rem] relative px-4 sm:px-0 left-0 right-0 md:top-0 bottom-0 w-full max-w-[1280px] mx-auto'>
                <div className="px-8 py-8 sm:px-16 sm:py-16 bg-[#0059DF] md:absolute bottom-0 right-0 md:rounded-tl-[30px] sm:rounded-tl-[60px] sm:rounded-tr-none sm:rounded-b-none w-full sm:w-[38.375rem] h-auto sm:h-[28.688rem] rounded-[37px]   flex flex-col justify-center">
                    <div className="mb-4 sm:mb-8 text-white text-[1.5rem] sm:text-[2.25rem] tracking-[-0.02em] leading-[2rem] sm:leading-[2.75rem] font-semibold text-left">
                        {OurVisionData?.title}
                    </div>
                    <div
                        className="leading-[1.5rem] sm:leading-[1.875rem] text-left text-white markdown-content"
                        dangerouslySetInnerHTML={{ __html: md.render(content) }}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageOurVisions