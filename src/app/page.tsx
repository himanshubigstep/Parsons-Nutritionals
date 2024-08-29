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
import backgroundImage from '@/app/assets/home-page/home-page-bottom-bg.png'

export default function Home() {
  const [homePageDataValue, setHomePageDataValue] = useState(null);
  const [homePageClientValue, setHomePageClientValue] = useState(null);
  const [homePageAwardValue, setHomePageAwardValue] = useState(null);
  const [homePageMembersValue, setHomePageMembersValue] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await HomePageData();
        const homePageData = responseData.data.attributes;
        setHomePageDataValue(homePageData);
      } catch (error) {
        console.log(error, 'api-get-error');
      }
    };

    fetchDataFromApi();
  }, []);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await HomePageClientData();
        const homePageClientData = responseData.data;
        setHomePageClientValue(homePageClientData);
      } catch (error) {
        console.log(error, 'api-get-error');
      }
    };

    fetchDataFromApi();
  }, []);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await HomePageAwardstData();
        const homePageAwardData = responseData.data;
        setHomePageAwardValue(homePageAwardData);
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomePageSlider homePageDataValue={homePageDataValue} />
      <HomePageWhatWeAre homePageDataValue={homePageDataValue} />
      <HomePageOurClients homePageDataValue={homePageDataValue} homePageClientValue={homePageClientValue} />
      <HomePageOurVisions homePageDataValue={homePageDataValue} />
      <HomePageOurValues homePageDataValue={homePageDataValue} />
      <HomePageAwarded homePageDataValue={homePageDataValue} homePageAwardValue={homePageAwardValue} />
      <HomePageTeamSlider homePageDataValue={homePageDataValue} homePageMembersValue={homePageMembersValue} />
      <HomePageJoinTeam homePageDataValue={homePageDataValue} />
      <HomePageLegacy />
      <div className="w-full h-full md:rounded-3xl bg-white md:py-16">
        <div className="w-full max-w-[1280px] mx-auto h-full md:rounded-3xl bg-white">
          <Image
            src={backgroundImage}
            alt="Background Image"
            className="w-full h-full object-contain md:rounded-3xl"
          />
        </div>
      </div>
    </main>
  );
}
