import React from "react";
import { useAuthStore } from "../Backend/store/store";
import nycImg from "../assets/nycImg.png";
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
                <h1 className="text-white">Thanks for asking about us, {user?.email}!</h1>
                <p className="text-white">Here at Fairbnb, we want to provide you with once in a lifetime opportunities for a much better price!</p>
            </div>
        </div>
    )
}

export default About;