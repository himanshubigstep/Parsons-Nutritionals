import React from 'react'
import './HomePageOurClients.css'

interface ImageData {
    attributes: {
        image: any;
        formats: {
            large: {
                url: string;
            };
        };
    };
}

const HomePageOurClients = ({homePageDataValue, homePageClientValue}: {homePageDataValue:any, homePageClientValue:any}) => {
  const OurClientsPartnerData = homePageDataValue?.CustomerSection
  const OurClientDataValue = homePageClientValue
  return (
    <div className="relative bg-[#0059DF] w-full h-auto sm:h-[20.875rem] text-[1.5rem] sm:text-[2.25rem] font-montserrat">
      <div className="max-w-[1280px] mx-auto font-extrabold flex items-center justify-center w-full py-4 sm:py-8 text-white capitalize">
        {OurClientsPartnerData?.title}
      </div>
      <div className="w-full max-w-[1280px] mx-auto h-[12rem] sm:h-[9.938rem] overflow-hidden">
        <div className="w-full flex flex-row items-start justify-start gap-4 sm:gap-[1.25rem]">
          <div className="flex gap-4 sm:gap-8 w-full mx-auto animate-marquee whitespace-nowrap">
            {OurClientDataValue && OurClientDataValue.map((item: ImageData, index: number) => (
              <div key={index} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                <img
                  src={`${item?.attributes?.image?.data?.attributes?.url}`}
                  alt={`Carousel image ${index + 1}`}
                  className="w-full h-full object-contain mx-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageOurClients