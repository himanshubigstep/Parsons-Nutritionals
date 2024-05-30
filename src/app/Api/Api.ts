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