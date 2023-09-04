import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function locationSearch(req: VercelRequest, res: VercelResponse) {
  const { location, checkin, checkout } = req.body;
  const API_KEY = process.env.LOCATION_API_KEY;
  const API_HOST = process.env.LOCATION_API_HOST;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
  

  if (req.method === 'OPTIONS') {
    // preflight request. Reply successfully:
    return res.status(200).end();
  }

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
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
};

// import axios from 'axios';

// const API_KEY = '578c6464e2mshc3cfe32bae51a74p127e53jsnc298999d88ec';
// const API_HOST = 'airbnb13.p.rapidapi.com';

// export const locationSearch = async (location: string, checkin: string, checkout: string) => {
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

//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };