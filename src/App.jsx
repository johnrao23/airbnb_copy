import { BrowserRouter, Route, Routes } from "react-router-dom";
import LocationSearch from "./components/LocationSearch";
import SignUp from "./Backend/Signup/SignUpPage";
import SignIn from "./Backend/Signin/SignInPage";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="Sign-Up" element={<SignUp />} />
          <Route
            path="/location-search"
            element={
              <ProtectedRoute>
                <LocationSearch />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
