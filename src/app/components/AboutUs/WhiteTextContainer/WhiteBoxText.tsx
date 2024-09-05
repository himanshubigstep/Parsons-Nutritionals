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
        <div className='relative bg-white rounded-[2.4rem] w-1/2 px-8 pt-8 white-text-box'>
            <h2 className='mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white'>{boxData?.content?.title}</h2>

            <ul
                className='mb-4 px-4 max-w-full md:max-w-[80%] list-styles'
                dangerouslySetInnerHTML={{ __html: md.render(content) }}
            >
                
            </ul>
            <div className='flex flex-col md:flex-row relative gap-4 mt-8 mb-8'>
                {boxDataLogo && boxDataLogo.length > 0 && boxDataLogo.map((item: ImageData, index: number) => (
                    <img className='md:h-[40px] object-cover' key={index} src={`${item?.attributes?.formats?.thumbnail?.url}`} alt={item?.attributes?.formats?.small?.url} />
                ))}
            </div>
        </div>
    )
}

export default WhiteBoxText