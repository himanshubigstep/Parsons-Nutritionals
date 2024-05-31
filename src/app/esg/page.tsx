'use client'

import React, { useEffect, useState } from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'
import BoxSectionContainer from '../components/Esg/BoxContainerSection/BoxSectionContainer'
import BoxSectionContainerReverse from '../components/Esg/BoxSectionContainerReverse/BoxSectionContainerReverse'
import AboutContact from '../components/Common/ContactBlock/AboutContact'
import { EsgPageData } from '../Api/Api'

const ESG = () => {
  const [esgPageValue, setesgPageValue] = useState<any>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await EsgPageData();
        const homePageMembersData = responseData.data.attributes;
        setesgPageValue(homePageMembersData);
      } catch (error) {
        console.log(error, 'api-get-error');
      }
    };

    fetchDataFromApi();
  }, []);

  const contactSections = esgPageValue

  const bannerImage = esgPageValue?.Header?.media?.data?.attributes?.formats?.large?.url

  const BannerContainerData = esgPageValue?.Header?.content

  return (
    <div>
      <TopBanner bannerImage={bannerImage} BannerContainerData={BannerContainerData} />
      <div id='esg-reporting-and-standards' className='w-full'>
        <BoxSectionContainer contactSections={contactSections} />
      </div>
      <div id='esg-implementation' className='w-full'>
        <BoxSectionContainerReverse contactSections={contactSections} />
      </div>
      <AboutContact contactSections={contactSections} />
    </div>
  )
}

export default ESG