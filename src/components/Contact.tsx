import React from "react";
import CraterLake from "../assets/craterLake.png";
import NavBar from "./NavBar";

const Contact = () => {
  return (
    <div className="overflow-hidden h-screen flex flex-col">
      <NavBar />
      <div
        className="flex items-center justify-center flex-grow w-full bg-no-repeat bg-center bg-cover md:bg-150/130"
        style={{
          backgroundImage: `url(${CraterLake})`,
        }}
      >
        <div className="bg-white bg-opacity-60 p-5 md:p-10 rounded-lg shadow-lg text-center w-11/12 md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Need some help? Please feel free to reach out!</h1>
          <h1 className="text-xl md:text-2xl mb-1 md:mb-2">support@sameplacebetterprice.com</h1>
          <h1 className="text-xl md:text-2xl">(800) 555-1234</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
