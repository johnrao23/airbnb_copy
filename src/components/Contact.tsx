import React, { useState } from "react";
import CraterLake from "../assets/craterLake.png";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AIButton from "./AskAiButton";

const Contact = () => {
  const [showResponse, setShowResponse] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowResponse(true);
  };

  return (
    <div className="overflow-hidden h-screen flex flex-col">
      <NavBar />

      <div
        className="flex flex-col justify-end flex-grow w-full bg-no-repeat bg-center bg-cover md:bg-150/130 pb-10 md:pb-20"
        style={{
          backgroundImage: `url(${CraterLake})`,
        }}
      >
        <div className="flex justify-center mt-8">
          <div className="bg-white bg-opacity-10 p-5 md:p-10 rounded-lg shadow-lg text-center w-11/12 md:w-1/2">
            {!showResponse ? (
              <>
                <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                  Need some help? Please feel free to reach out!
                </h1>
                <h1 className="text-xl md:text-2xl mb-1 md:mb-2">
                  support@sameplacebetterprice.com
                </h1>
                <h1 className="text-xl md:text-2xl">(800) 555-1234</h1>

                <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                  <div className="mb-4">
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="mt-1 p-2 w-full border rounded-md" 
                        placeholder="Name" 
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="mt-1 p-2 w-full border rounded-md" 
                        placeholder="Email" 
                    />
                  </div>
                  <div className="mb-4">
                    <textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        required 
                        className="mt-1 p-2 w-full border rounded-md" 
                        placeholder="Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 focus:outline-none">
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
                <p>
                  A representative will respond within 5 business days. Happy Traveling!
                </p>
                <div className="flex justify-center mt-4">
                    <button
                      onClick={() => setShowResponse(false)}
                      className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 focus:outline-none"
                    >
                      Close
                    </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <AIButton />
      <Footer />
    </div>
  );
};

export default Contact;
