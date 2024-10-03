'use client'

import React, { useEffect, useState } from "react";
import HomePageSlider from "./components/HomePage/HomePageSlider/HomePageSlider";
import HomePageWhatWeAre from "./components/HomePage/HomePageWhatWeAre/HomePageWhatWeAre";
import HomePageOurClients from "./components/HomePage/HomePageOurClients/HomePageOurClients";
import HomePageOurVisions from "./components/HomePage/HomePageOurVisions/HomePageOurVisions";
import HomePageOurValues from "./components/HomePage/HomePageOurValues/HomePageOurValues";
import HomePageAwarded from "./components/HomePage/HomePageAwarded/HomePageAwarded";
import HomePageTeamSlider from "./components/HomePage/HomePageTeamSlider/HomePageTeamSlider";
import HomePageJoinTeam from "./components/HomePage/HomePageJoinTeam/HomePageJoinTeam";
import HomePageLegacy from "./components/HomePage/HomePageLegacy/HomePageLegacy";
import { HomePageAwardstData, HomePageClientData, HomePageData, HomePageMemberstData } from "./Api/Api";
import Image from "next/image";
import backgroundImage from '@/app/assets/home-page/Webview.png'
import backgroundImageMobile from '@/app/assets/home-page/Responsive.png'

export default function Home() {
  const [homePageDataValue, setHomePageDataValue] = useState(null);
  const [homePageClientValue, setHomePageClientValue] = useState(null);
  const [homePageAwardValue, setHomePageAwardValue] = useState(null);
  const [homePageMembersValue, setHomePageMembersValue] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchDataFromApis = async () => {
      try {
        const [homePageResponse, clientResponse, awardResponse, membersResponse] = await Promise.all([
          HomePageData(),
          HomePageClientData(),
          HomePageAwardstData(),
          HomePageMemberstData()
        ]);

        setHomePageDataValue(homePageResponse.data.attributes);
        setHomePageClientValue(clientResponse.data);
        setHomePageAwardValue(awardResponse.data);
        setHomePageMembersValue(membersResponse.data);

      } catch (error) {
        console.log(error, 'api-get-error');
      }
    };

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-0 pt-4">
      <HomePageSlider homePageDataValue={homePageDataValue} />
      <HomePageWhatWeAre homePageDataValue={homePageDataValue} />
      <HomePageOurClients homePageDataValue={homePageDataValue} homePageClientValue={homePageClientValue} />
      {/* <HomePageOurVisions homePageDataValue={homePageDataValue} />
      <HomePageOurValues homePageDataValue={homePageDataValue} />
      <HomePageAwarded homePageDataValue={homePageDataValue} homePageAwardValue={homePageAwardValue} />
      <HomePageTeamSlider homePageDataValue={homePageDataValue} homePageMembersValue={homePageMembersValue} />
      <HomePageJoinTeam homePageDataValue={homePageDataValue} />
      <HomePageLegacy />
      <div className="w-full h-full md:rounded-3xl bg-white dark:bg-black md:py-16">
        <div className="w-full max-w-[1280px] mx-auto h-full md:rounded-3xl bg-white dark:bg-gray-800">
          <Image
            src={isMobile ? backgroundImageMobile : backgroundImage}
            alt="Background Image"
            className="dark:invert w-full h-full object-contain md:rounded-3xl"
          />
        </div>
      </div> */}
    </main>
  );
}
