// import type { VercelRequest, VercelResponse } from '@vercel/node';
// import axios from 'axios';

// export default async function locationSearch(req: VercelRequest, res: VercelResponse) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   if (req.method === 'OPTIONS') {
//     return res.status(200).end();
//   }

//   const { location, checkin, checkout } = req.body;
//   const API_KEY = process.env.LOCATION_API_KEY;
//   const API_HOST = process.env.LOCATION_API_HOST;

//   try {
//     const response = await axios.get('https://airbnb13.p.rapidapi.com/search-location', {
//       params: {
//         location,
//         checkin,
//         checkout,
//         adults: '1',
//         children: '0',
//         infants: '0',
//         pets: '0',
//         page: '1',
//         currency: 'USD'
//       },
//       headers: {
//         'X-RapidAPI-Key': API_KEY,
//         'X-RapidAPI-Host': API_HOST
//       }
//     });

//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred." });
//   }
// }

import axios from 'axios';

export const locationSearch = async (location: string, checkin: string, checkout: string) => {
  const API_KEY = (import.meta as any).env.VITE_LOCATION_API_KEY;
  const API_HOST = (import.meta as any).env.VITE_LOCATION_API_HOST;

  console.log('API_KEY:', API_KEY);

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
        currency: 'USD',
      },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
