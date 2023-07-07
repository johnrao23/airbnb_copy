import React from "react"
import NavBar from "./NavBar";
import { useAuthStore } from "../Backend/store/store"
import { useNavigate } from "react-router-dom";

const Search = () => {
    const user = useAuthStore((state) => state.user);
    const searchResults = useAuthStore((state) => state.searchResults);
    const navigate = useNavigate();

    const handleSubmit = () =>{
        return navigate("/reserve")
    }

    return (
        <div>
            <NavBar />
            <h1 className="text-center text-2xl font-bold my-4">Get ready to live it up, {user?.email}</h1>
            <div className="flex overflow-x-scroll pb-10 hide-scrollbar">
            {Array.isArray(searchResults.results.results) && searchResults.results.results.map((result) => (
                <div key={result.id} className="border border-gray-300 rounded-lg p-4 m-2 w-full sm:w-80 flex-shrink-0 flex flex-col items-center justify-center">
                  <p className="overflow-hidden break-all mb-2 text-center">{result.url}</p>
                  <img className="rounded-lg mb-2" src={result.images[0]} alt="Result" />
                  <p className="mb-2">{result.price.total}</p>
                  <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700" onClick={() => handleSubmit()}>Reserve</button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Search;
