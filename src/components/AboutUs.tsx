import React from "react";
import { useAuthStore } from "../Backend/store/store";
import nycImg from "../assets/nycImg.png";
import NavBar from "./NavBar";

const About = () => {
    const user = useAuthStore((state) => state.user);

    return (
        <div className="min-h-screen flex flex-col">
            <div 
                className="relative flex-grow bg-cover bg-no-repeat pb-20" 
                style={{ 
                    backgroundImage: `url(${nycImg})`,
                }}
            >
                <NavBar />
                <h1>Thanks for asking about us, {user?.email}!</h1>
                <p>Here at Fairbnb, we want to provide you with once in a lifetime opportunites for a much better price!</p>
            </div>
        </div>
    )
}

export default About;