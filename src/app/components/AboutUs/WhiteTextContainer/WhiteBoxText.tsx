import React from 'react'
import './WhiteBoxText.css'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt();

interface ImageData {
    attributes: {
        formats: any;
        image: {
            formats: {
                thumbnail: {
                    url: string;
                };
            };
        }
    };
}

const WhiteBoxText = ({ aboutUsPageDataValue }: { aboutUsPageDataValue: any }) => {
    const boxData = aboutUsPageDataValue?.BodyContent[0]
    const boxDataLogo = aboutUsPageDataValue?.BodyContent[0]?.content?.logos?.data
    const content = typeof boxData?.content?.content === 'string' ? boxData?.content?.content : '';
    return (
        <div className='relative bg-white dark:bg-black dark:border-2 dark:border-gray-700 rounded-[2.4rem] w-1/2 px-8 pt-8 white-text-box'>
            <h2 className='mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white'>{boxData?.content?.title}</h2>

            <ul
                className='text-md mb-4 px-4 max-w-full md:max-w-[80%] list-styles'
                dangerouslySetInnerHTML={{ __html: md.render(content) }}
            >
                
            </ul>
            <div className='flex flex-col md:flex-row justify-center items-center relative gap-4 mt-8 mb-8'>
                {boxDataLogo && boxDataLogo.length > 0 && boxDataLogo.map((item: ImageData, index: number) => (
                    <img className='sm:h-[40px] md:w-[150px] object-contain w-full overflow-hidden flex flex-col justify-between items-center px-8 py-8' key={index} src={`${item?.attributes?.formats?.thumbnail?.url}`} alt={item?.attributes?.formats?.small?.url} />
                ))}
            </div>
        </div>
    )
}

export default WhiteBoxText