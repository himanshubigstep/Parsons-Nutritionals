import axios from 'axios';

const ApiBaseUrl = process.env.NEXT_PUBLIC_API_URL

export const HomePageData = async () => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/home-page`, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
      params: {
        "populate[Header][populate]": "*",
        "populate[WhatAreWe][populate]": "*",
        "populate[Vision][populate]": "*",
        "populate[JoinTeam][populate]": "*",
        "populate[AwardSection][populate]": "*",
        "populate[ExperienceSection][populate]": "*",
        "populate[CustomerSection][populate]": "*",
        "populate[Vision][media][populate]": "*",
        "populate[Values][populate][items][populate][0]": "icon",
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const HomePageClientData = async () => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/clients?populate=*`, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const HomePageAwardstData = async () => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/performance-awards?populate=*`, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const HomePageMemberstData = async () => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/team-members?populate=*`, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const AboutUsData = async () => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/about-page`, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
      params: {
        "populate[Header][populate]": "*",
        "populate[BodyContent][populate][content][populate][0]": "logos",
        "populate[Strengths][populate]": "*",
        "populate[ContactUs][populate]": "*",
        "populate[BodyContent][populate]": "images",
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const AboutUsInfrastructureData = async () => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/infrastructures`, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
      params: {
        "populate[Features][populate]": "*",
        "populate[media][populate]": "*",
        "populate[Facts][populate]": "*"
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const ClientPageData = async () => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/client-page`, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
      params: {
        "populate[Header][populate]": "*",
        "populate[About][populate]": "*",
        "populate[ContactUs][populate]": "*"
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const EsgPageData = async () => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/esg-page`, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
      params: {
        "populate[Header][populate]": "*",
        "populate[Body][populate]": "*",
        "populate[ContactUs][populate]": "*"
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const ProductPageHeaderData = async () => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/product-page`, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
      params: {
        "populate[Header][populate]": "*",
        "populate[Body][populate]": "*",
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const ProductPageTypes = async () => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/product-types`, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const ProductPageContent = async () => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/products?populate=*`, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const ContactPageData = async () => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/contact-page`, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
      params: {
        "populate[Header][populate]": "*",
        "populate[MapLocation][populate]": "*",
        "populate[Address][populate]": "*",
        "populate[Phone][populate]": "*",
        "populate[Media]": "*"
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const ContactPagePostForm = async (formData: { name: string; email: string; mobile: string; city: string; country: string; company_name: string; website: string; service_requirements: string; }) => {
  try {
    const response = await axios.post(`${ApiBaseUrl}/contacts`, {
      data: formData
    }, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const WhatWeDoData = async () => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/work-page`, {
      headers: {
        'ngrok-skip-browser-warning': 'application/json',
      },
      params: {
        populate: {
          0: 'Breakthrough',
          1: 'Breakthrough.header',
          2: 'Breakthrough.Breakthrough.header.image',
          3: 'Breakthrough.Breakthrough.body',
          4: 'Breakthrough.Breakthrough.footer.icon',
          5: 'Footprint',
          6: 'Footprint.header',
          7: 'Footprint.blocks',
          8: 'Footprint.LogoBlock.logos',
          9: 'Footprint.body_media',
          10: 'Footprint.MapLocation.LocationIcon',
          11: 'Facilities.Header',
          12: 'Facilities.FacilitesList.image',
          13: 'Chains.Header',
          14: 'ChainsBody.content',
          15: 'ChainsBody.media',
          16: 'ProjectsBody.content',
          17: 'ProjectsBody.media',
          18: 'Header.content',
          19: 'Header.media',
          20: 'Projects.Header'
        }
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};