import React from 'react'
import './style.css'
import TopBanner from '../components/Common/Banner/TopBanner';
import WhiteBoxText from '../components/AboutUs/WhiteTextContainer/WhiteBoxText';
import WhiteBoxReverse from '../components/AboutUs/WhiteTextContainerReverse/WhiteBoxReverse';
import AboutTeamSlider from '../components/AboutUs/TeamSlider/AboutTeamSlider';
import AboutInfrastructure from '../components/AboutUs/Infrastructure/AboutInfrastructure';
import AboutUsStrength from '../components/AboutUs/Streangths/AboutUsStrength';
import AboutContact from '../components/Common/ContactBlock/AboutContact';

export default function AboutUs() {
  const BannerContainerData = {
    BannerHeading: "Mann Ventures",
    BannerParagraph: "India's premier processed food manufacturers, offering manufacturing and packing services to well-known multinational corporations."
  }

  const bannerImage = 'https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg'

  const whiteBoxData = {
    "heading": "Mann Ventures At A Glance",
    "images": [
      {
        "src": "https://cdn.worldvectorlogo.com/logos/aib-international.svg",
        "alt": "Aib Logo"
      },
      {
        "src": "https://seeklogo.com/images/F/fssc-22000-logo-F5DB6C4D50-seeklogo.com.png",
        "alt": "FSSC Logo"
      }
    ],
    "list": [
      "A distinguished name in food developer and manufacturing since 1989",
      "Helping our customers to reach the market quicker with fast, cost-effective project implementation",
      "Best in class automation",
      "Employees - 5500",
      "Industry leading Quality Certifications"
    ],
    "CoverImage": "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg"
  }

  const contactSections = [
    {
      backgroundImage: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg',
      message: 'We love to hear from you. please complete the form below for your service requirements in detail.',
      buttonText: 'Contact Us'
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F0F0F9]">

      <TopBanner bannerImage={bannerImage} BannerContainerData={BannerContainerData} />

      <div id="about-mann-ventures" className='relative w-full max-w-[1280px] flex justify-center items-center pt-16 about-page'>
        <WhiteBoxText whiteBoxData={whiteBoxData} />
        <div className='w-1/2 mt-[10%] ml-[-5%] z-10 flex justify-center items-center rounded-[2.4rem] about-page-img'>
          <img src={whiteBoxData.CoverImage} alt="cover-image" className='h-full rounded-[2.4rem]' />
        </div>
      </div>

      <div id='-food-and-healthcare-' className='relative w-full max-w-[1280px] flex justify-center items-center pt-16 about-page'>
        <div className='w-1/2 mt-[-5%] mr-[-5%] z-10 flex justify-center items-center rounded-[2.4rem] about-page-img'>
          <img src={whiteBoxData.CoverImage} alt="cover-image" className='h-full rounded-[2.4rem]' />
        </div>
        <WhiteBoxReverse whiteBoxData={whiteBoxData} />
      </div>

      <div id='our-team' className='w-full max-w-[1280px] mx-auto'>
        <AboutTeamSlider />
      </div>

      <div id='infrastructure' className='w-full max-w-[1280px] mx-auto'>
        <AboutInfrastructure />
      </div>

      <div id='our-strength' className='w-full max-w-[1280px] mx-auto'>
        <AboutUsStrength />
      </div>

      <AboutContact contactSections={contactSections} />

    </main>
  );
}