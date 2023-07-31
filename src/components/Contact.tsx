import React from "react";
import CraterLake from "../assets/craterLake.png";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div
        className="relative flex-grow bg-cover bg-no-repeat bg-center p-10 rounded-lg shadow-lg"
        style={{
          backgroundImage: `url(${CraterLake})`,
          width: '800px',
        }}
      >
        <div className="bg-white bg-opacity-50 p-10 rounded">
          <h1 className="text-3xl font-bold mb-4">Need some help? Please feel free to reach out!</h1>
          <h1 className="text-xl mb-2">support@sameplacebetterprice.com</h1>
          <h1 className="text-xl">(800) 555-1234</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
