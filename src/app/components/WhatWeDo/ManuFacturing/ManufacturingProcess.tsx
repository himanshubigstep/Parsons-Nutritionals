import React from 'react'

const ManufacturingProcess = ({whatWeDoDataValue}: {whatWeDoDataValue: any}) => {
    const manufacturingHeader = whatWeDoDataValue?.Breakthrough?.header
    const manufacturingData = whatWeDoDataValue?.Breakthrough?.Breakthrough
    return (
        <div className='w-full max-w-[1280px] mx-auto relative md:py-24 py-8 flex flex-col justify-center items-center'>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='header w-[95%] mx-auto flex flex-col justify-center items-center'>
                    <h2 className='text-3xl font-bold text-black leading-[2.75rem]'>
                        {manufacturingHeader?.title}
                    </h2>
                    <p className='text-md font-medium text-black leading-[1.875rem]'>
                        {manufacturingHeader?.content}
                    </p>
                </div>
                <div className='content-box w-full flex flex-wrap justify-between items-center pt-8 gap-8'>
                    {manufacturingData && manufacturingData.map((process: { id: React.Key | null | undefined; header: { image: { data: { attributes: { url: string | undefined } } } }; body: { number: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined }; footer: { icon: { data: { attributes: { formats: { small: { url: string | undefined } } } } }; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined } }) => (
                        <div key={process.id} className='rounded-2xl bg-white w-[95%] md:w-[48%] mx-auto'>
                            <div className='content-box-image relative rounded-2xl w-full h-[72%] rounded-tl-2xl rounded-tr-2xl rounded-bl-0 rounded-br-0'>
                                <img
                                    className='rounded-2xl w-full object-cover h-[24rem]'
                                    src={process?.header?.image?.data?.attributes?.url}
                                    alt='content-box-image'
                                />
                                <div className='absolute left-0 right-0 bottom-0 bg-[#0059DF] w-full md:h-[8rem] flex items-center py-8 px-8 gap-4'>
                                    <div className='text-white font-bold text-5xl w-[5rem] h-[5rem] flex justify-center items-center'>
                                        {process?.body?.number}
                                    </div>
                                    <div className='text-white text-lg flex flex-col justify-center'>
                                        <div className='font-bold'>
                                            {process?.body?.title}
                                        </div>
                                        <div className='font-normal'>
                                            {process?.body?.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='w-full h-auto px-8 py-8 flex gap-4'>
                                <div className='image-icon-container w-[5rem] h-[5rem] flex justify-center items-center bg-[#F0F0F9] rounded-lg'>
                                    <img
                                        className='px-4 py-4'
                                        src={process?.footer?.icon?.data?.attributes?.formats?.small?.url}
                                        alt=''
                                    />
                                </div>
                                <div className='w-[85%] image-icon-content flex flex-col'>
                                    <h3 className='text-xl font-bold'>{process?.footer?.title}</h3>
                                    <p className='text-md font-normal'>
                                        {process?.footer?.description}
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ManufacturingProcess