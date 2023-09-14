import React from "react";
import { useAuthStore } from "../Backend/store/store";
import nycImg from "../assets/nycImg.png";
import NavBar from "./NavBar";
import Footer from "./Footer";

const About = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="overflow-hidden min-h-screen flex flex-col">
      <NavBar />

      <div 
        className="flex flex-col justify-start flex-grow w-full bg-no-repeat bg-center bg-cover md:bg-150/130 pb-10 md:pb-20 text-center" 
        style={{ 
          backgroundImage: `url(${nycImg})`,
        }}
      >
        <div className="flex justify-center mt-8 md:mt-20">
          <div className="bg-white bg-opacity-10 p-5 md:p-10 rounded-lg shadow-lg text-center w-11/12 md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Thanks for asking about us, {user?.twitterUsername || user?.displayName || user?.email}!</h1>
            <p className="text-xl md:text-2xl mb-1 md:mb-2">Here at Fairbnb, we want to provide you with once in a lifetime opportunities for a much better price!</p>
            <p className="text-xl md:text-2xl mb-1 md:mb-2">Our idea is, to provide last minute discounted offers on rentals that vacationers would typically still have to pay full price for!</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About;
