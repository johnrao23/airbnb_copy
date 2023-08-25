import React from "react";
import { useAuthStore } from "../Backend/store/store";
import nycImg from "../assets/nycImg.png";
import NavBar from "./NavBar";
import Footer from "./Footer";

const About = () => {
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
          <h1 className="text-2xl md:text-4xl">Thanks for asking about us, {user?.twitterUsername || user?.displayName || user?.email}!</h1>
          <p className="text-lg md:text-xl">Here at Fairbnb, we want to provide you with once in a lifetime opportunities for a much better price!</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
