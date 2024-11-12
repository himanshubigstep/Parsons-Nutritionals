'use client'

import React, { useEffect, useState } from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'
import ClientsData from '../components/Clients/ClientsData'
import AboutContact from '../components/Common/ContactBlock/AboutContact'
import { ClientPageData, HomePageClientData } from '../Api/Api'
import LoaderSpinner from '../components/Common/loader-spinner/LoadingSpinner'

const Clients = () => {
  const [clientPageDataValue, setClientPageDataValue] = useState<any>(null);
  const [homePageClientValue, setHomePageClientValue] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await ClientPageData();
        const clientPageData = responseData.data.attributes;
        setClientPageDataValue(clientPageData);
      } catch (error) {
        console.log(error, 'api-get-error');
      } finally {
        setLoading(false);
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
        setLoading(false);
      }
    };

    fetchDataFromApi();
    fetchHomePageClientData();
  }, []);
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL

  const contactSections = clientPageDataValue;
  const bannerImage = imageBaseUrl + clientPageDataValue?.Header?.cover?.data?.attributes?.formats?.large?.url;

  if (loading) {
    return <LoaderSpinner />;
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      <TopBanner bannerImage={bannerImage} />
      <ClientsData clientPageDataValue={clientPageDataValue} homePageClientValue={homePageClientValue} />
      <AboutContact contactSections={contactSections} />
    </main>
  );
};

export default Clients;
