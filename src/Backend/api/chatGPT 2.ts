import axios from "axios";

export const fetchGPTResponse = async (payload) => {
  const API_KEY = (import.meta as any).env.VITE_CHAT_GPT_KEY;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo", // Specify the model here, either "gpt-4" or "gpt-3.5-turbo"
        messages: payload.messages
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        }
      }
    );
    console.log("Inside fetchGPTResponse:", response);
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw new Error("An error occurred while communicating with the GPT-3 API");
  }
};
