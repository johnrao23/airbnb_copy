import axios from 'axios';
require("dotenv").config();

const apiKey = process.env.API_KEY
const apiHost = process.env.API_HOST;

export const locationSearch = async (location: string, checkin: string, checkout: string) => {
  try {
    const response = await axios.get('https://airbnb13.p.rapidapi.com/search-location', {
      params: {
        location,
        checkin,
        checkout,
        adults: '1',
        children: '0',
        infants: '0',
        pets: '0',
        page: '1',
        currency: 'USD'
      },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
