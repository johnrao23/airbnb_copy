import React, { useState } from "react";
import { useAuthStore } from "../Backend/store/store";
import NavBar from "./NavBar";
import beachImg from "../assets/beachImg.png";
import { locationSearch } from "../Backend/api/LocationSearch"

const HomePage: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await locationSearch(searchInput, '2023-09-16', '2023-09-17');
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <h1>Welcome, {user?.email}</h1>
        <img src={beachImg} alt="Beach" className="max-w-md h-auto" />
        <p className="text-red-500 text-2xl mb-4">Click to find your next adventure.</p>

        <form onSubmit={handleSearch} className="mb-4">
          <p className="text-lg mb-2">Search for the location you want to travel to:</p>
          <div className="flex">
            <input
              type="search"
              placeholder="Search here"
              className="border border-gray-400 rounded-l-lg px-3 py-2 w-64 focus:outline-none"
              onChange={handleChange}
              value={searchInput}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg ml-1 focus:outline-none hover:bg-blue-600"
            >
              Search
            </button>
          </div>
        </form>

        {/* Rest of the component */}
      </div>
    </>
  );
};

export default HomePage;


// const HomePage: React.FC = () => {
//   const user = useAuthStore((state) => state.user);
//   const [searchInput, setSearchInput] = useState("");

//   interface Country {
//     name: string;
//     continent: string;
//   }

//   const countries: Country[] = [
//     { name: "Belgium", continent: "Europe" },
//     { name: "India", continent: "Asia" },
//     // Rest of the countries...
//     { name: "Pakistan", continent: "Asia" },
//   ];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     setSearchInput(e.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const data = await locationSearch(searchInput, '2023-09-16', '2023-09-17');
//       console.log(data); // Output the API response data to the console for testing
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <NavBar />
//       <div className="flex flex-col items-center justify-center">
//         <h1>Welcome, {user?.email}</h1>
//         <img src={beachImg} alt="Beach" className="max-w-md h-auto" />
//         <p className="text-red-500 text-2xl mb-4">
//           Click to find your next adventure.
//         </p>
//         <p className="text-lg mb-2">
//           Search for the location you want to travel to:
//         </p>
//         <input
//           type="search"
//           placeholder="Search here"
//           className="border border-gray-400 rounded-lg px-3 py-2 w-64 mb-4"
//           onChange={handleChange}
//           value={searchInput}
//         />
//         <table className="table-auto mb-4">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Country</th>
//               <th className="px-4 py-2">Continent</th>
//             </tr>
//           </thead>
//           <tbody>
//             {countries
//               .filter((country) => {
//                 return country.name.match(searchInput);
//               })
//               .map((country, index) => (
//                 <tr key={index}>
//                   <td className="border px-4 py-2">{country.name}</td>
//                   <td className="border px-4 py-2">{country.continent}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//       <button onClick={handleSearch}>Search</button>
//     </>
//   );
// };

// export default HomePage;