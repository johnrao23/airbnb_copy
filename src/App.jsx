import { BrowserRouter, Route, Routes } from "react-router-dom";
import LocationSearch from "./components/LocationSearch.jsx";
import SignUp from "./Backend/Signup/SignUpPage";
import SignIn from "./Backend/Signin/SignInPage";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useEffect } from "react";
import useAuthStore from "./Backend/store/store";

function App() {
  const isSignedIn = useAuthStore((state) => state.isSignedIn);

  useEffect(() => {
    console.log("isSignedIn", isSignedIn);
  }, [isSignedIn]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="Sign-Up" element={<SignUp />} />
          <Route
            path="/location-search"
            element={
              <ProtectedRoute isSignedIn={isSignedIn}>
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
