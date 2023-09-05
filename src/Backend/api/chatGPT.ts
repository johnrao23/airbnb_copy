import axios from 'axios';

export const chatGPT = async (req, res) => {
  const API_KEY = (import.meta as any).env.VITE_CHAT_GPT_KEY;
  const { prompt } = req.body;

  try {
    const response = await axios.post("https://api.openai.com/v1/engines/davinci-codex/completions", 
      {
        prompt,
        max_tokens: 50
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        }
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while communicating with the GPT-3 API" });
  }
};
