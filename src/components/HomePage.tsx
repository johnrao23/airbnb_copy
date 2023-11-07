import React, { useState } from "react";
import { useAuthStore } from "../Backend/store/store";
import NavBar from "./NavBar";
import Footer from "./Footer"
import AIButton from "./AskAiButton";
import beachImg from "../assets/beachImg.png";
import { locationSearch } from "../Backend/api/locationSearch";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [searchInput, setSearchInput] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setResults } = useAuthStore((state) => state.searchResults);

  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchInput || !checkInDate || !checkOutDate) {
      setShowAlert(true);
      setAlertMessage("Please enter location and dates before searching.");
      return;
    }

    if (new Date(checkInDate) > new Date(checkOutDate)) {
      setShowAlert(true);
      setAlertMessage("Check-in date cannot be after Check-out date.");
      return;
    }

    setIsLoading(true);

    try {
      const data = await locationSearch(searchInput, checkInDate, checkOutDate);
      console.log(data);

      if (data.error) {
        setShowAlert(true);
        setAlertMessage(data.message);
        setIsLoading(false);
        return;
      }

      setResults(data);
      console.log("Updated Store: ", useAuthStore.getState().searchResults);
      navigate("/search");
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
};

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <NavBar />
      {showAlert && (
        <div className="bg-red-500 text-white text-center py-2">
          {alertMessage}
        </div>
      )}
      {isLoading && (
        <div className="bg-green-500 text-white text-center py-2">
          Finding Your Dream Rentals Now...
        </div>
      )}
      <div 
        className="relative flex-grow bg-cover bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${beachImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute w-full top-[65%] md:top-[72%] transform -translate-y-1/2 flex flex-col items-center text-white px-4 lg:px-0 text-xs lg:text-base">
        <div className="bg-white bg-opacity-20 p-5 lg:p-10 rounded-lg shadow-lg mx-auto">
          <h1 className="text-center text-lg lg:text-2xl">Welcome, {user?.twitterUsername || user?.displayName || user?.email}</h1>
          <p className="text-center text-orange-400 font-bold text-xl mb-2 lg:text-2xl md:mb-4">Click Search to find your next adventure.</p>
          <form onSubmit={handleSearch} className="mb-2 lg:mb-4">
            <p className="text-lg lg:text-lg mb-1 lg:mb-2">Search for the location you want to travel to:</p>
            <div className="mb-2 lg:mb-4">
              <input
                type="search"
                placeholder="Search here"
                className="border border-gray-400 rounded-lg px-3 py-2 w-full focus:outline-none text-black text-xs lg:text-base"
                onChange={e => {setSearchInput(e.target.value); setShowAlert(false);}}
                value={searchInput}
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-center space-y-2 lg:space-y-0">
              <div className="flex flex-row justify-center items-center mb-2 lg:mb-0">
                <label className="lg:hidden text-white mr-2 w-20">Check in:</label>
                <input
                  type="date"
                  className="border border-gray-400 px-3 py-2 w-full lg:w-64 focus:outline-none text-black text-base lg:text-base"
                  onChange={e => {setCheckInDate(e.target.value); setShowAlert(false);}}
                  value={checkInDate}
                />
              </div>
              <div className="flex flex-row justify-center items-center mb-2 lg:mb-0">
                <label className="lg:hidden text-white mr-2 w-20">Check out:</label>
                <input
                  type="date"
                  className="border border-gray-400 px-3 py-2 w-full lg:w-64 focus:outline-none text-black lg:ml-2 text-base lg:text-base"
                  onChange={e => {setCheckOutDate(e.target.value); setShowAlert(false);}}
                  value={checkOutDate}
                />
              </div>
              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 w-full lg:w-auto rounded-lg lg:rounded-r-lg lg:ml-2 focus:outline-none hover:bg-blue-700 text-base lg:text-base"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
      <AIButton />
      <Footer />
    </div>
  );  
};

export default HomePage;