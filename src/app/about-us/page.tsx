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

export default function AboutUs() {
  const [aboutUsPageDataValue, setaboutUsPageDataValue] = useState<any>(null);
  const [homePageDataValue, setHomePageDataValue] = useState(null);
  const [homePageMembersValue, setHomePageMembersValue] = useState(null);
  const [homePageAwardValue, setHomePageAwardValue] = useState(null);
  const [aboutUsPageInfrastructureValue, setaboutUsPageInfrastructureValue] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL

  useEffect(() => {
    const fetchDataFromApis = async () => {
      try {
        const [homePageResponse, awardResponse] = await Promise.all([
          HomePageData(),
          // HomePageClientData(),
          HomePageAwardstData(),
          // HomePageMemberstData()
        ]);

        setHomePageDataValue(homePageResponse.data.attributes);
        // setHomePageClientValue(clientResponse.data);
        setHomePageAwardValue(awardResponse.data);
        // setHomePageMembersValue(membersResponse.data);

      } catch (error) {
        console.log(error, 'api-get-error');
      }
    };

      if (window.location.hash === '#locations') {
        const element = document.getElementById('locations');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    fetchDataFromApis();
  }, []);

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
      }
    };

    fetchDataFromApi();
  }, []);

  const contactSections = aboutUsPageDataValue;
  const bannerImage = imageBaseUrl + aboutUsPageDataValue?.Header?.media?.data?.attributes?.url;
  const BannerContainerData = aboutUsPageDataValue?.Header?.content;
  

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F0F0F9] dark:bg-black">

      <TopBanner bannerImage={bannerImage} BannerContainerData={BannerContainerData} />

      <div id='vision-and-values' className='w-full mx-auto md:mt-24'>
        <HomePageOurVisions homePageDataValue={homePageDataValue} />
        <HomePageOurValues homePageDataValue={homePageDataValue} />
      </div>

      {/* <div id="about-mann-ventures" className='relative w-full max-w-[1280px] flex justify-center items-center pt-16 about-page'>
        <WhiteBoxText aboutUsPageDataValue={aboutUsPageDataValue} />
        <div className='w-1/2 mt-[10%] ml-[-5%] z-10 flex justify-center items-center rounded-[2.4rem] about-page-img'>
          {aboutUsPageDataValue?.BodyContent[0]?.images?.data.map((item: any, index: number) => (
            <img className='md:h-[480px] w-full rounded-[2.4rem]' key={index} src={`${item?.attributes?.formats?.large?.url}`} alt={item?.attributes?.formats?.small?.url} />
          ))}
        </div>
      </div> */}

      <div id='management-team' className='w-full max-w-[1280px] mx-auto'>
        <AboutTeamSlider homePageMembersValue = {homePageMembersValue} />
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
        <AboutInfrastructure aboutUsPageInfrastructureValue = {aboutUsPageInfrastructureValue} />
      </div>
      
      <div id='awards' className='w-full mx-auto'>
        <HomePageAwarded homePageDataValue={homePageDataValue} homePageAwardValue={homePageAwardValue} />
      </div>

      <div id='our-strength' className='w-full max-w-[1280px] mx-auto'>
        <AboutUsStrength aboutUsPageDataValue = {aboutUsPageDataValue} />
      </div>

      {/* <div id='-food-and-healthcare-' className='relative w-full max-w-[1280px] flex justify-center items-center md:pt-16 md:pb-32 py-8 about-page'>
        <div className='w-1/2 mt-[-10%] mr-[-5%] z-10 flex justify-center items-center rounded-[2.4rem] about-page-img'>
          {aboutUsPageDataValue?.BodyContent[1]?.images?.data.map((item: any, index: number) => (
            <img className='md:h-[480px] w-full rounded-[2.4rem]' key={index} src={`${item?.attributes?.formats?.large?.url}`} alt={item?.attributes?.formats?.small?.url} />
          ))}
        </div>
        <WhiteBoxReverse aboutUsPageDataValue={aboutUsPageDataValue} />
      </div>

      <AboutContact contactSections={contactSections} /> */}

    </main>
  );
}