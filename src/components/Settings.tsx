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
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
  
    let messages = [
      { role: "system", content: "You are a helpful assistant." },
      ...chatHistory.map((msg) => ({ role: msg.type, content: msg.text })),
      { role: "user", content: userInput }
    ];

    setIsLoading(true);
  
    try {
      const response = await fetchGPTResponse({ messages });
      const data = response;
      console.log("API Response:", data);
  
      if (data && data.choices && data.choices.length > 0) {
        const gptResponse = data.choices[0].message.content || "Sorry, I couldn't understand that.";
        setChatHistory((prevHistory) => [...prevHistory, { type: "user", text: userInput }, { type: "assistant", text: gptResponse }]);
      } else {
        throw new Error(`Unexpected response format: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      console.error(error);
      setChatHistory((prevHistory) => [...prevHistory, { type: "user", text: userInput }, { type: "assistant", text: "An error occurred while fetching the GPT-3.5-turbo response" }]);
    } finally {
      setIsLoading(false);
      setUserInput("");
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      {isLoading && (
        <div className="bg-green-500 text-white text-center py-2">
          Thinking of the best answer for your question!
        </div>
      )}
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
