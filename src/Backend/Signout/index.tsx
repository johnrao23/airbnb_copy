import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../Firebase/firebaseUtils.js";

const SignOut =(props) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    setLoading(true);
    try {
      logOut();
      await navigate("/");
    } catch {
      (error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        setLoading(false);
        // ..
      };
    }
    setLoading(false);
  };  

  return (
    <div className="block px-4 py-2 text-sm text-gray-700" {...props}>
      <button  onClick={handleSignOut} className="hover:shadow-lg w-full text-left">
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
