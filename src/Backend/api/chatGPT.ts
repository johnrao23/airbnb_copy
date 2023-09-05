import axios from "axios";

export const fetchGPTResponse = async (payload) => {
  const API_KEY = (import.meta as any).env.VITE_CHAT_GPT_KEY;

  console.log("Sending request with payload:", JSON.stringify(payload, null, 2));

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "text-davinci-002",  // Add this line to specify the model
        ...payload
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        }
      }
    );
  
    console.log("Received response:", JSON.stringify(response.data, null, 2));
    return response.data;  // Return just the data, not the whole response
  } catch (error) {
    console.error('Error Response:', error.response);
    console.error("Axios Error:", JSON.stringify(error, null, 2));
    console.error("Config used:", JSON.stringify(error.config, null, 2));
    console.error("OpenAI API Error:", error.response?.data || "No additional data");
    throw new Error("An error occurred while communicating with the GPT-3 API");
  }
};
