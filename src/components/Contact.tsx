import React from "react";
import CraterLake from "../assets/craterLake.png";
import NavBar from "./NavBar";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div
        className="flex items-center justify-center min-h-screen w-full bg-no-repeat bg-center"
        style={{
            backgroundImage: `url(${CraterLake})`,
            backgroundSize: '130% 105%',
        }}
        >
        <div className="bg-white bg-opacity-60 p-10 rounded-lg shadow-lg text-center w-1/2">
            <h1 className="text-4xl font-bold mb-4">Need some help? Please feel free to reach out!</h1>
            <h1 className="text-2xl mb-2">support@sameplacebetterprice.com</h1>
            <h1 className="text-2xl">(800) 555-1234</h1>
        </div>
      </div>
    </>
  );
};

export default Contact;
