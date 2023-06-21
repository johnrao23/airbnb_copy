import axios from 'axios';

// const API_KEY = '578c6464e2mshc3cfe32bae51a74p127e53jsnc298999d88ec';
// const API_HOST = 'airbnb13.p.rapidapi.com';

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
        // 'X-RapidAPI-Key': API_KEY,
        // 'X-RapidAPI-Host': API_HOST
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
