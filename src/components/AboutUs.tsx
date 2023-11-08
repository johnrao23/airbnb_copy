import React from "react";
import { useAuthStore } from "../Backend/store/store";
import nycImg from "../assets/nycImg.png";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AIButton from "./AskAiButton";

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
        <div className="flex justify-center mt-4 md:mt-4">
          <div className="bg-white sm:bg-opacity-30 md:bg-opacity-10 p-5 md:p-10 rounded-lg shadow-lg text-center w-11/12 md:w-2/3">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Thanks for asking about us, {user?.twitterUsername || user?.displayName || user?.email}!</h1>
            <p className="text-lg md:text-xl mb-1 md:mb-2">Here at Fairbnb, we want to provide you with once in a lifetime opportunities for a much better price!</p>
            <p className="text-lg md:text-xl mb-1 md:mb-2">Our idea is, to provide last minute discounted offers on rentals that travelers would typically still have to pay full price for.</p>
            <p className="text-lg md:text-xl mb-1 md:mb-2">This is a win win for the renter and rentee! The renter still gets to rent out their property instead of no one renting it at the same high price, while the rentee gets to travel to their favorite vacation destinations at a price that allows them to use more of their money on experiences instead of just their stay!</p>
            <p className="text-lg md:text-xl mb-1 md:mb-2">We hope that this provides people the opportunity to travel more, experience more and live a more happy life!</p>
            <h4 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Thanks for choosing FAIRbnb!!!</h4>
          </div>
        </div>
      </div>

      <AIButton />
      <Footer />
    </div>
  )
}

export default About;