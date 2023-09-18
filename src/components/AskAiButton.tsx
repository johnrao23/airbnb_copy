import React from "react";
import { useNavigate } from "react-router-dom";
import chatGPTlogo from "../assets/chatGPT.png"

const AIButton = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/askai")
    }

    return (
        <div className="fixed bottom-20 right-6">
            <button 
                onClick={handleClick} 
                className="flex items-center justify-center bg-transparent p-0 w-20 h-20 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                <img src={chatGPTlogo} alt="ChatGPT logo" className="w-full h-full rounded-full" />
            </button>
        </div>
    )
}

export default AIButton;