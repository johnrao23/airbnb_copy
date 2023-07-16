import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Search from "./components/Search"
import Reservation from "./components/ReservationPage" 
import Confirmation from "./components/ConfirmationPage"
import Profile from "./components/UserProfile";
import About from "./components/AboutUs";
import SignUp from "./Backend/UserActions/Signup/SignUpPage";
import SignIn from "./Backend/UserActions/Signin/SignInPage";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="Sign-Up" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reserve"
            element={
              <ProtectedRoute>
                <Reservation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/confirmation"
            element={
              <ProtectedRoute>
                <Confirmation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
