import React from "react";
import { useAuthStore } from "../Backend/store/store";
import nycImg from "../assets/nycImg2.png";
import NavBar from "./NavBar";

const About = () => {
    const user = useAuthStore((state) => state.user);

    return (
        <div className="min-h-screen flex flex-col">
            <div 
                className="relative flex-grow bg-cover bg-no-repeat pb-20 text-right" 
                style={{ 
                    backgroundImage: `url(${nycImg})`,
                }}
            >
                <NavBar />
                <div className="absolute right-0 bg-blue-500 bg-opacity-90 text-white p-5 mr-5 mt-5 text-center">
                    <h1 className="text-4xl">Thanks for asking about us, {user?.email}!</h1>
                    <p className="text-xl">Here at Fairbnb, we want to provide you with once in a lifetime opportunities for a much better price!</p>
                </div>
            </div>
        </div>
    )
}

export default About;
