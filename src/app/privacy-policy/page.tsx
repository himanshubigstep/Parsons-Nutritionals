import React from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'

const PrivacyPolicy = () => {
  
  const BannerContainerData = {
    BannerHeading: "PriVacy Policy",
    BannerParagraph: "India's premier processed food manufacturers, offering manufacturing and packing services to well-known multinational corporations."
  }
  const bannerImage = 'https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg'
  return (
    <main className="flex min-h-screen flex-col items-cente">
      <TopBanner bannerImage={bannerImage} BannerContainerData={BannerContainerData} />
      <div className='w-full relative py-8 max-w-[1280px] mx-auto bg-white dark:bg-black dark:border-[1px] dark:border-gray-700 my-16 rounded-xl px-8'>
        <div className="py-20"><h1 className="block p text-5xl mb-5" id="privacy-policy">Privacy Policy</h1>
        </div>
      </div>
    </main>
  )
}

export default PrivacyPolicy