import React from 'react'
import ContactCities from '../../ContactUs/ContactAddress/ContactCities'
import './GraphicalFootPrints.css'

const GraphicalFootPrints = () => {
  return (
    <div className='relative w-full mx-auto bg-white'>
        <div className='max-w-[1280px] mx-auto py-16'>
            <div className='relative w-full flex flex-col justify-center items-center px-8 py-8'>
                <h2 className='text-2xl md:text-[2.25rem] font-bold mb-4'>A pan-India geographical footprint</h2>
                <p className='text-gray1-200 text-md font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className='w-full mx-auto flex flex-col md:flex-row justify-center items-center pt-8 px-8'>
                <div className='map-india w-[95%] md:w-1/3 h-full mx-auto'>
                    <ContactCities />
                </div>
                <div className='map-containers flex flex-wrap gap-4 w-[95%] md:w-2/3 h-full justify-center'>
                    <div className='flex justify-center items-center flex-col w-[95%] md:w-[40%] h-[235px] bg-[#F0F0F9] rounded-xl'>
                        <p className='font-bold text-2xl'>Since</p>
                        <h3 className='font-bold text-5xl'>2003</h3>
                    </div>
                    <div className='flex justify-center items-center flex-col w-[95%] md:w-[40%] h-[235px] bg-[#F0F0F9] rounded-xl'>
                        <p className='font-bold text-2xl'>Spread across</p>
                        <h3 className='font-bold text-5xl'>76 acres</h3>
                    </div>
                    <div className='flex justify-center items-center flex-col w-[95%] md:w-[40%] h-[235px] bg-[#F0F0F9] rounded-xl'>
                        <p className='font-bold text-2xl'>Spanning</p>
                        <h3 className='font-bold text-5xl'>5 states</h3>
                    </div>
                    <div className='flex justify-center items-center flex-col w-[95%] md:w-[40%] h-[235px] bg-[#F0F0F9] rounded-xl'>
                        <p className='font-bold text-2xl'>Certified facilities</p>
                        <div className='w-full flex justify-center items-center gap-4'>
                            <img
                                className=''
                                src=''
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GraphicalFootPrints