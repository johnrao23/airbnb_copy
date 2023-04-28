import { BrowserRouter, Route, Routes } from "react-router-dom";
import LocationSearch from "./components/locationSearch";
// @ts-ignore
import SignUpPage from "./Backend/Signup/SignUpPage";
import SignIn from "./Backend/Signin/index.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="Sign-Up" element={<SignUpPage />} />
          <Route path="Location-Search" element={<LocationSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
