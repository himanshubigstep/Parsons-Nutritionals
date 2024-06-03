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
import { AboutUsData, AboutUsInfrastructureData, HomePageMemberstData } from '../Api/Api';

export default function AboutUs() {
  const [aboutUsPageDataValue, setaboutUsPageDataValue] = useState<any>(null);
  const [homePageMembersValue, setHomePageMembersValue] = useState(null);
  const [aboutUsPageInfrastructureValue, setaboutUsPageInfrastructureValue] = useState(null);

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

  const contactSections = aboutUsPageDataValue

  const bannerImage = aboutUsPageDataValue?.Header?.media?.data?.attributes?.formats?.large?.url

  const BannerContainerData = aboutUsPageDataValue?.Header?.content

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F0F0F9]">

      <TopBanner bannerImage={bannerImage} BannerContainerData={BannerContainerData} />

      <div id="about-mann-ventures" className='relative w-full max-w-[1280px] flex justify-center items-center pt-16 about-page'>
        <WhiteBoxText aboutUsPageDataValue={aboutUsPageDataValue} />
        <div className='w-1/2 mt-[10%] ml-[-5%] z-10 flex justify-center items-center rounded-[2.4rem] about-page-img'>
          {aboutUsPageDataValue?.BodyContent[0]?.images?.data.map((item: any, index: number) => (
            <img className='h-[480px] w-full rounded-[2.4rem]' key={index} src={`${item?.attributes?.formats?.large?.url}`} alt={item?.attributes?.formats?.small?.url} />
          ))}
        </div>
      </div>

      <div id='-food-and-healthcare-' className='relative w-full max-w-[1280px] flex justify-center items-center pt-32 about-page'>
        <div className='w-1/2 mt-[-10%] mr-[-5%] z-10 flex justify-center items-center rounded-[2.4rem] about-page-img'>
          {aboutUsPageDataValue?.BodyContent[1]?.images?.data.map((item: any, index: number) => (
            <img className='h-[480px] w-full rounded-[2.4rem]' key={index} src={`${item?.attributes?.formats?.large?.url}`} alt={item?.attributes?.formats?.small?.url} />
          ))}
        </div>
        <WhiteBoxReverse aboutUsPageDataValue={aboutUsPageDataValue} />
      </div>

      <div id='our-team' className='w-full max-w-[1280px] mx-auto'>
        <AboutTeamSlider homePageMembersValue = {homePageMembersValue} />
      </div>

      <div id='infrastructure' className='w-full max-w-[1280px] mx-auto'>
        <AboutInfrastructure aboutUsPageInfrastructureValue = {aboutUsPageInfrastructureValue} />
      </div>

      <div id='our-strength' className='w-full max-w-[1280px] mx-auto'>
        <AboutUsStrength aboutUsPageDataValue = {aboutUsPageDataValue} />
      </div>

      <AboutContact contactSections={contactSections} />

    </main>
  );
}