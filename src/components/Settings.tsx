import React from "react";
import { useAuthStore } from "../Backend/store/store";
import { getGPTResponse } from "../Backend/api/chatGPT";
import NavBar from "./NavBar";
import Footer from "./Footer";
import buildingdockImg from "../assets/buildingdockImg.png"

const Settings = () => {
    const user = useAuthStore((state) => state.user);


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
                </div>
            <Footer />
        </div>
    )
}

export default Settings;