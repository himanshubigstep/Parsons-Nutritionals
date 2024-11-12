'use client'

import React, { useEffect, useState } from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'
import BoxSectionContainer from '../components/Esg/BoxContainerSection/BoxSectionContainer'
import BoxSectionContainerReverse from '../components/Esg/BoxSectionContainerReverse/BoxSectionContainerReverse'
import AboutContact from '../components/Common/ContactBlock/AboutContact'
import { EsgPageData } from '../Api/Api'
import LoaderSpinner from '../components/Common/loader-spinner/LoadingSpinner'

const ESG = () => {
  const [esgPageValue, setEsgPageValue] = useState<any>(null);
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL
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
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  // Function to handle scroll to the section once data is loaded
  const handleScrollToHash = () => {
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
  }, [loading]);

  const contactSections = esgPageValue

  const bannerImage = imageBaseUrl + esgPageValue?.Header?.media?.data?.attributes?.formats?.large?.url

  const BannerContainerData = esgPageValue?.Header?.content

  if (loading) {
    return <LoaderSpinner />;
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
      </div>
      <AboutContact contactSections={contactSections} />
    </div>
  )
}

export default ESG