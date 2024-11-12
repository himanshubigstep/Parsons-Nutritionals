'use client'

import React, { useEffect, useState } from 'react'
import './style.css'
import TopBanner from '../components/Common/Banner/TopBanner';
import WhiteBoxText from '../components/AboutUs/WhiteTextContainer/WhiteBoxText';
import WhiteBoxReverse from '../components/AboutUs/WhiteTextContainerReverse/WhiteBoxReverse';
import AboutTeamSlider from '../components/AboutUs/TeamSlider/AboutTeamSlider';
import AboutInfrastructure from '../components/AboutUs/Infrastructure/AboutInfrastructure';
import AboutUsStrength from '../components/AboutUs/Streangths/AboutUsStrength';
import AboutContact from '../components/Common/ContactBlock/AboutContact';
import { AboutUsData, AboutUsInfrastructureData, HomePageMemberstData, HomePageData, HomePageAwardstData } from '../Api/Api';
import HomePageOurVisions from '../components/HomePage/HomePageOurVisions/HomePageOurVisions';
import HomePageOurValues from '../components/HomePage/HomePageOurValues/HomePageOurValues';
import Image from 'next/image';
import backgroundImage from '@/app/assets/home-page/Webview.png'
import backgroundImageMobile from '@/app/assets/home-page/Responsive.png'
import HomePageAwarded from '../components/HomePage/HomePageAwarded/HomePageAwarded';
import LoaderSpinner from '../components/Common/loader-spinner/LoadingSpinner';

export default function AboutUs() {
  const [aboutUsPageDataValue, setaboutUsPageDataValue] = useState<any>(null);
  const [homePageDataValue, setHomePageDataValue] = useState(null);
  const [homePageMembersValue, setHomePageMembersValue] = useState(null);
  const [homePageAwardValue, setHomePageAwardValue] = useState(null);
  const [aboutUsPageInfrastructureValue, setaboutUsPageInfrastructureValue] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApis = async () => {
      try {
        const [homePageResponse, awardResponse] = await Promise.all([
          HomePageData(),
          HomePageAwardstData(),
        ]);

        setHomePageDataValue(homePageResponse.data.attributes);
        setHomePageAwardValue(awardResponse.data);

      } catch (error) {
        console.log(error, 'api-get-error');
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched
      }
    };

    // Check if there's any hash in the URL, and only scroll if not loading
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash && !isLoading) {  // Check if there is a hash and it's not loading
        const element = document.getElementById(hash.substring(1)); // Get element by ID
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    fetchDataFromApis();
    scrollToHash(); // Scroll to the appropriate section if available

  }, [isLoading]); // Dependency on isLoading to run when loading state changes

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await AboutUsData();
        const aboutUsData = responseData.data.attributes;
        setaboutUsPageDataValue(aboutUsData);
      } catch (error) {
        console.log(error, 'api-get-error');
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchDataFromApi();
  }, []);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await HomePageMemberstData();
        const homePageMembersData = responseData.data;
        setHomePageMembersValue(homePageMembersData);
      } catch (error) {
        console.log(error, 'api-get-error');
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchDataFromApi();
  }, []);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await AboutUsInfrastructureData();
        const aboutUsInfrastructureData = responseData.data;
        setaboutUsPageInfrastructureValue(aboutUsInfrastructureData);
      } catch (error) {
        console.log(error, 'api-get-error');
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchDataFromApi();
  }, []);

  const contactSections = aboutUsPageDataValue;
  const bannerImage = imageBaseUrl + aboutUsPageDataValue?.Header?.media?.data?.attributes?.url;
  const BannerContainerData = aboutUsPageDataValue?.Header?.content;

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F0F0F9] dark:bg-black">

      <TopBanner bannerImage={bannerImage} BannerContainerData={BannerContainerData} />

      <div id='vision-and-values' className='w-full mx-auto md:mt-24'>
        <HomePageOurVisions homePageDataValue={homePageDataValue} />
        <HomePageOurValues homePageDataValue={homePageDataValue} />
      </div>

      <div id='management-team' className='w-full max-w-[1280px] mx-auto'>
        <AboutTeamSlider homePageMembersValue={homePageMembersValue} />
      </div>

      <div id='timeline' className="w-full h-full md:rounded-3xl md:py-16">
        <div className="w-full max-w-[1280px] mx-auto h-full md:rounded-3xl bg-white dark:bg-gray-800">
          <Image
            src={isMobile ? backgroundImageMobile : backgroundImage}
            alt="Background Image"
            className="dark:invert w-full h-full object-contain md:rounded-3xl"
          />
        </div>
      </div>

      <div id='locations' className='w-full max-w-[1280px] mx-auto rounded-3xl'>
        <AboutInfrastructure aboutUsPageInfrastructureValue={aboutUsPageInfrastructureValue} />
      </div>
      
      <div id='awards' className='w-full mx-auto'>
        <HomePageAwarded homePageDataValue={homePageDataValue} homePageAwardValue={homePageAwardValue} />
      </div>

      <div id='our-strength' className='w-full max-w-[1280px] mx-auto'>
        <AboutUsStrength aboutUsPageDataValue={aboutUsPageDataValue} />
      </div>

    </main>
  );
}
