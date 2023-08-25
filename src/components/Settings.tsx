import React from "react";
import { useAuthStore } from "../Backend/store/store";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Settings = () => {
    const user = useAuthStore((state) => state.user);


    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
                <div 
                    className="relative flex-grow bg-cover bg-no-repeat bg-center pb-5 md:pb-20 text-center md:text-right" 
                    style={{ 
                        backgroundImage: `url(${nycImg})`,
                    }}
                    >
                    <div className="bg-blue-500 bg-opacity-90 text-white p-3 md:p-5 rounded-lg shadow-lg mx-auto md:mx-auto mt-20 text-center max-w-xl">
                        <h1 className="text-2xl md:text-4xl">How can we help, {user?.email}?</h1>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Settings;