'use client'

import React, { useEffect, useState } from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'
import ClientsData from '../components/Clients/ClientsData'
import AboutContact from '../components/Common/ContactBlock/AboutContact'
import { ClientPageData, HomePageClientData } from '../Api/Api'

const Clients = () => {
  const [clientPageDataValue, setClientPageDataValue] = useState<any>(null);
  const [homePageClientValue, setHomePageClientValue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await ClientPageData();
        const clientPageData = responseData.data.attributes;
        setClientPageDataValue(clientPageData);
      } catch (error) {
        console.log(error, 'api-get-error');
      } finally {
        if (homePageClientValue !== null) {
          setLoading(false);
        }
      }
    };

    const fetchHomePageClientData = async () => {
      try {
        const responseData = await HomePageClientData();
        const homePageClientData = responseData.data;
        setHomePageClientValue(homePageClientData);
      } catch (error) {
        console.log(error, 'api-get-error');
      } finally {
        if (clientPageDataValue !== null) {
          setLoading(false);
        }
      }
    };

    fetchDataFromApi();
    fetchHomePageClientData();
  }, [clientPageDataValue, homePageClientValue]);

  if (loading) {
    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontSize: '2rem'}}>Loading...</div>;
  }

  const contactSections = clientPageDataValue;
  const bannerImage = clientPageDataValue?.Header?.cover?.data?.attributes?.formats?.large?.url;

  return (
    <main className="flex min-h-screen flex-col items-center">
      <TopBanner bannerImage={bannerImage} />
      <ClientsData clientPageDataValue={clientPageDataValue} homePageClientValue={homePageClientValue} />
      <AboutContact contactSections={contactSections} />
    </main>
  );
};

export default Clients;
