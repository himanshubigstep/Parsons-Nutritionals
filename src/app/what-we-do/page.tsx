import React from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'
import ManufacturingProcess from '../components/WhatWeDo/ManuFacturing/ManufacturingProcess'
import GraphicalFootPrints from '../components/WhatWeDo/Graphical/GraphicalFootPrints'
import BoxSectionContainer from '../components/WhatWeDo/BoxContainerSection/BoxSectionContainer'
import BoxSectionContainerReverse from '../components/WhatWeDo/BoxSectionContainerReverse/BoxSectionContainerReverse'
import OurFacilities from '../components/WhatWeDo/OurFacilities/OurFacilities'

const WhatWeDo = () => {

    const BannerContainerDataContent = {
        BannerHeading: "What We Do",
        BannerContainerIcon: "https://img.icons8.com/?size=256&id=20523&format=png"
    }
    
    const bannerImage = 'https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg'
  
    const sections = [
      {
        title: 'Joint R&D facility(Bengaluru)',
        info: [
          { label: 'Initiate in', content: '2016-ongoing' },
          {
            label: 'Goal',
            content: 'To bring a paradigm shift in formulation + manufacturing process of their core product',
          },
          {
            label: 'our Role',
            content: [
              'Actively involved in the project with HUL (earlier GSK) since inception with the customer, providing technical expertise to set up the trial plant',
              'We get ROFR for setting up new facilities using the developed manufacturing process',
            ],
          },
        ],
        imageSrc: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
      },
    ];

  return (
    <main className="flex min-h-screen flex-col items-center">

    <TopBanner bannerImage={bannerImage} BannerContainerDataContent={BannerContainerDataContent} />

    <div id='manufacturing-process'>
        <ManufacturingProcess />
    </div>

    <div id='geographical-footprint'>
        <GraphicalFootPrints />
    </div>
    
    <div id='joint-facility'>
        <BoxSectionContainer sections = {sections} />   
    </div>

    <div id='jar-line-automation'>
        <BoxSectionContainerReverse sections = {sections} />
    </div>

    <div id='our-facilities'>
        <OurFacilities />
    </div>

    <div className='relative w-full max-w-[1280px] mx-auto'>
        <div className='text-center w-full mb-4'>
            <h3 className='font-bold text-2xl md:text-4xl mb-4'>Building capabilities across the value chain</h3>
            <p className='font-normal text-md md:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
        </div>
    
        <div id='backward-integration'>
            <BoxSectionContainer sections = {sections} />   
        </div>

        <div id='own-bakery'>
            <BoxSectionContainerReverse sections = {sections} />
        </div>

    </div>

    </main>
  )
}

export default WhatWeDo