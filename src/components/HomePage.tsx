import React, { useState } from "react";
import { useAuthStore } from "../Backend/store/store";
import NavBar from "./NavBar";
import beachImg from "../assets/beachImg.png";

const HomePage: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [searchInput, setSearchInput] = useState("");

  interface Country {
    name: string;
    continent: string;
  }

  const countries: Country[] = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    // Rest of the countries...
    { name: "Pakistan", continent: "Asia" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <h1>Welcome, {user?.email}</h1>
        <img src={beachImg} alt="Beach" className="max-w-md h-auto" />
        <p className="text-red-500 text-2xl mb-4">
          Click to find your next adventure.
        </p>
        <p className="text-lg mb-2">
          Search for the location you want to travel to:
        </p>
        <input
          type="search"
          placeholder="Search here"
          className="border border-gray-400 rounded-lg px-3 py-2 w-64 mb-4"
          onChange={handleChange}
          value={searchInput}
        />
        <table className="table-auto mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Continent</th>
            </tr>
          </thead>
          <tbody>
            {countries
              .filter((country) => {
                return country.name.match(searchInput);
              })
              .map((country, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{country.name}</td>
                  <td className="border px-4 py-2">{country.continent}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;
