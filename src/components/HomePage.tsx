import React, { useState } from "react";
import { useAuthStore } from "../Backend/store/store";
import NavBar from "./NavBar";
import beachImg from "../assets/beachImg.png";
import { locationSearch } from "../Backend/api/LocationSearch";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [searchInput, setSearchInput] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const { setResults } = useAuthStore((state) => state.searchResults);

  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await locationSearch(searchInput, checkInDate, checkOutDate);
      console.log(data);

      setResults(data);

      console.log("Updated Store: ", useAuthStore.getState().searchResults);

      navigate("/search")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div 
        className="relative flex-grow bg-cover bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${beachImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <NavBar />

        <div className="absolute w-full top-[55%] flex flex-col items-center text-white pb-20">
          <h1>Welcome, {user?.email}</h1>
          <p className="text-green-500 text-2xl mb-4">Click Search to find your next adventure.</p>
          <form onSubmit={handleSearch} className="mb-4">
            <p className="text-lg mb-2">Search for the location you want to travel to:</p>
            <div className="flex flex-col items-center md:flex-row md:items-start">
              <input
                type="search"
                placeholder="Search here"
                className="border border-gray-400 rounded-lg px-3 py-2 w-full md:w-[196px] focus:outline-none text-black mb-4 md:mb-0"
                onChange={e => setSearchInput(e.target.value)}
                value={searchInput}
              />
              <div className="flex flex-col md:flex-row md:w-[404px] md:space-x-2 space-y-2 md:space-y-0">
                <input
                  type="date"
                  className="border border-gray-400 px-3 py-2 w-full focus:outline-none text-black"
                  onChange={e => setCheckInDate(e.target.value)}
                  value={checkInDate}
                />
                <input
                  type="date"
                  className="border border-gray-400 px-3 py-2 w-full focus:outline-none text-black"
                  onChange={e => setCheckOutDate(e.target.value)}
                  value={checkOutDate}
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full md:w-auto focus:outline-none hover:bg-blue-600"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

