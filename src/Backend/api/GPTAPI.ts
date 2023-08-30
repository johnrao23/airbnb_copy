const axios = require('axios');

module.exports = async (req, res) => {
  const { prompt } = req.body;

  const GPT_API_KEY = process.env.GPT_API_KEY;

  try {
    const response = await axios.post("https://api.openai.com/v1/engines/davinci-codex/completions", 
      {
        prompt,
        max_tokens: 50
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${GPT_API_KEY}`
        }
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while communicating with the GPT-3 API" });
  }
};
