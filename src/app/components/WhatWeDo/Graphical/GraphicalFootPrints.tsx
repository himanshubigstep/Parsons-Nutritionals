import React from 'react'
import ContactCities from '../../ContactUs/ContactAddress/ContactCities'
import './GraphicalFootPrints.css'

const GraphicalFootPrints = ({whatWeDoDataValue}: {whatWeDoDataValue: any}) => {
    const footPrintsHeader = whatWeDoDataValue?.Footprint?.header
    const footPrintsBlocks = whatWeDoDataValue?.Footprint?.blocks
    const footPrintsLogoBlocks = whatWeDoDataValue?.Footprint?.LogoBlock
  return (
    <div className='relative w-full mx-auto bg-white'>
        <div className='max-w-[1280px] mx-auto py-16'>
            <div className='relative w-full flex flex-col justify-center items-center px-8 py-8'>
                <h2 className='text-2xl md:text-[2.25rem] font-bold mb-4'>{footPrintsHeader?.title}</h2>
                <p className='text-gray1-200 text-md font-medium'>{footPrintsHeader?.content}</p>
            </div>
            <div className='w-full mx-auto flex flex-col md:flex-row justify-center items-center pt-8 px-8'>
                <div className='map-india w-[95%] md:w-1/3 h-full mx-auto'>
                    <ContactCities mapLocations = {whatWeDoDataValue?.Footprint?.MapLocation} />
                </div>
                <div className='map-containers flex flex-wrap gap-4 w-[95%] md:w-2/3 h-full justify-center'>
                    {footPrintsBlocks && footPrintsBlocks.map((block: any, index: number) => (
                        <div key={index} className='flex flex-col justify-center items-center w-[95%] md:w-[40%] h-[235px] bg-[#F0F0F9] rounded-xl'>
                            <p className='font-bold text-2xl mb-2'>{block?.title}</p>
                            <h3 className='font-bold text-5xl'>{block?.content}</h3>
                        </div>
                    ))}
                    <div className='flex justify-center items-center flex-col w-[95%] md:w-[40%] h-[235px] bg-[#F0F0F9] rounded-xl'>
                        <p className='font-bold text-2xl'>{footPrintsLogoBlocks?.title}</p>
                        <div className='w-full flex justify-center items-center gap-4 mt-2'>
                            {footPrintsLogoBlocks && footPrintsLogoBlocks?.logos?.data.map((logo: any, index: number) => (
                                <img
                                    key={index}
                                    className='w-[35%]'
                                    src={logo?.attributes?.formats?.medium?.url}
                                    alt=''
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GraphicalFootPrints