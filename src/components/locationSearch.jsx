import React, { useState } from "react";
import BeachImg from "../assets/tropical_main.png";
import NavBar from "./navBar";
import SignOut from "../Backend/Signout";

const LocationSearch = () => {
  const [searchInput, setSearchInput] = useState("");

  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <img src={BeachImg} alt="Beach" className="max-w-md h-auto" />
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

export default LocationSearch;
