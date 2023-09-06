import React, { useState } from "react";
import { useAuthStore } from "../Backend/store/store";
import { fetchGPTResponse } from "../Backend/api/chatGPT";
import NavBar from "./NavBar";
import Footer from "./Footer";
import buildingdockImg from "../assets/buildingdockImg.png";

const Settings = () => {
  const user = useAuthStore((state) => state.user);
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
  
    // Build messages array including chat history and new user input
    const messages = [
      { role: "system", content: "You are a helpful assistant." },
      ...chatHistory.map(msg => ({ role: msg.type, content: msg.text })),
      { role: "user", content: userInput }
    ];
  
    // Convert messages array to string prompt for GPT-3 API
    const prompt = messages.map(msg => `${msg.role}: ${msg.content}`).join("\n");
  
    try {
      // Fetch GPT-3 Response using the built prompt
      const { data } = await fetchGPTResponse({ prompt });
      const gptResponse = data.choices[0]?.text.trim() || "Sorry, I couldn't understand that.";
  
      // Append GPT-3 response to chat history
      setChatHistory(prevHistory => [...prevHistory, { type: "user", text: userInput }, { type: "gpt", text: gptResponse }]);
    } catch (error) {
      console.error(error);
      setChatHistory(prevHistory => [...prevHistory, { type: "user", text: userInput }, { type: "gpt", text: "An error occurred while fetching GPT-3 response" }]);
    }
  
    // Clear user input
    setUserInput("");
  };   

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div 
        className="relative flex-grow bg-cover bg-no-repeat bg-center pb-5 md:pb-20 text-center md:text-right" 
        style={{ 
          backgroundImage: `url(${buildingdockImg})`,
        }}
      >
        <div className="bg-gray-500 bg-opacity-30 text-white p-3 md:p-5 rounded-lg shadow-lg mx-auto md:mx-auto mt-20 text-center max-w-xl">
          <h1 className="text-2xl md:text-4xl">How can we help, {user?.twitterUsername || user?.displayName || user?.email}?</h1>
        </div>
        <div className="relative flex-grow flex flex-col justify-end items-center pb-10">
          <div className="chat-container w-full p-4">
            <ul className="list-none">
              {chatHistory.map((msg, index) => (
                <li key={`${msg.type}-${index}`} className={`${msg.type === 'user' ? 'text-left' : 'text-right'} mb-2`}>
                  <span className={`inline-block rounded-lg px-3 py-2 ${msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-green-300 text-black'}`}>
                    {msg.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleQuestionSubmit} className="w-full flex justify-center mt-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="border rounded w-1/2 py-2 px-3"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
              Ask
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
