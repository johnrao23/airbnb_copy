import { BrowserRouter, Route, Routes } from "react-router-dom";
import LocationSearch from "./components/locationSearch";
// @ts-ignore
import SignUpPage from "./Backend/Signup/SignUpPage";
import SignIn from "./Backend/Signin/index.jsx";
import SignOut from "./Backend/Signout/index.jsx";

function App() {
  return (
    <div>
      {" "}
      <h1 className="text-4xl font-bold text-blue-500 text-center my-8">
        Fairbnb, A place to get last minute travel deals at a fair price!
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="Sign-Up" element={<SignUpPage />} />
          <Route path="Location-Search" element={<LocationSearch />} />
        </Routes>
        <SignOut />
      </BrowserRouter>
    </div>
  );
}

export default App;
