import React from 'react'
import './WhiteBoxReverse.css'

const WhiteBoxReverse = ({ whiteBoxData }: { whiteBoxData: any }) => {
    return (
        <div className='relative bg-white mt-[5%] mr-[-5%] rounded-[2.4rem] w-1/2 px-8 pt-8 pl-28 white-reverse-text'>
            <h2 className='mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white'>{whiteBoxData.heading}</h2>

            <ul className='mb-4 list-styles px-4 max-wfull md:max-w-[80%]'>
                {whiteBoxData.list.map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
                    <li className='mb-4' key={index}>{item}</li>
                ))}
            </ul>
            <div className='flex flex-col md:flex-row relative gap-4 mt-8 mb-8'>
                {whiteBoxData.images.map((image: { src: string | undefined; alt: string | undefined }, index: React.Key | null | undefined) => (
                    <img className='h-[40px]' key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
        </div>
    )
}

export default WhiteBoxReverse