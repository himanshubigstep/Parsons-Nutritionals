'use client'

import React, { useEffect, useState } from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'
import BoxSectionContainer from '../components/Esg/BoxContainerSection/BoxSectionContainer'
import BoxSectionContainerReverse from '../components/Esg/BoxSectionContainerReverse/BoxSectionContainerReverse'
import AboutContact from '../components/Common/ContactBlock/AboutContact'
import { EsgPageData } from '../Api/Api'

const ESG = () => {
  const [esgPageValue, setEsgPageValue] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await EsgPageData();
        const homePageMembersData = responseData.data.attributes;
        setEsgPageValue(homePageMembersData);
      } catch (error) {
        console.log(error, 'api-get-error');
      } finally {
        setLoading(false); // Ensure loading state is set to false when done
      }
    };

    fetchDataFromApi();
  }, []);

  const contactSections = esgPageValue

  const bannerImage = esgPageValue?.Header?.media?.data?.attributes?.formats?.large?.url

  const BannerContainerData = esgPageValue?.Header?.content

  const pdfFileUrl = 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf'

  if (loading) {
    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontSize: '2rem'}}>Loading...</div>;
  }

  return (
    <div>
      <TopBanner bannerImage={bannerImage} BannerContainerData={BannerContainerData} />
      <div className='relative'>
      <div id='esg-reporting-and-standards' className='w-full'>
        <BoxSectionContainer contactSections={contactSections} />
      </div>
      <div id='esg-implementation' className='w-full'>
        <BoxSectionContainerReverse contactSections={contactSections} />
      </div>
      <div className='absolute top-8 right-8'>
        <a target='_blank' href={pdfFileUrl} download className='p-4 rounded-lg bg-blue-500 hover:bg-blue-800 text-white'>
          Download PDF
        </a>
      </div>
      </div>
      <AboutContact contactSections={contactSections} />
    </div>
  )
}

export default ESG