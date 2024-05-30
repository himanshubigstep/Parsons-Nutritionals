import React from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'
import ContactForm from '../components/ContactUs/ContactForm/ContactForm'
import ContactAddress from '../components/ContactUs/ContactAddress/ContactAddress'

const ContactUs = () => {
    const BannerContainerData = {
        BannerHeading: "Contact us",
        BannerParagraph: "We love to hear from you. please complete the form below for your service requirements in detail."
    }
    
    const bannerImage = 'https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg'

  return (
    <main className="flex min-h-screen flex-col items-center">
        <TopBanner bannerImage={bannerImage} BannerContainerData={BannerContainerData} BannerContainerDataContent={undefined} />
        <div className='w-full relative py-24'>
            <div className='max-w-[1280px] mx-auto flex flex-col md:flex-row justify-center items-start gap-8'>
                <ContactForm />
                <ContactAddress />
            </div>
        </div>
    </main>
  )
}

export default ContactUs