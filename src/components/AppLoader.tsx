import React, { useEffect } from "react";
import { auth } from "../Backend/Firebase/firebaseConfig";
import { getRedirectResult } from 'firebase/auth';
import { useAuthStore } from "../Backend/store/store";
import { useNavigate } from "react-router-dom";

const AppLoader = () => {

    const navigate = useNavigate()

    useEffect(() => {
      getRedirectResult(auth)
        .then((result) => {
          if (result && result.user) {
            useAuthStore.setState({
              user: { id: result.user.uid, email: result.user.email, name: result.user.displayName },
              isSignedIn: true,
            });
          }
          navigate("/home");
        })
        .catch((error) => {
          console.error("An error occurred during sign-in", error);
        });
    }, []);
    
    return <></>
  }

  export default AppLoader;