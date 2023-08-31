import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export const locationSearch = async (req: VercelRequest, res: VercelResponse) => {
  const { location, checkin, checkout } = req.body;
  const API_KEY = process.env.LOCATION_API_KEY;
  const API_HOST = process.env.LOCATION_API_HOST;

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
