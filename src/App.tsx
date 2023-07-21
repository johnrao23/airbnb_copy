import React, { useEffect } from "react";
import { auth } from "./Backend/Firebase/firebaseConfig";
import { getRedirectResult } from 'firebase/auth';
import { useAuthStore } from "./Backend/store/store";
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
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result.user) {
          useAuthStore.setState({
            user: { id: result.user.uid, email: result.user.email, name: result.user.displayName },
            isSignedIn: true,
          });
        }
      })
      .catch((error) => {
        console.error("An error occurred during sign-in", error);
      });
  }, []);

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

