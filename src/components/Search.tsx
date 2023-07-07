import React from "react"
import NavBar from "./NavBar";
import { useAuthStore } from "../Backend/store/store"
import { useNavigate } from "react-router-dom";

const Search = () => {
    const user = useAuthStore((state) => state.user);
    const searchResults = useAuthStore((state) => state.searchResults);
    const navigate = useNavigate();

    console.log(searchResults)

    const handleSubmit = () =>{
        return navigate("/reserve")
    }

    return (
        <div>
            <NavBar />
            <h1>Get ready to live it up, {user?.email}</h1>
            {Array.isArray(searchResults.results.results) && searchResults.results.results.map((result) => (
                <div key={result.id}>
                  <p>{result.url}</p>
                  <img src={result.images[0]} alt="Result" />
                  <p>{result.price.total}</p>
                  <button onClick={() => handleSubmit()}>Reserve</button>
                </div>
            ))}
        </div>
    )
}

export default Search;