import React from "react"
import NavBar from "./NavBar";
import { useAuthStore } from "../Backend/store/store"
import { useNavigate } from "react-router-dom";

const Search = () => {
    const user = useAuthStore((state) => state.user);
    const searchResults = useAuthStore((state) => state.searchResults);
    const setSelectedResult = useAuthStore((state) => state.setSelectedResult);
    const navigate = useNavigate();

    const handleSubmit = (result) =>{
        setSelectedResult(result);
        return navigate("/reserve")
    }

    return (
        <div>
            <NavBar />
            <h1 className="text-center text-2xl font-bold my-4">Get ready to live it up for less, {user?.email}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.isArray(searchResults.results.results) && searchResults.results.results.map((result) => (
                <div key={result.id} className="border border-gray-300 rounded-lg p-4 m-2 flex flex-col items-center justify-between space-y-4 h-full">
                  <p className="overflow-hidden break-all mb-2 text-center h-12">{result.name}</p>
                  <img className="rounded-lg mb-2 h-48 w-full object-cover" src={result.images[0]} alt="Result" />
                  <p className="mb-2 text-green-500">${result.price.total}</p>
                  <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700 mt-auto" onClick={() => handleSubmit(result)}>Reserve</button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Search;

