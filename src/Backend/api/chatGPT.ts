import axios from "axios";


export const fetchGPTResponse = async (payload) => {
  const API_KEY = (import.meta as any).env.VITE_CHAT_GPT_KEY;
  try {
    const response = await axios.post("https://api.openai.com/v1/engines/davinci-codex/completions", 
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        }
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while communicating with the GPT-3 API");
  }
};
