import React from "react";
import { useNavigate } from "react-router-dom";

const AIButton = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/askai")
    }

    return (
        <div className="fixed bottom-4 right-4">
            <button 
                onClick={handleClick} 
                className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {/* Imaginary ChatGPT logo. Replace <img .../> with your logo */}
                <img src="path_to_chatgpt_logo.svg" alt="ChatGPT logo" className="w-6 h-6 mr-2" />
                Ask Ai
            </button>
        </div>
    )
}

export default AIButton;
