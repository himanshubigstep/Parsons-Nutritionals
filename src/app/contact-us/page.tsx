'use client'

import React, { useEffect, useState } from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'
import ContactForm from '../components/ContactUs/ContactForm/ContactForm'
import ContactAddress from '../components/ContactUs/ContactAddress/ContactAddress'
import { ContactPageData } from '../Api/Api'

const ContactUs = () => {
  const [contactPageData, setContactPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await ContactPageData();
        const contactPageData = responseData.data.attributes;
        setContactPageData(contactPageData);
      } catch (error) {
        console.log(error, 'api-get-error');
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  if (loading) {
    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontSize: '2rem'}}>Loading...</div>;
  }

  const BannerContainerData = contactPageData?.Header?.content;
  const bannerImage = contactPageData?.Header?.media?.data?.attributes?.formats?.large?.url;

  return (
    <main className="flex min-h-screen flex-col items-center">
        <TopBanner bannerImage={bannerImage} BannerContainerData={BannerContainerData} BannerContainerDataContent={undefined} />
        <div className='w-full relative py-24'>
            <div className='max-w-[1280px] mx-auto flex flex-col md:flex-row justify-center items-start gap-8'>
                <ContactForm />
                <ContactAddress contactPageData = {contactPageData} />
            </div>
        </div>
    </main>
  )
}

export default ContactUs