import React from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'
import BoxSectionContainer from '../components/WhatWeDo/BoxContainerSection/BoxSectionContainer'
import BoxSectionContainerReverse from '../components/WhatWeDo/BoxSectionContainerReverse/BoxSectionContainerReverse'
import AboutContact from '../components/Common/ContactBlock/AboutContact'

const ESG = () => {

  const BannerContainerData = {
      BannerHeading: "Environmental, Social, and Governance",
      BannerParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
  }
    
  const bannerImage = 'https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg'
  
  const sections = [
    {
      title: 'ESG Reporting and Standards',
      info: [
        // { label: 'Initiate in', content: '2016-ongoing' },
        // {
        //   label: 'Goal',
        //   content: 'To bring a paradigm shift in formulation + manufacturing process of their core product',
        // },
        {
          // label: 'our Role',
          content: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          ],
        },
      ],
      imageSrc: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    },
  ];

  const contactSections = [
    {
      backgroundImage: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg',
      message: 'We love to hear from you. please complete the form below for your service requirements in detail.',
      buttonText: 'Contact Us'
    },
  ];

  return (
    <div>
      <TopBanner bannerImage={bannerImage} BannerContainerData={BannerContainerData} />
      <div id='esg-reporting-and-standards' className='w-full'>
        <BoxSectionContainer sections={sections} />
      </div>
      <div id='esg-implementation' className='w-full'>
        <BoxSectionContainerReverse sections={sections} />
      </div>
      <AboutContact contactSections={contactSections} />
    </div>
  )
}

export default ESG