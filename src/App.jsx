import { BrowserRouter, Route, Routes } from "react-router-dom";
import LocationSearch from "./components/locationSearch";
// @ts-ignore
import BeachImg from "./assets/tropical_main.png";
import SignUpPage from "./Backend/Signup/SignUpPage";

function App() {
  return (
    <div>
      <h1>Fairbnb</h1>
      <h2>A place to get last minute travel deals at a fair price!</h2>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
        <LocationSearch />
        <p className="text-red-500">Click to find your next adventure.</p>
      </div>
      <p>Search for the location you want to travel to</p>
      <img src={BeachImg} alt="Beach" />
    </div>
  );
}

export default App;
