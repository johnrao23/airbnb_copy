import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../store/useAuth.js";
import SignUpForm from "./SignUpForm";

function SignUpPage() {
  const navigate = useNavigate();
  const { user, loading, signUp } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  function handleSignUp(email, password) {
    signUp(email, password);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm onSignUp={handleSignUp} />
    </div>
  );
}

export default SignUpPage;
