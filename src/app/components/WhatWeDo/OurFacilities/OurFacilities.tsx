import React from 'react'

const OurFacilities = ({contactSections}: {contactSections: any}) => {
    const FacilitiesHeader = contactSections?.Facilities?.Header
    const FacilitiesList = contactSections?.Facilities?.FacilitesList
  return (
    <div className='relative w-full max-w-[1280px] mx-auto py-16 flex flex-col justify-center items-center'>
        <div className='top-header mb-8 text-center'>
            <h2 className='text-2xl md:text-[2.25rem] font-bold mb-4'>{FacilitiesHeader?.title}</h2>
            <p className='text-gray1-200 text-md font-medium'>{FacilitiesHeader?.content}</p>
        </div>
        <div className='relative py-8 px-8'>
            <div className='w-full mx-auto flex flex-wrap justify-center items-center gap-16'>
                {FacilitiesList&& FacilitiesList.map(({image, title, content}: {image: any, title: string, content: string}) => {
                    return (
                        <div className='relative flex flex-col gap-4 mb-8 w-[40%] md:w-[15%] rounded-2xl h-[320px]'>
                            <img
                                className='w-full h-full object-cover rounded-2xl'
                                src={image?.data?.attributes?.url}
                                alt=''
                            />
                            <p>{content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default OurFacilities