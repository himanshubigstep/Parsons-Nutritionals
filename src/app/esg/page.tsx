'use client'

import React, { useEffect, useState } from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'
import BoxSectionContainer from '../components/Esg/BoxContainerSection/BoxSectionContainer'
import BoxSectionContainerReverse from '../components/Esg/BoxSectionContainerReverse/BoxSectionContainerReverse'
import AboutContact from '../components/Common/ContactBlock/AboutContact'
import { EsgPageData } from '../Api/Api'

const ESG = () => {
  const [esgPageValue, setEsgPageValue] = useState<any>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await EsgPageData();
        const homePageMembersData = responseData.data.attributes;
        setEsgPageValue(homePageMembersData);
      } catch (error) {
        console.log(error, 'api-get-error');
      }
    };

    fetchDataFromApi();
  }, []);

  const contactSections = esgPageValue

  const bannerImage = esgPageValue?.Header?.media?.data?.attributes?.formats?.large?.url

  const BannerContainerData = esgPageValue?.Header?.content

  const pdfFileUrl = 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf'

  return (
    <div>
      <TopBanner bannerImage={bannerImage} BannerContainerData={BannerContainerData} />
      <div className='relative'>
      <div id='esg-reporting-and-standards' className='w-full'>
        <BoxSectionContainer contactSections={contactSections} pdfFileUrl = {pdfFileUrl} />
      </div>
      <div id='esg-implementation' className='w-full'>
        <BoxSectionContainerReverse contactSections={contactSections} />
      </div>
      </div>
      <AboutContact contactSections={contactSections} />
    </div>
  )
}

export default ESG