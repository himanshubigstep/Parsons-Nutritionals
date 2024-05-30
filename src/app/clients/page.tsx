import React from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'
import ClientsData from '../components/Clients/ClientsData'
import AboutContact from '../components/Common/ContactBlock/AboutContact'

const Clients = () => {
    
    const bannerImage = 'https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg'

    const contactSections = [
      {
        backgroundImage: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg',
        message: 'We love to hear from you. please complete the form below for your service requirements in detail.',
        buttonText: 'Contact Us'
      },
    ];
    
  return (
    <main className="flex min-h-screen flex-col items-center">
        <TopBanner bannerImage={bannerImage} />
        <ClientsData />
        <AboutContact contactSections={contactSections} />
    </main>
  )
}

export default Clients