'use client'

import React, { useEffect, useState } from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'
import ManufacturingProcess from '../components/WhatWeDo/ManuFacturing/ManufacturingProcess'
import GraphicalFootPrints from '../components/WhatWeDo/Graphical/GraphicalFootPrints'
import BoxSectionContainer from '../components/Esg/BoxContainerSection/BoxSectionContainer'
import BoxSectionContainerReverse from '../components/Esg/BoxSectionContainerReverse/BoxSectionContainerReverse'
import OurFacilities from '../components/WhatWeDo/OurFacilities/OurFacilities'
import { WhatWeDoData } from '../Api/Api'
import SectionContainer from '../components/WhatWeDo/SectionContainer/SectionContainer'
import SectionContainerReverse from '../components/WhatWeDo/SectionContainerReverse/SectionContainerReverse'
import ChainsBody from '../components/WhatWeDo/ChainsBody/ChainsBody'
import ChainsBodyReverse from '../components/WhatWeDo/ChainsBodyReverse/ChainsBodyReverse'
import LoaderSpinner from '../components/Common/loader-spinner/LoadingSpinner'

const WhatWeDo = () => {
  const [whatWeDoDataValue, setWhatWeDoDataValue] = useState<any>(null);
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await WhatWeDoData();
        const whatWeDoData = responseData.data.attributes;
        setWhatWeDoDataValue(whatWeDoData);
      } catch (error) {
        console.log(error, 'api-get-error');
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []); const handleScrollToHash = () => {
    if (!loading) {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  // Run the scroll function once data is loaded or when hash changes
  useEffect(() => {
    handleScrollToHash();
  }, [loading]); // Only run when loading is false (data has been fetched)

  const BannerContainerDataContent = whatWeDoDataValue;
  const bannerImage = imageBaseUrl + whatWeDoDataValue?.Header?.media?.data?.attributes?.formats?.medium?.url;
  const contactSections = whatWeDoDataValue;

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

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <TopBanner bannerImage={bannerImage} BannerContainerDataContent={BannerContainerDataContent} />

      <div id='manufacturing-process'>
        <ManufacturingProcess whatWeDoDataValue={whatWeDoDataValue} />
      </div>

      <div id='geographical-footprint'>
        <GraphicalFootPrints whatWeDoDataValue={whatWeDoDataValue} />
      </div>

      {/* Uncomment and use the additional sections if needed */}
      {/* <div className='relative w-full max-w-[1280px] mx-auto'>
        <div className='text-center w-full pt-24'>
          <h3 className='font-bold text-2xl md:text-4xl mb-4'>{contactSections?.Projects?.Header?.title}</h3>
          <p className='font-normal text-md md:text-lg'>
            {contactSections?.Projects?.Header?.content}
          </p>
        </div>

        <div id='joint-facility'>
          <SectionContainer contactSections={contactSections} />
        </div>

        <div id='jar-line-automation'>
          <SectionContainerReverse contactSections={contactSections} />
        </div>
      </div> */}

      {/* <div id='our-facilities'>
        <OurFacilities contactSections={contactSections} />
      </div>

      <div className='relative w-full max-w-[1280px] mx-auto'>
        <div className='text-center w-full mb-4'>
          <h3 className='font-bold text-2xl md:text-4xl mb-4'>{contactSections?.Chains?.Header?.title}</h3>
          <p className='font-normal text-md md:text-lg'>
            {contactSections?.Chains?.Header?.content}
          </p>
        </div>

        <div id='backward-integration'>
          <ChainsBody contactSections={contactSections} />
        </div>

        <div id='own-bakery'>
          <ChainsBodyReverse contactSections={contactSections} />
        </div>
      </div> */}
    </main>
  );
}

export default WhatWeDo;
