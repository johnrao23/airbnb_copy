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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

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

  // Mobile styling (center text with text-center??)

  return (
    <div className="min-h-screen flex flex-col">
      <div 
        className="relative flex-grow bg-cover bg-no-repeat pb-20" 
        style={{ 
          backgroundImage: `url(${beachImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <NavBar />
    
        <div className="relative flex flex-col items-center h-full text-white transform translate-y-[255%]">
          <h1>Welcome, {user?.email}</h1>
          <p className="text-green-500 text-2xl mb-4">Click Search to find your next adventure.</p>
    
          <form onSubmit={handleSearch} className="mb-4">
            <p className="text-lg mb-2">Search for the location you want to travel to:</p>
            <div className="flex">
              <input
                type="search"
                placeholder="Search here"
                className="border border-gray-400 rounded-l-lg px-3 py-2 w-64 focus:outline-none text-black"
                onChange={e => setSearchInput(e.target.value)}
                value={searchInput}
              />
              <input
                type="date"
                className="border border-gray-400 px-3 py-2 w-64 focus:outline-none text-black ml-2"
                onChange={e => setCheckInDate(e.target.value)}
                value={checkInDate}
              />
              <input
                type="date"
                className="border border-gray-400 px-3 py-2 w-64 focus:outline-none text-black ml-2"
                onChange={e => setCheckOutDate(e.target.value)}
                value={checkOutDate}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg ml-2 focus:outline-none hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

