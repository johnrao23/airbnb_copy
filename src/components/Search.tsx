import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer"
import { useAuthStore } from "../Backend/store/store";
import { useNavigate } from "react-router-dom";
import sunsetField from "../assets/sunsetField.png"
import AIButton from "./AskAiButton";

const Search = () => {
  const user = useAuthStore((state) => state.user);
  const searchResults = useAuthStore((state) => state.searchResults);
  const setSelectedResult = useAuthStore((state) => state.setSelectedResult);
  const navigate = useNavigate();

  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    setHasClicked(true);
  }, []);

  const handleSubmit = (result) => {
    setSelectedResult(result);
    return navigate("/reserve");
  };

  const priceSlash = (result, price) => {
    if (typeof result !== 'number' || typeof price !== 'number') {
      return result;
    }
    return result - (result * (price / 100));
  };

  return (
    <div className="overflow-hidden flex flex-col min-h-screen">
      <NavBar />
      <div 
          className="flex flex-col justify-start flex-grow w-full bg-no-repeat bg-center bg-cover md:bg-150/130 pb-10 md:pb-20 text-center"
          style={{
          backgroundImage: !searchResults.results.results.length && hasClicked ? `url(${sunsetField})` : 'transparent'
          }}
      >
          <div className="flex justify-center mt-8">
          <div 
              className={`bg-white bg-opacity-10 ${searchResults.results.results.length ? 'py-2 md:py-4' : 'p-5 md:p-10'} rounded-lg shadow-lg text-center w-11/12 md:w-1/2`}
          >
              <h1 className="text-2xl font-bold mb-4">
                  Get ready to live it up for less, {user?.twitterUsername || user?.displayName || user?.email}
              </h1>
      
              { !searchResults.results.results.length && hasClicked && (
              <div className="text-xl font-semibold mt-4">
                  Come back with some vacation ideas!
              </div>
              )}
          </div>
          </div>
  
          { searchResults.results.results.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {Array.isArray(searchResults.results.results) &&
                      searchResults.results.results.map((result) => (
                        <div
                            key={result.id}
                            className="border border-gray-300 rounded-lg p-4 m-2 flex flex-col items-center justify-between space-y-4 h-full"
                        >
                            <p className="overflow-hidden break-all mb-2 text-center h-12">
                                {result.name}
                            </p>
                            <img
                                className="rounded-lg mb-4 h-48 w-full object-cover"
                                src={result.images[0]}
                                alt="Result"
                            />
                            <div className="mb-2 text-center">
                                <p className="text-red-500 line-through">
                                    ${result.price.total}
                                </p>
                                <p className="text-green-500">
                                    ${priceSlash(result.price.total, 50)}
                                </p>
                            </div>
                            <button
                                className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700 mt-auto"
                                onClick={() => handleSubmit(result)}
                            >
                                Reserve
                            </button>
                        </div>
                      ))}
              </div>
          )}
      </div>
      <AIButton />
      <Footer />
    </div>
  );
};

export default Search;