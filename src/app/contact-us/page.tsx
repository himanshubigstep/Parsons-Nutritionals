'use client'

import React, { useEffect, useState } from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'
import ContactForm from '../components/ContactUs/ContactForm/ContactForm'
import ContactAddress from '../components/ContactUs/ContactAddress/ContactAddress'
import { ContactPageData } from '../Api/Api'

const ContactUs = () => {
  const [contactPageData, setContactPageData] = useState<any>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await ContactPageData();
        const contactPageData = responseData.data.attributes;
        setContactPageData(contactPageData);
      } catch (error) {
        console.log(error, 'api-get-error');
      }
    };

    fetchDataFromApi();
  }, []);
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL

  const BannerContainerData = contactPageData?.Header?.content;
  const bannerImage = imageBaseUrl + contactPageData?.Header?.media?.data?.attributes?.formats?.large?.url;

  return (
    <main className="flex min-h-screen flex-col items-center">
        <TopBanner bannerImage={bannerImage} BannerContainerData={BannerContainerData} BannerContainerDataContent={undefined} />
        <div className='w-full relative py-24 md:px-0 px-4'>
            <div className='max-w-[1280px] mx-auto flex flex-col md:flex-row justify-center items-start gap-8'>
                <ContactForm />
                <ContactAddress contactPageData = {contactPageData} />
            </div>
        </div>
    </main>
  )
}

export default ContactUs