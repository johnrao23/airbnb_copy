import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store.js";
import signUpWithEmailAndPassword from "../Firebase/firebaseUtils";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  // const signUp = useStore((state) => state.signUp);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setIsLoading;

    try {
      signUpWithEmailAndPassword(user);

      await useStore.setState({ setUser });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSignUp = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     signUpWithEmailAndPassword();

  //     const userData = "";

  //     await useStore.setState({ userData });

  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-sm mx-auto py-12">
        <h1 className="text-2xl font-bold mb-8 text-center">Sign up</h1>
        <form onSubmit={handleSignUp}>
          <div className="mb-6">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

// import { useEffect } from "react";
// import useAuth from "../store/useAuth.js";
// import SignUpForm from "./SignUpForm";
// import { useNavigate } from "react-router-dom";

// function SignUpPage() {
//   const navigate = useNavigate();
//   const { user, loading, signUp } = useAuth();

//   useEffect(() => {
//     if (user) {
//       navigate("/");
//     }
//   }, [user, navigate]);

//   function handleSignUp(email, password) {
//     signUp(email, password);
//   }

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <SignUpForm onSignUp={handleSignUp} />
//     </div>
//   );
// }

// export default SignUpPage;
